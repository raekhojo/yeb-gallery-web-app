<template>
  <section class="container">
    <yeb-loading v-if="loading"></yeb-loading>
    <yeb-subtitle class="fw-bolder" v-else Subtitle="Various Artist" />
    <div class="row row-cols-3 row-cols-sm-1 row-cols-md-3 g-5">
      <div
        class="col mb-4"
        data-aos="fade-up"
        data-aos-duration="1500"
        v-for="post in posts"
        :key="post._id"
      >
        <router-link :to="`/artists/${post.slug.current}`" class="news-link">
          <div class="project-image">
            <img
              v-if="post.image"
              :src="imageUrlFor(post.image)"
              class="img-fluid"
              alt=""
            />
          </div>
          <h2 class="project-title mt-4">{{ post.name }}</h2>
          <span class="mb-3 date-info d-block">{{
            post.exhibitingartist
          }}</span>
          <span class="date-info">{{ post.eventdate }}</span>
        </router-link>
      </div>
    </div>
  </section>
</template>
<script>
import YebSubtitle from "@/components/YebSubtitle.vue";
import YebLoading from "@/components/YebLoading";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "artist" ] | order(_createdAt desc){
        _id,
        name,
        slug,
        "image": image.asset->url
      }  [0...50]`;
export default {
  components: {
    YebSubtitle,
    YebLoading,
  },
  data() {
    return {
      posts: [],
      loading: true,
    };
  },
  created() {
    this.fetchData();
    // setInterval(this.fetchData, 5000);
  },
  mounted() {
    this.fetchData();
    // setInterval(this.fetchData, 5000);
    this.imageUrlFor();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    async fetchData() {
      this.error = this.post = null;
      this.loading = true;
      await sanity.fetch(query).then(
        (posts) => {
          this.posts = posts;
          console.log(posts);
          this.loading = false;
        },
        (error) => {
          this.error = error;
          this.loading = false;
        }
      );
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow:wght@200&display=swap");
.container,
.container-fluid,
.container-lg,
.container-md,
.container-sm,
.container-xl,
.container-xxl {
  width: 100%;
  padding-right: var(--bs-gutter-x, 0.75rem);
  padding-left: var(--bs-gutter-x, 0.75rem);
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px !important;
}

.project-title {
  font-size: 16.2px;
  text-transform: uppercase;
  font-family: "Josefin Slab", serif;
  line-height: 20px;
  vertical-align: baseline;
  letter-spacing: 2.64px;
  word-spacing: 0px;
  margin: 0px 0px 15px;
  padding: 0px;
  font-weight: 700 !important;
}

.project-image {
  width: 550px;
  height: 250px; /* sets the container height to adjust automatically as per the image */
  max-width: 100%;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.date-info {
  color: #000000;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  vertical-align: baseline;
  letter-spacing: 1.84px;
}

@media (max-width: 728px) {
  .col {
    width: 100vw !important;
  }
  .project-image {
    height: 384px !important;
    width: 100% !important;
  }
}

.news-link {
  text-decoration: none;
  color: black;
}
</style>

<template>
  <section class="container">
    <yeb-subtitle Subtitle="Exhibitions" />
    <div class="row row-cols-2 row-cols-sm-1 row-cols-md-2 g-5">
      <div
        class="col mb-4"
        data-aos="fade-up"
        data-aos-duration="1500"
        v-for="post in posts"
        :key="post._id"
      >
        <div class="project-image">
          <img
            v-if="post.image"
            :src="imageUrlFor(post.image)"
            class="img-fluid"
            alt=""
          />
        </div>
        <h2 class="project-title mt-4">{{ post.title }}</h2>
        <span class="mt-3 date-info d-block">{{ post.eventlocation }}</span>
        <span class="mt-5 date-info"> {{ post.eventdate }}</span>
      </div>
    </div>
  </section>
</template>
<script>
import YebSubtitle from "@/components/YebSubtitle.vue";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "post" && "current" in categories[]->title ] | order(_createdAt desc) {
    _id,
    title,
    slug,
    excerpt,
    eventdate,
    eventlocation,
    "image": mainImage.asset->url
  }  [2...6]`;
export default {
  components: {
    YebSubtitle,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.fetchData();
    setInterval(this.fetchData, 5000);
  },
  mounted() {
    this.fetchData();
    setInterval(this.fetchData, 5000);
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
  font-size: 18px;
  text-transform: uppercase;
  font-family: "Barlow", sans-serif;
  line-height: 25px;
  vertical-align: top;
  letter-spacing: 2px;
  word-spacing: 0px;
  font-weight: 300 !important;
}

.project-image {
  width: 546.63px;
  height: 328.77px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-position: top;
  object-fit: cover;
}

.date-info {
  color: #585858;
  font-size: 12px;
  font-weight: 300;
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
</style>

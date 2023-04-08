<template>
  <section class="container">
    <yeb-subtitle Subtitle="Forthcoming" />
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      v-for="post in posts"
      :key="post._id"
      class="forth d-flex flex-row justify-content-between ms-2 align-items-center"
    >
      <div class="forthcoming-image bg-secondary">
        <div class="forth-coming-image">
          <img
            v-if="post.image"
            :src="imageUrlFor(post.image)"
            alt=""
            class="img-fluid"
          />
        </div>
      </div>
      <div class="forthcoming-text">
        <h2>{{ post.title }}</h2>
        <span> {{ post.eventlocation }}</span>
        <hr />
        <span>{{ post.eventdate }}</span>
        <p class="mt-3">
          {{ post.brief }}
        </p>

        <router-link to="#" class="forthcoming-link text-dark">
          READ MORE</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
import YebSubtitle from "@/components/YebSubtitle.vue";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
const imageBuilder = imageUrlBuilder(sanity);
const query = `*[_type == "post" && "forthcoming" in categories[]->title]{
  _id,
  title,
  slug,
  excerpt,
  eventdate,
  eventlocation,
  brief,
  "image": mainImage.asset->url
}  [0...3]`;
export default {
  components: {
    YebSubtitle,
  },
  data() {
    return {
      posts: [],
      loading: true,
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

.forthcoming-image {
  width: 55%;
}
.forthcoming-text {
  width: 40%;
}

.forth-coming-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.forthcoming-text h2 {
  font-size: 30px;
  line-height: 40px;
  vertical-align: baseline;
  letter-spacing: 4.8px;
  font-weight: 400;
}

.forthcoming-text span {
  font-size: 12.5px;
  line-height: 16px;
  vertical-align: baseline;
  letter-spacing: 2px;
  word-spacing: 0px;
  font-weight: 200;
}
.forthcoming-text p {
  font-size: 13.05px;
  line-height: 22.185px;
  font-weight: 300;
}
.forthcoming-link {
  text-decoration: none;
  font-size: 12.5px;
  line-height: 22.185px;
  letter-spacing: 2px;
  font-weight: 400;
}
@media (max-width: 728px) {
  .forth {
    display: block !important;
  }
  .forthcoming-image {
    width: 100% !important;
    margin-bottom: 30px !important;
  }
  .forthcoming-text {
    width: 100% !important;
  }
}
</style>

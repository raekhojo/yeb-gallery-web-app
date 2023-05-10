<template>
  <section class="container">
    <yeb-loading v-if="loading"></yeb-loading>
    <div class="news-cont position-relative" v-if="post">
      <h1
        class="news-title mb-5 d-flex flex-row justify-content-start align-items-center"
      >
        <span class="me-3">{{ post.name }} </span>
        <span class="artist-span">{{ post.country }}, B.{{ post.yob }}</span>
      </h1>
      <div class="d-flex flex-row justify-content-between">
        <div class="news-image">
          <div class="news-image-container">
            <img v-if="post.image" :src="imageUrlFor(post.image)" />
          </div>
          <button type="button" class="btn btn-dark btn-sm rounded-0 w-25 mt-5">
            Share
          </button>
        </div>
        <div class="news-text">
          <!-- <h1 class="news-location mb-5">
              {{ post.excerpt }} {{ post.eventdate }}
            </h1> -->
          <p class="news-p w-10 mb-4">
            <SanityBlocks :blocks="blocks" />
          </p>
        </div>
      </div>
      <div class="artist-work">
        <yeb-subtitle Subtitle="Exhibitions" />
        <div class="row row-cols-3 row-cols-sm-1 row-cols-md-3 g-4">
          <div
            class="col mb-3"
            data-aos="fade-up"
            data-aos-duration="1500"
            v-for="image in post.exhibition"
            :key="image._id"
          >
            <div class="installation bg-danger">
              <!-- <h1>Hi</h1> -->
              <img
                v-if="image.image"
                :src="imageUrlFor(image.image)"
                alt=""
                class=""
              />
            </div>
            <h2 class="project-title mt-4">{{ image.title }}</h2>
            <span class="mt-3 date-info d-block">{{ image.eventdate }}</span>
          </div>
        </div>
      </div>
    </div>
    <yeb-footer />
  </section>
</template>
<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import YebFooter from "@/components/YebFooter.vue";
import YebSubtitle from "@/components/YebSubtitle.vue";
import YebLoading from "@/components/YebLoading";
const imageBuilder = imageUrlBuilder(sanity);
const query = `*[_type == "artist" && slug.current == $slug] {
        _id,
        name,
        slug,
        country,
        yob,
        "exhibition": *[_type=='post' && references(^._id)]{ title,slug,
  excerpt,
  eventdate,
  eventlocation,
  brief,
  "image": mainImage.asset->url },
        body,
        "image": image.asset->url,
        "artistImage": artistImage.asset->url,
    }[0]
    `;
export default {
  name: "SinglePost",
  components: {
    SanityBlocks,
    YebFooter,
    YebLoading,
    YebSubtitle,
  },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    imageUrlFor(source) {
      return imageBuilder.image(source);
    },
    fetchData() {
      this.error = this.post = null;
      this.loading = true;

      sanity.fetch(query, { slug: this.$route.params.slug }).then(
        (post) => {
          this.loading = false;
          this.post = post;
          console.log(post);
          this.blocks = post.body;
          console.log(post.body);
          console.log(this.$route.params.slug);
        },
        (error) => {
          this.error = error;
        }
      );
    },
  },
};
</script>

<style scoped>
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
  margin-top: 50px !important;
}
.news-title {
  font-size: 21px;
  line-height: 23.5px;
  vertical-align: baseline;
  letter-spacing: 1.89px;
  font-family: "Josefin Slab", serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
}
.news-title .artist-span {
  font-size: 16px;
  line-height: 23.5px;
  vertical-align: baseline;
  letter-spacing: 1.89px;
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
}
artist-span .related-artist {
  font-size: 12.5px;
  line-height: 23.5px;
  letter-spacing: 1.89px;
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
}
.news-location {
  font-size: 12.5px;
  line-height: 18px;
  vertical-align: baseline;
  letter-spacing: 1.89px;

  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
}
.news-image {
  width: 35%;
  order: 2 !important;
}
.news-text {
  width: 55%;
  order: 1 !important;
}
.news-image-container {
  width: 80% !important;
  height: auto; /* sets the container height to adjust automatically as per the image */
  max-width: 100%;
}
.news-image-container img {
  width: 100%;
  height: auto; /* sets the container height to adjust automatically as per the image */
  object-fit: cover;
}
.news-p {
  font-size: 16.5px;
  top: 30%;
  line-height: 31px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  margin: 0px;
  font-weight: 400;
}
.news-par {
  top: 30%;
}

@media (max-width: 728px) {
  .d-flex {
    display: block !important;
  }
  .news-text {
    width: 100% !important;
  }
  .news-p {
    top: 110% !important;
    width: 100% !important;
  }
  .col {
    width: 100vw !important;
  }
  .news-image {
    width: 100% !important;
    margin-bottom: 50px !important;
  }
  .news-image-container {
    width: 100% !important;
  }
}
.news-link {
  text-decoration: none;
  color: black;
}
.artist-work {
  margin-top: 100px !important;
}
.installation {
  width: 346.66px;
  height: 231.08px;
}
.installation img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.project-title {
  font-size: 18px;
  text-transform: uppercase;
  font-family: "Josefin Slab", serif;
  line-height: 25px;
  vertical-align: top;
  letter-spacing: 2px;
  word-spacing: 0px;
  font-weight: 700 !important;
}
</style>

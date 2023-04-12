<template>
  <section class="container">
    <yeb-loading v-if="loading"></yeb-loading>
    <div class="news-cont position-relative" v-else>
      <div class="d-flex flex-row justify-content-between">
        <div class="news-text" v-if="post">
          <h1 class="news-title mb-4">{{ post.title }}</h1>
          <h1 class="news-location mb-5">
            {{ post.excerpt }} {{ post.eventdate }}
          </h1>
        </div>
        <div class="news-image" v-if="post">
          <div class="news-image-container">
            <img v-if="post.image" :src="imageUrlFor(post.image)" />
          </div>
        </div>
      </div>
      <div class="news-p position-absolute">
        <p class="news-p w-50 mb-5">
          <SanityBlocks :blocks="blocks" />
        </p>
        <p class="related-artist mb-4">Related Artist</p>

        <hr />
        <router-link to="/news" class="news-link">
          <div
            class="d-flex flex-row justify-content-start align-items-center mt-3 mb-5"
          >
            <img
              v-if="post.artistImage"
              :src="imageUrlFor(post.artistImage)"
              class="rounded-circle me-3"
              style="width: 50px; height: 50px"
              alt="Avatar"
            />
            <p class="related-artist mt-4">
              {{ post.name }}
            </p>
          </div>
        </router-link>
        <yeb-news-list />
        <yeb-footer />
      </div>
    </div>
  </section>
</template>
<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import YebFooter from "@/components/YebFooter.vue";
import YebLoading from "@/components/YebLoading";
const imageBuilder = imageUrlBuilder(sanity);
import YebNewsList from "@/components/YebNewsList.vue";
const query = `*[_type == "news" && slug.current == $slug] {
    _id,
    title,
    slug,
    excerpt,
    eventdate,
    body, 
   "image": mainImage{
    asset->{
    _id,
    url
  }
  },
  "name":artist->name,
  "artistImage":artist->image
  }[0]
  `;
export default {
  name: "SinglePost",
  components: {
    SanityBlocks,
    YebFooter,
    YebLoading,
    YebNewsList,
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
.related-artist {
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
  width: 40%;
}
.news-text {
  width: 55%;
}
.news-image-container {
  width: 100% !important;
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
  .news-image {
    width: 100% !important;
    margin-bottom: 250px !important;
  }
}
.news-link {
  text-decoration: none;
  color: black;
}
</style>

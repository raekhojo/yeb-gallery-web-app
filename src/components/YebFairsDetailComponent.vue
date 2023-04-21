<template>
  <section class="">
    <yeb-loading v-if="loading"></yeb-loading>
    <!-- <div class="exhibition-hero" v-if="post">
      <img
        v-if="post.image"
        :src="imageUrlFor(post.image)"
        alt=""
        class="parallax"
      />
    </div> -->
    <div class="container detail-content" v-if="post">
      <div
        class="d-link d-flex flex-row justify-content-end align-items-center"
      >
        <!-- <ul
          class="navbar-nav ms-auto mb-lg-0 d-flex flex-row align-items-center"
        >
          <li class="nav-item">
            <router-link
              class="nav-link active fw-normal me-4"
              aria-current="page"
              to="/current-exhibition"
              >Current</router-link
            > 
          </li>
          <li class="nav-item">
            <router-link
              to="/forthcoming"
              class="nav-link active fw-normal me-4"
              aria-current="page"
              >Forthcoming</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/past-exhibition"
              class="nav-link active fw-normal me-4"
              aria-current="page"
              >Past</router-link
            >
          </li>
        </ul> -->
      </div>
      <h1 class="exhibition-detail-title">
        {{ post.title }}
      </h1>
      <div
        class="d-time d-flex flex-row justify-content-between align-content-center"
      >
        <div class="content-text w-100">
          <div class="news-text w-75">
            <h1
              class="news-location mb-2 d-flex flex-row justify-content-start align-items-center"
            >
              {{ post.exhibitingartist }} <br />
            </h1>
            <h1
              class="news-location mb-2 d-flex flex-row justify-content-start align-items-center"
            >
              {{ post.eventdate }} <br />
            </h1>
          </div>
        </div>
        <!-- <div class="d-link">
          <ul
            class="navbar-nav ms-auto mb-lg-0 d-flex flex-row align-items-center flex-wrap"
          >
            <li class="nav-item">
              <router-link
                class="nav-link active fw-normal me-4"
                aria-current="page"
                to="/current-exhibition"
                >Overview</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/forthcoming"
                class="nav-link active fw-normal me-4"
                aria-current="page"
                >Installation Views</router-link
              >
            </li>
          </ul>
        </div> -->
      </div>
      <div class="mt-4">
        <div class="content d-flex flex-row justify-content-between">
          <div
            class="one me-4 d-flex flex-row align-content-center justify-content-center"
          >
            <div class="exhibition-quote-image">
              <div
                id="carouselExampleFade"
                class="carousel slide carousel-fade"
                data-bs-ride="true"
              >
                <div class="carousel-inner">
                  <div
                    v-for="(post, index) in post.fairImage"
                    :key="post._id"
                    :class="{ 'carousel-item': true, active: index === 0 }"
                  >
                    <img
                      v-if="post.asset.url"
                      :src="imageUrlFor(post.asset.url)"
                      class="d-block w-100"
                      alt="..."
                    />
                  </div>
                </div>

                <div class="carousel-indicators d-flex position-static">
                  <button
                    v-for="(post, index) in post.fairImage"
                    :key="index"
                    :data-bs-target="'#carouselExampleFade'"
                    :data-bs-slide-to="index"
                    :class="{ active: index === 0 }"
                    class="thumbnail"
                    aria-label="Slide 2"
                    type="button"
                  >
                    <img
                      v-if="post.asset.url"
                      :src="imageUrlFor(post.asset.url)"
                      class="d-block w-100"
                      alt="..."
                    />
                  </button>
                </div>
                <!-- <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button> -->
              </div>
            </div>
          </div>
          <div class="two">
            <!-- <div v-if="post.brief" class="exhibition-quote-border px-5">
              <span class="exhibition-quote">
                {{ post.brief }}
              </span>
            </div> -->
            <div class="gallery-link d-flex flex-row justify-content-start">
              <div class="event-image me-3">
                <img
                  v-if="post.gallerylogo"
                  :src="imageUrlFor(post.gallerylogo)"
                />
              </div>
              <div class="d-block fw-bold gallery-link-title">
                {{ post.location }} <br />
                {{ post.galleryLink }}
              </div>
            </div>

            <p class="exhibition-p mb-5">
              <SanityBlocks :blocks="blocks" />
            </p>
          </div>
        </div>
        <yeb-subtitle
          v-if="post.installationViewImage"
          Subtitle="Installation
        View"
          class="mb-5 mt-5"
        />
        <div class="row row-cols-3 row-cols-sm-1 row-cols-md-3 g-5">
          <div
            class="col mb-3"
            v-for="image in post.installationViewImage"
            :key="image._id"
          >
            <div class="installation">
              <img
                v-if="image.asset.url"
                :src="imageUrlFor(image.asset.url)"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <yeb-footer />
</template>

<script>
import { SanityBlocks } from "sanity-blocks-vue-component";
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import YebFooter from "@/components/YebFooter.vue";
import YebLoading from "@/components/YebLoading";
import YebSubtitle from "@/components/YebSubtitle.vue";
const imageBuilder = imageUrlBuilder(sanity);
import VueSlick from "vue-slick";

const query = `*[slug.current == $slug] {
    _id,
    title,
    slug,
    excerpt,
    brief,
    eventdate,
    location,
    galleryLink,
    exhibitingartist,
    body, 
   "image": mainImage{
    asset->{
    _id,
    url
  },
  },
   "gallerylogo": gallerylogo{
    asset->{
    _id,
    url
  },
  },
  fairImage[] {
          asset-> {
            _id,
            url,
          }
        },
  "name":artist->name,
  "artistImage":artist->image
  }[0]
  `;
export default {
  components: {
    SanityBlocks,
    YebFooter,
    YebLoading,
    YebSubtitle,
    VueSlick,
  },
  data() {
    return {
      loading: true,
      post: [],
      blocks: [],
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  created() {
    this.fetchData();
  },
  methods: {
    // handleScroll() {
    //   const scrollTop =
    //     window.pageYOffset || document.documentElement.scrollTop;
    //   const parallaxElements = this.$el.querySelectorAll(".parallax");
    //   for (let i = 0; i < parallaxElements.length; i++) {
    //     const element = parallaxElements[i];
    //     const y = (scrollTop - element.offsetTop) / 4;
    //     element.style.transform = `translate3d(0, ${y}px, 0)`;
    //   }
    // },
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
  margin-top: 100px !important;
}
.exhibition-hero {
  height: 90vh;
}
.exhibition-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 0px 10%;
}

.detail-content {
  margin-top: 80px !important;
}
.exhibition-detail-title {
  font-size: 21px;
  line-height: 23.5px;
  vertical-align: baseline;
  letter-spacing: 1.89px;
  font-family: "Josefin Slab", serif;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  margin-bottom: 30px !important;
}
.nav-link {
  font-size: 12.5px;
  font-weight: 700 !important;
  text-transform: uppercase;
  margin-top: 0px !important;
}
.news-location {
  font-size: 13.5px;
  line-height: 18px;
  vertical-align: baseline;
  letter-spacing: 1.89px;

  font-weight: 600;
  font-style: normal;
  text-transform: uppercase;
}

.one {
  order: 2 !important;
  width: 45%;
}

.two {
  order: 1 !important;
  width: 50%;
}

.exhibition-quote-border {
  border-left: 1px solid #000;
}

.exhibition-quote-image {
  width: 85%;
  height: 300px; /* sets the container height to adjust automatically as per the image */
  max-width: 100%;
}
.installation {
  width: 100%;
  height: 346.63px;
}
.installation img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.exhibition-quote-image .carousel-inner .carousel-item img {
  width: 100%;
  height: auto; /* sets the container height to adjust automatically as per the image */
  object-fit: cover;
  object-position: top;
}
.exhibition-quote {
  font-size: 24px;
  line-height: 34px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  margin: 0px;
  padding: 0px;
  font-weight: 700;
  font-style: italic;
  font-variant: normal;
  text-transform: none;
  text-decoration: none solid rgb(0, 0, 0);
  text-align: start;
  text-indent: 0px;
}
.exhibition-p {
  font-size: 18px;
}
@media (max-width: 728px) {
  .exhibition-hero {
    height: 20vh !important;
  }
  .parallax {
    height: 20vh !important;
  }
  .d-link {
    display: block !important;
    justify-content: flex-start !important;
  }
  .container,
  .container-fluid,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl,
  .container-xxl {
    margin-top: 50px !important;
  }
  .d-time {
    display: block !important;
  }
  .news-location {
    margin-bottom: 20px !important;
  }
  .content {
    display: block !important;
  }
  .one {
    width: 100% !important;
    margin-bottom: 200px !important;
  }
  .two {
    width: 100% !important;
  }
  .col {
    width: 100% !important;
  }
  .installation {
    width: 100% !important;
  }
  .installation img {
    width: 100% !important;
  }
  .exhibition-quote-image {
    width: 100%;
  }
  .carousel-indicators {
    margin-bottom: 50px !important;
  }
}

.event-image {
  width: 90px;
  height: 102.2px;
}
.event-image img {
  width: 100%;
  height: auto; /* sets the container height to adjust automatically as per the image */
  object-fit: cover;
}
.gallery-link-title {
  font-size: 13.5px;
  line-height: 25px;
  vertical-align: baseline;
  letter-spacing: 1.125px;
  word-spacing: 0px;
  margin: 0px;
  padding: 0px;
}

.carousel-indicators button.thumbnail {
  width: 400px !important;
}
</style>

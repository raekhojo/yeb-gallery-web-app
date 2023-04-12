<template>
  <div id="carouselExampleFade" class="carousel slide carousel-fade">
    <yeb-loading v-if="loading"></yeb-loading>
    <div class="carousel-inner" v-else>
      <router-link to="/exhibition">
        <div
          v-for="(post, index) in posts"
          :key="post._id"
          :class="{ 'carousel-item': true, active: index === 0 }"
        >
          <img
            v-if="post.image"
            :src="imageUrlFor(post.image)"
            class="d-block w-100 parallax"
            alt="..."
          />
          <div class="title w-100">
            <div
              class="container w-100 text-start d-flex flex-row justify-content-between align-content-center"
            >
              <div class="hero-text">
                <h1 class="centered text-white">
                  {{ post.title }}
                </h1>
                <span class="mt-3 date-info">{{ post.eventdate }}</span>
              </div>

              <div
                class="nav-arrows d-flex flex-row align-items-center justify-content-end"
              >
                <a
                  class="btn control-prev"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                  ><img
                    class="previous-btn-img"
                    src="@/assets/images/arrow-open-start-svgrepo-com.svg"
                    style="height: 13px"
                    alt=""
                /></a>
                <a
                  class="btn control-next"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                  ><img
                    class="previous-btn-img"
                    src="@/assets/images/arrow-open-right-svgrepo-com.svg"
                    style="height: 13px"
                    alt=""
                /></a>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import sanity from "../client";
import imageUrlBuilder from "@sanity/image-url";
import YebLoading from "@/components/YebLoading";
const imageBuilder = imageUrlBuilder(sanity);

const query = `*[_type == "post"  && "current" in categories[]->title] | order(_createdAt desc){
  _id,
  title,
  slug,
  excerpt,
  eventdate,
  "image": mainImage.asset->url
}  [0...3]`;
export default {
  name: "Home",
  components: {
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
  },
  mounted() {
    this.fetchData();
    this.imageUrlFor();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const parallaxElements = this.$el.querySelectorAll(".parallax");
      for (let i = 0; i < parallaxElements.length; i++) {
        const element = parallaxElements[i];
        const y = (scrollTop - element.offsetTop) / 4;
        element.style.transform = `translate3d(0, ${y}px, 0)`;
      }
    },
  },
};
</script>

<style scoped>
.carousel-item {
  height: 100vh;
  position: relative;
}
.carousel-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.title {
  position: absolute;
  bottom: 20%;
}

.title {
  width: 100%;
}
.hero-text {
  width: 80%;
}
.button:active,
button:active,
.button:focus,
button:focus,
.button:hover,
button:hover {
  border: none !important;
  outline: none !important;
}
.centered {
  text-transform: uppercase;
  font-size: 32px;
  line-height: 3.1rem;
  margin: 0 0 22px;
  font-family: "Josefin Slab", serif;
  font-weight: 700;
  letter-spacing: 4.32px;
}
.date-info {
  color: #ffffff;
  font-size: 14px;
  font-weight: 300;
  line-height: 16px;
  vertical-align: baseline;
  letter-spacing: 1.84px;
}
.nav-arrows {
  margin-top: 80px !important;
  width: 20%;
}

.parallax {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  transform: translate3d(0, 0, 0);
}
@media (max-width: 728px) {
  .title {
    width: 100% !important;
  }
  .hero-text {
    width: 90% !important;
  }
  .centered {
    font-size: 26px !important;
  }
  .navbar-nav {
    display: block !important;
    text-align: start !important;
  }
}
</style>

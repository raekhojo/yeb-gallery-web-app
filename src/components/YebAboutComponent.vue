<template>
  <section class="container">
    <div class="news-cont position-relative">
      <h1 class="news-title mb-4">About</h1>
      <div class="d-flex flex-row justify-content-between">
        <div class="news-image">
          <div class="news-image-container">
            <img src="@/assets/images/_apa1788-1-2.jpg" />
          </div>
        </div>
        <div class="news-text">
          <!-- <h1 class="news-location mb-5">
            {{ post.excerpt }} {{ post.eventdate }}
          </h1> -->
          <p class="news-p w-10 mb-4">
            Yebs Gallery opened in London in 2010. The focus of the gallery is
            to exhibit, represent and champion contemporary artists from around
            the world. The program includes twelve shows every year as well as
            art fairs in London, New York, Singapore, Taipei and Tokyo.
          </p>
          <p class="news-p w-10 mb-4">
            In 2020, Yebs Gallery opened an office in Sydney, Australia. In 2022
            the gallery expanded with an additional London location, Cromwell
            Place, a state of the art exhibition space.
          </p>
          <p class="news-p w-10 mb-5">
            Yebs Gallery artists have been included in exhibitions at the Venice
            Biennale; Perez Art Museum Miami; Camden Art Centre, London; Centre
            Pompidou-Metz; Seoul Museum of Art; National Museum of Modern and
            Contemporary Art, Korea and Guangdong Times Museum, China, among
            others. Acquisitions have been made by the Stedelijk Museum
            Amsterdam; Musee du Quai Branly, Paris; Minneapolis Institute of
            Art; Brooklyn Museum; National Gallery of Canada, Ottawa; Art
            Gallery of Ontario and Museum of Fine Arts, Houston.
          </p>
          <p class="news-p w-10 mb-4 fw-bolder">CONTACT DETAILS</p>
          <p class="news-p w-10 mb-5">
            Jack Bell, Director <br />

            Oliver Durey, Director <br />

            Molly Hunloke, Gallery Assistant <br />

            Victoria Newbold, Accounts <br />
          </p>
          <button type="button" class="btn btn-dark btn-sm rounded-0 w-25">
            Lets Talk
          </button>
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
  order: 2 !important;
}
.news-text {
  width: 55%;
  order: 1 !important;
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
    margin-bottom: 50px !important;
  }
}
.news-link {
  text-decoration: none;
  color: black;
}
</style>

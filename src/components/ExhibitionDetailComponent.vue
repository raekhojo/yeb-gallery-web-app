<template>
  <section class="">
    <div class="exhibition-hero">
      <img
        src="@/assets/images/31-gallery-1957-london-individuals-march-2023med-res.jpg"
        alt=""
        class="parallax"
      />
    </div>
    <div class="container detail-content">
      <div
        class="d-link d-flex flex-row justify-content-end align-items-center"
      >
        <ul
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
        </ul>
      </div>
      <h1 class="exhibition-detail-title">
        CENTRAL ELECTRICITY AND WATER ADMINISTRATION
      </h1>
      <div
        class="d-time d-flex flex-row justify-content-between align-content-center"
      >
        <div class="content-text">
          <div class="news-text">
            <h1
              class="news-location mb-5 d-flex flex-row justify-content-start align-items-center"
            >
              LONDON 16 MAR - 10 MAY 2023
            </h1>
          </div>
        </div>
        <div class="d-link">
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
            <li class="nav-item">
              <router-link
                to="/past-exhibition"
                class="nav-link active fw-normal me-4"
                aria-current="page"
                >Works</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/past-exhibition"
                class="nav-link active fw-normal me-4"
                aria-current="page"
                >Press</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                to="/past-exhibition"
                class="nav-link active fw-normal me-4"
                aria-current="page"
                >Publications</router-link
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-4">
        <div class="content d-flex flex-row justify-content-between">
          <div
            class="one me-4 d-flex flex-row align-content-center justify-content-center"
          >
            <div class="exhibition-quote-image">
              <img
                src="@/assets/images/g1957-sem-40-a-mr.jpg"
                alt=""
                class="img-fluid"
              />
            </div>
          </div>
          <div class="two">
            <div class="exhibition-quote-border px-5">
              <span class="exhibition-quote">
                “I still remember the bill collector knocking on the door. And I
                see the water tanks. Towers made of cement; high rises loaded
                with water that break the sky... These beautiful buildings touch
                my heart and soul.” – Salah Elmur, 2022
              </span>
            </div>
            <p class="exhibition-p mt-5">
              Gallery 1957 and Vigo Gallery are proud to collaborate on a joint
              exhibition and publication of monumental new paintings, set across
              both London galleries, by Cairo-based Sudanese artist Salah Elmur
              (Sudan, 1966). Central Electricity and Water Administration will
              be the artist’s second solo show with Gallery 1957 following An
              Anniverary presented in Accra in October 2021.
            </p>
            <p class="exhibition-p mt-5">
              Gallery 1957 and Vigo Gallery are proud to collaborate on a joint
              exhibition and publication of monumental new paintings, set across
              both London galleries, by Cairo-based Sudanese artist Salah Elmur
              (Sudan, 1966). Central Electricity and Water Administration will
              be the artist’s second solo show with Gallery 1957 following An
              Anniverary presented in Accra in October 2021.
            </p>
            <p class="exhibition-p mt-5">
              Gallery 1957 and Vigo Gallery are proud to collaborate on a joint
              exhibition and publication of monumental new paintings, set across
              both London galleries, by Cairo-based Sudanese artist Salah Elmur
              (Sudan, 1966). Central Electricity and Water Administration will
              be the artist’s second solo show with Gallery 1957 following An
              Anniverary presented in Accra in October 2021.
            </p>
          </div>
        </div>
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
        cumque officiis repellat porro unde! Excepturi ipsa, et omnis quidem
        aperiam reprehenderit, laboriosam dolorem inventore autem voluptatum eos
        quae, mollitia iste.s
      </h1>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
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
}

.detail-content {
  margin-top: 150px !important;
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
  font-size: 12.5px;
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
  width: 284px;
  height: auto; /* sets the container height to adjust automatically as per the image */
  max-width: 100%;
}
.exhibition-quote-image img {
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
    margin-bottom: 100px !important;
  }
  .two {
    width: 100% !important;
  }
}
</style>

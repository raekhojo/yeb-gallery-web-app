<template>
  <section class="">
    <div class="exhibition-hero bg-dark">
      <img src="@/assets/images/art-painting-elephant_599991-713.jpg" alt="" />
    </div>
    <div class="container detail-content">
      <div class="d-flex flex-row justify-content-end align-items-center">
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
      <div class="d-flex flex-row justify-content-between align-content-center">
        <div class="content-text"></div>
        <div class="content-text">
          <!-- <p class="exhibition-detail-title">
            CENTRAL ELECTRICITY AND WATER ADMINISTRATION
          </p> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.exhibition-hero {
  height: 100vh;
}
.exhibition-hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.detail-content {
  margin-top: 100px !important;
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
}
.nav-link {
  font-size: 12.5px;
  font-weight: 300;
  text-transform: uppercase;
}
</style>

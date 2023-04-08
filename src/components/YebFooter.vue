<template>
  <div class="container mt-5">
    <hr />
    <footer
      class="d-flex flex-wrap justify-content-between align-items-center py-0 px-4"
    >
      <div class="d-block">
        <ul
          class="nav d-flex flex-row align-items-center justify-content-start mb-3 mt-5"
        >
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/">Artist</router-link></li>
          <li><router-link to="/">Exhibition</router-link></li>
          <li><router-link to="/">Projects</router-link></li>
          <li><router-link to="/">News</router-link></li>
          <li><router-link to="/">Press</router-link></li>
        </ul>
        <div
          class="d-flex flex-row justify-content-start align-items-center mb-3"
        >
          <img src="@/assets/images/image1.svg" class="footer-logo" alt="" />
        </div>
      </div>

      <div class="mb-4">
        <ul class="nav d-flex justify-content-end align-items-center">
          <li class="nav-item">
            <a href="#" class="footer-nav nav-link px-1"
              ><img
                src="@/assets/images/dribbble-round-svgrepo-com.svg"
                alt=""
                style="height: 28px"
            /></a>
          </li>
          <li class="nav-item">
            <a href="#" class="footer-nav nav-link px-1"
              ><img
                src="@/assets/images/linkedin-round-svgrepo-com.svg"
                alt=""
                style="height: 28px"
            /></a>
          </li>
          <li class="nav-item">
            <a href="#" class="footer-nav nav-link px-1"
              ><img
                src="@/assets/images/behance-round-svgrepo-com.svg"
                alt=""
                style="height: 28px"
            /></a>
          </li>
          <li class="nav-item">
            <a href="#" class="footer-nav nav-link px-1"
              ><img src="@/assets/images/what.svg" alt="" style="height: 28px"
            /></a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>
<style scoped>
ul li a {
  font-family: "Barlow";
  font-size: 11px;
  line-height: 31px;
  vertical-align: baseline;
  letter-spacing: normal;
  word-spacing: 0px;
  margin: 0px;
  padding: 0px;
  color: #737373 !important;
  text-decoration: none;
  margin: 0px 20px 0px 0px;
}
hr {
  height: 0.4px;
  width: 100%;
  border-width: 0;
  color: #585858;
  background-color: #585858;
  margin-left: 10px;
}
.footer-logo {
  height: 30px;
}
@media (max-width: 728px) {
  .navigation {
    justify-content: flex-start !important;
  }
}
</style>

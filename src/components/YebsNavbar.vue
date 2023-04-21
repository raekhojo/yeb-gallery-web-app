<template>
  <nav
    class="navbar navbar-expand-lg bg-white p-0 border-0 sticky-top shadow-sm"
  >
    <div
      class="container-fluid container px-2 d-flex flex-row justify-content-between align-items-center"
    >
      <router-link
        to="/"
        class="navbar-brand d-flex flex-row justify-content-between align-items-center"
        href="#"
        ><img src="@/assets/images/image1.svg" alt="" style="height: 55px"
      /></router-link>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <input
          type="checkbox"
          id="checkbox2"
          class="checkbox2 visuallyHidden"
        />
        <label for="checkbox2">
          <div class="hamburger hamburger2">
            <span class="bar bar1"></span>
            <span class="bar bar2"></span>
            <span class="bar bar3"></span>
            <span class="bar bar4"></span>
          </div>
        </label>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul
          class="navbar-nav ms-auto mb-lg-0 d-flex flex-row align-items-center"
        >
          <li class="nav-item">
            <router-link
              to="/about"
              class="nav-link active fw-normal me-4"
              aria-current="page"
              >Artist</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link active fw-normal me-4"
              aria-current="page"
              to="/current-exhibition"
              >Exhibitions</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active fw-normal me-4"
              aria-current="page"
              href="#contact"
              >Projects</a
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/news"
              class="nav-link active fw-normal me-4"
              aria-current="page"
              href="#contact"
              >News</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="#"
              class="nav-link active fw-normal me-4"
              aria-current="page"
              href="#contact"
              >Press</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              to="/art-fair"
              class="nav-link active fw-normal me-4"
              aria-current="page"
              href="#contact"
              >Fairs</router-link
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link active fw-normal me-3"
              aria-current="page"
              href="#contact"
              >Contact</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      scrollTop: 0,
    };
  },
  created() {
    window.addEventListener("scroll", () => {
      this.isScrolled = window.scrollY > 0;
    });
  },
};
</script>

<style scoped>
.navbar-scrolled {
  background-color: #000000;
}
.navbar .collapse .navbar-nav .nav-item .nav-link {
  font-size: 12.5px;
  text-transform: uppercase;
  font-family: "Barlow", sans-serif;
  line-height: 27px;
  vertical-align: top;
  letter-spacing: 2px;
  word-spacing: 0px;
  /* margin-right: 10px; */

  /* padding: 6px 10px; */
  font-weight: 400 !important;
  background-image: linear-gradient(
    to right,
    #000000,
    #000000 50%,
    RGB(82, 82, 82) 50%
  );
  background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  color: #f7f7f7;
}
.navbar .collapse .navbar-nav .nav-item .nav-link::before {
  content: "";
  background: #000000;
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}
.navbar .collapse .navbar-nav .nav-item .nav-link:hover {
  background-position: 0;
}
.navbar .collapse .navbar-nav .nav-item .nav-link:hover::before {
  width: 100%;
}
.navbar-toggler {
  border: none;
}
.menustyle #bar2 {
  opacity: 0;
}

.menustyle #bar1 {
  transform: rotate(-45deg) translate(-5px, 5px);
}

.menustyle #bar3 {
  transform: rotate(45deg) translate(-1px, -2px);
}

#bar1,
#bar2,
#bar3 {
  padding: 0.1em 0.6em 0.1em 0.6em;
  margin: 20% auto;
  background-color: rgb(3, 3, 3);
  border-radius: 50px;
  transition: 0.5s;
  /* width: 60%; */
}

/* GENERAL STYLES */
.visuallyHidden {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.hamburger {
  margin: 0 0px;
  margin-top: 24px;
  width: 30px;
  height: 30px;
  position: relative;
}

.hamburger .bar {
  padding: 0;
  width: 30px;
  height: 3px;
  background-color: rgb(0, 0, 0);
  display: block;
  border-radius: 4px;
  transition: all 0.4s ease-in-out;
  position: absolute;
}

.bar1 {
  top: 0;
}
.bar2,
.bar3 {
  top: 5.5px;
}
.bar3 {
  right: 0;
}
.checkbox2:checked + label > .hamburger2 > .bar1 {
  transform: translateX(40px);
  background-color: transparent;
}
.checkbox2:checked + label > .hamburger2 > .bar2 {
  transform: rotate(45deg);
}
.checkbox2:checked + label > .hamburger2 > .bar3 {
  transform: rotate(-45deg);
}

.checkbox2:checked + label > .hamburger2 > .bar4 {
  transform: translateX(-40px);
  background-color: transparent;
}
.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
  outline: none;
  box-shadow: none;
}

@media (max-width: 728px) {
  .navbar .collapse .navbar-nav .nav-item {
    padding: 0 23px !important;
  }
  .navbar-nav {
    display: block !important;
  }
}
</style>

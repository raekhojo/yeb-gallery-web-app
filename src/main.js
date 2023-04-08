import { createApp } from "vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import AOS from "aos";
import "aos/dist/aos.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import $ from "jquery";
import { VueMasonryPlugin } from "vue-masonry";

createApp(App)
  .use(store)
  .use(router)
  .use($)
  .use(AOS.init())
  .use(VueMasonryPlugin)
  .mount("#app");

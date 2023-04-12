import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CurrentExhibition from "../views/CurrentExhibition.vue";
import PastExhibition from "../views/PastExhibition.vue";
import NewsView from "../views/NewsView.vue";
import NewsDetailsView from "../views/NewsDetailsView.vue";
import ForthComing from "../views/ForthComing.vue";
import ExhibitionDetailView from "@/views/ExhibitionDetailView";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/current-exhibition",
    name: "current-exhibition",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CurrentExhibition.vue"),
  },
  {
    path: "/past-exhibition",
    name: "past-exhibition",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PastExhibition.vue"),
  },
  {
    path: "/news",
    name: "news",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewsView.vue"),
  },
  {
    path: "/news/:slug",
    name: "newsdetailsview",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: NewsDetailsView,
  },
  {
    path: "/forthcoming",
    name: "forthcoming",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ForthComing,
  },
  {
    path: "/exhibition",
    name: "exhibition",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ExhibitionDetailView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CurrentExhibition from "../views/CurrentExhibition.vue";
import PastExhibition from "../views/PastExhibition.vue";
import NewsView from "../views/NewsView.vue";
import NewsDetailsView from "../views/NewsDetailsView.vue";
import ForthComing from "../views/ForthComing.vue";
import ExhibitionDetailView from "@/views/ExhibitionDetailView";
import YebsFair from "@/views/YebsFair.vue";
import YebFairsDetail from "@/views/YebFairsDetail.vue";
import YebArtist from "@/views/YebArtist.vue";
import YebArtistDetails from "@/views/YebArtistDetails";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/current-exhibition",
    name: "current-exhibition",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CurrentExhibition.vue"),
  },
  {
    path: "/past-exhibition",
    name: "past-exhibition",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/PastExhibition.vue"),
  },
  {
    path: "/news",
    name: "news",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewsView.vue"),
  },
  {
    path: "/news/:slug",
    name: "newsdetailsview",
    component: NewsDetailsView,
  },
  {
    path: "/forthcoming",
    name: "forthcoming",
    component: ForthComing,
  },
  {
    path: "/art-fair",
    name: "art-fair",
    component: YebsFair,
  },
  {
    path: "/art-fairs/:slug",
    name: "art-fairs",
    component: YebFairsDetail,
  },
  {
    path: "/exhibition/:slug",
    name: "exhibition",
    component: ExhibitionDetailView,
  },
  {
    path: "/artists",
    name: "artist",
    component: YebArtist,
  },
  {
    path: "/artists/:slug",
    name: "artist-detail",
    component: YebArtistDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

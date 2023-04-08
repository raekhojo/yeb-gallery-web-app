<template>
  <yebs-carousel />
  <yeb-forth-coming />
  <home-exhibition />
  <yeb-news />
  <yeb-footer />
</template>

<script>
// @ is an alias to /src
import YebsCarousel from "@/components/YebsCarousel.vue";
import YebForthComing from "@/components/YebForthComing.vue";
import YebNews from "@/components/YebNews.vue";
import HomeExhibition from "@/components/HomeExhibition.vue";
import YebFooter from "@/components/YebFooter.vue";
export default {
  name: "HomeView",
  components: {
    YebsCarousel,
    YebNews,
    YebForthComing,
    HomeExhibition,
    YebFooter,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>

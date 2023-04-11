<template>
  <yeb-full-news />
</template>

<script>
import YebFullNews from "@/components/YebFullNews.vue";
export default {
  components: {
    YebFullNews,
  },
  mounted() {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  },
};
</script>

<style></style>

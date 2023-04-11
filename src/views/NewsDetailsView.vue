<template>
  <news-details />
</template>

<script>
import NewsDetails from "@/components/NewsDetails.vue";

export default {
  components: {
    NewsDetails,
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

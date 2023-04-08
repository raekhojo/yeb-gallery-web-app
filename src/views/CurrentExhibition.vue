<template>
  <current-exhibition-component />
  <yeb-footer />
</template>

<script>
import CurrentExhibitionComponent from "@/components/CurrentExhibitionComponent.vue";
import YebFooter from "@/components/YebFooter.vue";
export default {
  components: {
    CurrentExhibitionComponent,
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

<style></style>

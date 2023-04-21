<template>
  <yeb-fairs-detail-component />
  <!-- <yeb-footer /> -->
</template>

<script>
import YebFairsDetailComponent from "@/components/YebFairsDetailComponent";
// import YebFooter from "@/components/YebFooter.vue";
export default {
  components: {
    YebFairsDetailComponent,
    // YebFooter,
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

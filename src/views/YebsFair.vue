<template>
  <yebs-fair-component />
  <past-fairs />
  <yeb-footer />
</template>

<script>
import YebsFairComponent from "@/components/YebsFairComponent";
import PastFairs from "@/components/PastFairs.vue";
import YebFooter from "@/components/YebFooter.vue";
export default {
  components: {
    YebsFairComponent,
    PastFairs,
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

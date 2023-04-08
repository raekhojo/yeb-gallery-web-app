<template>
  <past-exhibition-component />
</template>

<script>
import PastExhibitionComponent from "@/components/PastExhibitionComponent.vue";
export default {
  components: {
    PastExhibitionComponent,
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

<template>
  <exhibition-detail-component />
</template>

<script>
import ExhibitionDetailComponent from "@/components/ExhibitionDetailComponent.vue";
export default {
  components: {
    ExhibitionDetailComponent,
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

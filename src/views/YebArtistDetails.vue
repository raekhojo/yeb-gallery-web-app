<template>
  <yeb-artist-details-component />
</template>

<script>
import YebArtistDetailsComponent from "@/components/YebArtistDetailsComponent";
export default {
  components: {
    YebArtistDetailsComponent,
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

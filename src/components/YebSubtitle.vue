<template>
  <div
    class="px-2 heading d-flex flex-row align-items-center justify-content-start"
  >
    <div class="subtitle">
      <h2>{{ Subtitle }}</h2>
    </div>
    <!-- <hr /> -->
  </div>
</template>

<script>
export default {
  props: {
    Subtitle: "String",
  },
};
</script>

<style scoped>
.subtitle h2 {
  font-size: 18.5px;
  line-height: 31px;
  letter-spacing: 2px;
  font-weight: 500;
  color: #060505;
  text-transform: uppercase;
  padding: 0px 10px 0px 0px;
}
hr {
  height: 1px;
  width: 100%;
  border-width: 0;
  color: #000000;
  background-color: #000000;
  margin-left: 10px;
}
.heading {
  margin-bottom: 50px !important;
}
</style>

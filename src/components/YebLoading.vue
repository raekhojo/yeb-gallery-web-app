<template>
  <div class="loading-indicator">
    <img src="@/assets/images/Untitled-design.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: "LoadingIndicator",
};
</script>

<style scoped>
.loading-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
}
.loading-indicator img {
  height: 50%;
}
</style>

<template>
  <yebs-navbar />
  <router-view v-slot="{ Component, route }">
    <transition name="fade" mode="out-in">
      <section :key="route.name">
        <component :is="Component"></component>
      </section>
    </transition>
  </router-view>
</template>
<script>
import YebsNavbar from "@/components/YebsNavbar";

export default {
  components: {
    YebsNavbar,
  },
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,200;0,300;0,400;0,500;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap");
#app {
  font-family: "Josefin Slab", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

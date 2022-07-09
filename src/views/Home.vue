<template>
  <!-- ============================ start home ============================ -->
  <article class="home">
    <header-app />

    <carousels />
  </article>
  <!-- ============================ end home ============================ -->
</template>

<script>
// @ is an alias to /src
import headerApp from "@/components/globals/headerApp.vue";
import carousels from "@/components/carousels.vue";

export default {
  name: "Home",
  components: {
    carousels,
    headerApp,
  },
};
</script>
<style lang="scss" scoped>
header {
  background-color: transparent !important;
}
</style>
<style lang="scss" scoped>
//------------------------- start all animation slider -------------------------
.slide-leave-to {
  opacity: 0;
}
.slide-leave-active {
  transition: 4s;
}
//------------------------- end all animation slider -------------------------
</style>

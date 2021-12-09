<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Акции</h1>

    <div class="actionlist"></div>
  </main>
  <!-- .site-main -->
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "akcii",
  components: { SitePath },
};
</script>
<style scoped lang="scss">
.site-main {
  flex: 1 0 0%;
  order: 1;
  max-width: 100%;
  box-sizing: border-box;
}

@media screen and (max-width: 699px) {
  .site-main {
    padding: 0 12px 20px;
  }
}
</style>

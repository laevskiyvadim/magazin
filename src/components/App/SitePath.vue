<template>
  <div class="site-path">
    <router-link :to="'/magazin/'">Главная</router-link> <span>/</span
    >{{ $route.meta.titlePage }}
  </div>
</template>
<style lang="scss" scoped>
.site-path {
  margin-bottom: 10px;
  white-space: pre-wrap;
  line-height: 1;
}
.site-path {
  font-size: 0;
}

.site-path span {
  font: 12px "noto_sans-r", Arial, Helvetica, sans-serif;
  color: #0c8ac9;
  padding: 0 3px;
}

.site-path a {
  font: 12px "noto_sans-r", Arial, Helvetica, sans-serif;
  color: #0c8ac9;
  text-decoration: none;
}

.site-path a:hover {
  text-decoration: underline;
}
</style>

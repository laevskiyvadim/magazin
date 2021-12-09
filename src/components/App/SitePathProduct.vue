<template>
  <div class="site-path">
    <router-link :to="'/'">Главная</router-link> <span>/</span>
    <router-link :to="'/cat/' + category()">Полотенцесушители</router-link>
    <span>/</span>
    <router-link
      :to="'/cat/' + category() + '/' + subCategory()"
      v-if="subCategory() !== undefined"
      >ALEX ONE полотенцесушитель</router-link
    >
    <span v-if="subCategory() !== undefined">/</span> Terma Alex One 1580/600
    полотенцесушитель
  </div>
</template>
<script>
export default {
  methods: {
    category() {
      return this.$route.params.category;
    },
    subCategory() {
      return this.$route.params.subCategory;
    },
  },
};
</script>
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

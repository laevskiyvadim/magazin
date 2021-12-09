<template>
  <div class="g-label-tabs g-label-tabs--indents">
    <router-link
      class="g-user-profile__item"
      :to="'lk'"
      :class="{ 'g-user-profile--opened': route === '/lk' }"
      >Мой кабинет</router-link
    >
    <router-link
      class="g-user-profile__item"
      :to="'/lkdata'"
      :class="{ 'g-user-profile--opened': route === '/lkdata' }"
      >Личные данные</router-link
    >
    <router-link
      class="g-user-profile__item"
      :to="'/lkchangepass'"
      :class="{ 'g-user-profile--opened': route === '/lkchangepass' }"
      >Смена пароля</router-link
    >
    <router-link :to="'/logout'" class="g-button g-user__button"
      >Выйти</router-link
    >
  </div>
</template>
<script>
export default {
  computed: {
    route: function () {
      return this.$route.fullPath;
    },
  },
};
</script>
<style lang="scss" scoped>
.g-user-profile--opened {
  color: #fff !important;
  background-color: #f06354;
}

.g-user-profile__item {
  display: inline-block;
  box-sizing: border-box;
  padding: 0.35714em 0.71429em;
  font-size: 0.93333em;
  line-height: 1.2em;
  cursor: pointer;
  vertical-align: top;
  text-decoration: none !important;
  color: #f06354;
  border: 1px solid transparent;
  border-radius: 13px;
  margin-bottom: 6px;
  margin: 0 5px;
}
.g-user-profile__item:hover,
.g-user-profile__item:active,
.g-user-profile__item--active {
  margin: 0 5px;
  padding: 0.35714em 0.71429em;
  border-color: #f06354;
}
.g-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 1.35714em;
  cursor: pointer;
  text-decoration: none !important;
  color: #fff !important;
  border: 0.07143em solid rgba(0, 0, 0, 0.1);
  border-radius: 0.28571em;
  outline: none;
  background-color: #f06354;
  background-image: linear-gradient(-180deg, #f6a39a 0%, #f06354 100%);
  box-shadow: 0 0.07143em 0.07143em 0 rgba(0, 0, 0, 0.2);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;
}
.g-button:hover {
  color: #fff !important;
  background: #f06354;
  box-shadow: 0 0.07143em 0.07143em 0 rgba(0, 0, 0, 0.2);
}
.g-button:active {
  color: #fff !important;
  background: #f06354;
  box-shadow: inset 0 0.07143em 0.14286em 0 rgba(0, 0, 0, 0.3);
}
</style>

<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Мой кабинет</h1>
    <Tab />

    <div class="user__home-page">
      <br />Добро пожаловать! Вы авторизовались как vadimlaevskiy.<br /><br />

      Ваш логин: vadimlaevskiy <br />
      <b>E-mail:</b> laevskiy.vadim@mail.ru <br />
      <b>Накопленная сумма:</b> 0 руб. <b>Количество бонусов:</b> 0.00

      <br />
      <b>Ваши заказы:</b>
      <router-link :to="'/orderslist'">Посмотреть</router-link><br />

      <br />

      <div class="g-clear"></div>
    </div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
import Tab from "@/components/LK/Tab.vue";
export default {
  name: "LK",
  components: { SitePath, Tab },
};
</script>
<style lang="scss" scoped>
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
.g-user__button {
  margin: 0 5px;
}
.user__home-page {
  line-height: 1.4;
}
a {
  text-decoration: underline;
  color: #0c8ac9;
}
.g-clear {
  clear: both;
  height: 0;
}
b,
strong {
  font-weight: normal;
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}
</style>

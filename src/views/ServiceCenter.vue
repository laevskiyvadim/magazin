<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Сервисный центр</h1>

    <p>
      <strong
        >Если у Вас возникли вопросы по продукции, связанные с ее установкой,
        использованием либо при выявлении рекламации, просьба обращаться по
        адресу:info@teplovann.ru&nbsp;, указав город в котором Вы находитесь а
        так же&nbsp;&nbsp;указав в теме письма по какой марке продукции ваше
        обращение, наши менеджеры оперативно решат все ваши вопросы.</strong
      >
    </p>

    <p>&nbsp;</p>

    <p>&nbsp;</p>

    <p>
      <strong
        >Если у Вас возникли вопросы по продукции Wasser Kraft, связанные с ее
        установкой, использованием либо при выявлении рекламации, просьба
        обращаться сразу&nbsp;по адресу:</strong
      >
    </p>

    <p>
      e-mail:&nbsp;<a
        href="mailto:service@wasserkraft.ru?subject=%D0%A1%D0%B5%D1%80%D0%B2%D0%B8%D1%81%D0%BD%D0%B0%D1%8F%20%D0%BF%D0%BE%D0%B4%D0%B4%D0%B5%D1%80%D0%B6%D0%BA%D0%B0%20%22WasserKRAFT%22"
        >service@wasserkraft.ru</a
      >
    </p>

    <p>&nbsp;</p>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "ServiceCenter",
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

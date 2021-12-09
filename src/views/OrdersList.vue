<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Ваши заказы</h1>
    <div class="shop2-cookies-disabled shop2-warning hide"></div>

    <div class="table-wrapper">
      <table class="shop2-table-order">
        <thead>
          <tr>
            <th>№</th>
            <th>Создан</th>
            <th>Сумма,&nbsp;руб.</th>
            <th>Статус оплаты</th>
            <th>Статус заказа</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>665 (198900904)</td>
            <td>11.08.2021 19:55</td>
            <td>501&nbsp;959</td>
            <td>Не оплачен</td>
            <td>Новый</td>
            <td>
              <router-link :to="'/orderinfo'">Подробнее »</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-right"></div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "OrdersList",
  components: { SitePath },
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
img,
textarea,
object,
object embed,
.table-wrapper {
  max-width: 100%;
}

.table-wrapper {
  overflow: auto;
}
table.shop2-table-order {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 20px 0;
  width: 100%;
}
table.shop2-table-order th,
table.shop2-table-order td {
  border: 1px solid #dedede;
  vertical-align: middle;
  padding: 5px;
  margin: 0;
  text-align: left;
  font-size: 13px;
}
fieldset.shop2-order-data td,
fieldset.shop2-order-data th,
table.shop2-table-order th,
table.shop2-table-order td {
  font-weight: normal;
}
table.shop2-table-order tr:first-child th {
  background-color: #dedede;
  color: #3c3c3c;
}
</style>

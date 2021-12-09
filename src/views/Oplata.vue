<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Оплата</h1>

    <div class="localtabs">
      <ul>
        <li class="active">
          <div class="localtabs__title">
            <a href="#">Наличными <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            Оплатить покупки можно наличными или картой курьеру при получении.
            Убедительная просьба вначале ознакомиться с товаром, убедиться в
            отсутствии дефектов в присутствии курьера, после чего оплачивать
            сумму.
          </div>
        </li>
        <li class="">
          <div class="localtabs__title">
            <a href="#"
              >Онлайн-оплата платежной картой Visa и MasterCard <span></span
            ></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            Открыта возможность оплаты покупок посредством карт Visa и
            MasterCard. Для этого перейдите в корзину магазина, введите сумму
            платежа, после чего нажмите кнопку «Оплатить».
          </div>
        </li>
        <li class="">
          <div class="localtabs__title">
            <a href="#">безналичный расчет <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            вы можете оплатить товар по безналичному расчету, для этого
            необходимо выслать реквизиты вашей организации на наш
            адрес:info@teplovann.ru и оплатить выставленный счет. при отгрузке
            вы получите все закрывающие документы.
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "Oplata",
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

.localaboutus,
.localcontacts,
.localcontacts2,
.localtabs {
  margin-top: 30px;
}
.localtabs > ul,
.localtabs > ul > li {
  margin: 0;
  padding: 0;
}

.localtabs > ul {
  list-style: none;
  border-top: 1px solid currentColor;
}
.localtabs > ul > li .localtabs__title {
  border-bottom: 1px solid currentColor;
  padding: 15px 0;
}
.localtabs > ul > li.active .localtabs__title > a {
  color: inherit;
}
.localtabs > ul > li .localtabs__title > a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
}
.localtabs > ul > li.active .localtabs__title > a > span {
  -webkit-transform: none;
  transform: none;
}

.localtabs > ul > li .localtabs__title > a > span {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg + xml;charset=utf-8,%3Csvgxmlns="http://www.w3.org/2000/svg"height="18"width="18"viewBox="0 0 18 18"%3E%3Cpathd="M9 .5C4.31.5.5 4.31.5 9c0 4.69 3.81 8.5 8.5 8.5 4.69 0 8.5-3.81 8.5-8.5C17.5 4.31 13.69.5 9 .5zm0 1c4.15 0 7.5 3.35 7.5 7.5s-3.35 7.5-7.5 7.5S1.5 13.15 1.5 9 4.85 1.5 9 1.5z"solid-color="%23000000"fill="%23d6d6d6"/%3E%3Cpathd="M11.117 7.646L8.7 10.053 6.355 7.707l-.708.707L8.7 11.467l3.122-3.113-.705-.708z"solid-color="%23000000"fill="%23484848"/%3E%3C/svg%3E')
    50% 50% no-repeat;
  vertical-align: middle;
  margin-left: 5px;
  transform: rotate(-90deg);
}
.localtabs > ul > li.active .localtabs__body {
  display: block;
}
.localtabs > ul > li .localtabs__body {
  display: none;
  border-bottom: 1px solid currentColor;
  padding: 10px 0;
  font-size: 14px;
}
.localtabs > ul > li .localtabs__title > a > span {
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg + xml;charset=utf-8,%3Csvgxmlns="http://www.w3.org/2000/svg"height="18"width="18"viewBox="0 0 18 18"%3E%3Cpathd="M9 .5C4.31.5.5 4.31.5 9c0 4.69 3.81 8.5 8.5 8.5 4.69 0 8.5-3.81 8.5-8.5C17.5 4.31 13.69.5 9 .5zm0 1c4.15 0 7.5 3.35 7.5 7.5s-3.35 7.5-7.5 7.5S1.5 13.15 1.5 9 4.85 1.5 9 1.5z"solid-color="%23000000"fill="%23d6d6d6"/%3E%3Cpathd="M11.117 7.646L8.7 10.053 6.355 7.707l-.708.707L8.7 11.467l3.122-3.113-.705-.708z"solid-color="%23000000"fill="%23484848"/%3E%3C/svg%3E')
    50% 50% no-repeat;
  vertical-align: middle;
  margin-left: 5px;
  transform: rotate(-90deg);
}
</style>

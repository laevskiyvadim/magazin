<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Как оформить заказ</h1>

    <div class="localtabs">
      <ul>
        <li :class="{ active: isActive1 }" @click="isActive1 = !isActive1">
          <div class="localtabs__title">
            <a href="#">Как делать покупки в нашем магазине <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            <p>С делать покупку в нашем интернет магазине очень просто:</p>

            <p>- выберите необходимый вам товар</p>

            <p>- выберите количество</p>

            <p>- положите товар в корзину для продолжения покупок</p>

            <p>
              - если товар один и вы не хотите просматривать остальное тогда
              нажмите кнопку "купить в 1 клик"
            </p>

            <p>- заполните не сложную форму</p>

            <p>
              - ждите звонка от нашего менеджера для подтверждения заказа и
              уточнения деталей оплаты и доставки
            </p>

            <p>Хороших Вам покупок!</p>
          </div>
        </li>
        <li :class="{ active: isActive2 }" @click="isActive2 = !isActive2">
          <div class="localtabs__title">
            <a href="#">Подтверждение заказа <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            <p>
              После оформления заказа Вам на почту придет подтверждение,
              менеджер нашего интернет магазина свяжется с вами в течении 24
              часов для уточнения деталей.
            </p>
          </div>
        </li>
        <li :class="{ active: isActive3 }" @click="isActive3 = !isActive3">
          <div class="localtabs__title">
            <a href="#">Время работы <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            <p>
              Наш интернет магазин принимает электронные заявки круглосуточно!
            </p>

            <p>
              на все ваши вопросы мы можем ответить каждый день с 9.00-18.00 по
              Московскому времени
            </p>
          </div>
        </li>
        <li :class="{ active: isActive4 }" @click="isActive4 = !isActive4">
          <div class="localtabs__title">
            <a href="#">Доставка <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            <p>
              При заказе на сумму от 15.000 р. Бесплатно в пределах МКаД&nbsp;на
              следующий день при условии наличия товара на складе или на складе
              поставщика, подробную информацию о наличии товара уточняйте по
              номеру телефона.
            </p>

            <p>
              При заказе на сумму до 15000 р. Стоимость доставки в пределах МКАД
              . Составит от&nbsp; 600 р. на следующий день при условии наличия
              товара на складе или на складе поставщика, подробную информацию о
              наличии товара и стоимости доставки в ваш округ уточняйте по
              номеру телефона 89778485758.
            </p>

            <p>
              Срочная доставка в день заказа при условии наличия товара на
              складе или на складе поставщика 1200 р.
            </p>

            <p>
              Доставка крупногабаритных товаров в течение 3 дней , стоимость
              от&nbsp; 1500 р.
            </p>

            <p>Доставка крупногабаритного товара производится до подъезда.</p>

            <p>
              Доставка за пределы МКАД оплачивается дополнительно + 40 рублей за
              каждый&nbsp; км. ,учитывается расстояние до заказчика и от
              заказчика до МКАД.
            </p>

            <p>
              При отказе покупателя от заказа в приеме товара, заказчик
              оплачивает стоимость доставки 600 р. (даже при условии бесплатной
              доставки)&nbsp;
            </p>
          </div>
        </li>
        <li :class="{ active: isActive5 }" @click="isActive5 = !isActive5">
          <div class="localtabs__title">
            <a href="#">Оплата заказа <span></span></a>
          </div>
          <div class="localtabs__body" style="padding-left: 20px">
            <p>&nbsp;</p>

            <p>Оплату заказа после согласования вы можете произвести:</p>

            <p>наличными курьеру при доставке;</p>

            <p>картой курьеру при доставке;</p>

            <p>
              оплатой на расчетный счет организации ( просим сразу запрашивать
              счет и прикладывать реквизиты организации от которой будет
              произведена оплата в случае с Юр лицами);
            </p>

            <p>оплата переводом на карту сбербанка.&nbsp;</p>

            <p>
              !!! Оплата за заказные товары ( которых нет в наличии)
              производится любым из удобных способов в размере 100%. Сроки
              поставки заказных товаров уточняйте у менеджеров.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </main>
  <!-- .site-main -->
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "HowToMakeAnOrder",
  data: () => ({
    isActive1: false,
    isActive2: false,
    isActive3: false,
    isActive4: false,
    isActive5: false,
  }),
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
.localtabs > ul,
.localtabs > ul > li {
  margin: 0;
  padding: 0;
}
.localtabs > ul > li .localtabs__title {
  border-bottom: 1px solid currentColor;
  padding: 15px 0;
}
.localtabs > ul > li .localtabs__title > a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 700;
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
.localtabs > ul > li .localtabs__body {
  display: none;
  border-bottom: 1px solid currentColor;
  padding: 10px 0;
  font-size: 14px;
}
.localtabs > ul > li.active .localtabs__body {
  display: block;
}
</style>

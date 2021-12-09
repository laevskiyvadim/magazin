<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Доставка</h1>

    <div class="localaboutus">
      <div class="localtext">
        <p>
          При заказе на сумму от 15 000 р. Бесплатно в пределах МКаД&nbsp;на
          следующий день при условии наличия товара на складе или на складе
          поставщика, подробную информацию о наличии товара уточняйте по номеру
          телефона.
        </p>

        <p>
          При заказе на сумму до 15 000 р. Стоимость доставки в пределах МКАД .
          Составит от&nbsp; 600 р. на следующий день при условии наличия товара
          на складе или на складе поставщика, подробную информацию о наличии
          товара и стоимости доставки в ваш округ уточняйте по номеру телефона
          {{ companyData.lastPhone }}.
        </p>

        <p>
          Срочная доставка в день заказа при условии наличия товара на складе
          или на складе поставщика 1 200 р.
        </p>

        <p>
          Доставка крупногабаритных товаров в течение 3 дней , стоимость
          от&nbsp; 1 500 р.
        </p>

        <p>Доставка крупногабаритного товара производится до подъезда.</p>

        <p>
          Доставка за пределы МКАД оплачивается дополнительно + 40 рублей за
          каждый&nbsp; км. ,учитывается расстояние до заказчика и от заказчика
          до МКАД.
        </p>

        <p>
          При отказе покупателя от заказа в приеме товара, заказчик оплачивает
          стоимость доставки 600 р. (даже при условии бесплатной доставки)&nbsp;
        </p>
      </div>

      <div class="localproducts">
        <div class="localproducts__block">
          <div class="localpic localproducts__block-pic localpic--little">
            <a
              @click.prevent
              class="highslide"
              href="/magazin/assets/fgs16_transport.svg"
              ><img src="/magazin/assets/fgs16_transport.svg" alt="" title=""
            /></a>
          </div>
          <div class="localproducts__block-text">
            <div class="localproducts__block-title">Самовывоз</div>
            <div class="localproducts__block-discription">
              <p>самовывоз не доступен со склада поставщика</p>
            </div>
            <router-link
              class="localbtn localproducts__localbtn0"
              :to="'/magazin/napishite-nam'"
              >Заказать</router-link
            >
          </div>
          <div class="clear"></div>
        </div>
        <div class="localproducts__block">
          <div class="localpic localproducts__block-pic localpic--little">
            <a @click.prevent class="highslide" href="/assets/fgs16_taxi.svg"
              ><img src="/magazin/assets/fgs16_taxi.svg" alt="" title=""
            /></a>
          </div>
          <div class="localproducts__block-text">
            <div class="localproducts__block-title">Курьерская доставка</div>
            <div class="localproducts__block-discription">
              <p>
                мы можем оформить вам курьерскую доставку от SDEK по желанию
                клиента
              </p>
            </div>
            <router-link
              class="localbtn localproducts__localbtn1"
              :to="'/magazin/napishite-nam'"
              >Заказать</router-link
            >
          </div>
          <div class="clear"></div>
        </div>
        <div class="localproducts__block">
          <div class="localpic localproducts__block-pic localpic--little">
            <a
              class="highslide"
              @click.prevent
              href="/magazin/assets/fgs16_transport_2.svg"
              ><img src="/magazin/assets/fgs16_transport_2.svg" alt="" title=""
            /></a>
          </div>
          <div class="localproducts__block-text">
            <div class="localproducts__block-title">Доставка в регионы</div>
            <div class="localproducts__block-discription">
              <p>
                доставка в регионы осуществляется транспортными компаниями:
                SDEK, Деловые линии по тарифам перевозчика, после 100% оплаты
                товара.
              </p>
            </div>
            <router-link
              class="localbtn localproducts__localbtn2"
              :to="'/magazin/napishite-nam'"
              >Заказать</router-link
            >
          </div>
          <div class="clear"></div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "Dostavka",
  components: { SitePath },
  computed: {
    companyData: function () {
      return this.$store.state.companyData;
    },
  },
};
</script>
<style lang="scss" scoped>
.site-main {
  flex: 1 0 0%;
  order: 1;
  max-width: 100%;
  box-sizing: border-box;
}

.localaboutus,
.localcontacts,
.localcontacts2,
.localtabs {
  margin-top: 30px;
}
.localtext {
  font-size: 15px;
  color: inherit;
  margin: 1em 0;
}

.localproducts {
  margin-top: 30px;

  &__block {
    border-bottom: 1px solid currentColor;
    padding-bottom: 30px;
    margin-top: 30px;

    &:last-child {
      border-bottom: none;
    }
    &-text {
      margin-left: 170px;
    }

    &-pic {
      float: left;
    }

    &-title {
      color: inherit;
      font-size: 18px;
    }

    &-discription {
      margin-top: 10px;
      margin-bottom: 22px;
      font-size: 14px;
      color: inherit;
      line-height: 1.4;
    }
  }
}

.localpic {
  border-radius: 4px;
  overflow: hidden;
  text-align: center;

  &--little {
    width: 160px;
    height: 160px;
  }
}
.localbtn,
.localbtn:hover {
  color: inherit;
  background-color: inherit;
}
.localbtn {
  display: inline-block;
  font-size: 14px;
  font-weight: 700;
  line-height: 29px;
  text-decoration: none;
  padding: 0 15px;
  border: 1px solid currentColor;
  border-radius: 4px;
}

@media screen and (max-width: 699px) {
  .site-main {
    padding: 0 12px 20px;
  }
}
</style>

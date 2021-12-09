<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Корзина</h1>
    <div class="shop2-cookies-disabled shop2-warning hide"></div>

    <div class="shop_cart_wrapper">
      <form action="/magazin?mode=cart&amp;action=up" id="shop2-cart">
        <div class="top_cart_buttons clear-self">
          <ButtonBack />
          <p class="text-right clear_cart">
            <a href="/magazin?mode=cart&amp;action=cleanup" class="shop2-btn"
              ><span>Очистить</span></a
            >
          </p>
        </div>
        <div class="shop_cart_prod">
          <div class="shop_cart_title">
            <div class="cart_prod_title">Товар</div>
            <div class="cart_prod_price">Цена</div>
            <div class="cart_prod_amount">Количество</div>
            <div class="cart_prod_total_title">Сумма</div>
            <div class="cart_prod_del">&nbsp;</div>
          </div>
          <div class="shop_cart_lots">
            <OnceProduct v-for="item of info" :key="item.id" :item="item" />
          </div>
        </div>
        <TotalCost />
      </form>
      <!-- Cart -->
    </div>

    <div class="shop2-clear-container"></div>

    <!-- Cart Registration -->

    <div class="bot_cart_buttons clear-self">
      <ButtonBack />
      <div class="popup_cart_wr">
        <router-link :to="'/magazin/order'" class="popup_cart" tag="a"
          ><span>Оформить заказ</span></router-link
        >
      </div>
    </div>
  </main>
  <!-- .site-main -->
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
import OnceProduct from "@/components/Cart/OnceProduct.vue";
import TotalCost from "@/components/Cart/TotalCost.vue";
import ButtonBack from "@/components/App/ButtonBack.vue";
export default {
  name: "Cart",
  data: () => ({
    info: [
      {
        id: 1,
        imgSrc: "/t/v2502/images/empty_product_pic.png",
        name: "Terma Bone 760/500 полотенцесушитель",
        article: "нет",
        color: "Белый",
        cost: "14 744",
        category: "terma",
      },
      {
        id: 2,
        imgSrc: "/t/v2502/images/empty_product_pic.png",
        name: "Terma Fiona 660/430 полотенцесушитель",
        article: "нет",
        color: "Белый",
        cost: "10 102",
        category: "terma",
      },
    ],
  }),
  components: { SitePath, OnceProduct, TotalCost, ButtonBack },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
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
.shop2-warning {
  position: relative;
  padding: 50px 50px 51px 220px;
  margin: 0 0 30px;
  min-height: 0;
  background: #fff;
  border: 1px solid #25c6ec;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
}

@media screen and (max-width: 1023px) {
  .shop2-warning {
    padding: 40px 20px 40px 100px;
  }
}

@media screen and (max-width: 599px) {
  .shop2-warning {
    padding: 20px 20px 20px 55px;
  }
}

.shop2-warning ul {
  padding: 0;
  margin: 0;
}

.shop2-warning h2 {
  font: 30px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  color: #25c6ec;
  margin: 0;
}

@media screen and (max-width: 1023px) {
  .shop2-warning h2 {
    font-size: 26px;
  }
}

@media screen and (max-width: 599px) {
  .shop2-warning h2 {
    font-size: 21px;
  }
}
.clear-self::after {
  display: block;
  visibility: hidden;
  clear: both;
  height: 0;
  content: "";
}
.shop_cart_wrapper .top_cart_buttons {
  padding: 0 0 20px;
}

.shop_cart_wrapper .top_cart_buttons p {
  margin: 0;
}

.shop_cart_wrapper .top_cart_buttons p.cart_back_button {
  float: left;
}

.shop_cart_wrapper .top_cart_buttons p.cart_back_button a {
  width: 160px;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart {
  float: right;
  padding: 7px 0 0 0px;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a {
  position: relative;
  font: 16px/17px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #212121;
  text-decoration: none;
  padding: 6px 40px 0 0;
  transition: all 0.3s;
  background: none;
  border: none;
  box-shadow: none;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a:hover {
  color: #eb4d17;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2221px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2021%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23EB4D17%22%20d%3D%22M19.78%208.3v13.1l-.02.2a3.54%203.54%200%200%201-3.38%202.75H4.4a3.56%203.56%200%200%201-3.38-2.75L1%2021.4V8.3a1%201%200%200%201%201-1h16.78a1%201%200%200%201%201%201zM3%209.3v11.98c.16.57.8%201.07%201.4%201.07h11.98c.61%200%201.24-.49%201.4-1.07V9.3zm17.78-4a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a3%203%200%200%201%203.01-3h14.76a3%203%200%200%201%203.01%203zm-2-2.3a1%201%200%200%200-1.01-1H3.01A1%201%200%200%200%202%203v1.3h16.78zm-8.39%207.61a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm-4%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm8%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a:before {
  position: absolute;
  content: "";
  right: 0;
  transition: background-image 0.3s;
  top: 0;
  width: 21px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2221px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2021%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M19.78%208.3v13.1l-.02.2a3.54%203.54%200%200%201-3.38%202.75H4.4a3.56%203.56%200%200%201-3.38-2.75L1%2021.4V8.3a1%201%200%200%201%201-1h16.78a1%201%200%200%201%201%201zM3%209.3v11.98c.16.57.8%201.07%201.4%201.07h11.98c.61%200%201.24-.49%201.4-1.07V9.3zm17.78-4a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a3%203%200%200%201%203.01-3h14.76a3%203%200%200%201%203.01%203zm-2-2.3a1%201%200%200%200-1.01-1H3.01A1%201%200%200%200%202%203v1.3h16.78zm-8.39%207.61a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm-4%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm8%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart {
  float: right;
  padding: 7px 0 0 0px;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a {
  position: relative;
  font: 16px/17px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #212121;
  text-decoration: none;
  padding: 6px 40px 0 0;
  transition: all 0.3s;
  background: none;
  border: none;
  box-shadow: none;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a:hover {
  color: #eb4d17;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2221px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2021%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23EB4D17%22%20d%3D%22M19.78%208.3v13.1l-.02.2a3.54%203.54%200%200%201-3.38%202.75H4.4a3.56%203.56%200%200%201-3.38-2.75L1%2021.4V8.3a1%201%200%200%201%201-1h16.78a1%201%200%200%201%201%201zM3%209.3v11.98c.16.57.8%201.07%201.4%201.07h11.98c.61%200%201.24-.49%201.4-1.07V9.3zm17.78-4a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a3%203%200%200%201%203.01-3h14.76a3%203%200%200%201%203.01%203zm-2-2.3a1%201%200%200%200-1.01-1H3.01A1%201%200%200%200%202%203v1.3h16.78zm-8.39%207.61a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm-4%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm8%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_cart_wrapper .top_cart_buttons p.text-right.clear_cart a:before {
  position: absolute;
  content: "";
  right: 0;
  transition: background-image 0.3s;
  top: 0;
  width: 21px;
  height: 24px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2221px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2021%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M19.78%208.3v13.1l-.02.2a3.54%203.54%200%200%201-3.38%202.75H4.4a3.56%203.56%200%200%201-3.38-2.75L1%2021.4V8.3a1%201%200%200%201%201-1h16.78a1%201%200%200%201%201%201zM3%209.3v11.98c.16.57.8%201.07%201.4%201.07h11.98c.61%200%201.24-.49%201.4-1.07V9.3zm17.78-4a1%201%200%200%201-1%201H1a1%201%200%200%201-1-1V3a3%203%200%200%201%203.01-3h14.76a3%203%200%200%201%203.01%203zm-2-2.3a1%201%200%200%200-1.01-1H3.01A1%201%200%200%200%202%203v1.3h16.78zm-8.39%207.61a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm-4%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1zm8%200a1%201%200%200%201%201%201v7.8a1%201%200%200%201-1%201%201%201%200%200%201-1-1v-7.8a1%201%200%200%201%201-1z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
.shop2-btn.shop2-btn-back {
  text-transform: uppercase;
  color: #0c8ac9;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 0 11px;
  width: 151px;
  text-align: center;
  position: relative;
  background: #fff;
  display: block;
  box-shadow: inset 0 0 0 2px #0c8ac9;
  border-radius: 1px;
  transition: all 0.3s;
}

@media screen and (max-width: 599px) {
  .shop2-btn.shop2-btn-back {
    margin: 0 auto;
  }
}

.shop2-btn.shop2-btn-back:after {
  position: absolute;
  content: "";
  left: 14px;
  top: 50%;
  width: 6px;
  height: 10px;
  transform: rotate(-180deg);
  margin-top: -5px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.shop2-btn.shop2-btn-back:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: all 0.3s;
  visibility: hidden;
}

.shop2-btn.shop2-btn-back:hover {
  background: #0c8ac9;
  box-shadow: none;
}

.shop2-btn.shop2-btn-back:hover:after {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.shop2-btn.shop2-btn-back:hover span {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .shop2-btn.shop2-btn-back:hover {
    background: #fff;
    box-shadow: inset 0 0 0 2px #0c8ac9;
  }
  .shop2-btn.shop2-btn-back:hover:after {
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
      50% no-repeat;
  }
  .shop2-btn.shop2-btn-back:hover span {
    color: #0c8ac9;
  }
}

.shop2-btn.shop2-btn-back:active {
  background: #0c8ac9;
  box-shadow: none;
}

.shop2-btn.shop2-btn-back:active:before {
  opacity: 1;
  visibility: visible;
}

.shop2-btn.shop2-btn-back:active:after {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.shop2-btn.shop2-btn-back:active span {
  color: #fff;
}

.shop2-btn.shop2-btn-back span {
  color: #0c8ac9;
  position: relative;
}
.shop_cart_wrapper .shop_cart_prod {
  padding: 0 0 23px;
}
.shop_cart_wrapper .shop_cart_lots .shop_cart_product {
  font-size: 0;
  border-bottom: 1px solid #f5fafb;
  display: flex;
  box-sizing: border-box;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .shop_cart_product {
    display: block;
  }
}

.shop_cart_wrapper .shop_cart_lots .shop_cart_product:last-child {
  border: none;
}
.shop_cart_wrapper .shop_cart_title {
  font-size: 0;
  text-transform: uppercase;
  border-bottom: 1px solid #f5fafb;
  background: #fff;
  padding: 8px 0;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_title {
    display: none;
  }
}

.shop_cart_wrapper .shop_cart_title div {
  display: inline-block;
  vertical-align: top;
  color: #212121;
  font: 12px/20px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  box-sizing: border-box;
}

.shop_cart_wrapper .shop_cart_title .cart_prod_title {
  width: 45%;
  padding: 0 13px;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_title .cart_prod_title {
    padding: 0 12px;
    width: 50%;
  }
}

.shop_cart_wrapper .shop_cart_title .cart_prod_price {
  width: 16%;
  padding: 0 0 0 13px;
  text-align: right;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_title .cart_prod_price {
    width: 14%;
  }
}

.shop_cart_wrapper .shop_cart_title .cart_prod_amount {
  width: 18%;
  padding: 0 4px 0 13px;
  text-align: right;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_title .cart_prod_amount {
    width: 16%;
  }
}

.shop_cart_wrapper .shop_cart_title .cart_prod_total_title {
  width: 16%;
  padding: 0 0 0 13px;
  text-align: right;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_title .cart_prod_total_title {
    width: 15%;
    padding: 0 20px 0 13px;
  }
}

.shop_cart_wrapper .shop_cart_title .cart_prod_del {
  width: 5%;
}
.shop_cart_wrapper .shop_cart_lots {
  background: #fff;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots {
    margin: 0 -12px;
  }
}
.bot_cart_buttons .popup_cart_wr {
  float: right;
}

@media screen and (max-width: 599px) {
  .bot_cart_buttons .popup_cart_wr {
    float: none;
  }
}

.bot_cart_buttons .popup_cart_wr .popup_cart {
  font: 18px/1.2 "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  width: 320px;
  display: inline-block;
  vertical-align: top;
  background: #25c6ec;
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  padding: 16px 20px 12px;
  box-sizing: border-box;
  border-radius: 1px;
}

@media screen and (max-width: 599px) {
  .bot_cart_buttons .popup_cart_wr .popup_cart {
    width: 100%;
  }
}

.bot_cart_buttons .popup_cart_wr .popup_cart:before {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  content: "";
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
  background-color: rgba(0, 0, 0, 0.1);
}

.bot_cart_buttons .popup_cart_wr .popup_cart:hover:before {
  opacity: 1;
  visibility: visible;
}

.bot_cart_buttons .popup_cart_wr .popup_cart:active:before {
  opacity: 1;
  visibility: visible;
  background-color: rgba(255, 255, 255, 0.3);
}

.bot_cart_buttons .popup_cart_wr .popup_cart span {
  color: #fff;
  position: relative;
}
.shop2-warning:before {
  position: absolute;
  content: "";
  left: 58px;
  top: 50%;
  margin-top: -47px;
  height: 94px;
  width: 94px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2294px%22%20height%3D%2294px%22%20%20viewBox%3D%220%200%2094%2094%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%2325c6ec%22%20d%3D%22M47.000%2C92.000%20C71.853%2C92.000%2092.000%2C71.853%2092.000%2C47.000%20C92.000%2C22.147%2071.853%2C2.000%2047.000%2C2.000%20C22.147%2C2.000%202.000%2C22.147%202.000%2C47.000%20C2.000%2C71.853%2022.147%2C92.000%2047.000%2C92.000%20ZM47.000%2C94.000%20C21.043%2C94.000%20-0.000%2C72.957%20-0.000%2C47.000%20C-0.000%2C21.043%2021.043%2C-0.000%2047.000%2C-0.000%20C72.957%2C-0.000%2094.000%2C21.043%2094.000%2C47.000%20C94.000%2C72.957%2072.957%2C94.000%2047.000%2C94.000%20ZM47.000%2C77.000%20C50.314%2C77.000%2053.000%2C74.314%2053.000%2C71.000%20C53.000%2C67.686%2050.314%2C65.000%2047.000%2C65.000%20C43.686%2C65.000%2041.000%2C67.686%2041.000%2C71.000%20C41.000%2C74.314%2043.686%2C77.000%2047.000%2C77.000%20ZM41.132%2C28.068%20L43.863%2C56.019%20C44.023%2C57.661%2045.495%2C59.000%2047.150%2C59.000%20L46.850%2C59.000%20C48.497%2C59.000%2049.976%2C57.665%2050.137%2C56.019%20L52.868%2C28.068%20C53.195%2C24.721%2050.738%2C22.000%2047.378%2C22.000%20L46.622%2C22.000%20C43.264%2C22.000%2040.805%2C24.717%2041.132%2C28.068%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
</style>

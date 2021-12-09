<template>
  <p class="cart_back_button">
    <a
      @click.prevent="$router.back()"
      href="/back"
      class="shop2-btn shop2-btn-back"
      ><span>Назад</span></a
    >
  </p>
</template>
<style lang="scss" scoped>
a {
  text-decoration: none;
}
.shop_cart_wrapper .top_cart_buttons p.cart_back_button {
  float: left;
}

.shop_cart_wrapper .top_cart_buttons p.cart_back_button a {
  width: 160px;
}
.bot_cart_buttons p.cart_back_button {
  float: left;
  margin-top: 4px;
}

@media screen and (max-width: 599px) {
  .bot_cart_buttons p.cart_back_button {
    float: none;
    margin: 20px 0 0;
    order: 1;
  }
}

.bot_cart_buttons p.cart_back_button a {
  width: 160px;
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
</style>

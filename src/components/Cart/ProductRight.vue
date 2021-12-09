<template>
  <div class="cart_prod_right">
    <div class="cart-price">{{ item.cost }} <span>руб.</span></div>
    <div class="cart-amount">
      <div class="shop2-product-amount">
        <button
          type="button"
          class="shop2-btn amount-minus"
          disabled="disabled"
        >
          −
        </button>
        <input
          type="text"
          maxlength="4"
          value="1"
          data-min="1"
          data-multiplicity=""
        />
        <button type="button" class="shop2-btn amount-plus">+</button>
      </div>
    </div>
    <div class="cart-price2">14&nbsp;765 руб.</div>
    <div class="cart-delete">
      <a class="cart_del_icon" title="Удалить"
        ><img
          src="/g/shop2v2/default/images/delete-cart-product.png"
          height="15"
          width="15"
          alt=""
      /></a>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.shop_cart_wrapper .shop_cart_lots .cart_prod_right {
  font-size: 0;
  position: relative;
  text-align: right;
  padding: 12px 0;
  width: 55%;
  max-width: 55%;
  flex: 0 1 55%;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right {
    width: 50%;
    max-width: 50%;
    flex: 0 1 50%;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right {
    max-width: 100%;
    width: auto;
    padding: 12px;
    text-align: left;
  }
}

@media screen and (max-width: 599px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right {
    display: block;
  }
}
.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price {
  width: 29%;
  display: inline-block;
  vertical-align: top;
  color: #212121;
  font: 16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 599px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price {
    width: auto;
    display: block;
    margin: 0 0 10px;
  }
}
.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price span {
  font-size: 14px;
  line-height: 1;
}
.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount {
  width: 32%;
  display: inline-block;
  vertical-align: top;
  color: #212121;
  min-height: 0;
  font: 16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount {
    width: 30%;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount {
    text-align: center;
  }
}

@media screen and (max-width: 599px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount {
    width: 50%;
    text-align: left;
    vertical-align: middle;
  }
}
.shop2-product-amount {
  text-align: center;
  line-height: 0;
  font-size: 0;
  width: 86px;
  white-space: nowrap;
}
.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  .shop2-product-amount {
  width: 122px;
  display: inline-block;
  vertical-align: top;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_right
    .cart-amount
    .shop2-product-amount {
    width: auto;
  }
}
.shop2-btn {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  color: #333;
  background-color: #eee;
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;
  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  border-radius: 4px;
}

.shop2-btn:hover {
  background-color: #f6f6f6;
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.shop2-btn:active {
  background-color: #e6e6e6;
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}

.shop2-btn.disabled,
.shop2-btn.disabled:hover,
.shop2-btn.disabled:active,
.shop2-btn.notavailable,
.shop2-btn.notavailable:hover,
.shop2-btn.notavailable:active {
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  background: none #eee;
  color: #494949;
  cursor: default;
}
button.shop2-btn,
input[type="button"].shop2-btn,
input[type="submit"].shop2-btn {
  padding: 4px 8px;
}
.shop2-product-amount button {
  padding: 0;
  border: 0;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  width: 22px;
  height: 20px;
  line-height: 21px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  text-align: center;
  text-shadow: #fff 0 1px 0;
  overflow: hidden;
  background-color: #eee;
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;
  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  border-radius: 4px;
  color: #626262;
}

.shop2-product-amount button::-moz-selection {
  background: none;
  text-shadow: none;
}

.shop2-product-amount button::selection {
  background: none;
  text-shadow: none;
}

.shop2-product-amount button::-moz-focus-inner {
  padding: 0;
  border: 0;
}

.shop2-product-amount button:hover {
  background-color: #f6f6f6;
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.shop2-product-amount button:active {
  background-color: #e6e6e6;
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus {
  outline: none;
  width: 34px;
  height: 34px;
  font-size: 0;
  background: #fff;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}
.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus {
  position: relative;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus:hover {
  box-shadow: inset 0 0 0 2px #0c8ac9;
  background: #0c8ac9;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus:disabled {
  background: #fff;
  box-shadow: inset 0 0 0 2px #f5f5f6;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus:before {
  position: absolute;
  top: 15px;
  left: 8px;
  width: 14px;
  height: 8px;
  content: "";
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
  transform: rotate(90deg);
}
.shop2-product-amount input[type="text"] {
  vertical-align: middle;
  width: 28px;
  margin: 0 4px;
  font-family: inherit;
  font-size: 13px;
  text-align: center;
  padding: 0;
}
.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount input {
  box-sizing: border-box;
  margin: 0;
  width: 54px;
  height: 34px;
  color: #212121;
  background: #f5fafb;
  border: 1px solid #f5fafb;
  border-radius: 1px;
  font: 15px/19px "rr", Arial, Helvetica, sans-serif;
  text-align: center;
  outline: none;
  transition: all 0.3s;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount input {
    width: 40px;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount input {
    width: 54px;
  }
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount input:hover {
  background: #fff;
  border-color: #f5fafb;
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-amount input:focus {
  box-shadow: inset 0 0 0 1px #f5fafb;
  background: #fff;
  border-color: #f5fafb;
}
.shop2-btn {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  color: #333;
  background-color: #eee;
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;
  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  border-radius: 4px;
}

.shop2-btn:hover {
  background-color: #f6f6f6;
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.shop2-btn:active {
  background-color: #e6e6e6;
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}

.shop2-btn.disabled,
.shop2-btn.disabled:hover,
.shop2-btn.disabled:active,
.shop2-btn.notavailable,
.shop2-btn.notavailable:hover,
.shop2-btn.notavailable:active {
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  background: none #eee;
  color: #494949;
  cursor: default;
}
.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus,
.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-minus {
  outline: none;
  width: 34px;
  height: 34px;
  font-size: 0;
  background: #fff;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus {
  position: relative;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus:hover {
  box-shadow: inset 0 0 0 2px #0c8ac9;
  background: #0c8ac9;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus:disabled {
  background: #fff;
  box-shadow: inset 0 0 0 2px #f5f5f6;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-amount
  button.amount-plus:before {
  position: absolute;
  top: 11px;
  left: 12px;
  width: 14px;
  height: 8px;
  content: "";
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
  transform: rotate(-90deg);
}
.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price2 {
  width: 29.5%;
  display: inline-block;
  vertical-align: top;
  color: #212121;
  font: 24px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price2 {
    font-size: 20px;
    width: 31.5%;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price2 {
    text-align: center;
  }
}

@media screen and (max-width: 599px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price2 {
    width: 50%;
    text-align: left;
    vertical-align: middle;
    padding: 0 0 0 7px;
    box-sizing: border-box;
  }
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-price2 span {
  font-size: 14px;
  line-height: 1;
}
.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-delete {
  width: 8.5%;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 12px 0 0;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_right
  .cart-delete
  .cart_del_icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 33px;
  height: 33px;
  background: url("/assets/cart_del_icon.svg") 50% no-repeat;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_right
    .cart-delete
    .cart_del_icon {
    right: 12px;
    top: 12px;
  }
}

@media screen and (max-width: 599px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_right
    .cart-delete
    .cart_del_icon {
    top: auto;
    bottom: 12px;
  }
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_right .cart-delete img {
  display: none;
}
</style>

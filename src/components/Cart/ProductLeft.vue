<template>
  <div class="cart_prod_left">
    <div class="cart-product-image">
      <!--no-image-->
      <a href="/assets/alex_1140_500_ral_9016_sx_1.png" class="highslide">
        <img
          src="/assets/bone_760_500_ral_9016_sx_1.png"
          style="
            background: url(./assets/bone_760_500_ral_9016_sx_1.png) 50% 0 /
              cover no-repeat;
          "
          alt="Terma Bone 760/500 полотенцесушитель"
          title="Terma Bone 760/500 полотенцесушитель"
        />
      </a>
      <div class="verticalMiddle"></div>
    </div>
    <div class="cart-product-details">
      <div class="cart-product-name">
        <router-link
          :to="'/category/' + item.category + '/product/' + item.id"
          >{{ item.name }}</router-link
        >
      </div>
      <div class="hide_cart_details">Все параметры</div>
      <div class="cart_details_in">
        <div class="cart-product-article">
          <span>Артикул:</span> <ins>{{ item.article }}</ins>
        </div>

        <ul class="cart-product-param">
          <li>
            <div class="param-title">Цвет:</div>
            <div class="param-value">{{ item.color }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>
<style lang="scss" scoped>
.shop_cart_wrapper .shop_cart_lots .cart_prod_left {
  font-size: 14px;
  padding: 12px 0 12px 12px;
  width: 45%;
  max-width: 45%;
  flex: 0 0 45%;
  display: flex;
  box-sizing: border-box;
  position: relative;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_left {
    width: 50%;
    max-width: 50%;
    flex: 0 0 50%;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_left {
    max-width: 100%;
    width: auto;
    flex: 0 0 100%;
    padding: 12px;
  }
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image {
  width: 184px;
  height: 184px;
  margin: 0 25px 0 0;
  flex: 0 0 184px;
}

@media screen and (max-width: 1580px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image {
    width: 164px;
    height: 164px;
    flex: 0 0 164px;
    margin: 0 20px 0 0;
  }
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image {
    width: 142px;
    height: 142px;
    flex: 0 0 142px;
    margin: 0 15px 0 0;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-image.no-image {
  background: #f4f4f4 url("/assets/last_no_image.jpg") 50% 50% / cover no-repeat;
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image img {
  width: 184px;
  height: 184px;
}

@media screen and (max-width: 1580px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image img {
    width: 164px;
    height: 164px;
  }
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image img {
    width: 142px;
    height: 142px;
  }
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image a {
  display: block;
  font-size: 0;
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-image a img {
  border: none !important;
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-action.gift {
  position: absolute;
  left: 12px;
  top: 12px;
  z-index: 1;
  width: 28px;
  height: 28px;
  font-size: 0;
  background: url("/assets/gift_icon.svg") 50% no-repeat #f3dbe5;
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-action.action {
  display: flex;
  font-size: 0;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action {
    display: block;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action {
    padding: 0 0 8px;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-action.action
  strong {
  font-weight: normal;
  color: red;
  font: 12px/20px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  box-sizing: border-box;
  min-width: 84px;
  max-width: 120px;
  margin: 1px 20px 0 0;
}

@media screen and (max-width: 1580px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action
    strong {
    margin: 1px 15px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action
    strong {
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    margin: 1px 0 0 0;
    padding: 0 10px 0 0;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action
    strong {
    display: block;
    width: auto;
    padding: 0;
    margin: 0;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-action.action
  span {
  flex: 1 1 auto;
  color: red;
  font: 13px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action
    span {
    max-width: 100%;
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-action.action
    span {
    width: auto;
    display: block;
  }
}

.shop_cart_wrapper .shop_cart_lots .cart_prod_left .cart-product-details {
  flex: 1 1 auto;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-name {
  font: 15px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  margin: 0 0 12px;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-name {
    font-size: 14px;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-name
  a {
  color: #212121;
  text-decoration: none;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .hide_cart_details {
  display: inline-block;
  vertical-align: top;
  color: #0c8ac9;
  font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  position: relative;
  padding: 0 18px 0 0;
  cursor: pointer;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .hide_cart_details {
    font-size: 12px;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .hide_cart_details:before {
  position: absolute;
  content: "";
  right: 0;
  top: 50%;
  height: 6px;
  width: 10px;
  margin-top: -3px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
  transition: all 0.3s;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .hide_cart_details.opened:before {
  margin-top: -4px;
  transform: rotate(-180deg);
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart_details_in {
  display: none;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-article {
  display: flex;
  font-size: 0;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article {
    display: block;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article {
    padding: 0 0 8px;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-article
  span {
  color: #212121;
  font: 12px/20px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  min-width: 84px;
  max-width: 120px;
  margin: 1px 20px 0 0;
  box-sizing: border-box;
}

@media screen and (max-width: 1580px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article
    span {
    margin: 1px 15px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article
    span {
    margin: 1px 0 0 0;
    display: inline-block;
    vertical-align: top;
    width: 50%;
    max-width: 100%;
    padding: 0 10px 0 0;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article
    span {
    width: auto;
    margin: 0;
    padding: 0;
    display: block;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-article
  ins {
  flex: 1 1 auto;
  color: #212121;
  font: 13px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article
    ins {
    display: inline-block;
    vertical-align: top;
    width: 50%;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-article
    ins {
    display: block;
    width: auto;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param {
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  li {
  display: flex;
  margin: 0 0 5px;
  font-size: 0;
}

@media screen and (max-width: 1023px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    li {
    display: block;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    li {
    margin: 0 0 8px;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  li:last-child {
  margin: 0;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-title {
  color: #212121;
  font: 12px/20px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  min-width: 84px;
  max-width: 120px;
  margin: 1px 20px 0 0;
  box-sizing: border-box;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-title.pic {
  margin-top: 21px;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-title.color2,
.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-title.color1 {
  margin-top: 5px;
}

@media screen and (max-width: 1580px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    .param-title {
    margin: 5px 15px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    .param-title {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    max-width: 100%;
    margin: 1px 0 0 0;
    padding: 0 10px 0 0;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    .param-title {
    width: auto;
    display: block;
    padding: 0;
    margin: 0;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value {
  flex: 1 1 auto;
  color: #212121;
  font: 13px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    .param-value {
    display: inline-block;
    vertical-align: top;
    width: 50%;
    max-width: 100%;
  }
}

@media screen and (max-width: 499px) {
  .shop_cart_wrapper
    .shop_cart_lots
    .cart_prod_left
    .cart-product-details
    .cart-product-param
    .param-value {
    width: auto;
    display: block;
  }
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value
  .shop2-color-ext-list
  li {
  outline: none;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value.color1
  .active-color {
  width: 28px;
  height: 28px;
  border: none;
  margin: 0;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value.color1
  .active-color
  span {
  width: 28px;
  height: 28px;
  border-radius: 50%;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value.color2
  .shop2-color-ext-list
  .shop2-color-ext-selected {
  outline: none;
  width: 28px;
  height: 28px;
  border: none;
  border-radius: 50%;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value.pic
  a {
  display: block;
  font-size: 0;
  width: 60px;
  height: 60px;
}

.shop_cart_wrapper
  .shop_cart_lots
  .cart_prod_left
  .cart-product-details
  .cart-product-param
  .param-value.pic
  a
  img {
  border: none !important;
}
</style>

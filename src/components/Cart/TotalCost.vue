<template>
  <div class="shop2-cart-total">
    <div class="total_row">
      <div class="total_row_in">
        <div class="total_row_title">Сумма:</div>
        <div class="total_row_price">24&nbsp;867 <span>руб.</span></div>
      </div>
    </div>

    <div class="total_row">
      <div class="total_row_in">
        <div class="total_title">Итого:</div>
        <div class="total_row_price">24&nbsp;867 <span>руб.</span></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shop2-cart-total {
  margin: 0 0 30px;
}
.shop2-cart-total .total_row {
  display: block;
  text-align: right;
}
.shop2-cart-total .total_row:last-child .total_row_in {
  border: none;
}

.shop2-cart-total .total_row:last-child .total_row_in .total_row_price {
  font-size: 28px;
}

@media screen and (max-width: 1023px) {
  .shop2-cart-total .total_row:last-child .total_row_in .total_row_price {
    font-size: 24px;
  }
}

.shop2-cart-total .total_row:first-child .total_row_in {
  border-top: 1px solid #d8dde2;
}

.shop2-cart-total .total_row.coupon_row {
  margin-top: -1px;
}

.shop2-cart-total .total_row.coupon_row .total_row_in {
  position: relative;
  display: flex;
  align-items: center;
  background: #fff;
  border: none;
  padding: 18px 20px;
}

@media screen and (max-width: 1023px) {
  .shop2-cart-total .total_row.coupon_row .total_row_in {
    justify-content: space-between;
  }
}

@media screen and (max-width: 599px) {
  .shop2-cart-total .total_row.coupon_row .total_row_in {
    display: block;
    margin: -1px -12px 0;
    padding: 18px 12px;
  }
}

@media screen and (max-width: 599px) {
  .shop2-cart-total .total_row.coupon_row .total_row_in .total_row_title {
    width: 60%;
  }
}

@media screen and (max-width: 599px) {
  .shop2-cart-total .total_row.coupon_row .total_row_in .total_row_price {
    width: 40%;
  }
}
.shop2-cart-total .total_row .total_row_in {
  text-align: left;
  display: inline-block;
  vertical-align: top;
  padding: 21px 20px 22px 3px;
  border-bottom: 1px solid #d8dde2;
  min-width: 300px;
  font-size: 0;
  position: relative;
}

@media screen and (max-width: 1023px) {
  .shop2-cart-total .total_row .total_row_in {
    padding: 21px 20px 22px 0;
  }
}

@media screen and (max-width: 599px) {
  .shop2-cart-total .total_row .total_row_in {
    display: block;
    min-width: auto;
    padding: 21px 0 22px;
  }
}

.shop2-cart-total .total_row .total_row_in .total_row_title {
  color: #4a4a4a;
  font: 14px "noto_sans-r", Arial, Helvetica, sans-serif;
  width: 50%;
  display: inline-block;
  vertical-align: baseline;
}

.shop2-cart-total .total_row .total_row_in .total_title {
  color: #4a4a4a;
  font: 14px "noto_sans-r", Arial, Helvetica, sans-serif;
  width: 50%;
  display: inline-block;
  vertical-align: baseline;
}

.shop2-cart-total .total_row .total_row_in .total_row_price {
  color: #212121;
  font: 24px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  width: 50%;
  text-align: right;
  display: inline-block;
  vertical-align: baseline;
}

@media screen and (max-width: 1023px) {
  .shop2-cart-total .total_row .total_row_in .total_row_price {
    font-size: 22px;
  }
}

.shop2-cart-total .total_row .total_row_in .total_row_price span {
  font-size: 14px;
}

.bot_cart_buttons {
  padding: 0 0 20px;
}
</style>

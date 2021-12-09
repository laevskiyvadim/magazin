<template>
  <div class="product-r-side">
    <div class="have_prod">
      В наличии: <span>1<ins></ins></span>
    </div>

    <div class="tpl-rating-block">
      <div class="rating_title">Рейтинг:</div>
      <div class="tpl-stars">
        <div class="tpl-rating" style="width: 0%"></div>
      </div>
      <div class="rating_count">(0 голосов)</div>
    </div>

    <div class="clear"></div>
    <div class="new_flags" style="padding: 0 0 10px"></div>
    <div class="form-add">
      <div class="form_add_wr_in">
        <div class="product-price">
          <div class="price-current"><strong>15&nbsp;692</strong> руб.</div>

          <div class="price-old">
            <span>
              <strong>16&nbsp;579</strong>
              руб.
            </span>
          </div>
        </div>

        <div class="product-amount">
          <div class="amount-title">Количество:</div>
          <div class="shop2-product-amount">
            <button type="button" class="amount-minus" disabled="disabled">
              −</button
            ><input
              type="text"
              name="amount"
              maxlength="4"
              value="1"
              data-min="1"
              data-multiplicity="1"
            /><button type="button" class="amount-plus">+</button>
          </div>
        </div>
      </div>

      <div class="product_btn">
        <button class="shop_product_button type-3 buy" type="submit">
          <span>В корзину</span>
        </button>
        <div class="buy-one-click-wr">
          <a class="buy-one-click btn-variant2" href="#"
            ><span>Купить в 1 клик</span></a
          >
        </div>
      </div>
    </div>
    <br />

    <div class="product_anonce">
      {{ product.desc }}
    </div>

    <div class="product-details">
      <div class="hide_params">Все параметры</div>
      <ul class="product_options menu-default">
        <li class="even vendor_li">
          <div class="option_title">Производитель:</div>
          <div class="option_body">
            <a href="/magazin/vendor/terma-polsha">{{ product.producer }}</a>
          </div>
        </li>
        <li class="odd type-select">
          <div class="option_title">Цвет</div>
          <div class="option_body">
            <div
              class="jq-selectbox jqselect shop2-cf changed"
              style="display: inline-block; position: relative; z-index: 100"
            >
              <select
                name="cf_cvet_420"
                class="shop2-cf"
                style="
                  margin: 0px;
                  padding: 0px;
                  position: absolute;
                  left: 0px;
                  top: 0px;
                  width: 100%;
                  height: 100%;
                  opacity: 0;
                "
              >
                <option
                  value="313197461"
                  data-name="cvet_420"
                  data-value="313197461"
                  data-kinds="2752588261"
                >
                  Хром
                </option>
                <option
                  value="313197661"
                  data-name="cvet_420"
                  data-value="313197661"
                  data-kinds="2752588061"
                >
                  RAL
                </option>
                <option
                  value="313197861"
                  data-name="cvet_420"
                  data-value="313197861"
                  data-kinds="2752587861"
                  selected="selected"
                >
                  Белый
                </option>
              </select>
              <div class="jq-selectbox__select" style="position: relative">
                <div class="jq-selectbox__select-text">Белый</div>
                <div class="jq-selectbox__trigger">
                  <div class="jq-selectbox__trigger-arrow"></div>
                </div>
              </div>
              <div
                class="jq-selectbox__dropdown"
                style="position: absolute; display: none"
              >
                <ul
                  style="
                    position: relative;
                    list-style: none;
                    overflow: auto;
                    overflow-x: hidden;
                  "
                >
                  <li
                    data-name="cvet_420"
                    data-value="313197461"
                    data-kinds="2752588261"
                    style=""
                  >
                    Хром
                  </li>
                  <li
                    data-name="cvet_420"
                    data-value="313197661"
                    data-kinds="2752588061"
                    style=""
                  >
                    RAL
                  </li>
                  <li
                    data-name="cvet_420"
                    data-value="313197861"
                    data-kinds="2752587861"
                    class="selected sel"
                    style=""
                  >
                    Белый
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div class="shop2-clear-container"></div>
    </div>

    <div class="yashare mobile">
      <div
        class="pluso"
        data-background="transparent"
        data-options="medium,square,line,horizontal,nocounter,theme=04"
        data-services="vkontakte,odnoklassniki,facebook,twitter,google,moimir"
      >
        <div class="pluso-010010010101-04">
          <span class="pluso-wrap" style="background: transparent"
            ><a
              href="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
              title="ВКонтакте"
              class="pluso-vkontakte"
            ></a
            ><a
              href="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
              title="Одноклассники"
              class="pluso-odnoklassniki"
            ></a
            ><a
              href="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
              title="Facebook"
              class="pluso-facebook"
            ></a
            ><a
              href="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
              title="Twitter"
              class="pluso-twitter"
            ></a
            ><a
              href="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
              title="Google+"
              class="pluso-google"
            ></a
            ><a
              href="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
              title="Мой Мир@Mail.Ru"
              class="pluso-moimir"
            ></a
            ><a href="http://pluso.ru/" class="pluso-more"></a
          ></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { props: ["product"] };
</script>
<style lang="scss" scoped>
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
}
button,
select {
  text-transform: none;
}
button {
  overflow: visible;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
.product-shop2 .product-r-side {
  flex: 0 1 468px;
  position: relative;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-r-side {
    flex: 0 1 340px;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side {
    flex: 1 1 auto;
  }
}
.product-shop2 .have_prod {
  float: right;
  color: #212121;
  font: 12px "noto_sans-r", Arial, Helvetica, sans-serif;
  margin: 0 0 10px;
}

.product-shop2 .have_prod span {
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  font-size: 14px;
}

.product-shop2 .have_prod ins {
  font-size: 12px;
}
.product-shop2 .product-r-side .tpl-rating-block {
  font-size: 0;
  margin: 0 0 16px;
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side .tpl-rating-block {
    text-align: center;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .tpl-rating-block {
    text-align: left;
    margin: 0 0 8px;
  }
}
.product-shop2 .product-r-side .tpl-rating-block .rating_title {
  display: none;
}
.tpl-stars {
  width: 60px;
  height: 10px;
  background: url("/assets/stars-small.png") 0 0 repeat-x;
}
.tpl-stars {
  background: url("/assets/small_stars.svg") 0 0 repeat-x;
}
.product-shop2 .product-r-side .tpl-rating-block .tpl-stars {
  margin: 1px 10px 0 0;
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 0 repeat-x;
}
.product-shop2 .product-r-side .tpl-rating-block .rating_count {
  display: inline-block;
  vertical-align: middle;
  color: #0c8ac9;
  font: 14px "noto_sans-r", Arial, Helvetica, sans-serif;
}
.product-shop2 .product-r-side .form_add_wr_in {
  display: flex;
  align-items: center;
  padding: 0 0 28px;
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side .form_add_wr_in {
    display: block;
    padding: 0 0 20px;
  }
}
.product-shop2 .product-r-side .product-price {
  flex: 1 1 auto;
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side .product-price {
    text-align: center;
    padding: 0 0 20px;
  }
}
.product-shop2 .product-r-side .product-price .price-current {
  display: inline-block;
  vertical-align: baseline;
  color: #212121;
  font: 18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 0 10px 0 0;
}

.product-shop2 .product-r-side .product-price .price-current strong {
  font-weight: normal;
  font: 24px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}
.product-shop2 .product-r-side .product-price .price-old {
  display: inline-block;
  vertical-align: baseline;
}

.product-shop2 .product-r-side .product-price .price-old span {
  font-size: 0;
}

.product-shop2 .product-r-side .product-price .price-old strong {
  font: 18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  color: #9b9b9b;
  position: relative;
}

.product-shop2 .product-r-side .product-price .price-old strong:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #f481ab;
}

.product-shop2 .product-r-side .product-price .price-old.question {
  cursor: pointer;
  padding-right: 20px;
  background: url("/assets/question-price.png") 100% 2px no-repeat;
}
.product-shop2 .product-r-side .product-amount {
  flex: 0 1 122px;
  margin: 0 0 0 20px;
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side .product-amount {
    margin: 0;
    text-align: center;
  }
}
.product-shop2 .product-r-side .product-amount .amount-title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 4px;
  display: none;
}
.shop2-product-amount {
  text-align: center;
  line-height: 0;
  font-size: 0;
  width: 86px;
  white-space: nowrap;
}
.product-shop2 .product-r-side .product-amount .shop2-product-amount {
  width: 122px;
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side .product-amount .shop2-product-amount {
    margin: 0 auto;
  }
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
.product-shop2 .product-r-side .product-amount button.amount-plus,
.product-shop2 .product-r-side .product-amount button.amount-minus {
  outline: none;
  width: 34px;
  height: 34px;
  font-size: 0;
  transition: background 0.3s;
  background: #fff;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}

.product-shop2 .product-r-side .product-amount button.amount-plus:hover,
.product-shop2 .product-r-side .product-amount button.amount-minus:hover {
  background: #0c8ac9;
}

.product-shop2 .product-r-side .product-amount button.amount-plus {
  position: relative;
}

.product-shop2 .product-r-side .product-amount button.amount-plus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product-shop2 .product-r-side .product-amount button.amount-plus:disabled {
  background: #fff;
  box-shadow: inset 0 0 0 2px #f5f5f6;
}

.product-shop2
  .product-r-side
  .product-amount
  button.amount-plus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product-shop2 .product-r-side .product-amount button.amount-plus:before {
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
.shop2-product-amount input[type="text"] {
  vertical-align: middle;
  width: 28px;
  margin: 0 4px;
  font-family: inherit;
  font-size: 13px;
  text-align: center;
  padding: 0;
}
.product-shop2 .product-r-side .product-amount input {
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

.product-shop2 .product-r-side .product-amount input:hover {
  background: #fff;
  border-color: #f5fafb;
}

.product-shop2 .product-r-side .product-amount input:focus {
  box-shadow: inset 0 0 0 1px #f5fafb;
  background: #fff;
  border-color: #f5fafb;
}
.product-shop2 .product-r-side .product-amount button.amount-minus:disabled {
  background: #fff;
  box-shadow: inset 0 0 0 2px #f5f5f6;
}
.product-shop2 .product-r-side .product-amount button.amount-minus:before {
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
.product-shop2
  .product-r-side
  .product-amount
  button.amount-minus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
.product-shop2 .product-r-side .product_btn {
  display: flex;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-r-side .product_btn {
    display: block;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .product_btn {
    text-align: center;
  }
}
.shop_product_button {
  padding: 11px 20px 12px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
  text-align: center;
  outline: none;
  background: #fff;
  width: 100%;
  position: relative;
  border: none;
  text-transform: uppercase;
  border-radius: 1px;
  transition: all 0.3s;
}
.shop_product_button.buy,
.shop_product_button.onrequest {
  cursor: pointer;
}
.product-shop2 .product-r-side .product_btn .shop_product_button.type-3 {
  flex: 1 1 48%;
  margin: 0 4% 0 0;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-r-side .product_btn .shop_product_button.type-3 {
    margin: 0 0 20px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .product_btn .shop_product_button.type-3 {
    display: inline-block;
    vertical-align: top;
    width: auto;
    min-width: 186px;
  }
}

.product-shop2 .product-r-side .product_btn .shop_product_button.type-3 span {
  font-size: 16px;
}
.product-shop2 .product-r-side .product_btn .buy-one-click-wr {
  flex: 1 1 48%;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-r-side .product_btn .buy-one-click-wr {
    margin: 0 0 18px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .product_btn .buy-one-click-wr {
    text-align: center;
  }
}
.product-shop2 .product-r-side .product_btn .buy-one-click-wr .buy-one-click {
  color: #fff;
  background: #25c6ec;
  text-transform: uppercase;
  position: relative;
  font: 16px/1.1 "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 13px 20px 11px;
  border-radius: 1px;
  box-sizing: border-box;
  text-decoration: none;
  display: block;
  text-align: center;
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .product_btn .buy-one-click-wr .buy-one-click {
    display: inline-block;
    vertical-align: top;
    min-width: 186px;
  }
}

.product-shop2
  .product-r-side
  .product_btn
  .buy-one-click-wr
  .buy-one-click:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  background: rgba(0, 0, 0, 0.1);
}

@media screen and (max-width: 1023px) {
  .product-shop2
    .product-r-side
    .product_btn
    .buy-one-click-wr
    .buy-one-click:before {
    display: none;
  }
}

.product-shop2
  .product-r-side
  .product_btn
  .buy-one-click-wr
  .buy-one-click:hover:before {
  opacity: 1;
  visibility: visible;
}

.product-shop2
  .product-r-side
  .product_btn
  .buy-one-click-wr
  .buy-one-click:active:before {
  opacity: 1;
  visibility: visible;
  background: rgba(255, 255, 255, 0.3);
}

.product-shop2
  .product-r-side
  .product_btn
  .buy-one-click-wr
  .buy-one-click
  span {
  position: relative;
  color: #fff;
  display: block;
}
.shop_product_button span {
  position: relative;
  color: #0c8ac9;
  font: 18px/1 "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}
@media screen and (min-width: 1024px) {
  .shop_product_button:hover {
    background: #0c8ac9;
  }
  .shop_product_button:hover span {
    color: #fff;
  }
}

.shop_product_button:active {
  background: #0c8ac9;
}

.shop_product_button:active span {
  color: #fff;
}

.shop_product_button:active:before {
  transition: all 0.3s;
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.product-shop2 .product-r-side .product_anonce {
  color: #9b9b9b;
  font: 13px/21px "noto_sans-r", Arial, Helvetica, sans-serif;
  margin: 0 0 28px;
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-r-side .product_anonce {
    margin: 0 0 16px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .product_anonce {
    padding: 0 14px;
  }
}
.product-shop2 .product-r-side .product-details {
  padding-top: 20px;
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-r-side .product-details {
    padding: 0 14px;
  }
}
.product-shop2 .product-r-side .hide_params {
  display: none;
}
.menu-default,
.menu-default ul,
.menu-default li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.product-shop2 .product-r-side .product_options li {
  padding: 0 0 15px;
}

.product-shop2 .product-r-side .product_options li:last-child {
  padding-bottom: 0;
}
.product-shop2 .product-r-side .product-details .product_options li {
  font-size: 0;
}
.product-shop2 .product-r-side .product_options .option_title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 4px;
}
.product-shop2 .product-r-side .product-details .product_options .option_title {
  display: inline-block;
  vertical-align: top;
  width: 120px;
  margin: 3px 60px 0 0;
}

@media screen and (max-width: 1580px) {
  .product-shop2
    .product-r-side
    .product-details
    .product_options
    .option_title {
    margin: 3px 36px 0 0;
  }
}
.product-shop2 .product-r-side .product_options .option_body {
  color: #6e6e6e;
  font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
  position: relative;
}

.product-shop2 .product-r-side .product_options .option_body a {
  color: #0c8ac9;
  text-decoration: none;
}

.product-shop2 .product-r-side .product_options .option_body a:hover {
  text-decoration: underline;
}
.product-shop2 .product-r-side .product-details .product_options .option_body {
  display: inline-block;
  vertical-align: top;
  width: 246px;
  color: #212121;
}

@media screen and (max-width: 1580px) {
  .product-shop2
    .product-r-side
    .product-details
    .product_options
    .option_body {
    width: 184px;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2
    .product-r-side
    .product-details
    .product_options
    .option_body {
    width: 100%;
  }
}
.product-shop2 .product-r-side .product_options .option_body a {
  color: #0c8ac9;
  text-decoration: none;
}

.product-shop2 .product-r-side .product_options .option_body a:hover {
  text-decoration: underline;
}
.product-shop2 .product-r-side .product_options .jqselect {
  background: #f5fafb;
  color: #0c8ac9;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect::-webkit-input-placeholder {
  color: #0c8ac9;
}

.product-shop2 .product-r-side .product_options .jqselect:moz-placeholder {
  color: #0c8ac9;
}

.product-shop2 .product-r-side .product_options .jqselect::-moz-placeholder {
  color: #0c8ac9;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect:-ms-input-placeholder {
  color: #0c8ac9;
}

.product-shop2 .product-r-side .product_options .jqselect.opened:before {
  transform: rotate(-180deg);
}

.product-shop2 .product-r-side .product_options .jqselect:before {
  position: absolute;
  content: "";
  right: 18px;
  top: 50%;
  width: 10px;
  height: 6px;
  margin-top: -3px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M9.727%2C1.693%20C9.725%2C1.695%209.723%2C1.697%209.721%2C1.699%20L5.715%2C5.710%20C5.515%2C5.900%205.265%2C6.001%205.004%2C6.001%20L5.004%2C6.001%20C4.743%2C6.001%204.493%2C5.900%204.293%2C5.710%20L0.286%2C1.699%20C-0.106%2C1.309%20-0.109%2C0.674%200.281%2C0.281%20C0.283%2C0.279%200.285%2C0.277%200.286%2C0.275%20C0.676%2C-0.118%201.310%2C-0.121%201.703%2C0.269%20C1.705%2C0.271%201.707%2C0.273%201.709%2C0.275%20L5.004%2C3.584%20L8.299%2C0.275%20C8.689%2C-0.118%209.323%2C-0.121%209.716%2C0.269%20C9.718%2C0.271%209.720%2C0.273%209.721%2C0.275%20C10.114%2C0.665%2010.117%2C1.300%209.727%2C1.693%20Z%22%20%2F%3E%3C%2Fsvg%3E")
    50% / cover no-repeat;
}
.product-shop2
  .product-r-side
  .product_options
  .jqselect
  .jq-selectbox__select {
  padding: 6px 30px 8px 12px;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect
  .jq-selectbox__dropdown {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px #0c8ac9;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li {
  padding: 6px 15px;
  font-family: "noto_sans-r", Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li:hover {
  color: #fff;
  background: #0c8ac9;
}

.product-shop2
  .product-r-side
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li.sel {
  color: #fff;
  background: #0c8ac9;
}
</style>

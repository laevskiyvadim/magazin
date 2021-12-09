<template>
  <div class="product_bot_wr">
    <div class="product_bot_inner">
      <div class="simple_name">
        <div class="price_rating">
          <div class="tpl-stars">
            <div class="tpl-rating" style="width: 0%"></div>
          </div>
        </div>
        <div class="product-name">
          <router-link :to="'/cat' + item.CatLink + '/' + item.id">{{
            item.name
          }}</router-link>
        </div>
        <div class="vendor-name">
          <a href="/magazin/vendor/terma-polsha">{{ item.producer }}</a>
        </div>
      </div>
      <div class="product-anonce">
        {{ item.desc }}
      </div>
      <div class="options_wrapper">
        <div class="hide_params">Все параметры</div>
        <ul class="product_options menu-default">
          <li class="even vendor_li">
            <div class="option_title">Производитель:</div>
            <div class="option_body">
              <a href="/magazin/vendor/terma-polsha">{{ item.producer }}</a>
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
                  <option value="313197461">Хром</option>
                  <option value="313197661">RAL</option>
                  <option value="313197861" selected>Белый</option>
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
                    <li style="">Хром</li>
                    <li style="">RAL</li>
                    <li style="">Белый</li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="product_bot_wr_in">
      <div class="prod_bot_block">
        <div class="product-compare">
          <label>
            <input type="checkbox" value="2752587861" />
            К сравнению
          </label>
        </div>
      </div>
      <div class="product_bot">
        <div class="product_bot_in">
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
        <div class="product_buy_wrap">
          <button class="shop_product_button type-2 buy" type="submit">
            <span>В корзину</span>
          </button>

          <input
            type="hidden"
            value="Terma Alex 1140/500 полотенцесушитель"
            name="product_name"
          />
          <input
            type="hidden"
            value="http://teplovann.ru/magazin/product/terma-alex-1140-500-polotencesushitel"
            name="product_link"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default { props: ["item"] };
</script>
<style lang="scss" scoped>
button,
select {
  text-transform: none;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
input {
  line-height: normal;
}
button,
input,
optgroup,
select,
textarea {
  font: inherit;
  margin: 0;
}
.product_list_in {
  .simple_name {
    display: none;
  }
  .price_rating {
    display: none;
  }
  .hide_params {
    display: none;
  }
  .vendor_li {
    display: none !important;
  }
}
.product_list_in.product-list-thumbs {
  .product-name {
    color: #212121;
    font: 15px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
    text-transform: uppercase;
    padding: 0 0 8px;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .vendor-name {
    color: #6e6e6e;
    font: 12px/17px "noto_sans-r", Arial, Helvetica, sans-serif;
    text-transform: uppercase;
    padding: 0 0 8px;
    a {
      color: inherit;
      text-decoration: none;
    }
  }
  .vendor-name a:hover {
    color: #0c8ac9;
  }
  .product-anonce {
    color: #6e6e6e;
    font: 12px/14px "noto_sans-r", Arial, Helvetica, sans-serif;
    padding: 0;
    visibility: hidden;
    height: 0;
    transition: opacity 0.2s;
  }
  .tpl-stars {
    margin: 0 0 9px;
    width: 60px;
    height: 10px;
    background: url("/assets/small_stars.svg") 0 0 repeat-x;
    .tpl-rating {
      width: 0;
      height: 10px;
      background: url("/assets/small_stars.svg") 0 -15px repeat-x;
    }
  }
  .product_options {
    transition: opacity 0.2s;
    opacity: 0;
    visibility: hidden;
    height: 0;
    li {
      padding: 0 0 7px;
    }
    .option_title {
      color: #212121;
      font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      text-transform: uppercase;
      padding: 0;
      display: none;
      .option_body {
        color: #6e6e6e;
        font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
        position: relative;
        a {
          color: #0c8ac9;
          text-decoration: none;
        }
        a:hover {
          text-decoration: underline;
        }
        a.file {
          margin-left: 10px;
          display: inline-block;
          vertical-align: top;
          color: #0c8ac9;
          text-decoration: none;
          padding: 0 0 0 32px;
          background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2216px%22%20height%3D%2222px%22%20%20viewBox%3D%220%200%2016%2022%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M2%2020a2%202%200%200%201-2-2V2C0%20.9.9%200%202%200h7c.55%200%201.32.32%201.71.71l4.58%204.58c.39.4.71%201.17.71%201.72V18a2%202%200%200%201-2%202zM14%207h-3a2%202%200%200%201-2-2V2H2v16h12zm-1.99%209H4a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.01a1%201%200%200%201%200%202zm0-4H4a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.01a1%201%200%200%201%200%202z%22%2F%3E%3C%2Fsvg%3E")
            0 50% no-repeat;
        }
        a.file:hover {
          text-decoration: underline;
        }
      }
    }
    .jqselect.opened:before {
      transform: rotate(-180deg);
    }
    .jqselect::-webkit-input-placeholder {
      color: #0c8ac9;
    }
    .jqselect:moz-placeholder {
      color: #0c8ac9;
    }
    .jqselect::-moz-placeholder {
      color: #0c8ac9;
    }
    .jqselect:-ms-input-placeholder {
      color: #0c8ac9;
    }
    .jqselect:before {
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
    .jqselect {
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
      .jq-selectbox__select-text {
        width: auto !important;
      }
      .jq-selectbox__select {
        padding: 6px 30px 8px 12px;
      }
      .jq-selectbox__dropdown {
        width: 100%;
        background: #fff;
        box-sizing: border-box;
        box-shadow: inset 0 0 0 1px #0c8ac9;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          li {
            padding: 6px 15px;
            font-family: "noto_sans-r", Arial, Helvetica, sans-serif;
            font-size: 14px;
            line-height: 18px;
            color: #212121;
          }
          li:hover {
            color: #fff;
            background: #0c8ac9;
          }
          li.sel {
            color: #fff;
            background: #0c8ac9;
          }
        }
      }
    }
  }
  .product-compare {
    display: none;
  }
  .prod_bot_block .product-compare {
    display: block;
    opacity: 0;
    visibility: hidden;
    overflow: hidden;
    height: 0;
    width: 0;
  }
  .product_bot {
    .product_bot_in {
      display: flex;
      align-items: center;
      margin: 0 0 13px;
    }
    .product-price {
      flex: 1 1 auto;
      .price-current,
      .price-old {
        display: inline-block;
        vertical-align: middle;
      }
      .price-current {
        color: #212121;
        font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
        padding-right: 6px;
        strong {
          font-weight: normal;
          font-size: 18px;
        }
      }
      .price-old {
        font-size: 0;
        padding-top: 3px;
        padding: 3px 0 0 0;
        strong {
          position: relative;
          font-weight: normal;
          color: #9b9b9b;
          font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
            sans-serif;
        }
        strong:before {
          position: absolute;
          content: "";
          left: 0;
          right: 0;
          top: 50%;
          height: 1px;
          background: #f481ab;
        }
      }
      .price-old.question {
        padding: 3px 20px 0 0;
        background: url("/assets/question-price.png") 100% 50% no-repeat;
      }
    }
    .product-amount {
      flex: 0 1 39px;
      margin: 0 0 0 5px;
    }
  }
  .product-amount {
    transition: opacity 0.2s;
    opacity: 0;
    visibility: hidden;
    height: 0;
    width: 0;
    .amount-title {
      color: #212121;
      font: 12px/18px "rr", Arial, Helvetica, sans-serif;
      text-transform: uppercase;
      padding: 0 0 4px;
      display: none;
    }
    .shop2-product-amount {
      width: 39px;
    }
    button {
      display: none;
    }
  }
}
.product_list_in.product-list-thumbs .shop2_product_item:hover,
.product_list_in.product-list-thumbs .shop2_product_item.hover {
  .product_options,
  .product-article,
  .product-anonce,
  .shop2-product-actions,
  .product_buy_wrap,
  .product-amount {
    opacity: 1;
    visibility: visible;
    height: auto;
  }
  .prod_bot_block .product-compare {
    display: block;
    opacity: 1;
    visibility: visible;
    overflow: visible;
    height: auto;
    width: auto;
  }
}
.product-compare {
  padding: 0;
  margin: 0 0 14px;
  border: none;
  color: #0c8ac9;
  font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
  min-height: 28px;
  box-sizing: border-box;
  position: relative;
  label {
    display: block;
    position: relative;
    height: auto;
    padding: 2px 0 0 38px;
    cursor: pointer;
    input[type="checkbox"] {
      width: 0;
      height: 0;
      background: none;
      opacity: 0;
    }
  }
  label:before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 28px;
    height: 28px;
    background: #fff;
    border-radius: 1px;
    box-shadow: inset 0 0 0 2px #0c8ac9;
  }
  input {
    vertical-align: middle;
  }
}
.product_list_in.product-list-thumbs {
  .product-amount {
    .shop2-product-amount.disabled {
      input:hover,
      input:focus {
        background: #f5fafb;
        border-color: #f5fafb;
        box-shadow: none;
      }
    }
  }
  .product_buy_wrap {
    transition: opacity 0.2s;
    opacity: 0;
    visibility: hidden;
    height: 0;
  }
}
.shop2-product-amount {
  text-align: center;
  line-height: 0;
  font-size: 0;
  width: 86px;
  white-space: nowrap;
  button {
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
  button::-moz-selection {
    background: none;
    text-shadow: none;
  }
  button::selection {
    background: none;
    text-shadow: none;
  }
  button::-moz-focus-inner {
    padding: 0;
    border: 0;
  }
  button:hover {
    background-color: #f6f6f6;
    background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
    background-repeat: repeat-x;
  }
  button:active {
    background-color: #e6e6e6;
    background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
    background-repeat: repeat-x;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
  }
  input[type="text"] {
    vertical-align: middle;
    width: 28px;
    margin: 0 4px;
    font-family: inherit;
    font-size: 13px;
    text-align: center;
    padding: 0;
  }
  input {
    box-sizing: border-box;
    margin: 0;
    width: 39px;
    height: 34px;
    color: #212121;
    background: #f5fafb;
    border: 1px solid #f5fafb;
    border-radius: 1px;
    font: 15px/19px "noto_sans-r", Arial, Helvetica, sans-serif;
    text-align: center;
    outline: none;
    transition: all 0.3s;
  }
  input:hover {
    background: #fff;
    border-color: #f5fafb;
  }
  input:focus {
    box-shadow: inset 0 0 0 1px #f5fafb;
    background: #fff;
    border-color: #f5fafb;
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
  span {
    position: relative;
    color: #0c8ac9;
    font: 18px/1 "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  }
}
.shop_product_button.buy,
.shop_product_button.onrequest {
  cursor: pointer;
}
@media screen and (min-width: 1024px) {
  .shop_product_button:hover {
    background: #0c8ac9;
    span {
      color: #fff;
    }
  }
}
@media screen and (max-width: 1023px) {
  .product_list_in.product-list-thumbs .product-amount {
    display: none;
  }
}
@media screen and (max-width: 699px) {
  .product_list_in.product-list-thumbs .product_bot .product-price .price-old {
    padding-left: 0;
  }
}
@media screen and (max-width: 639px) {
  .product_list_in.product-list-thumbs .product_bot .product-price {
    text-align: center;
  }
}
.product_list_in.product-list-simple .product_bot_wr {
  width: auto;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  box-sizing: border-box;
  justify-content: space-between;
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_bot_wr {
    display: block;
    padding: 20px 32px 20px;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_bot_wr {
    padding: 0 14px 14px;
    flex-direction: column;
  }
}
.product_list_in.product-list-simple .product_bot_wr .product_bot_inner {
  flex: 1 1 330px;
  max-width: 330px;
  width: 330px;
  padding: 23px 30px 20px 0;
  box-sizing: border-box;
  box-shadow: inset -1px 0 0 #f5f5f5;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_bot_wr .product_bot_inner {
    flex: 1 1 231px;
    max-width: 231px;
    width: 231px;
    padding: 23px 24px 20px 0;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_bot_wr .product_bot_inner {
    flex: 1 1 auto;
    max-width: 100%;
    width: auto;
    padding: 0;
    box-shadow: none;
  }
}
.product_list_in.product-list-simple .simple_name {
  display: block;
}
.product_list_in.product-list-simple .product-name {
  color: #212121;
  font: 15px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 8px;
}

.product_list_in.product-list-simple .product-name a {
  color: inherit;
  text-decoration: none;
}
.product_list_in.product-list-simple .vendor-name {
  color: #6e6e6e;
  font: 12px/17px "noto_sans-r", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 8px;
}

.product_list_in.product-list-simple .vendor-name a {
  color: inherit;
  text-decoration: none;
}

.product_list_in.product-list-simple .vendor-name a:hover {
  color: #0c8ac9;
}
.product_list_in.product-list-simple .product-anonce {
  color: #6e6e6e;
  font: 12px/14px "noto_sans-r", Arial, Helvetica, sans-serif;
  padding: 0 0 16px;
}
.product_list_in.product-list-simple .product_options {
  display: block !important;
}
.product_list_in.product-list-simple .product_options li {
  padding: 0 0 12px;
}
.product_list_in.product-list-simple .product_options .option_title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0;
}
.product_list_in.product-list-simple .product_options .option_body {
  color: #6e6e6e;
  font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
  position: relative;
}

.product_list_in.product-list-simple .product_options .option_body a {
  color: #0c8ac9;
  text-decoration: none;
}

.product_list_in.product-list-simple .product_options .option_body a:hover {
  text-decoration: underline;
}

.product_list_in.product-list-simple .product_options .option_body a.file {
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
  color: #0c8ac9;
  text-decoration: none;
  padding: 0 0 0 32px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2216px%22%20height%3D%2222px%22%20%20viewBox%3D%220%200%2016%2022%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M2%2020a2%202%200%200%201-2-2V2C0%20.9.9%200%202%200h7c.55%200%201.32.32%201.71.71l4.58%204.58c.39.4.71%201.17.71%201.72V18a2%202%200%200%201-2%202zM14%207h-3a2%202%200%200%201-2-2V2H2v16h12zm-1.99%209H4a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.01a1%201%200%200%201%200%202zm0-4H4a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.01a1%201%200%200%201%200%202z%22%2F%3E%3C%2Fsvg%3E")
    0 50% no-repeat;
}

.product_list_in.product-list-simple
  .product_options
  .option_body
  a.file:hover {
  text-decoration: underline;
}
.product_list_in.product-list-simple .product_options .jqselect {
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

.product_list_in.product-list-simple
  .product_options
  .jqselect::-webkit-input-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-simple
  .product_options
  .jqselect:moz-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-simple
  .product_options
  .jqselect::-moz-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-simple
  .product_options
  .jqselect:-ms-input-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-simple .product_options .jqselect.opened:before {
  transform: rotate(-180deg);
}

.product_list_in.product-list-simple .product_options .jqselect:before {
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
.product_list_in.product-list-simple
  .product_options
  .jqselect
  .jq-selectbox__select {
  padding: 6px 30px 8px 12px;
}
.product_list_in.product-list-simple
  .product_options
  .jqselect
  .jq-selectbox__dropdown {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px #0c8ac9;
}
.product_list_in.product-list-simple
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.product_list_in.product-list-simple
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

.product_list_in.product-list-simple
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li:hover {
  color: #fff;
  background: #0c8ac9;
}

.product_list_in.product-list-simple
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li.sel {
  color: #fff;
  background: #0c8ac9;
}
.product_list_in.product-list-simple .product_bot_wr .product_bot_wr_in {
  flex: 1 1 341px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 341px;
  width: 341px;
  padding: 23px 24px 20px;
  box-sizing: border-box;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_bot_wr .product_bot_wr_in {
    flex: 1 1 268px;
    max-width: 268px;
    width: 268px;
    padding: 23px 24px 20px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_bot_wr .product_bot_wr_in {
    flex: 1 1 auto;
    max-width: 100%;
    width: auto;
    padding: 0;
  }
}
.product_list_in.product-list-simple
  .product_bot_wr
  .product_bot_wr_in
  .prod_bot_block {
  text-align: center;
}
.product_list_in.product-list-simple
  .product_bot_wr
  .product_bot_wr_in
  .prod_bot_block
  .product-compare {
  display: inline-block;
}
.product_list_in.product-list-simple .product_bot .product_bot_in {
  display: flex;
  align-items: center;
  margin: 0 0 13px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_bot .product_bot_in {
    flex-direction: column;
    margin: 0 0 23px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_bot .product_bot_in {
    flex-direction: row;
    margin: 0 0 20px;
  }
}

@media screen and (max-width: 767px) {
  .product_list_in.product-list-simple .product_bot .product_bot_in {
    flex-direction: column;
    margin: 0 0 20px;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_bot .product_bot_in {
    flex-direction: row;
    margin: 0 0 20px;
  }
}
.product_list_in.product-list-simple .product_bot .product-price {
  flex: 1 1 auto;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_bot .product-price {
    margin: 0 0 23px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_bot .product-price {
    margin: 0 20px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .product_list_in.product-list-simple .product_bot .product-price {
    margin: 0 0 10px;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_bot .product-price {
    margin: 0 20px 0 0;
  }
}

.product_list_in.product-list-simple .product_bot .product-price .price-current,
.product_list_in.product-list-simple .product_bot .product-price .price-old {
  display: inline-block;
  vertical-align: middle;
}

.product_list_in.product-list-simple
  .product_bot
  .product-price
  .price-current {
  color: #212121;
  font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

.product_list_in.product-list-simple
  .product_bot
  .product-price
  .price-current
  strong {
  font-weight: normal;
  font-size: 18px;
}

.product_list_in.product-list-simple .product_bot .product-price .price-old {
  font-size: 0;
  padding-top: 3px;
}

.product_list_in.product-list-simple
  .product_bot
  .product-price
  .price-old.question {
  padding: 3px 20px 0 6px;
  background: url("/assets/question-price.png") 100% 50% no-repeat;
}

.product_list_in.product-list-simple
  .product_bot
  .product-price
  .price-old
  strong {
  position: relative;
  font-weight: normal;
  color: #9b9b9b;
  font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

.product_list_in.product-list-simple
  .product_bot
  .product-price
  .price-old
  strong:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #f481ab;
}
.product_list_in.product-list-simple .product_bot .product-amount {
  flex: 0 1 auto;
  margin: 0 0 0 5px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_bot .product-amount {
    margin: 0;
  }
}
.product_list_in.product-list-simple .product-amount .amount-title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 4px;
  display: none;
}
.product_list_in.product-list-simple .product-amount .shop2-product-amount {
  width: 122px;
}
.product_list_in.product-list-simple .product-amount button.amount-plus,
.product_list_in.product-list-simple .product-amount button.amount-minus {
  outline: none;
  width: 34px;
  height: 34px;
  font-size: 0;
  background: #fff;
  transition: background-color 0.3s;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}
.product_list_in.product-list-simple .product-amount button.amount-minus {
  position: relative;
}

.product_list_in.product-list-simple .product-amount button.amount-minus:hover {
  background: #0c8ac9;
}

.product_list_in.product-list-simple
  .product-amount
  button.amount-minus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product_list_in.product-list-simple
  .product-amount
  button.amount-minus:disabled {
  box-shadow: inset 0 0 0 2px #f5f5f6;
  background: #fff;
}

.product_list_in.product-list-simple
  .product-amount
  button.amount-minus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product_list_in.product-list-simple
  .product-amount
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
.product_list_in.product-list-simple .product-amount input {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
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

.product_list_in.product-list-simple .product-amount input:hover {
  background: #fff;
  border-color: #f5fafb;
}

.product_list_in.product-list-simple .product-amount input:focus {
  box-shadow: inset 0 0 0 1px #f5fafb;
  background: #fff;
  border-color: #f5fafb;
}
.product_list_in.product-list-simple .product-amount button.amount-plus {
  position: relative;
}

.product_list_in.product-list-simple .product-amount button.amount-plus:hover {
  background: #0c8ac9;
}

.product_list_in.product-list-simple
  .product-amount
  button.amount-plus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product_list_in.product-list-simple
  .product-amount
  button.amount-plus:disabled {
  box-shadow: inset 0 0 0 2px #f5f5f6;
  background: #fff;
}

.product_list_in.product-list-simple
  .product-amount
  button.amount-plus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product_list_in.product-list-simple .product-amount button.amount-plus:before {
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
.product_list_in.product-list-simple
  .product-amount
  button.amount-minus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
.product_list_in.product-list-price .product_bot_wr {
  flex: 0 0 341px;
  box-sizing: border-box;
  padding: 33px 40px;
  width: 341px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_bot_wr {
    width: 240px;
    flex: 0 0 240px;
  }
}

@media screen and (max-width: 499px) {
  .product_list_in.product-list-price .product_bot_wr {
    width: auto;
    padding: 0 14px 20px;
    flex: 1 1 auto;
  }
}
.product_list_in .simple_name {
  display: none;
}
.product_list_in.product-list-price .price_rating {
  display: block;
}
.product_list_in.product-list-price .tpl-stars {
  margin: 0 0 9px;
  width: 60px;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 0 repeat-x;
}

.product_list_in.product-list-price .tpl-stars .tpl-rating {
  width: 0;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 -15px repeat-x;
}
.product_list_in.product-list-price .product-name {
  color: #212121;
  font: 15px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 8px;
}

.product_list_in.product-list-price .product-name a {
  color: inherit;
  text-decoration: none;
}
.product_list_in.product-list-price .vendor-name {
  color: #6e6e6e;
  font: 12px/17px "noto_sans-r", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 8px;
}

.product_list_in.product-list-price .vendor-name a {
  color: inherit;
  text-decoration: none;
}

.product_list_in.product-list-price .vendor-name a:hover {
  color: #0c8ac9;
}
.product_list_in.product-list-price .shop2_product_item .product-anonce {
  display: none;
}

.product_list_in.product-list-price .shop2_product_item .product-anonce.cloned {
  display: block;
}
.product_list_in.product-list-price .options_wrapper {
  display: none;
}

.product_list_in.product-list-price .options_wrapper.cloned {
  display: block;
}
.product_list_in.product-list-price .shop2_product_item .prod_bot_block {
  display: none;
}
.product_list_in.product-list-price .product-compare {
  display: none;
}
.product_list_in.product-list-price .product_bot .product_bot_in {
  display: flex;
  align-items: center;
  margin: 0 0 13px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_bot .product_bot_in {
    flex-direction: column;
    margin: 0 0 23px;
  }
}

@media screen and (max-width: 499px) {
  .product_list_in.product-list-price .product_bot .product_bot_in {
    flex-direction: row;
  }
}
.product_list_in.product-list-price .product_bot .product-price {
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -moz-box-flex: 1;
  -moz-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_bot .product-price {
    margin: 0 0 23px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-price .product_bot .product-price {
    text-align: center;
  }
}

@media screen and (max-width: 499px) {
  .product_list_in.product-list-price .product_bot .product-price {
    margin: 0 30px 0 0;
    text-align: left;
  }
}

.product_list_in.product-list-price .product_bot .product-price .price-current,
.product_list_in.product-list-price .product_bot .product-price .price-old {
  display: inline-block;
  vertical-align: middle;
}

.product_list_in.product-list-price .product_bot .product-price .price-current {
  color: #212121;
  font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

.product_list_in.product-list-price
  .product_bot
  .product-price
  .price-current
  strong {
  font-weight: normal;
  font-size: 18px;
}

.product_list_in.product-list-price .product_bot .product-price .price-old {
  font-size: 0;
  padding-top: 3px;
}

.product_list_in.product-list-price
  .product_bot
  .product-price
  .price-old.question {
  padding: 3px 20px 0 6px;
  background: url("/assets/question-price.png") 100% 50% no-repeat;
}

.product_list_in.product-list-price
  .product_bot
  .product-price
  .price-old
  strong {
  position: relative;
  font-weight: normal;
  color: #9b9b9b;
  font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

.product_list_in.product-list-price
  .product_bot
  .product-price
  .price-old
  strong:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #f481ab;
}
.product_list_in.product-list-price .product_bot .product-amount {
  flex: 0 1 auto;
  margin: 0 0 0 5px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_bot .product-amount {
    margin: 0;
  }
}
.product_list_in.product-list-price .product-amount .amount-title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 4px;
  display: none;
}
.product_list_in.product-list-price .product-amount .shop2-product-amount {
  width: 122px;
}

.product_list_in.product-list-price
  .product-amount
  .shop2-product-amount.disabled
  input:hover,
.product_list_in.product-list-price
  .product-amount
  .shop2-product-amount.disabled
  input:focus {
  background: #f5fafb;
  border-color: #f5fafb;
  box-shadow: none;
}

.product_list_in.product-list-price
  .product-amount
  .shop2-product-amount.disabled
  button {
  position: relative;
  outline: none;
  width: 34px;
  height: 34px;
  font-size: 0;
  background: #fff;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #f5f5f6;
}

.product_list_in.product-list-price
  .product-amount
  .shop2-product-amount.disabled
  button.disabled-1:before {
  position: absolute;
  top: 15px;
  left: 9px;
  width: 14px;
  height: 8px;
  content: "";
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
  transform: rotate(90deg);
}

.product_list_in.product-list-price
  .product-amount
  .shop2-product-amount.disabled
  button.disabled-2:before {
  position: absolute;
  top: 11px;
  left: 12px;
  width: 14px;
  height: 8px;
  content: "";
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
  transform: rotate(-90deg);
}
.product_list_in.product-list-price .product-amount button.amount-plus,
.product_list_in.product-list-price .product-amount button.amount-minus {
  outline: none;
  width: 34px;
  height: 34px;
  font-size: 0;
  background: #fff;
  transition: background-color 0.3s;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}
.product_list_in.product-list-price .product-amount button.amount-minus {
  position: relative;
}

.product_list_in.product-list-price .product-amount button.amount-minus:before {
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

.product_list_in.product-list-price .product-amount button.amount-minus:hover {
  background: #0c8ac9;
}

.product_list_in.product-list-price
  .product-amount
  button.amount-minus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product_list_in.product-list-price
  .product-amount
  button.amount-minus:disabled {
  background: #fff;
  box-shadow: inset 0 0 0 2px #f5f5f6;
}

.product_list_in.product-list-price
  .product-amount
  button.amount-minus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
.product_list_in.product-list-price .product-amount input {
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

.product_list_in.product-list-price .product-amount input:hover {
  background: #fff;
  border-color: #f5fafb;
}

.product_list_in.product-list-price .product-amount input:focus {
  box-shadow: inset 0 0 0 1px #f5fafb;
  background: #fff;
  border-color: #f5fafb;
}
.product_list_in.product-list-price .product-amount button.amount-plus {
  position: relative;
}

.product_list_in.product-list-price .product-amount button.amount-plus:before {
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

.product_list_in.product-list-price .product-amount button.amount-plus:hover {
  background: #0c8ac9;
}

.product_list_in.product-list-price
  .product-amount
  button.amount-plus:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.product_list_in.product-list-price
  .product-amount
  button.amount-plus:disabled {
  box-shadow: inset 0 0 0 2px #f5f5f6;
  background: #fff;
}

.product_list_in.product-list-price
  .product-amount
  button.amount-plus:disabled:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23F5F5F6%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
</style>

<template>
  <div class="product_top_wr">
    <div class="product_top_in">
      <div class="product-image">
        <div class="product_slider">
          <div class="product_sl_item">
            <router-link :to="'/cat' + item.CatLink + '/' + item.id">
              <img :src="firstImg" :alt="item.name" :title="item.name" />
            </router-link>
          </div>
          <div class="product_sl_item">
            <router-link tag="a" :to="'/cat' + item.CatLink + '/' + item.id">
              <img :src="secondImg" :alt="item.name" :title="item.name" />
            </router-link>
          </div>
        </div>
      </div>
      <div class="new_flags" style="padding: 0 0 10px"></div>
      <div class="price_rating">
        <div class="tpl-stars">
          <div class="tpl-rating" style="width: 0%"></div>
        </div>
      </div>
      <div class="product-name">
        <router-link tag="a" :to="'/cat' + item.CatLink + '/' + item.id">{{
          item.name
        }}</router-link>
      </div>
      <div class="vendor-name">
        <a href="/magazin/vendor/terma-polsha">{{ item.producer }}</a>
      </div>
      <div class="price_gift"></div>
    </div>
    <div class="product_wr_in">
      <div class="tpl-stars">
        <div class="tpl-rating" style="width: 0%"></div>
      </div>

      <div class="product-name">
        <router-link :to="'/cat' + item.CatLink + '/' + item.id">{{
          item.name
        }}</router-link>
      </div>
      <div class="vendor-name">
        <a href="/magazin/vendor/terma-polsha">{{ item.producer }}</a>
      </div>
      <div class="product-compare cloned">
        <label>
          <input type="checkbox" value="2752587861" />
          К сравнению
        </label>
      </div>
      <div class="product-anonce cloned">
        {{ item.desc }}
      </div>
      <div class="options_wrapper cloned">
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
                  style="position: absolute; left: 0px; top: 0px; display: none"
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["item"],
  computed: {
    firstImg: function () {
      return this.item.color[0]["Белый"].imgs[0];
    },
    secondImg: function () {
      return this.item.color[0]["Белый"].imgs[1];
    },
  },
  methods: {
    log: function () {
      console.log(this.firstImg);
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  text-decoration: underline;
  color: #0c8ac9;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.menu-default,
.menu-default ul,
.menu-default li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.tpl-stars {
  width: 60px;
  height: 10px;
  background: url("/assets/stars-small.png") 0 0 repeat-x;
}
.product_list_in {
  .price_rating {
    display: none;
  }
  .product-compare.cloned {
    display: none;
  }
  .product-anonce.cloned {
    display: none;
  }
  .options_wrapper.cloned {
    display: none;
  }
  .hide_params {
    display: none;
  }
  .vendor_li {
    display: none !important;
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
  input[type="checkbox"] {
    width: 0;
    height: 0;
    background: none;
    opacity: 0;
  }
}
.product_list_in.product-list-thumbs {
  .shop2_product_item {
    .product-image {
      margin: 0 0 9px;
      height: 184px !important;
      overflow: hidden;
      text-align: center;
      img {
        font-size: 12px;
        line-height: normal;
        vertical-align: middle;
        border: none;
        height: 184px !important;
        overflow: hidden;
      }
      a {
        display: block;
      }
      .product_sl_item {
        display: none;
      }
      .product_sl_item:first-child {
        display: block;
      }
    }
    .product-image:hover {
      .product_sl_item:first-child {
        display: none;
      }
      .product_sl_item:last-child {
        display: block;
      }
    }
    .product-image.no-image {
      background: #f4f4f4 url("/assets/last_no_image.jpg") 50% 50% / cover
        no-repeat;
    }
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
  .product_top_in {
    .product-name {
      display: none;
    }
    .vendor-name {
      display: none;
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
    a:hover {
      color: #0c8ac9;
    }
  }
  .product-compare {
    display: none;
  }
  .product-anonce {
    color: #6e6e6e;
    font: 12px/14px "noto_sans-r", Arial, Helvetica, sans-serif;
    padding: 0;
    visibility: hidden;
    height: 0;
    transition: opacity 0.2s;
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
    }
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
    .jq-selectbox__select-text {
      width: auto !important;
    }
    .jqselect.opened:before {
      transform: rotate(-180deg);
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
      .jq-selectbox__select {
        padding: 6px 30px 8px 12px;
      }
      .jq-selectbox__select-text {
        width: auto !important;
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
}
@media screen and (max-width: 400px) {
  .product_list_in.product-list-thumbs .shop2_product_item .product-image {
    height: 144px !important;
    img {
      height: 144px !important;
    }
  }
}
.product_list_in.product-list-simple .product_top_wr {
  display: flex;
  flex-direction: row;
  flex: 1 1 370px;
  max-width: 370px;
  width: 370px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_top_wr {
    flex: 1 1 307px;
    max-width: 307px;
    width: 307px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_top_wr {
    flex: 1 1 340px;
    max-width: 340px;
    width: 340px;
  }
}

@media screen and (max-width: 767px) {
  .product_list_in.product-list-simple .product_top_wr {
    flex: 1 1 280px;
    max-width: 280px;
    width: 280px;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_top_wr {
    display: block;
    max-width: 320px;
    width: auto;
  }
}
.product_list_in.product-list-simple .product_top_wr .product_top_in {
  padding: 8px 30px 8px 8px;
  width: 332px;
  flex: 0 1 332px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_top_wr .product_top_in {
    width: 275px;
    padding: 8px 24px 8px 8px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_top_wr .product_top_in {
    width: 300px;
    padding: 8px 32px 8px 8px;
  }
}

@media screen and (max-width: 767px) {
  .product_list_in.product-list-simple .product_top_wr .product_top_in {
    width: 252px;
    padding: 8px 20px 8px 8px;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_top_wr .product_top_in {
    padding: 8px;
    width: auto;
  }
}
.product_list_in.product-list-simple .product_top_wr .product-image {
  position: relative;
  width: 332px;
  height: 332px !important;
  overflow: hidden;
}

.product_list_in.product-list-simple .product_top_wr .product-image.no-image {
  background: #f4f4f4 url("/assets/last_no_image.jpg") 50% 50% / cover no-repeat;
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_top_wr .product-image.no-image {
    width: 304px;
    height: 304px !important;
  }
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_top_wr .product-image {
    width: 276px;
    height: 276px !important;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_top_wr .product-image {
    width: 300px;
    height: 300px !important;
  }
}

@media screen and (max-width: 767px) {
  .product_list_in.product-list-simple .product_top_wr .product-image {
    width: 252px;
    height: 252px !important;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_top_wr .product-image {
    width: auto;
    height: auto !important;
  }
}
.product_list_in.product-list-simple
  .product_top_wr
  .product-image
  .product_sl_item {
  display: none;
}

.product_list_in.product-list-simple
  .product_top_wr
  .product-image
  .product_sl_item:first-child {
  display: block;
}
.product_list_in.product-list-simple .product_top_wr .product-image a {
  display: block;
  font-size: 0;
}
.product_list_in.product-list-simple .product_top_wr .product-image img {
  height: 331px;
  width: 100%;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-simple .product_top_wr .product-image img {
    height: 276px !important;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-simple .product_top_wr .product-image img {
    height: 300px !important;
  }
}

@media screen and (max-width: 767px) {
  .product_list_in.product-list-simple .product_top_wr .product-image img {
    height: 252px !important;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .product_top_wr .product-image img {
    height: 208px !important;
  }
}
.product_list_in .price_rating {
  display: none;
}
.product_list_in.product-list-simple .tpl-stars {
  margin: 0 0 9px;
  width: 60px;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 0 repeat-x;
}

.product_list_in.product-list-simple .tpl-stars .tpl-rating {
  width: 0;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 -15px repeat-x;
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
.product_list_in.product-list-simple
  .product_top_wr
  .product_top_in
  .product-name,
.product_list_in.product-list-simple
  .product_top_wr
  .product_top_in
  .vendor-name {
  display: none;
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
.product_list_in .price_gift {
  display: none;
}
.product_list_in.product-list-simple .product_wr_in {
  display: none;
}
.product_list_in.product-list-simple .tpl-stars {
  margin: 0 0 9px;
  width: 60px;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 0 repeat-x;
}

.product_list_in.product-list-simple .tpl-stars .tpl-rating {
  width: 0;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 -15px repeat-x;
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
} /*price*/
.product_list_in.product-list-price .product_top_wr {
  display: flex;
  flex: 1 1 auto;
  box-shadow: inset -1px 0 0 #f5f5f5;
  box-sizing: border-box;
  padding: 27px 29px 25px 20px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_top_wr {
    padding: 27px 27px 25px 20px;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-price .product_top_wr {
    padding: 27px 58px 25px 20px;
    flex-direction: column;
  }
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-price .product_top_wr {
    padding: 27px 20px 10px;
  }
}
.product_list_in.product-list-price .product_top_wr .product_top_in {
  flex: 1 0 289px;
  width: 289px;
  max-width: 289px;
  margin: 0 20px 0 0;
  box-sizing: border-box;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_top_wr .product_top_in {
    flex: 1 0 206px;
    width: 206px;
    max-width: 206px;
    margin: 0 15px 0 0;
  }
}

@media screen and (max-width: 1023px) {
  .product_list_in.product-list-price .product_top_wr .product_top_in {
    flex: 1 1 auto;
    width: auto;
    max-width: 100%;
    margin: 0;
  }
}
.product_list_in.product-list-price .shop2_product_item .product-image {
  display: none;
  height: auto !important;
}
a img {
  border-color: #4a4a4a;
}
.product_list_in.product-list-price .price_rating {
  display: block;
}
.product_list_in.product-list-price
  .product_top_wr
  .product_top_in
  .price_rating
  .tpl-stars {
  display: block;
}
.product-shop2 .product-r-side .tpl-rating-block .tpl-stars {
  margin: 1px 10px 0 0;
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 0 repeat-x;
}

.product-shop2 .product-r-side .tpl-rating-block .tpl-stars .tpl-rating {
  width: 0;
  height: 10px;
  background: url("/assets/small_stars.svg") 0 -15px repeat-x;
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
.product_list_in.product-list-price .product_top_wr .price_gift {
  display: block;
  margin: 0 0 5px;
}
.product_list_in.product-list-price .product_top_wr .product_wr_in {
  padding: 8px 0 0 0;
  flex: 1 1 auto;
}

@media screen and (ma-width: 1023px) {
  .product_list_in.product-list-price .product_top_wr .product_wr_in {
    padding: 0;
  }
}
.product_list_in.product-list-price .product_top_wr .product_wr_in .tpl-stars {
  display: none;
}
.product_list_in.product-list-price
  .product_top_wr
  .product_wr_in
  .product-name,
.product_list_in.product-list-price
  .product_top_wr
  .product_wr_in
  .vendor-name {
  display: none;
}
.product_list_in.product-list-price .product-compare {
  display: none;
}
.product_list_in.product-list-price
  .product_top_wr
  .product_wr_in
  .product-compare {
  display: block;
}
.product_list_in.product-list-price .shop2_product_item .product-anonce.cloned {
  display: block;
}
.product_list_in.product-list-price .product-anonce {
  color: #6e6e6e;
  font: 12px/14px "noto_sans-r", Arial, Helvetica, sans-serif;
  padding: 0 0 16px;
}
.product_list_in.product-list-price .options_wrapper.cloned {
  display: block;
}
.product_list_in.product-list-price .shop2_product_item .hide_params {
  display: inline-block;
  vertical-align: top;
  color: #0c8ac9;
  font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  position: relative;
  padding: 0 18px 0 0;
  cursor: pointer;
}

.product_list_in.product-list-price .shop2_product_item .hide_params:before {
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

.product_list_in.product-list-price
  .shop2_product_item
  .hide_params.opened:before {
  margin-top: -4px;
  transform: rotate(-180deg);
}

.product_list_in.product-list-price .product_options li {
  padding: 0 0 15px;
  font-size: 0;
}

@media screen and (max-width: 699px) {
  .product_list_in.product-list-price .product_options li {
    padding: 0 0 10px;
  }
}
.product_list_in.product-list-price .product_options .option_title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 3px 16px 0 0;
  width: 120px;
  display: inline-block;
  vertical-align: middle;
}

@media screen and (max-width: 699px) {
  .product_list_in.product-list-price .product_options .option_title {
    display: block;
    width: auto;
    padding: 0 0 5px;
  }
}
.product_list_in.product-list-price .product_options .option_body {
  color: #6e6e6e;
  font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
  position: relative;
  display: inline-block;
  vertical-align: middle;
  width: 184px;
}

@media screen and (max-width: 1580px) {
  .product_list_in.product-list-price .product_options .option_body {
    width: 175px;
  }
}

@media screen and (max-width: 699px) {
  .product_list_in.product-list-price .product_options .option_body {
    display: block;
    width: auto;
  }
}

.product_list_in.product-list-price .product_options .option_body a {
  color: #0c8ac9;
  text-decoration: none;
}

.product_list_in.product-list-price .product_options .option_body a:hover {
  text-decoration: underline;
}

.product_list_in.product-list-price .product_options .option_body a.file {
  margin-left: 10px;
  display: inline-block;
  vertical-align: top;
  color: #0c8ac9;
  text-decoration: none;
  padding: 0 0 0 32px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2216px%22%20height%3D%2222px%22%20%20viewBox%3D%220%200%2016%2022%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M2%2020a2%202%200%200%201-2-2V2C0%20.9.9%200%202%200h7c.55%200%201.32.32%201.71.71l4.58%204.58c.39.4.71%201.17.71%201.72V18a2%202%200%200%201-2%202zM14%207h-3a2%202%200%200%201-2-2V2H2v16h12zm-1.99%209H4a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.01a1%201%200%200%201%200%202zm0-4H4a1%201%200%200%201-1-1%201%201%200%200%201%201-1h8.01a1%201%200%200%201%200%202z%22%2F%3E%3C%2Fsvg%3E")
    0 50% no-repeat;
}

.product_list_in.product-list-price .product_options .option_body a.file:hover {
  text-decoration: underline;
}
.product_list_in.product-list-price .product_options .jqselect {
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

.product_list_in.product-list-price
  .product_options
  .jqselect::-webkit-input-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-price .product_options .jqselect:moz-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-price
  .product_options
  .jqselect::-moz-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-price
  .product_options
  .jqselect:-ms-input-placeholder {
  color: #0c8ac9;
}

.product_list_in.product-list-price .product_options .jqselect.opened:before {
  transform: rotate(-180deg);
}

.product_list_in.product-list-price .product_options .jqselect:before {
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
.product_list_in.product-list-price
  .product_options
  .jqselect
  .jq-selectbox__select {
  padding: 6px 30px 8px 12px;
}
.product_list_in.product-list-price
  .product_options
  .jqselect
  .jq-selectbox__dropdown {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px #0c8ac9;
}

.product_list_in.product-list-price
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

.product_list_in.product-list-price
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

.product_list_in.product-list-price
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li:hover {
  color: #fff;
  background: #0c8ac9;
}

.product_list_in.product-list-price
  .product_options
  .jqselect
  .jq-selectbox__dropdown
  ul
  li.sel {
  color: #fff;
  background: #0c8ac9;
}

.product_list_in.product-list-price .shop2_product_item .prod_bot_block {
  display: none;
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
.product_list_in.product-list-price .product-anonce {
  color: #6e6e6e;
  font: 12px/14px "noto_sans-r", Arial, Helvetica, sans-serif;
  padding: 0 0 16px;
}
.product_list_in.product-list-price .product_options {
  display: none;
  padding-top: 6px;
}
</style>

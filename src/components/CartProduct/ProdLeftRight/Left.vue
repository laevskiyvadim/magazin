<template>
  <div class="product-l-side">
    <div class="prod_labels"></div>
    <div class="bx-wrapper" style="max-width: 100%">
      <div
        class="bx-viewport"
        style="width: 100%; overflow: hidden; position: relative; height: 432px"
      >
        <div
          class="cart_product_slider"
          style="width: auto; position: relative"
        >
          <div
            class="product-pic"
            style="
              float: none;
              list-style: none;
              position: absolute;
              width: 404px;
              z-index: 50;
              display: block;
            "
          >
            <a :href="`http://localhost:8080/magaz/public`" class="zoom_img">
              <img
                :style="'background: url()50% 0 / cover no-repeat;'"
                alt="Terma Alex 1140/500 полотенцесушитель"
                title="Terma Alex 1140/500 полотенцесушитель"
              />
            </a>
          </div>
          <div
            class="product-pic"
            style="
              float: none;
              list-style: none;
              position: absolute;
              width: 404px;
              z-index: 0;
              display: none;
            "
          >
            <a href="/d/alex_1140_500_ral_9016_sx_1.png" class="zoom_img">
              <img
                style="
                  background: url(/thumb/2/0FwdmOtGgBHkn722gN8Gog/r/d/alex_1140_500_ral_9016_sx_1.png)
                    50% 0 / cover no-repeat;
                "
                src="/t/v2502/images/empty_product_pic.png"
                title="Terma Alex 1140/500 полотенцесушитель"
                alt="Terma Alex 1140/500 полотенцесушитель"
              />
            </a>
          </div>
          <div
            class="product-pic"
            style="
              float: none;
              list-style: none;
              position: absolute;
              width: 404px;
              z-index: 0;
              display: none;
            "
          >
            <a href="/d/alex_1.png" class="zoom_img">
              <img
                style="
                  background: url(/thumb/2/Y3i2TP5TldpdkD_2FBOZ8g/r/d/alex_1.png)
                    50% 0 / cover no-repeat;
                "
                src="/t/v2502/images/empty_product_pic.png"
                title="Terma Alex 1140/500 полотенцесушитель"
                alt="Terma Alex 1140/500 полотенцесушитель"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="bx-controls"></div>
    </div>
    <div class="product-thumbnails">
      <ul class="product_slider_thumbnails menu-default owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            style="
              transform: translate3d(0px, 0px, 0px);
              transition: all 0s ease 0s;
              width: 415px;
            "
          >
            <div
              class="owl-item active"
              style="width: 127.333px; margin-right: 11px"
            >
              <li>
                <a data-slide-index="0" href="" class="active">
                  <img
                    alt="Terma Alex 1140/500 полотенцесушитель"
                    title="Terma Alex 1140/500 полотенцесушитель"
                  />
                </a>
              </li>
            </div>
            <div
              class="owl-item active"
              style="width: 127.333px; margin-right: 11px"
            >
              <li>
                <a data-slide-index="1" href="">
                  <img
                    title="Terma Alex 1140/500 полотенцесушитель"
                    alt="Terma Alex 1140/500 полотенцесушитель"
                  />
                </a>
              </li>
            </div>
            <div
              class="owl-item active"
              style="width: 127.333px; margin-right: 11px"
            >
              <li>
                <a data-slide-index="2" href="">
                  <img
                    title="Terma Alex 1140/500 полотенцесушитель"
                    alt="Terma Alex 1140/500 полотенцесушитель"
                  />
                </a>
              </li>
            </div>
          </div>
        </div>
        <div class="owl-nav disabled">
          <div class="owl-prev disabled">prev</div>
          <div class="owl-next disabled">next</div>
        </div>
        <div class="owl-dots disabled"></div>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["product"],
  computed: {
    imgs: function () {
      return this.item.color[0]["Белый"].imgs;
    },
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.product-shop2 .product-l-side {
  flex: 1 1 auto;
  margin: 0 52px 0 0;
  position: relative;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-l-side {
    margin: 0 42px 0 0;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-l-side {
    flex: 0 1 382px;
    width: 382px;
    min-width: 382px;
    margin: 0 30px 0 0;
  }
}

@media screen and (max-width: 767px) {
  .product-shop2 .product-l-side {
    flex: 0 1 288px;
    width: 288px;
    min-width: 288px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-l-side {
    margin: 0 0 7px;
    width: auto;
    flex: 1 1 auto;
  }
}
.product-shop2 .product-l-side .cart_product_slider {
  width: 488px;
  height: 488px;
  position: relative;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-l-side .cart_product_slider {
    width: 404px;
    height: 432px;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-l-side .cart_product_slider {
    width: 382px;
    height: 382px;
  }
}

@media screen and (max-width: 767px) {
  .product-shop2 .product-l-side .cart_product_slider {
    width: 288px;
    height: 288px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-l-side .cart_product_slider {
    height: auto;
    width: auto;
  }
}
.product-shop2 .product-l-side .product-pic {
  width: 488px;
  height: 488px;
  font-size: 0;
  background: #f4f4f4;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-l-side .product-pic {
    width: 404px;
    height: 432px;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-l-side .product-pic {
    width: 382px;
    height: 382px;
  }
}

@media screen and (max-width: 767px) {
  .product-shop2 .product-l-side .product-pic {
    width: 288px;
    height: 288px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-l-side .product-pic {
    width: 208px !important;
    height: 208px;
    margin: 0 auto;
  }
}
.product-shop2 .product-l-side .product-pic.no-image {
  background: #f4f4f4 url("/assets/last_no_image.jpg") 50% 50% / cover no-repeat;
}
.product-shop2 .product-l-side .product-pic a {
  text-decoration: none;
}
.product-shop2 .product-l-side .product-pic a img {
  border: none;
  margin: 0;
  width: 488px;
  height: 488px;
  opacity: 0.9;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-l-side .product-pic a img {
    width: 404px;
    height: 432px;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-l-side .product-pic a img {
    width: 382px;
    height: 382px;
  }
}

@media screen and (max-width: 767px) {
  .product-shop2 .product-l-side .product-pic a img {
    width: 288px;
    height: 288px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-l-side .product-pic a img {
    width: 208px;
    height: 208px;
    margin: 0 auto;
  }
}
.product-shop2 .product-l-side .product-thumbnails {
  width: 488px;
  margin: 12px 0 0 0;
}

@media screen and (max-width: 1580px) {
  .product-shop2 .product-l-side .product-thumbnails {
    width: 404px;
  }
}

@media screen and (max-width: 1023px) {
  .product-shop2 .product-l-side .product-thumbnails {
    width: 382px;
  }
}

@media screen and (max-width: 767px) {
  .product-shop2 .product-l-side .product-thumbnails {
    width: 288px;
  }
}

@media screen and (max-width: 599px) {
  .product-shop2 .product-l-side .product-thumbnails {
    display: none;
  }
}
.menu-default,
.menu-default ul,
.menu-default li {
  padding: 0;
  margin: 0;
  list-style: none;
}
.owl-loaded {
  position: relative;
}
.owl-stage-outer {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.owl-stage {
  position: relative;
}
.owl-item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-height: 1px;
  user-select: none;
}
.product-shop2 .product-l-side .product-thumbnails li {
  background-color: #f4f4f4;
}
a {
  text-decoration: underline;
  color: #0c8ac9;
}
.product-shop2 .product-l-side .product-thumbnails li a {
  font-size: 0;
  display: block;
}
a img {
  border-color: #4a4a4a;
}
.product-shop2 .product-l-side .product-thumbnails li a img {
  opacity: 0.9;
}
.owl-nav.disabled,
.owl-dots.disabled {
  display: none;
}
.owl-nav .owl-next.disabled,
.owl-nav .owl-prev.disabled {
  display: none;
}
.product-shop2 .product-l-side .product-thumbnails .owl-prev {
  position: absolute;
  left: -12px;
  top: 50%;
  margin-top: -20px;
  width: 24px;
  height: 40px;
  font-size: 0;
  z-index: 1;
}

.product-shop2 .product-l-side .product-thumbnails .owl-prev:hover:before {
  opacity: 1;
}

.product-shop2 .product-l-side .product-thumbnails .owl-prev:hover:after {
  opacity: 1;
}

.product-shop2 .product-l-side .product-thumbnails .owl-prev:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  opacity: 0.8;
  background: #0c8ac9;
  transition: opacity 0.3s;
}

.product-shop2 .product-l-side .product-thumbnails .owl-prev:after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  z-index: 2;
  opacity: 0.8;
  transform: rotate(90deg);
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  transition: opacity 0.3s;
}
.product-shop2 .product-l-side .product-thumbnails .owl-next {
  position: absolute;
  right: -12px;
  top: 50%;
  margin-top: -20px;
  width: 24px;
  height: 40px;
  font-size: 0;
  z-index: 1;
}

.product-shop2 .product-l-side .product-thumbnails .owl-next:hover:before {
  opacity: 1;
}

.product-shop2 .product-l-side .product-thumbnails .owl-next:hover:after {
  opacity: 1;
}

.product-shop2 .product-l-side .product-thumbnails .owl-next:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  opacity: 0.8;
  background: #0c8ac9;
  transition: opacity 0.3s;
}

.product-shop2 .product-l-side .product-thumbnails .owl-next:after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  z-index: 2;
  opacity: 0.8;
  transform: rotate(-90deg);
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  transition: opacity 0.3s;
}
.owl-nav.disabled,
.owl-dots.disabled {
  display: none;
}
.product-shop2 .yashare {
  padding: 32px 0 0 0;
}

@media screen and (max-width: 599px) {
  .product-shop2 .yashare {
    display: none;
  }
}

.product-shop2 .yashare.mobile {
  display: none;
}

@media screen and (max-width: 599px) {
  .product-shop2 .yashare.mobile {
    padding: 25px 14px 0;
    display: block;
  }
}

.product-shop2 .yashare .yashare_title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 0 0 6px 3px;
  text-transform: uppercase;
}
div.yashare span.b-share a.b-share__handle img,
div.yashare span.b-share a.b-share__handle span {
  background-image: url(https://yandex.st/share/static/b-share-icon.png);
}
.pluso {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0;
  border-radius: 22px;
  background: transparent;
  text-align: left;
  font-size: 0;
  line-height: 0;
  *display: inline;
  *zoom: 1;
}
.pluso-010010010101-04 .pluso-wrap {
  padding: 0 3px 3px 0px;
}

.pluso-010010010101-04 .pluso-wrap {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 5px 5px 0;
  border-radius: 6px;
  background: transparent;
  text-align: left;
  font-size: 0;
  line-height: 0;
  *display: inline;
  *zoom: 1;
}
.pluso-wrap {
  margin: 0px !important;
}
.pluso span {
  float: none;
}
.pluso-010010010101-04 .pluso-wrap {
  position: relative;
  z-index: 1;
  display: inline-block;
  padding: 0 5px 5px 0;
  border-radius: 6px;
  background: transparent;
  text-align: left;
  font-size: 0;
  line-height: 0;
  *display: inline;
  *zoom: 1;
}
.pluso-010010010101-04 .pluso-wrap {
  padding: 0 3px 3px 0px;
}
a {
  text-decoration: underline;
  color: #0c8ac9;
}
.pluso-010010010101-04 .pluso-wrap a {
  display: inline-block;
  vertical-align: inherit;
  margin: 3px 0 0 3px;
  padding: 0;
  width: 30px;
  height: 30px;
  background: url(http://share.pluso.ru/img/pluso-like/round/medium/04.png) 0 0
    transparent no-repeat;
}
.pluso-010010010101-04 .pluso-wrap a {
  background-image: url(http://share.pluso.ru/img/pluso-like/square/medium/04.png);
}
.pluso-010010010101-04 .pluso-wrap a.pluso-vkontakte {
  background-position: -124px 0;
}
.pluso-010010010101-04 .pluso-wrap a.pluso-odnoklassniki {
  background-position: -93px 0;
}
.pluso-010010010101-04 .pluso-wrap a.pluso-facebook {
  background-position: -0px 0;
}
.pluso-010010010101-04 .pluso-wrap a.pluso-twitter {
  background-position: -31px 0;
}
.pluso-010010010101-04 .pluso-wrap a.pluso-google {
  background-position: -186px 0;
}
.pluso-010010010101-04 .pluso-wrap a.pluso-moimir {
  background-position: -217px 0;
}
.pluso-010010010101-04 a.pluso-more {
  width: 30px;
  height: 30px;
  background: url(http://share.pluso.ru/img/plus.png) 0 -25px no-repeat !important;
  position: relative;
}
</style>

<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Доставка</h1>
    <div class="shop2-cookies-disabled shop2-warning hide"></div>

    <form
      action="/?mode=order&step=delivery"
      method="post"
      class="shop2-order-options shop2-delivery"
    >
      <div class="options-list">
        <PostRussia :active="PostRussia" @check="ChangeActive('PostRussia')" />
        <EMS :active="EMS" @check="ChangeActive('EMS')" />
        <Courier :active="Courier" @check="ChangeActive('Courier')" />
        <Samovivoz :active="Samovivoz" @check="ChangeActive('Samovivoz')" />
      </div>
      <div class="text-center">
        <router-link :to="'/orderDop'" class="shop2-btn bottom">
          <span>Оформить заказ</span>
        </router-link>
      </div>
    </form>
    <!-- Delivery -->
    <ButtonBack />
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
import PostRussia from "@/components/Delivery/PostRussia.vue";
import EMS from "@/components/Delivery/EMS.vue";
import Courier from "@/components/Delivery/Courier.vue";
import Samovivoz from "@/components/Delivery/Samovivoz.vue";
import ButtonBack from "@/components/App/ButtonBack.vue";
export default {
  name: "Order",
  data: () => ({
    PostRussia: true,
    EMS: false,
    Courier: false,
    Samovivoz: false,
  }),
  methods: {
    ChangeActive: function (active) {
      let a = ["PostRussia", "EMS", "Courier", "Samovivoz"];
      a.forEach((el) => {
        this[el] = false;
      });
      this[active] = true;
    },
  },
  components: {
    SitePath,
    PostRussia,
    EMS,
    Courier,
    Samovivoz,
    ButtonBack,
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

@media screen and (max-width: 1023px) {
  .shop2-warning:before {
    left: 20px;
    width: 64px;
    height: 64px;
    margin-top: -32px;
    background-size: 64px 64px;
  }
}

@media screen and (max-width: 599px) {
  .shop2-warning:before {
    left: 10px;
    width: 34px;
    height: 34px;
    margin-top: -17px;
    background-size: 34px 34px;
  }
}
.hide {
  display: none;
}
.shop2-order-options {
  margin: 20px 0;
  text-align: left;
  background: #fff;
}
.shop2-order-options .options-list {
  margin: 20px 0;
  font-size: 14px;
  text-align: left;
}
.shop2-order-options .options-list.padding {
  margin: 20px 0 0;
  padding-left: 50px;
}
.text-center {
  text-align: center !important;
  height: 50px;
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
  background-image: -moz-linear-gradient(top, #f8f8f8, #dfdfdf);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#f8f8f8),
    to(#dfdfdf)
  );
  background-image: -webkit-linear-gradient(top, #f8f8f8, #dfdfdf);
  background-image: -o-linear-gradient(top, #f8f8f8, #dfdfdf);
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;
  -webkit-box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  -moz-box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.shop2-btn:hover {
  background-color: #f6f6f6;
  background-image: -moz-linear-gradient(top, #fbfbfb, #efefef);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#fbfbfb),
    to(#efefef)
  );
  background-image: -webkit-linear-gradient(top, #fbfbfb, #efefef);
  background-image: -o-linear-gradient(top, #fbfbfb, #efefef);
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.shop2-btn:active {
  background-color: #e6e6e6;
  background-image: -moz-linear-gradient(top, #dedede, #f1f1f1);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#dedede),
    to(#f1f1f1)
  );
  background-image: -webkit-linear-gradient(top, #dedede, #f1f1f1);
  background-image: -o-linear-gradient(top, #dedede, #f1f1f1);
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}

.shop2-btn.disabled,
.shop2-btn.disabled:hover,
.shop2-btn.disabled:active,
.shop2-btn.notavailable,
.shop2-btn.notavailable:hover,
.shop2-btn.notavailable:active {
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  background: none #eee;
  color: #494949;
  cursor: default;
}
a.shop2-btn {
  padding: 4px 8px;
  text-decoration: none;
}
.shop2-order-options.shop2-delivery .shop2-btn {
  margin: 0 10px 0 0;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 20px 11px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  width: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: none;
  text-transform: uppercase;
  background: #0c8ac9;
  position: relative;
}

.shop2-order-options.shop2-delivery .shop2-btn.bottom {
  margin: 0 0 30px;
}

.shop2-order-options.shop2-delivery .shop2-btn:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.1);
}

.shop2-order-options.shop2-delivery .shop2-btn:hover:before {
  opacity: 1;
  visibility: visible;
}

.shop2-order-options.shop2-delivery .shop2-btn:active:before {
  opacity: 1;
  visibility: visible;
  background: rgba(255, 255, 255, 0.3);
}

.shop2-order-options.shop2-delivery .shop2-btn span {
  position: relative;
  color: #fff;
}
</style>

<template>
  <div class="shop_sorting_panel clear-self">
    <div class="sort_bl_wr sorting">
      <div class="sort_bl_in">
        <div class="sort_bl_title no_sort">
          <!--active-->
          <div>Не сортировать</div>
        </div>
        <div class="sort_body">
          <div><a href="#" class="sort-reset">Не сортировать</a></div>

          <div>
            <a href="#" class="sort-param sort-param-asc" data-name="price"
              >Цена по возрастанию</a
            >
          </div>
          <div>
            <a href="#" class="sort-param sort-param-desc" data-name="price"
              >Цена по убыванию</a
            >
          </div>

          <div>
            <a href="#" class="sort-param sort-param-asc" data-name="name"
              >По названию от А до Я</a
            >
          </div>
          <div>
            <a href="#" class="sort-param sort-param-desc" data-name="name"
              >По названию от Я до А</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="view-shop2">
      <div class="view_close"></div>
      <div class="view-shop-wrap">
        <a
          href="#"
          title="Витрина"
          data-value="thumbs"
          class="view_thumbs view-param thumbs"
          :class="{ 'active-view': thumbs }"
          @click="active('thumbs')"
        ></a>
        <a
          href="#"
          title="Список"
          data-value="simple"
          class="view_simple view-param simple"
          :class="{ 'active-view': simple }"
          @click="active('simple')"
        ></a>
        <a
          href="#"
          title="Прайс-лист"
          data-value="list"
          class="view_pricelist view-param pricelist"
          :class="{ 'active-view': price }"
          @click="active('price')"
        ></a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    thumbs: true,
    simple: false,
    price: false,
  }),
  methods: {
    active: function (item) {
      const list = ["thumbs", "simple", "price"];
      list.forEach((el) => (this[el] = false));
      this[item] = true;
      this.$emit(`${item}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.shop_sorting_panel {
  position: relative;
  padding: 12px 16px;
  min-height: 36px;
  background: #fff;
  border-radius: 1px;
  z-index: 3;
}

@media screen and (max-width: 639px) {
  .shop_sorting_panel {
    margin: 0 -12px;
  }
}
.shop_sorting_panel .sort_bl_wr {
  position: absolute;
  left: 1px;
  top: 1px;
}
.shop_sorting_panel .sort_bl_wr .sort_bl_in {
  position: relative;
}
.shop_sorting_panel .sort_bl_wr .sort_bl_title {
  width: 200px;
  box-sizing: border-box;
  padding: 20px 40px 20px 14px;
  background: #fff;
  color: #0c8ac9;
  font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  transition: background 0.3s;
  text-transform: uppercase;
  position: relative;
  cursor: pointer;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title:hover {
  background: #0c8ac9;
  color: #fff;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title:hover:before {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title.active {
  background: #09538e;
  color: #fff;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title.active:before {
  transform: rotate(-180deg);
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title.active:hover {
  background: #09538e;
  color: #fff;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title.active:hover:before {
  transform: rotate(-180deg);
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title:before {
  position: absolute;
  right: 14px;
  top: 25px;
  content: "";
  width: 14px;
  height: 8px;
  transition: transform 0.3s;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.shop_sorting_panel .sort_bl_wr .sort_bl_title a {
  color: inherit;
  text-decoration: none;
}
.shop_sorting_panel .sort_bl_wr .sort_body {
  position: absolute;
  left: 0;
  top: 100%;
  width: 200px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  display: none;
}

.shop_sorting_panel .sort_bl_wr .sort_body a {
  display: block;
  color: #212121;
  text-decoration: none;
  text-transform: uppercase;
  font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  transition: all 0.3s;
  padding: 14px 0 12px 11px;
}

.shop_sorting_panel .sort_bl_wr .sort_body a:hover,
.shop_sorting_panel .sort_bl_wr .sort_body a.active {
  color: #fff;
  background: #0c8ac9;
}
.shop_sorting_panel .view-shop2 {
  float: right;
  width: 132px;
  text-align: right;
  font-size: 0;
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 {
    width: 36px;
  }
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view-shop-wrap {
    width: 36px;
    height: 36px;
    overflow: hidden;
    position: absolute;
    right: 12px;
    top: 12px;
    display: flex;
    flex-direction: row;
  }
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view-shop-wrap.opened {
    height: auto;
    width: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    align-items: center;
    justify-content: center;
  }
  .shop_sorting_panel .view-shop2 .view-shop-wrap.opened a {
    pointer-events: auto;
    display: block;
    margin: 0 6px;
    order: inherit !important;
  }
  .shop_sorting_panel .view-shop2 .view-shop-wrap.opened .view_close {
    display: block;
  }
}

.shop_sorting_panel .view-shop2 .view_close {
  display: none;
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view_close {
    position: absolute;
    right: 12px;
    top: 50%;
    margin-top: -20px;
    width: 40px;
    height: 40px;
    z-index: 2;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
      50% no-repeat;
  }
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view_close.active {
    display: block;
  }
}

.shop_sorting_panel .view-shop2 a {
  text-decoration: none;
  display: inline-block;
  vertical-align: top;
  width: 36px;
  height: 36px;
  transition: background 0.3s;
  margin: 0 12px 0 0;
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 a {
    margin: 0 12px 0 0;
    display: none;
    pointer-events: none;
  }
}

.shop_sorting_panel .view-shop2 a:hover {
  box-shadow: inset 0 0 0 2px #0c8ac9;
}

.shop_sorting_panel .view-shop2 a:last-child {
  margin-right: 0;
}

.shop_sorting_panel .view-shop2 .view_simple {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M16.000%2C17.998%20L2.000%2C17.998%20C0.895%2C17.998%20-0.000%2C17.101%20-0.000%2C15.995%20L-0.000%2C12.020%20C-0.000%2C10.914%200.895%2C10.017%202.000%2C10.017%20L16.000%2C10.017%20C17.105%2C10.017%2018.000%2C10.914%2018.000%2C12.020%20L18.000%2C15.995%20C18.000%2C17.101%2017.105%2C17.998%2016.000%2C17.998%20ZM16.016%2C12.004%20L1.984%2C12.004%20L1.984%2C16.026%20L16.016%2C16.026%20L16.016%2C12.004%20ZM16.000%2C7.982%20L2.000%2C7.982%20C0.895%2C7.982%20-0.000%2C7.085%20-0.000%2C5.979%20L-0.000%2C2.004%20C-0.000%2C0.898%200.895%2C0.001%202.000%2C0.001%20L16.000%2C0.001%20C17.105%2C0.001%2018.000%2C0.898%2018.000%2C2.004%20L18.000%2C5.979%20C18.000%2C7.085%2017.105%2C7.982%2016.000%2C7.982%20ZM16.016%2C1.989%20L1.984%2C1.989%20L1.984%2C6.010%20L16.016%2C6.010%20L16.016%2C1.989%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.shop_sorting_panel .view-shop2 .view_simple.active-view {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%2309538e%22%20d%3D%22M16.000%2C17.998%20L2.000%2C17.998%20C0.895%2C17.998%20-0.000%2C17.101%20-0.000%2C15.995%20L-0.000%2C12.020%20C-0.000%2C10.914%200.895%2C10.017%202.000%2C10.017%20L16.000%2C10.017%20C17.105%2C10.017%2018.000%2C10.914%2018.000%2C12.020%20L18.000%2C15.995%20C18.000%2C17.101%2017.105%2C17.998%2016.000%2C17.998%20ZM16.016%2C12.004%20L1.984%2C12.004%20L1.984%2C16.026%20L16.016%2C16.026%20L16.016%2C12.004%20ZM16.000%2C7.982%20L2.000%2C7.982%20C0.895%2C7.982%20-0.000%2C7.085%20-0.000%2C5.979%20L-0.000%2C2.004%20C-0.000%2C0.898%200.895%2C0.001%202.000%2C0.001%20L16.000%2C0.001%20C17.105%2C0.001%2018.000%2C0.898%2018.000%2C2.004%20L18.000%2C5.979%20C18.000%2C7.085%2017.105%2C7.982%2016.000%2C7.982%20ZM16.016%2C1.989%20L1.984%2C1.989%20L1.984%2C6.010%20L16.016%2C6.010%20L16.016%2C1.989%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view_simple.active-view {
    display: block;
    order: -1;
    margin: 0;
  }
}

.shop_sorting_panel .view-shop2 .view_simple.active-view:hover {
  box-shadow: none;
}

.shop_sorting_panel .view-shop2 .view_thumbs {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M16.000%2C18.000%20L11.922%2C18.000%20C10.817%2C18.000%209.922%2C17.105%209.922%2C16.000%20L9.922%2C12.000%20C9.922%2C10.895%2010.817%2C10.000%2011.922%2C10.000%20L16.000%2C10.000%20C17.105%2C10.000%2018.000%2C10.895%2018.000%2C12.000%20L18.000%2C16.000%20C18.000%2C17.105%2017.105%2C18.000%2016.000%2C18.000%20ZM15.891%2C12.000%20L11.922%2C12.000%20L11.922%2C15.984%20L15.891%2C15.984%20L15.891%2C12.000%20ZM16.000%2C8.000%20L11.922%2C8.000%20C10.817%2C8.000%209.922%2C7.105%209.922%2C6.000%20L9.922%2C2.000%20C9.922%2C0.895%2010.817%2C-0.000%2011.922%2C-0.000%20L16.000%2C-0.000%20C17.105%2C-0.000%2018.000%2C0.895%2018.000%2C2.000%20L18.000%2C6.000%20C18.000%2C7.105%2017.105%2C8.000%2016.000%2C8.000%20ZM15.891%2C2.000%20L11.922%2C2.000%20L11.922%2C5.984%20L15.891%2C5.984%20L15.891%2C2.000%20ZM6.078%2C18.000%20L2.000%2C18.000%20C0.895%2C18.000%20-0.000%2C17.105%20-0.000%2C16.000%20L-0.000%2C12.000%20C-0.000%2C10.895%200.895%2C10.000%202.000%2C10.000%20L6.078%2C10.000%20C7.183%2C10.000%208.078%2C10.895%208.078%2C12.000%20L8.078%2C16.000%20C8.078%2C17.105%207.183%2C18.000%206.078%2C18.000%20ZM5.969%2C12.000%20L2.000%2C12.000%20L2.000%2C15.984%20L5.969%2C15.984%20L5.969%2C12.000%20ZM6.078%2C8.000%20L2.000%2C8.000%20C0.895%2C8.000%20-0.000%2C7.105%20-0.000%2C6.000%20L-0.000%2C2.000%20C-0.000%2C0.895%200.895%2C-0.000%202.000%2C-0.000%20L6.078%2C-0.000%20C7.183%2C-0.000%208.078%2C0.895%208.078%2C2.000%20L8.078%2C6.000%20C8.078%2C7.105%207.183%2C8.000%206.078%2C8.000%20ZM5.969%2C2.000%20L2.000%2C2.000%20L2.000%2C5.984%20L5.969%2C5.984%20L5.969%2C2.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.shop_sorting_panel .view-shop2 .view_thumbs.active-view {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%2309538e%22%20d%3D%22M16.000%2C18.000%20L11.922%2C18.000%20C10.817%2C18.000%209.922%2C17.105%209.922%2C16.000%20L9.922%2C12.000%20C9.922%2C10.895%2010.817%2C10.000%2011.922%2C10.000%20L16.000%2C10.000%20C17.105%2C10.000%2018.000%2C10.895%2018.000%2C12.000%20L18.000%2C16.000%20C18.000%2C17.105%2017.105%2C18.000%2016.000%2C18.000%20ZM15.891%2C12.000%20L11.922%2C12.000%20L11.922%2C15.984%20L15.891%2C15.984%20L15.891%2C12.000%20ZM16.000%2C8.000%20L11.922%2C8.000%20C10.817%2C8.000%209.922%2C7.105%209.922%2C6.000%20L9.922%2C2.000%20C9.922%2C0.895%2010.817%2C-0.000%2011.922%2C-0.000%20L16.000%2C-0.000%20C17.105%2C-0.000%2018.000%2C0.895%2018.000%2C2.000%20L18.000%2C6.000%20C18.000%2C7.105%2017.105%2C8.000%2016.000%2C8.000%20ZM15.891%2C2.000%20L11.922%2C2.000%20L11.922%2C5.984%20L15.891%2C5.984%20L15.891%2C2.000%20ZM6.078%2C18.000%20L2.000%2C18.000%20C0.895%2C18.000%20-0.000%2C17.105%20-0.000%2C16.000%20L-0.000%2C12.000%20C-0.000%2C10.895%200.895%2C10.000%202.000%2C10.000%20L6.078%2C10.000%20C7.183%2C10.000%208.078%2C10.895%208.078%2C12.000%20L8.078%2C16.000%20C8.078%2C17.105%207.183%2C18.000%206.078%2C18.000%20ZM5.969%2C12.000%20L2.000%2C12.000%20L2.000%2C15.984%20L5.969%2C15.984%20L5.969%2C12.000%20ZM6.078%2C8.000%20L2.000%2C8.000%20C0.895%2C8.000%20-0.000%2C7.105%20-0.000%2C6.000%20L-0.000%2C2.000%20C-0.000%2C0.895%200.895%2C-0.000%202.000%2C-0.000%20L6.078%2C-0.000%20C7.183%2C-0.000%208.078%2C0.895%208.078%2C2.000%20L8.078%2C6.000%20C8.078%2C7.105%207.183%2C8.000%206.078%2C8.000%20ZM5.969%2C2.000%20L2.000%2C2.000%20L2.000%2C5.984%20L5.969%2C5.984%20L5.969%2C2.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view_thumbs.active-view {
    display: block;
    order: -1;
    margin: 0;
  }
}

.shop_sorting_panel .view-shop2 .view_thumbs.active-view:hover {
  box-shadow: none;
}

.shop_sorting_panel .view-shop2 .view_pricelist {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M1.500%2C-0.000%20L16.500%2C-0.000%20C17.328%2C-0.000%2018.000%2C0.672%2018.000%2C1.500%20C18.000%2C2.328%2017.328%2C3.000%2016.500%2C3.000%20L1.500%2C3.000%20C0.672%2C3.000%20-0.000%2C2.328%20-0.000%2C1.500%20C-0.000%2C0.672%200.672%2C-0.000%201.500%2C-0.000%20ZM1.500%2C5.000%20L16.500%2C5.000%20C17.328%2C5.000%2018.000%2C5.672%2018.000%2C6.500%20C18.000%2C7.328%2017.328%2C8.000%2016.500%2C8.000%20L1.500%2C8.000%20C0.672%2C8.000%20-0.000%2C7.328%20-0.000%2C6.500%20C-0.000%2C5.672%200.672%2C5.000%201.500%2C5.000%20ZM1.500%2C10.000%20L16.500%2C10.000%20C17.328%2C10.000%2018.000%2C10.672%2018.000%2C11.500%20C18.000%2C12.328%2017.328%2C13.000%2016.500%2C13.000%20L1.500%2C13.000%20C0.672%2C13.000%20-0.000%2C12.328%20-0.000%2C11.500%20C-0.000%2C10.672%200.672%2C10.000%201.500%2C10.000%20ZM1.500%2C15.000%20L16.500%2C15.000%20C17.328%2C15.000%2018.000%2C15.672%2018.000%2C16.500%20C18.000%2C17.328%2017.328%2C18.000%2016.500%2C18.000%20L1.500%2C18.000%20C0.672%2C18.000%20-0.000%2C17.328%20-0.000%2C16.500%20C-0.000%2C15.672%200.672%2C15.000%201.500%2C15.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.shop_sorting_panel .view-shop2 .view_pricelist.active-view {
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%2309538e%22%20d%3D%22M1.500%2C-0.000%20L16.500%2C-0.000%20C17.328%2C-0.000%2018.000%2C0.672%2018.000%2C1.500%20C18.000%2C2.328%2017.328%2C3.000%2016.500%2C3.000%20L1.500%2C3.000%20C0.672%2C3.000%20-0.000%2C2.328%20-0.000%2C1.500%20C-0.000%2C0.672%200.672%2C-0.000%201.500%2C-0.000%20ZM1.500%2C5.000%20L16.500%2C5.000%20C17.328%2C5.000%2018.000%2C5.672%2018.000%2C6.500%20C18.000%2C7.328%2017.328%2C8.000%2016.500%2C8.000%20L1.500%2C8.000%20C0.672%2C8.000%20-0.000%2C7.328%20-0.000%2C6.500%20C-0.000%2C5.672%200.672%2C5.000%201.500%2C5.000%20ZM1.500%2C10.000%20L16.500%2C10.000%20C17.328%2C10.000%2018.000%2C10.672%2018.000%2C11.500%20C18.000%2C12.328%2017.328%2C13.000%2016.500%2C13.000%20L1.500%2C13.000%20C0.672%2C13.000%20-0.000%2C12.328%20-0.000%2C11.500%20C-0.000%2C10.672%200.672%2C10.000%201.500%2C10.000%20ZM1.500%2C15.000%20L16.500%2C15.000%20C17.328%2C15.000%2018.000%2C15.672%2018.000%2C16.500%20C18.000%2C17.328%2017.328%2C18.000%2016.500%2C18.000%20L1.500%2C18.000%20C0.672%2C18.000%20-0.000%2C17.328%20-0.000%2C16.500%20C-0.000%2C15.672%200.672%2C15.000%201.500%2C15.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

@media screen and (max-width: 599px) {
  .shop_sorting_panel .view-shop2 .view_pricelist.active-view {
    display: block;
    order: -1;
    margin: 0;
  }
}

.shop_sorting_panel .view-shop2 .view_pricelist.active-view:hover {
  box-shadow: none;
}
</style>

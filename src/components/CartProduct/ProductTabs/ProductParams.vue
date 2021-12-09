<template>
  <div
    class="desc-area active-area r-tabs-panel"
    :class="{
      'r-tabs-state-active': params,
      'r-tabs-state-default': !params,
    }"
    :style="paramsStatus"
  >
    <div class="shop2-product-params">
      <div class="tab_param_item even">
        <div class="tab_param_title">Цвет</div>
        <div class="tab_param_body">Белый</div>
      </div>
    </div>
    <div class="shop2-clear-container"></div>
  </div>
</template>
<script>
export default {
  props: ["params", "paramsStatus"],
};
</script>
<style lang="scss" scoped>
.shop-product-tabs .shop-product-desc .desc-area {
  display: none;
  padding: 38px 20px 42px;
}

@media screen and (max-width: 1023px) {
  .shop-product-tabs .shop-product-desc .desc-area {
    padding: 38px 20px 35px;
  }
}
.shop-product-tabs .shop-product-desc .desc-area.r-tabs-state-active {
  display: block;
}
.shop-product-tabs .shop-product-desc .desc-area {
  display: none;
  padding: 38px 20px 42px;
}

@media screen and (max-width: 1023px) {
  .shop-product-tabs .shop-product-desc .desc-area {
    padding: 38px 20px 35px;
  }
}
.shop-product-tabs
  .shop-product-desc
  .r-tabs-accordion-title.r-tabs-state-active
  a {
  background: #0c8ac9;
  color: #fff;
  box-shadow: inset 0 1px 0 #0c8ac9;
}
.shop2-product-params .tab_param_item {
  padding: 0 0 10px;
  display: flex;
}

.shop2-product-params .tab_param_item:last-child {
  padding-bottom: 0;
}
.shop2-product-params .tab_param_title {
  flex: 0 1 320px;
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 4px 0 0 0;
}

@media screen and (max-width: 1023px) {
  .shop2-product-params .tab_param_title {
    flex: 1 1 50%;
    box-sizing: border-box;
    padding-right: 10px;
  }
}
.shop2-product-params .tab_param_body {
  flex: 1 1 auto;
}

@media screen and (max-width: 1023px) {
  .shop2-product-params .tab_param_body {
    flex: 1 1 50%;
  }
}
.shop-group-kinds.in_tabs .shop2-product-params {
  display: none;
  padding: 10px 0 0 0;
}

.shop-group-kinds.in_tabs .shop2-product-params .tab_param_item {
  display: block;
}

.shop-group-kinds.in_tabs
  .shop2-product-params
  .tab_param_item
  .tab_param_title {
  padding: 0 0 5px;
}
.shop2-product-params .tab_param_item:last-child {
  padding-bottom: 0;
}
.shop2-product-params .tab_param_title {
  flex: 0 1 320px;
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 4px 0 0 0;
}

@media screen and (max-width: 1023px) {
  .shop2-product-params .tab_param_title {
    flex: 1 1 50%;
    box-sizing: border-box;
    padding-right: 10px;
  }
}
.shop2-product-params .tab_param_body {
  flex: 1 1 auto;
}

@media screen and (max-width: 1023px) {
  .shop2-product-params .tab_param_body {
    flex: 1 1 50%;
  }
}
</style>

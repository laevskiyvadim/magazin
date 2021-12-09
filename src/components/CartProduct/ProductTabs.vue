<template>
  <div id="product_tabs" class="shop-product-tabs r-tabs">
    <ul class="shop-product-tabs r-tabs-nav">
      <li
        class="active-tab r-tabs-tab"
        :class="{
          'r-tabs-state-active': params,
          'r-tabs-state-default': !params,
        }"
      >
        <a href="#shop2-tabs-1" class="r-tabs-anchor" @click="open('params')"
          >Параметры</a
        >
      </li>
      <li
        class="r-tabs-state-default r-tabs-tab"
        :class="{
          'r-tabs-state-active': descriptions,
          'r-tabs-state-default': !descriptions,
        }"
      >
        <a
          href="#shop2-tabs-2"
          class="r-tabs-anchor"
          @click="open('descriptions')"
          >Описание</a
        >
      </li>
      <li
        class="r-tabs-state-default r-tabs-tab"
        :class="{
          'r-tabs-state-active': otzyvi,
          'r-tabs-state-default': !otzyvi,
        }"
      >
        <a href="#shop2-tabs-01" class="r-tabs-anchor" @click="open('otzyvi')"
          ><span>Отзывы</span></a
        >
      </li>
    </ul>
    <div class="shop-product-desc">
      <ProductParams :params="params" />
      <ProductDescription :descriptions="descriptions" />
      <ProductOtzyvAuth v-if="Auth.Auth" :otzyvi="otzyvi" />
      <ProductOtzyvNotAuth v-if="!Auth.Auth" :otzyvi="otzyvi" />
    </div>
  </div>
</template>
<script>
import ProductParams from "@/components/CartProduct/ProductTabs/ProductParams.vue";
import ProductDescription from "@/components/CartProduct/ProductTabs/ProductDescription.vue";
import ProductOtzyvAuth from "@/components/CartProduct/ProductTabs/ProductOtzyvAuth.vue";
import ProductOtzyvNotAuth from "@/components/CartProduct/ProductTabs/ProductOtzyvNotAuth.vue";
export default {
  data: () => ({ params: true, descriptions: false, otzyvi: false }),
  computed: {
    Auth: function () {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    open: function (item) {
      const tabs = ["params", "descriptions", "otzyvi"];
      tabs.forEach((el) => (this[el] = false));
      this[item] = true;
    },
    paramsStatus: function () {
      if (this.params) {
        return "dispay:block";
      } else {
        return "display:none";
      }
    },
  },
  components: {
    ProductParams,
    ProductDescription,
    ProductOtzyvAuth,
    ProductOtzyvNotAuth,
  },
};
</script>
<style lang="scss" scoped>
.shop-product-tabs {
  background: #fff;
  margin: 0 0 27px;
  border-radius: 1px;
}

@media screen and (max-width: 1023px) {
  .shop-product-tabs {
    margin: 0 0 24px;
  }
}

@media screen and (max-width: 599px) {
  .shop-product-tabs {
    margin: 0 0 20px;
  }
}
.shop-product-tabs.r-tabs-nav {
  padding: 0;
  margin: 0;
  list-style: none;
  border-bottom: 1px solid #d6d6d6;
}

@media screen and (max-width: 599px) {
  .shop-product-tabs.r-tabs-nav {
    display: none;
  }
}

.shop-product-tabs.r-tabs-nav li {
  display: inline-block;
  vertical-align: top;
}

.shop-product-tabs.r-tabs-nav li.r-tabs-state-active a {
  color: #0c8ac9;
}

.shop-product-tabs.r-tabs-nav li.r-tabs-state-active a:before {
  left: 0;
  right: 0;
  opacity: 1;
  visibility: visible;
}

.shop-product-tabs.r-tabs-nav li a {
  display: block;
  padding: 18px 20px 18px;
  color: #212121;
  transition: all 0.3s;
  text-decoration: none;
  font: 18px/24px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  position: relative;
}

.shop-product-tabs.r-tabs-nav li a:before {
  position: absolute;
  content: "";
  left: 50%;
  bottom: -1px;
  height: 2px;
  transition: all 0.3s;
  background: #0c8ac9;
  opacity: 0;
  visibility: hidden;
}

.shop-product-tabs.r-tabs-nav li a:hover {
  color: #0c8ac9;
}
.shop-product-tabs .shop-product-desc {
  font: 14px/24px "noto_sans-r", Arial, Helvetica, sans-serif;
}
.shop-product-tabs .shop-product-desc .r-tabs-accordion-title {
  display: none;
}
.shop-product-tabs .shop-product-desc .r-tabs-accordion-title:first-child a {
  box-shadow: none;
}
.shop2-clear-container {
  overflow: hidden;
  line-height: 0;
  font-size: 0;
  clear: both;
  width: 100%;
  height: 0;
}

table {
  border-collapse: collapse;
}
.shop-group-kinds {
  margin: 0 0 20px;
  display: flex;
  flex-wrap: wrap;
}

@media screen and (max-width: 699px) {
  .shop-group-kinds {
    margin: 0 -12px 20px;
  }
}
.owl-stage-outer {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.owl-item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-height: 1px;
  user-select: none;
}
</style>

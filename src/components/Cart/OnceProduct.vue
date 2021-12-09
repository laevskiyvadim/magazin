<template>
  <div class="shop_cart_product">
    <ProductLeft :item="item" />
    <ProductRight :item="item" />
  </div>
</template>
<script>
import ProductLeft from "../Cart/ProductLeft.vue";
import ProductRight from "../Cart/ProductRight.vue";
export default {
  props: ["item"],
  components: { ProductLeft, ProductRight },
};
</script>
<style lang="scss" scoped>
.shop_cart_wrapper .shop_cart_lots .shop_cart_product {
  font-size: 0;
  border-bottom: 1px solid #f5fafb;
  display: flex;
  box-sizing: border-box;
}

@media screen and (max-width: 767px) {
  .shop_cart_wrapper .shop_cart_lots .shop_cart_product {
    display: block;
  }
}

.shop_cart_wrapper .shop_cart_lots .shop_cart_product:last-child {
  border: none;
}
</style>

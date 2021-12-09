<template>
  <form
    method="post"
    action="/magazin?mode=cart&amp;action=add"
    accept-charset="utf-8"
    class="shop2_product_item shop2-product-item"
    style="height: 379px"
  >
    <div class="shop2_product_inner">
      <TopWr :item="item" />
      <BotWr :item="item" />
    </div>
  </form>
</template>
<script>
import TopWr from "@/components/CategoryList/TopWr.vue";
import BotWr from "@/components/CategoryList/BotWr.vue";
export default {
  props: ["item"],
  components: {
    TopWr,
    BotWr,
  },
};
</script>
<style lang="scss" scoped>
.product_list_in.product-list-thumbs {
  .shop2_product_item {
    width: 200px;
    display: flex;
    box-sizing: border-box;
    margin: 0 10px 10px 0;
    font-size: 16px;
    position: relative;
    .shop2_product_inner {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 8px;
      width: 100%;
      box-sizing: border-box;
      background: #fff;
    }
  }
  .shop2_product_item:hover,
  .shop2_product_item.hover {
    z-index: 5;
    .owl-nav {
      visibility: visible;
      opacity: 1;
    }
    .shop2_product_inner {
      position: absolute;
    }
    .product-article {
      padding: 0 0 9px;
    }
    .product-anonce {
      padding: 0 0 16px;
    }
    .shop2-product-actions {
      margin: 0 0 10px;
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
}
@media screen and (min-width: 1581px) {
  .product_list_in.product-list-thumbs .shop2_product_item:nth-child(5n) {
    margin-right: 0;
  }
}
@media screen and (min-width: 1024px) and (max-width: 1580px) {
  .product_list_in.product-list-thumbs .shop2_product_item:nth-child(4n) {
    margin-right: 0;
  }
}
@media screen and (min-width: 1024px) {
  .product_list_in.product-list-thumbs
    .shop2_product_item:hover
    .shop2_product_inner,
  .product_list_in.product-list-thumbs
    .shop2_product_item.hover
    .shop2_product_inner {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  }
}
@media screen and (max-width: 1023px) {
  .product_list_in.product-list-thumbs .shop2_product_item {
    width: 31%;
    margin: 0 3.5% 20px 0;
  }
}
@media screen and (min-width: 640px) and (max-width: 1023px) {
  .product_list_in.product-list-thumbs .shop2_product_item:nth-child(3n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 639px) {
  .product_list_in.product-list-thumbs .shop2_product_item {
    width: 50%;
    margin: 0;
  }
}
.product_list_in.product-list-simple .shop2_product_item {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  background: #fff;
  margin: 0 0 20px;
  height: auto !important;
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .shop2_product_item {
    max-width: 320px;
    margin: 0 auto 20px;
  }
}
.product_list_in.product-list-simple .shop2_product_inner {
  display: flex;
  width: 100%;
}

@media screen and (max-width: 639px) {
  .product_list_in.product-list-simple .shop2_product_inner {
    display: block;
  }
}
.product_list_in.product-list-price .shop2_product_item {
  line-height: 1.25;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background: #fff;
  margin: 0 0 30px;
  height: auto !important;
}

@media screen and (max-width: 499px) {
  .product_list_in.product-list-price .shop2_product_item {
    margin: 0 0 20px;
  }
}
.product_list_in.product-list-price .shop2_product_item .shop2_product_inner {
  display: flex;
  width: 100%;
  flex-direction: row;
  position: relative;
}

@media screen and (max-width: 499px) {
  .product_list_in.product-list-price .shop2_product_item .shop2_product_inner {
    display: block;
    width: 100%;
  }
}
</style>

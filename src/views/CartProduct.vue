<template>
  <main role="main" class="site-main">
    <SitePathProduct />
    <h1>{{ product.name }}</h1>

    <Product :productOne="product" />
    <!-- Product -->
    <BuyOnClick />
    <ProductTabs />
    <h4 class="shop2-collection-header">Рекомендуемые</h4>
    <ButtonBack />
  </main>
</template>
<script>
import SitePathProduct from "@/components/App/SitePathProduct.vue";
import Product from "@/components/CartProduct/Product.vue";
import BuyOnClick from "@/components/Popups/BuyOnClick.vue";
import ProductTabs from "@/components/CartProduct/ProductTabs.vue";
import ButtonBack from "@/components/App/ButtonBack.vue";
export default {
  computed: {
    categoryID: function () {
      return this.$route.params.category;
    },
    productID: function () {
      return this.$route.params.productID;
    },
    product: function (categoryID, productID) {
      return this.$store.getters.getProduct(categoryID, productID);
    },
  },
  methods: {},
  components: {
    SitePathProduct,
    Product,
    BuyOnClick,
    ProductTabs,
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
.shop2-collection-header {
  color: #212121;
  font: 28px/37px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  padding: 0 0 13px;
  margin: 0;
}

@media screen and (max-width: 1023px) {
  .shop2-collection-header {
    font-size: 26px;
  }
}
</style>

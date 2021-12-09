<template>
  <form
    method="post"
    action="/magazin?mode=cart&amp;action=add"
    accept-charset="utf-8"
    class="product-shop2 clear-self"
  >
    <Left :product="productOne" />
    <Right :product="productOne" />
  </form>
</template>
<script>
import Left from "@/components/CartProduct/ProdLeftRight/Left.vue";
import Right from "@/components/CartProduct/ProdLeftRight/Right.vue";
export default {
  props: ["productOne"],
  methods: {},
  components: {
    Left,
    Right,
  },
};
</script>
<style lang="scss" scoped>
.product-shop2 {
  display: flex;
  background: #fff;
  padding: 22px 22px 25px;
  margin: 0 0 20px;
  border-radius: 1px;
}
@media screen and (max-width: 1023px) {
  .product-shop2 {
    padding: 22px;
  }
}
@media screen and (max-width: 599px) {
  .product-shop2 {
    display: block;
    padding: 8px 8px 39px;
  }
}
</style>

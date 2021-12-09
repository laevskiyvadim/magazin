<template>
  <div class="shop-group-kinds slider owl-loaded">
    <div class="owl-stage-outer">
      <div
        class="owl-stage"
        style="
          transform: translate3d(0px, 0px, 0px);
          transition: all 0s ease 0s;
          width: 1260px;
        "
      >
        <!--<Item
          v-for="item of product.recommendations"
          :key="item.id"
          :itemOne="item"
        />-->
      </div>
    </div>
    <div class="owl-nav">
      <div class="owl-prev disabled">prev</div>
      <div class="owl-next">next</div>
    </div>
  </div>
</template>
<script>
//import Item from "@/components/CartProduct/Recommendations/Item.vue";
export default {
  // props: ["product"],
  components: {},
};
</script>
<style lang="scss" scoped>
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
.shop-group-kinds.owl-loaded {
  display: block;
}
.owl-stage-outer {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.owl-stage {
  position: relative;
}
.shop-group-kinds .owl-prev {
  position: absolute;
  left: -20px;
  top: 50%;
  height: 40px;
  width: 40px;
  margin-top: -20px;
  font-size: 0;
  z-index: 10;
}

@media screen and (max-width: 1023px) {
  .shop-group-kinds .owl-prev {
    left: -40px;
  }
}

@media screen and (max-width: 699px) {
  .shop-group-kinds .owl-prev {
    left: 0;
    margin-top: 0;
    top: 0;
  }
}

.shop-group-kinds .owl-prev:hover:before,
.shop-group-kinds .owl-prev:hover:after {
  opacity: 1;
}

.shop-group-kinds .owl-prev:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0c8ac9;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.shop-group-kinds .owl-prev:after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0.287%2C6.292%20C-0.103%2C6.681%20-0.106%2C7.314%200.281%2C7.707%20C0.345%2C7.772%200.417%2C7.828%200.496%2C7.873%20L6.310%2C13.724%20C6.696%2C14.117%207.325%2C14.119%207.715%2C13.730%20C7.717%2C13.728%207.719%2C13.726%207.721%2C13.724%20C8.106%2C13.334%208.106%2C12.704%207.721%2C12.314%20L2.424%2C6.972%20L7.651%2C1.711%20C8.041%2C1.322%208.043%2C0.689%207.657%2C0.296%20C7.655%2C0.295%207.653%2C0.293%207.651%2C0.291%20C7.264%2C-0.097%206.638%2C-0.097%206.250%2C0.291%20L0.287%2C6.292%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  opacity: 0.8;
  transition: opacity 0.3s;
  z-index: 2;
}
.owl-nav .owl-next.disabled,
.owl-nav .owl-prev.disabled {
  display: none;
}
.shop-group-kinds .owl-next {
  position: absolute;
  right: -20px;
  top: 50%;
  height: 40px;
  width: 40px;
  margin-top: -20px;
  font-size: 0;
  z-index: 10;
}

@media screen and (max-width: 1023px) {
  .shop-group-kinds .owl-next {
    right: -40px;
  }
}

@media screen and (max-width: 699px) {
  .shop-group-kinds .owl-next {
    right: 0;
    margin-top: 0;
    top: 0;
  }
}

.shop-group-kinds .owl-next:hover:before,
.shop-group-kinds .owl-next:hover:after {
  opacity: 1;
}

.shop-group-kinds .owl-next:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #0c8ac9;
  transition: opacity 0.3s;
  opacity: 0.8;
}

.shop-group-kinds .owl-next:after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  opacity: 0.8;
  transition: opacity 0.3s;
  z-index: 2;
}
</style>

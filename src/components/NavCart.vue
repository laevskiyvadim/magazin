<template>
  <div class="fixed_panel_wrapper scroll headroom showed on_top">
    <div class="fixed_panel_in">
      <CartBlWrapper
        :mobCart="mobCartParent"
        @closeMob="closeMobCart"
        @openMob="openMobCart"
      />
      <CatBlWrapper
        :isActiveCategory="isActiveCategory"
        @eventsButton="eventsButton"
      />
      <SearchBlWrapper
        :isActiveSearch="isActiveSearch"
        @toggleClassSearch="toggleClassSearch"
      />
      <RegBlWrapper
        :isActiveRegistration="isActiveRegistration"
        @toggleClassRegistration="toggleClassRegistration"
      />
    </div>
  </div>
</template>
<script>
import CartBlWrapper from "../components/NavCart/CartBlWrapper.vue";
import CatBlWrapper from "../components/NavCart/CatBlWrapper.vue";
import SearchBlWrapper from "../components/NavCart/SearchBlWrapper.vue";
import RegBlWrapper from "../components/NavCart/RegBlWrapper.vue";
export default {
  props: ["isActiveCategory", "isActiveSearch", "isActiveRegistration"],
  data: () => ({
    mobCartParent: false,
  }),
  methods: {
    openMobCart: function () {
      this.mobCartParent = true;
    },
    closeMobCart: function () {
      this.mobCartParent = false;
    },
    toggleClassCategory: function () {
      this.$emit("category");
    },
    toggleClassSearch: function () {
      this.$emit("search");
    },
    toggleClassRegistration: function () {
      this.$emit("registration");
    },
    mobMenuActiveDisactive: function () {
      this.$emit("activeMobMenu");
    },
    eventsButton: function () {
      this.toggleClassCategory(), this.mobMenuActiveDisactive();
    },
  },
  components: { CartBlWrapper, RegBlWrapper, SearchBlWrapper, CatBlWrapper },
};
</script>
<style scoped lang="scss">
.fixed_panel_wrapper {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 231;
  transform: translate(0, -100%);
  transition: transform 0.3s;
}

@media screen and (max-width: 1023px) {
  .fixed_panel_wrapper {
    height: 60px;
    z-index: 210;
    background-image: linear-gradient(180deg, #00668f 0%, #033673 100%);
  }
}

@media screen and (max-width: 699px) {
  .fixed_panel_wrapper {
    height: 52px;
  }
}

.fixed_panel_wrapper.showed,
.fixed_panel_wrapper.on_top {
  transform: translate(0, 0);
}
.fixed_panel_wrapper .fixed_panel_in {
  position: relative;
  max-width: 1514px;
  margin: 0 auto;
}

@media screen and (max-width: 1580px) {
  .fixed_panel_wrapper .fixed_panel_in {
    max-width: 1300px;
  }
}

@media screen and (max-width: 1299px) {
  .fixed_panel_wrapper .fixed_panel_in {
    max-width: 1182px;
  }
}

@media screen and (max-width: 1180px) {
  .fixed_panel_wrapper .fixed_panel_in {
    max-width: 1024px;
  }
}
</style>

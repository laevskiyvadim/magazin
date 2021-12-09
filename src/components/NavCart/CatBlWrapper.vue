<template>
  <div class="cat_bl_wrapper">
    <div
      class="cat_bl_button"
      @click="eventsButton"
      :class="{ active: isActiveCategory }"
    >
      <div class="cat_bl_icon"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["isActiveCategory"],
  methods: {
    eventsButton: function () {
      this.$emit("eventsButton");
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed_panel_wrapper .cat_bl_wrapper {
  position: absolute;
  left: 0;
  top: 90px;
  height: 90px;
  width: 90px;
  .cat_bl_button {
    display: flex;
    align-items: center;
    padding: 0 34px;
    height: 90px;
    transition: ease 0.3s;
    cursor: pointer;
  }
  .cat_bl_button:hover {
    background: #0c8ac9;
  }
  .cat_bl_button.active {
    background: #09538e;
    .cat_bl_icon {
      background: transparent;
    }
    .cat_bl_icon:before {
      top: 0;
      background: #fff;
      transform: rotate(45deg);
    }
    .cat_bl_icon:after {
      top: 0;
      background: #fff;
      transform: rotate(-45deg);
    }
  }
  .cat_bl_button.active:hover {
    background: #0c8ac9;
    .cat_bl_icon:before {
      transform: rotate(0);
    }
    .cat_bl_icon:after {
      transform: rotate(0);
    }
  }
  .cat_bl_button:hover {
    .cat_bl_icon {
      background: #fff;
    }
    .cat_bl_icon:before {
      background: #fff;
    }
    .cat_bl_icon:after {
      background: #fff;
    }
  }
  .cat_bl_icon {
    width: 100%;
    height: 2px;
    background: #0c8ac9;
    position: relative;
    opacity: 1;
    transition: ease 0.3s;
  }
  .cat_bl_icon:before {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #0c8ac9;
    position: absolute;
    left: 0;
    transform: translateY(-7px);
    transition: ease 0.3s;
  }
  .cat_bl_icon:after {
    display: block;
    content: "";
    width: 100%;
    height: 2px;
    background-color: #0c8ac9;
    position: absolute;
    left: 0;
    transform: translateY(7px);
    transition: ease 0.3s;
  }
}
@media screen and (max-width: 1180px) {
  .fixed_panel_wrapper .cat_bl_wrapper {
    position: absolute;
    left: 17px;
    top: 60px;
    height: 60px;
    width: 60px;
    .cat_bl_button {
      padding: 0 19px;
      height: 60px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .fixed_panel_wrapper .cat_bl_wrapper {
    background: rgba(255, 255, 255, 0.0001);
  }
}
@media screen and (max-width: 1023px) {
  .fixed_panel_wrapper .cat_bl_wrapper {
    top: 0;
    left: 0;
  }
}
@media screen and (max-width: 699px) {
  .fixed_panel_wrapper .cat_bl_wrapper {
    width: 52px;
    height: 52px;
    .cat_bl_button {
      height: 52px;
      padding: 0 16px;
    }
  }
}
</style>

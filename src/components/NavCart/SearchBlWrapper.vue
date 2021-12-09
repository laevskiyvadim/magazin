<template>
  <div class="search_bl_wrapper">
    <div
      class="search_bl_icon"
      @click.stop="toggleClassSearch"
      :class="{ active: isActiveSearch }"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["isActiveSearch"],
  methods: {
    toggleClassSearch: function () {
      this.$emit("toggleClassSearch");
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed_panel_wrapper .search_bl_wrapper {
  position: absolute;
  left: 0;
  top: 180px;
  .search_bl_icon {
    width: 90px;
    height: 90px;
    cursor: pointer;
    transition: background-color 0.3s;
    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2224px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2024%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M22.3%2023.7c.38.4%201.01.4%201.4%200a1%201%200%200%200%20.02-1.4l-4.24-4.28a11%2011%200%201%200-1.41%201.42zM2%2011a9%209%200%201%201%2018%200%209%209%200%200%201-18%200z%22%2F%3E%3C%2Fsvg%3E");
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .search_bl_icon:before,
  .search_bl_icon:after {
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -1px;
    margin-left: -11px;
    display: block;
    content: "";
    width: 22px;
    height: 2px;
    background: #fff;
    transform: translateY(0);
    opacity: 0;
    visibility: hidden;
    transition: ease 0.3s;
  }
}
@media screen and (max-width: 1180px) {
  .fixed_panel_wrapper .search_bl_wrapper {
    left: 17px;
    top: 120px;
    .search_bl_icon {
      width: 60px;
      height: 60px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .fixed_panel_wrapper .search_bl_wrapper {
    background: rgba(255, 255, 255, 0.0001);
    .search_bl_icon:hover {
      background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2224px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2024%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M22.3%2023.7c.38.4%201.01.4%201.4%200a1%201%200%200%200%20.02-1.4l-4.24-4.28a11%2011%200%201%200-1.41%201.42zM2%2011a9%209%200%201%201%2018%200%209%209%200%200%201-18%200z%22%2F%3E%3C%2Fsvg%3E");
      background-color: #0c8ac9;
    }
    .search_bl_icon.active {
      background: #09538e;
    }
    .search_bl_icon.active:before {
      transform: rotate(45deg);
      opacity: 1;
      visibility: visible;
    }
    .search_bl_icon.active:after {
      transform: rotate(-45deg);
      opacity: 1;
      visibility: visible;
    }
    .search_bl_icon.active:hover {
      background: #0c8ac9;
    }
    .search_bl_icon.active:hover:before {
      transform: rotate(0);
    }
    .search_bl_icon.active:hover:after {
      transform: rotate(0);
    }
  }
}
@media screen and (max-width: 1023px) {
  .fixed_panel_wrapper .search_bl_wrapper {
    left: 60px;
    top: 0;
  }
}
@media screen and (max-width: 699px) {
  .fixed_panel_wrapper .search_bl_wrapper {
    left: 52px;
    .search_bl_icon {
      width: 52px;
      height: 52px;
    }
  }
}
</style>

<template>
  <div class="reg_bl_wrapper">
    <div
      class="reg_bl_icon"
      @click="toggleClassRegistration"
      :class="{ active: isActiveRegistration }"
    ></div>
  </div>
</template>
<script>
export default {
  props: ["isActiveRegistration"],
  methods: {
    toggleClassRegistration: function () {
      this.$emit("toggleClassRegistration");
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed_panel_wrapper .reg_bl_wrapper {
  position: absolute;
  left: 0;
  top: 270px;
  .reg_bl_icon {
    position: relative;
    width: 90px;
    height: 90px;
    cursor: pointer;
    transition: background-color 0.3s;
    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2220px%22%20height%3D%2221px%22%20%20viewBox%3D%220%200%2020%2021%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M2%2020.1C2%2016.83%203.86%2016%209.53%2016h1c5.65%200%207.5.83%207.5%204.1a1%201%200%200%200%201%201%201%201%200%200%200%201-1c0-4.82-2.87-6.1-9.5-6.1h-1C2.88%2014%200%2015.28%200%2020.1a1%201%200%200%200%201%201%201%201%200%200%200%201-1zm8.03-8.1a6%206%200%201%200-.01-12.01A6%206%200%200%200%2010.03%2012zm0-10a4%204%200%201%201%200%208%204%204%200%200%201%200-8z%22%2F%3E%3C%2Fsvg%3E");
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .reg_bl_icon:before,
  .reg_bl_icon:after {
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
  .reg_bl_icon:hover {
    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2220px%22%20height%3D%2221px%22%20%20viewBox%3D%220%200%2020%2021%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M2%2020.1C2%2016.83%203.86%2016%209.53%2016h1c5.65%200%207.5.83%207.5%204.1a1%201%200%200%200%201%201%201%201%200%200%200%201-1c0-4.82-2.87-6.1-9.5-6.1h-1C2.88%2014%200%2015.28%200%2020.1a1%201%200%200%200%201%201%201%201%200%200%200%201-1zm8.03-8.1a6%206%200%201%200-.01-12.01A6%206%200%200%200%2010.03%2012zm0-10a4%204%200%201%201%200%208%204%204%200%200%201%200-8z%22%2F%3E%3C%2Fsvg%3E");
    background-color: #0c8ac9;
  }
  .reg_bl_icon.active {
    background: #09538e;
  }
  .reg_bl_icon.active:before {
    transform: rotate(45deg);
    opacity: 1;
    visibility: visible;
  }
  .reg_bl_icon.active:after {
    transform: rotate(-45deg);
    opacity: 1;
    visibility: visible;
  }
  .reg_bl_icon.active:hover {
    background-color: #0c8ac9;
  }
  .reg_bl_icon.active:hover:before {
    transform: rotate(0);
  }
  .reg_bl_icon.active:hover:after {
    transform: rotate(0);
  }
}
@media screen and (max-width: 1180px) {
  .fixed_panel_wrapper .reg_bl_wrapper {
    left: 17px;
    top: 180px;
    .reg_bl_icon {
      width: 60px;
      height: 60px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .fixed_panel_wrapper .reg_bl_wrapper {
    background: rgba(255, 255, 255, 0.0001);
  }
}
@media screen and (max-width: 1023px) {
  .fixed_panel_wrapper .reg_bl_wrapper {
    display: none;
  }
}
</style>

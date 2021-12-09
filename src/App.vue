<template>
  <div style="height: 100%">
    <NavCart
      @category="open('isActiveCategory')"
      @registration="open('isActiveRegistration')"
      @search="open('isActiveSearch')"
      @activeMobMenu="ToggleMobMenu"
      :isActiveCategory="isActiveCategory"
      :isActiveRegistration="isActiveRegistration"
      :isActiveSearch="isActiveSearch"
    />
    <div class="link_top"></div>
    <Nav @close="CloseAllMenuItems" />
    <div class="site_wrapper" @click.prevent="CloseAllMenuItems">
      <MobMenu
        :active="isActiveMobMenu"
        @disactiveMobMenu="ToggleMobMenu"
        @openAuthForm="open('isActiveRegistration')"
      />
      <DesktopMenu
        :categoryStatus="isActiveCategory"
        @close="CloseAllMenuItems"
      />
      <DesktopSearch
        :searchStatus="isActiveSearch"
        @disactiveSearchForm="closeSearchForm"
        @close="CloseAllMenuItems"
      />
      <RegistrationWrapper
        :registrationStatus="isActiveRegistration"
        @closeAufhForm="closeAuthForm"
      />
      <div class="filter_wrapper"></div>
      <Header :slide="slider()" />
      <ContentWrapper :slide="slider()" />
      <Footer :slide="slider()" @close="CloseAllMenuItems" />
    </div>
  </div>
</template>
<script>
//todo
import Nav from "@/components/Nav.vue";
import NavCart from "@/components/NavCart.vue";
import MobMenu from "@/components/MobMenu.vue";
import DesktopMenu from "@/components/DesktopMenu.vue";
import DesktopSearch from "@/components/DesktopSearch.vue";
import Header from "@/components/Header.vue";
import RegistrationWrapper from "@/components/RegistrationWrapper.vue";
import ContentWrapper from "@/components/ContentWrapper.vue";
import Footer from "@/components/Footer.vue";
export default {
  data: () => ({
    isActiveCategory: false,
    isActiveSearch: false,
    isActiveRegistration: false,
    isActiveMobMenu: false,
  }),
  methods: {
    open: function (item) {
      let dataLeftMenuElements = [
        "isActiveCategory",
        "isActiveSearch",
        "isActiveRegistration",
      ];
      dataLeftMenuElements = dataLeftMenuElements.filter((el) => el !== item);
      dataLeftMenuElements.forEach((el) => {
        this[el] = false;
      });
      this[item] = !this[item];
    },
    ToggleMobMenu: function () {
      this.isActiveMobMenu = !this.isActiveMobMenu;
      if (this.isActiveMobMenu === false) this.isActiveCategory = false;
    },
    closeAuthForm: function () {
      this.isActiveRegistration = false;
    },
    slider: function () {
      const dataLeftMenuElements = [
        "isActiveCategory",
        "isActiveSearch",
        "isActiveRegistration",
      ];
      for (const iterator of dataLeftMenuElements) {
        if (this[iterator] === true) return true;
      }
    },
    closeSearchForm: function () {
      this.isActiveSearch = false;
    },
    CloseAllMenuItems: function () {
      const dataLeftMenuElements = [
        "isActiveCategory",
        "isActiveSearch",
        "isActiveRegistration",
        "isActiveMobMenu",
      ];
      for (const iterator of dataLeftMenuElements) {
        this[iterator] = false;
      }
    },
  },
  components: {
    Header,
    Nav,
    NavCart,
    MobMenu,
    DesktopMenu,
    DesktopSearch,
    RegistrationWrapper,
    ContentWrapper,
    Footer,
  },
};
</script>
<style scoped lang="scss">
@font-face {
  font-family: "noto_sans-r";
  src: url("../public/assets/noto_sans_r.ttf");
  src: url("../public/assets/noto_sans-r.woff2");
}
@font-face {
  font-family: "fira_sans_extra_condensed-s-b";
  src: url("../public/assets/fira_sans_extra_condensed-s-b.ttf");
  src: url("../public/assets/fira_sans_extra_condensed-s-b.woff2");
}
@font-face {
  font-family: "fira_sans_extra_condensed-r";
  src: url("../public/assets/fira_sans_extra_condensed-r.woff2");
}
.site_wrapper {
  position: relative;
  min-height: 100%;
  height: auto;
  margin: auto;
  max-width: 1334px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.filter_wrapper {
  position: fixed;
  z-index: 220;
  left: 50%;
  top: 90px;
  bottom: 0;
  width: 0;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(6, 44, 81, 0.14);
  transition: all 0.3s;
  transform: translate(-667px, 0);
  opacity: 0;
  visibility: hidden;
}
.filter_wrapper.on_scroll {
  top: 0;
}

.filter_wrapper.active {
  opacity: 1;
  visibility: visible;
  width: 226px;
}

.filter_wrapper .filter_title {
  width: 186px;
  padding: 34px 20px 33px;
  color: #09538e;
  font: 18px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  letter-spacing: -0.18px;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid #e3e3e3;
}

.filter_wrapper .filter_title .icon1 {
  position: absolute;
  left: 19px;
  top: 21px;
  width: 22px;
  height: 18px;
  display: none;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2222px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2022%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%2309538e%22%20fill-rule%3D%22nonzero%22%20d%3D%22M13%206a1%201%200%200%200%200-2H9a1%201%200%200%200%200%202h1v11a1%201%200%200%200%202%200V6m-7%208a1%201%200%200%200%200-2H1a1%201%200%200%200%200%202h1v3a1%201%200%200%200%202%200v-3m17%200a1%201%200%200%200%200-2h-4a1%201%200%200%200%200%202h1v3a1%201%200%200%200%202%200v-3m-2-4a1%201%200%200%200%202%200V1a1%201%200%201%200-2%200m-8%201a1%201%200%200%200%202%200V1a1%201%200%201%200-2%200m-8%209a1%201%200%200%200%202%200V1a1%201%200%200%200-2%200%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}

.filter_wrapper .filter_title .icon2 {
  display: none;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}

.filter_wrapper .shop2-filter {
  margin: 0;
  border: none;
  padding: 0;
  width: 226px;
}

.filter_wrapper .shop2-filter-fields {
  border-bottom: 1px solid #e3e3e3;
}
.filter_wrapper .shop2-filter-fields #shop2-color-ext-close {
  display: none !important;
}
.filter_wrapper .shop2-filter-fields .param_title {
  padding: 10px 45px 10px 20px;
  color: #212121;
  font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  display: block;
  cursor: pointer;
  position: relative;
}
.filter_wrapper .shop2-filter-fields .param_title.active:before {
  transform: rotate(-180deg);
}
.filter_wrapper .shop2-filter-fields .param_title:before {
  position: absolute;
  content: "";
  right: 20px;
  top: 50%;
  height: 6px;
  width: 10px;
  margin-top: -3px;
  transition: all 0.3s;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%231B1B1B%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
    0 0 no-repeat;
}
.filter_wrapper .shop2-filter-fields .jqselect {
  background: #f5fafb;
  color: #0c8ac9;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
}
.filter_wrapper .shop2-filter-fields .jqselect::-webkit-input-placeholder {
  color: #0c8ac9;
}
.filter_wrapper .shop2-filter-fields .jqselect:moz-placeholder {
  color: #0c8ac9;
}
.filter_wrapper .shop2-filter-fields .jqselect::-moz-placeholder {
  color: #0c8ac9;
}
.filter_wrapper .shop2-filter-fields .jqselect:-ms-input-placeholder {
  color: #0c8ac9;
}
.filter_wrapper .shop2-filter-fields .jqselect.opened:before {
  transform: rotate(-180deg);
}
.filter_wrapper .shop2-filter-fields .jqselect:before {
  position: absolute;
  content: "";
  right: 18px;
  top: 50%;
  width: 10px;
  height: 6px;
  margin-top: -3px;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M9.727%2C1.693%20C9.725%2C1.695%209.723%2C1.697%209.721%2C1.699%20L5.715%2C5.710%20C5.515%2C5.900%205.265%2C6.001%205.004%2C6.001%20L5.004%2C6.001%20C4.743%2C6.001%204.493%2C5.900%204.293%2C5.710%20L0.286%2C1.699%20C-0.106%2C1.309%20-0.109%2C0.674%200.281%2C0.281%20C0.283%2C0.279%200.285%2C0.277%200.286%2C0.275%20C0.676%2C-0.118%201.310%2C-0.121%201.703%2C0.269%20C1.705%2C0.271%201.707%2C0.273%201.709%2C0.275%20L5.004%2C3.584%20L8.299%2C0.275%20C8.689%2C-0.118%209.323%2C-0.121%209.716%2C0.269%20C9.718%2C0.271%209.720%2C0.273%209.721%2C0.275%20C10.114%2C0.665%2010.117%2C1.300%209.727%2C1.693%20Z%22%20%2F%3E%3C%2Fsvg%3E")
    50% / cover no-repeat;
}
.filter_wrapper .shop2-filter-fields .jqselect .jq-selectbox__select {
  padding: 6px 30px 8px 12px;
}
.filter_wrapper .shop2-filter-fields .jqselect .jq-selectbox__dropdown {
  width: 100%;
  background: #fff;
  box-sizing: border-box;
  box-shadow: inset 0 0 0 1px #0c8ac9;
}
.filter_wrapper .shop2-filter-fields .jqselect .jq-selectbox__dropdown ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.filter_wrapper .shop2-filter-fields .jqselect .jq-selectbox__dropdown ul li {
  padding: 6px 15px;
  font-family: "noto_sans-r", Arial, Helvetica, sans-serif;
  font-size: 14px;
  line-height: 18px;
  color: #212121;
}
.filter_wrapper
  .shop2-filter-fields
  .jqselect
  .jq-selectbox__dropdown
  ul
  li:hover {
  color: #fff;
  background: #0c8ac9;
}
.filter_wrapper
  .shop2-filter-fields
  .jqselect
  .jq-selectbox__dropdown
  ul
  li.sel {
  color: #fff;
  background: #0c8ac9;
}
.filter_wrapper .shop2-filter-fields .param_body {
  display: none;
  padding: 5px 20px 20px;
}
.filter_wrapper .shop2-filter-fields .param_body .input_param {
  font-size: 0;
}
.filter_wrapper .shop2-filter-fields label {
  display: inline-block;
  vertical-align: top;
  width: 48%;
  margin: 0 4% 0 0;
}
.filter_wrapper .shop2-filter-fields label:nth-child(2n) {
  margin-right: 0;
}
.filter_wrapper .shop2-filter-fields input[type="text"] {
  background: #f5fafb;
  color: #212121;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
  padding: 5px 8px 7px;
  text-align: center;
}
.filter_wrapper
  .shop2-filter-fields
  input[type="text"]::-webkit-input-placeholder {
  color: #212121;
}
.filter_wrapper .shop2-filter-fields input[type="text"]:moz-placeholder {
  color: #212121;
}
.filter_wrapper .shop2-filter-fields input[type="text"]::-moz-placeholder {
  color: #212121;
}
.filter_wrapper .shop2-filter-fields input[type="text"]:-ms-input-placeholder {
  color: #212121;
}
.filter_wrapper .shop2-filter-fields input[type="text"].small:hover,
.filter_wrapper .shop2-filter-fields input[type="text"].small:focus {
  background: #f5fafb;
  border-color: #f5fafb;
  color: #212121;
  box-shadow: none;
}
.filter_wrapper .shop2-filter-fields input[type="text"]:hover {
  border-color: #f5fafb;
  background: #fff;
}
.filter_wrapper .shop2-filter-fields input[type="text"]:focus {
  background: #fff;
  box-shadow: inset 0 0 0 1px #eae9f4;
}
.filter_wrapper .shop2-filter-fields .param_unit {
  font-size: 14px;
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  color: #212121;
  padding: 10px 0 0 0;
}
.filter_wrapper .shop2-filter-fields .param-val {
  color: #0c8ac9;
  font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
  padding: 6px 8px 8px;
  text-decoration: none;
  background: #fff;
  border-radius: 1px;
  position: relative;
  margin: 0 8px 8px 0;
}
.filter_wrapper .shop2-filter-fields .param-val:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  border: 1px solid #0c8ac9;
  opacity: 0.5;
  border-radius: 1px;
}
.filter_wrapper .shop2-filter-fields .param-val.active-val {
  font-weight: normal;
  padding: 6px 8px 8px;
  background: #0c8ac9;
  color: #fff;
}
.filter_wrapper .shop2-filter-fields .param-val.active-val:before {
  opacity: 1;
}
.filter_wrapper .shop2-filter-fields .param-val span {
  display: none !important;
}
.filter_wrapper .filter_popup .shop2-color-ext-list,
.filter_wrapper .filter_popup .shop2-color-ext-caption {
  display: none;
}
.filter_wrapper .filter_popup #shop2-color-ext-popup.cloned_list {
  display: block !important;
  position: static;
  width: auto;
  box-shadow: none;
  padding: 0;
  border: none;
}
.filter_wrapper
  .filter_popup
  #shop2-color-ext-popup.cloned_list
  .shop2-color-ext-list {
  display: block !important;
}
.filter_wrapper .filter_popup .shop2-color-ext-list li {
  display: inline-block;
  vertical-align: top;
  height: auto;
  width: auto;
  border: none;
  background: #f5fafb;
  margin-right: 8px;
  border-radius: 1px;
  outline: none !important;
}
.filter_wrapper
  .filter_popup
  .shop2-color-ext-list
  li.shop2-color-ext-selected {
  background: #0c8ac9;
}
.filter_wrapper
  .filter_popup
  .shop2-color-ext-list
  li.shop2-color-ext-selected
  .color_title
  .col_title {
  color: #fff;
}
.filter_wrapper
  .filter_popup
  .shop2-color-ext-list
  li.shop2-color-ext-selected
  .color_title
  .color_icon {
  background-image: url();
  background-position: 50% 50%;
  background-repeat: no-repeat;
}
.filter_wrapper .filter_popup .shop2-color-ext-list li .color_title {
  display: block !important;
  padding: 3px 8px 3px 3px;
}
.filter_wrapper .filter_popup .shop2-color-ext-list li .color_title ins {
  text-decoration: none;
}
.filter_wrapper
  .filter_popup
  .shop2-color-ext-list
  li
  .color_title
  .color_icon {
  display: inline-block;
  vertical-align: middle;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  margin: 0 5px 0 0;
  background-image: none;
}
.filter_wrapper .filter_popup .shop2-color-ext-list li .color_title .col_title {
  display: inline-block;
  vertical-align: middle;
  color: #0c8ac9;
  font: 15px "noto_sans-r", Arial, Helvetica, sans-serif;
}
.filter_wrapper .fitler_buttons {
  padding: 20px;
}
.filter_wrapper .fitler_buttons .shop2-filter-go {
  color: #fff;
  background: #0c8ac9;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 8px 20px 6px;
  display: block;
  text-decoration: none;
  position: relative;
  border: none;
  outline: none;
  border-radius: 0;
  box-shadow: none;
  text-align: center;
  margin: 0 0 16px;
}
.filter_wrapper .fitler_buttons .shop2-filter-go:hover:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.filter_wrapper .fitler_buttons .shop2-filter-go:active:before {
  background: rgba(255, 255, 255, 0.3);
}
.filter_wrapper .fitler_buttons .shop2-filter-go ins {
  position: relative;
  text-decoration: none;
  color: #fff;
}
.filter_wrapper .fitler_buttons .shop2-filter-go .filter_result {
  display: inline;
  line-height: auto;
  width: auto;
  padding: 0;
  margin: 0;
  vertical-align: baseline;
  background: none !important;
}
.filter_wrapper .fitler_buttons .filter_reset {
  border: none;
  margin: 0;
  display: block;
  background: #fff;
  position: relative;
  text-align: center;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 20px 11px;
  text-decoration: none;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}
.filter_wrapper .fitler_buttons .filter_reset:hover {
  background: #0c8ac9;
}
.filter_wrapper .fitler_buttons .filter_reset:hover span {
  color: #fff;
}
.filter_wrapper .fitler_buttons .filter_reset:active {
  background: #0c8ac9;
}
.filter_wrapper .fitler_buttons .filter_reset:active:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}
.filter_wrapper .fitler_buttons .filter_reset:active span {
  color: #fff;
}
.filter_wrapper .fitler_buttons .filter_reset span {
  position: relative;
  z-index: 1;
  color: #0c8ac9;
}
.filter_wrapper .filter_price .price_body {
  font-size: 0;
}
.filter_wrapper .filter_price .price_range {
  padding: 0 0 23px;
}
.filter_wrapper .filter_price .price_from {
  font: 12px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  color: #212121;
  float: left;
  margin: -5px 0 0 0;
}
.filter_wrapper .filter_price .price_till {
  font: 12px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  color: #212121;
  float: right;
  margin: -5px 0 0 0;
}
.filter_wrapper .filter_price .small {
  width: 90px !important;
  text-align: center;
}
.filter_wrapper .filter_price .small + .small {
  margin-left: 6px !important;
}
.filter_wrapper .noUi-horizontal {
  height: 6px;
  margin: 0 35px 0 15px;
}
.filter_wrapper .noUi-horizontal.lang-version {
  margin: 0 35px 0 25px;
}
.filter_wrapper .noUi-horizontal:before {
  content: "";
  position: absolute;
  left: 0;
  right: -20px;
  top: 50%;
  margin-top: -1px;
  height: 2px;
  background: #1b1b1b;
}
.filter_wrapper .noUi-horizontal .noUi-origin.noUi-background {
  height: 6px;
  background: #fff;
}
.filter_wrapper .noUi-horizontal .noUi-origin.noUi-background:before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  margin-top: -1px;
  height: 2px;
  background: #000;
}
.filter_wrapper .noUi-horizontal .noUi-connect {
  background: #09538e;
  height: 6px;
}
.filter_wrapper .noUi-horizontal .noUi-handle {
  width: 20px;
  height: 20px;
  left: 0;
  top: 50%;
  margin-top: -10px;
  background: #0c8ac9;
  cursor: pointer;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(40, 33, 104, 0.2);
  transition: all 0.3s ease-in-out;
}
.filter_wrapper .noUi-horizontal .noUi-handle.noUi-handle-lower {
  margin-top: -10px;
}
.site_content_wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f5fafb;
}
@media screen and (max-width: 1580px) {
  .site_wrapper {
    max-width: 1120px;
  }
}
@media screen and (max-width: 1299px) {
  .site_wrapper {
    max-width: 1002px;
  }
}
@media screen and (max-width: 1023px) {
  .site_wrapper {
    padding: 60px 0 0 0;
    max-width: 100%;
  }
}
@media screen and (max-width: 699px) {
  .site_wrapper {
    padding: 52px 0 0 0;
  }
}
@media screen and (max-width: 1580px) {
  .filter_wrapper {
    transform: translate(-560px, 0);
  }
}
@media screen and (max-width: 1299px) {
  .filter_wrapper {
    transform: translate(-501px, 0);
  }
}
@media screen and (max-width: 1180px) {
  .filter_wrapper {
    transform: translate(-435px, 0);
    top: 60px;
  }
}
@media screen and (max-width: 1023px) {
  .filter_wrapper {
    transform: translate(-180px, -20%);
    width: 360px;
    top: 0;
    z-index: 220;
  }
}
@media screen and (max-width: 699px) {
  .filter_wrapper {
    transform: translate(-160px, -20%);
    width: 320px;
  }
}
@media screen and (max-width: 1180px) {
  .site_content_wrapper {
    max-width: 870px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 1023px) {
  .site_content_wrapper {
    max-width: 100%;
    padding: 20px 24px;
  }
}
@media screen and (max-width: 699px) {
  .site_content_wrapper {
    padding: 20px 0;
  }
}
@media screen and (min-width: 1024px) {
  .filter_wrapper.on_scroll {
    top: 0;
  }
}
@media screen and (max-width: 1023px) {
  .filter_wrapper.active {
    transform: translate(-180px, 0);
    width: 360px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.07),
      0 0 0 10000px rgba(255, 255, 255, 0.6);
  }
}
@media screen and (max-width: 699px) {
  .filter_wrapper.active {
    transform: translate(-160px, 0);
    width: 320px;
  }
}
@media screen and (max-width: 1023px) {
  .filter_wrapper .filter_title {
    font-size: 16px;
    line-height: 22px;
    padding: 20px 60px 18px 50px;
    width: auto;
    text-align: left;
  }
}
@media screen and (max-width: 1023px) {
  .filter_wrapper .filter_title .icon1 {
    display: block;
  }
}
@media screen and (max-width: 1023px) {
  .filter_wrapper .filter_title .icon2 {
    display: block;
  }
}
@media screen and (max-width: 1023px) {
  .filter_wrapper .shop2-filter {
    margin: 0 auto;
  }
}
</style>

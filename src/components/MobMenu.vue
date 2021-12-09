<template>
  <div class="fixed_mob_wrapper" :class="{ active: active }">
    <div class="menu_close" @click.stop="disactiveMobMenu"></div>
    <div class="fixed_mob_wr">
      <div class="cab_enter" @click.stop="openAuthForm">Вход в кабинет</div>
      <div class="mob_menu_title">КАТАЛОГ ТОВАРОВ</div>
      <div class="fixed_mob_menu waSlideMenu-nav">
        <div class="waSlideMenu-wrapper">
          <ul class="mob_menu menu-default waSlideMenu-menu">
            <!-- <li class="sublevel">
              <a class="has_sublayer" href="/magazin/folder/polotentsesushiteli"
                >Полотенцесушители</a
              >
              <ul class="waSlideMenu-menu waSlideMenu-inheritedmenu">
                <li class="waSlideMenu-back">
                  <a href="/magazin/folder/polotentsesushiteli">Назад</a>
                </li>
                <li class="parent-item">
                  <a href="/magazin/folder/polotentsesushiteli"
                    >Полотенцесушители</a
                  >
                </li>
                <li class="sublevel">
                  <a class="has_sublayer" href="/magazin/folder/terma">Terma</a>
                  <ul class="waSlideMenu-menu waSlideMenu-inheritedmenu">
                    <li class="waSlideMenu-back">
                      <a href="/magazin/folder/terma">Назад</a>
                    </li>
                    <li class="parent-item">
                      <a href="/magazin/folder/terma">Terma</a>
                    </li>
                    <li>
                      <a href="/magazin/folder/alex-polotencesushitel"
                        >ALEX полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/alex-one-polotencesushitel"
                        >ALEX ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/bone-polotencesushitel"
                        >BONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/bone-one-polotencesushitel"
                        >BONE ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/terma-city-polotencesushitel"
                        >CITY полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/crystal-polotencesushitel"
                        >CRYSTAL полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/dexter-polotencesushitel"
                        >DEXTER полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/diamond-polotencesushitel"
                        >DIAMOND полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/domi-polotencesushitel"
                        >DOMI полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/incorner-polotencesushitel-1"
                        >INCORNER полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/outcorner-polotencesushitel"
                        >OUTCORNER полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/fiona-polotencesushitel"
                        >FIONA полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/jade-m-polotencesushitel"
                        >JADE M полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/kioto-polotencesushitel"
                        >KIOTO полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/kioto-one-polotencesushitel"
                        >KIOTO ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/lena-polotencesushitel"
                        >LENA полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/lima-polotencesushitel"
                        >LIMA полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/lukka-polotencesushitel"
                        >LUKKA полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/mantis-polotencesushitel"
                        >MANTIS полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/marlin-polotencesushitel"
                        >MARLIN полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/mantis-one-polotencesushitel"
                        >MANTIS ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/mike-polotencesushitel"
                        >MIKE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/mike-one-polotencesushitel"
                        >MIKE ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/pola-polotencesushitel"
                        >POLA полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/pola-one-polotencesushitel"
                        >POLA ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/quadrus-slim-polotencesushitel"
                        >QUADRUS SLIM полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/quadrus-bold-polotencesushitel"
                        >QUADRUS BOLD полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/retro-polotencesushitel"
                        >RETRO полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/retro-s-polotencesushitel"
                        >RETRO S полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/stand-polotencesushitel"
                        >STAND полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/simple-polotencesushitel"
                        >SIMPLE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/spiro-polotencesushitel"
                        >SPIRO полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/tytus-polotencesushitel"
                        >TYTUS полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/vivo-polotencesushitel"
                        >VIVO полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/warp-polotencesushitel"
                        >WARP полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/wind-polotencesushitel"
                        >WIND полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/zig-zag-polotencesushitel"
                        >ZIG ZAG полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/aero-v-dizajn-radiator"
                        >AERO V Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/aero-h-dizajn-radiator"
                        >AERO H Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/aero-hg-dizajn-radiator"
                        >AERO HG Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/angus-dw-dizajn-radiator"
                        >ANGUS DW Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/angus-h-dizajn-radiator"
                        >ANGUS H Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/angus-v-dizajn-radiator"
                        >ANGUS V Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/cyklon-h-dizajn-radiator"
                        >CYKLON V дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/cyklon-h"
                        >CYKLON H дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a
                        href="/magazin/folder/case-slim-panel-beton-dizajn-radiator"
                        >CASE SLIM панель бетон Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a
                        href="/magazin/folder/case-slim-panel-zerkalo-dizajn-radiator"
                        >CASE SLIM панель зеркало Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a
                        href="/magazin/folder/case-slim-panel-pechat-risunok-na-stekle-dizajn-radiator"
                        >CASE SLIM панель печать (рисунок) на стекле Дизайн
                        радиатор</a
                      >
                    </li>
                    <li>
                      <a
                        href="/magazin/folder/case-slim-panel-steklo-dizajn-radiator"
                        >CASE SLIM панель стекло Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a
                        href="/magazin/folder/case-slim-panel-metall-dizajn-radiator"
                        >CASE SLIM панель металл Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/cene-dizajn-radiator"
                        >CАNE Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/delfin-dizajn-radiator-1"
                        >DELFIN дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/easy-polotencesushitel"
                        >EASY дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/easy-one-dizajn-radiator"
                        >EASY ONE дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/michelle-dizajn-radiator"
                        >MICHELLE Дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/hex-dizajn-radiator"
                        >HEX дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/iron-d-dizajn-radiator"
                        >IRON D дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/iron-s-dizajn-radiatory"
                        >IRON S дизайн радиаторы</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/intra-dizajn-radiator"
                        >INTRA дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/intra-m-dizajn-radiator"
                        >INTRA M дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/vipera-dizajn-radiator"
                        >VIPERA дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/vipera-one-dizajn-radiator"
                        >VIPERA ONE полотенцесушитель</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/nemo-dizajn-radiator"
                        >NEMO дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/passo-dizajn-radiator"
                        >PASSO дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/perla-dizajn-radiator"
                        >PERŁA дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/plc-dizajn-radiator"
                        >PLC дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/pajak-dizajn-radiator"
                        >PAJĄK дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/pier-dizajn-radiator"
                        >PIER дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/ribbon-dizajn-radiator"
                        >RIBBON дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/sherwood-dizajn-radiator"
                        >SHERWOOD дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/triga-dizajn-radiator"
                        >TRIGA дизайн радиатор</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/tune-dizajn-radiator"
                        >TUNE дизайн радиатор</a
                      >
                    </li>
                  </ul>
                </li>
                <li class="sublevel">
                  <a
                    class="has_sublayer"
                    href="/magazin/folder/aksessuary-dlya-polotencesushitelej"
                    >Аксессуары для полотенцесушителей</a
                  >
                  <ul class="waSlideMenu-menu waSlideMenu-inheritedmenu">
                    <li class="waSlideMenu-back">
                      <a
                        href="/magazin/folder/aksessuary-dlya-polotencesushitelej"
                        >Назад</a
                      >
                    </li>
                    <li class="parent-item">
                      <a
                        href="/magazin/folder/aksessuary-dlya-polotencesushitelej"
                        >Аксессуары для полотенцесушителей</a
                      >
                    </li>
                    <li><a href="/magazin/folder/kryuchki">Крючки</a></li>
                    <li><a href="/magazin/folder/veshalki">Вешалки</a></li>
                    <li><a href="/magazin/folder/polochki">Полочки</a></li>
                  </ul>
                </li>
                <li class="sublevel">
                  <a
                    class="has_sublayer"
                    href="/magazin/folder/ventilya-i-adaptery"
                    >Вентиля и адаптеры</a
                  >
                  <ul class="waSlideMenu-menu waSlideMenu-inheritedmenu">
                    <li class="waSlideMenu-back">
                      <a href="/magazin/folder/ventilya-i-adaptery">Назад</a>
                    </li>
                    <li class="parent-item">
                      <a href="/magazin/folder/ventilya-i-adaptery"
                        >Вентиля и адаптеры</a
                      >
                    </li>
                    <li>
                      <a href="/magazin/folder/perehodniki">Переходники</a>
                    </li>
                    <li>
                      <a href="/magazin/folder/termogolovki">Термоголовки</a>
                    </li>
                    <li>
                      <a href="/magazin/folder/maskirovochnyj-element"
                        >Маскировочный элемент</a
                      >
                    </li>
                    <li><a href="/magazin/folder/ventilya">Вентиля</a></li>
                  </ul>
                </li>
              </ul>
            </li> -->
          </ul>
        </div>
      </div>
    </div>
    <div class="fixed_mob2_wr">
      <nav class="menu_top_wrapper mobile">
        <ul class="menu-default menu_top">
          <li><router-link :to="'/magazin/'">Главная</router-link></li>
          <li><router-link :to="'/magazin/about'">О компании</router-link></li>

          <li><router-link :to="'/magazin/news'">Новости</router-link></li>

          <li>
            <router-link :to="'/magazin/kak-oformit-zakaz'"
              >Как оформить заказ</router-link
            >
          </li>
          <li><router-link :to="'/magazin/kontakty'">Контакты</router-link></li>
        </ul>
      </nav>
      <nav class="bot_menu_wr mobile">
        <ul class="menu-default bot_menu">
          <li><router-link :to="'/magazin/dostavka'">Доставка</router-link></li>
          <li><router-link :to="'/magazin/oplata'">Оплата</router-link></li>
          <li><router-link :to="'/magazin/otzyvy'">Отзывы</router-link></li>
          <li>
            <router-link :to="'/magazin/napishite-nam'"
              >Напишите нам</router-link
            >
          </li>
          <li>
            <router-link :to="'/magazin/sitemap'">Карта сайта</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: ["active"],
  computed: {
    menu() {
      return this.$store.state.menu;
    },
  },
  methods: {
    disactiveMobMenu: function () {
      this.$emit("disactiveMobMenu");
    },
    openAuthForm: function () {
      this.$emit("openAuthForm");
    },
  },
};
</script>
<style scoped lang="scss">
.fixed_mob_wrapper {
  display: none;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 360px;
  overflow: hidden;
  overflow-y: auto;
  background: #fff;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.07),
    0 0 0 10000px rgba(255, 255, 255, 0.6);
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  transform: translateX(-360px);
  .menu_close {
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 60px;
    z-index: 5;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
      50% no-repeat;
  }
  .cab_enter {
    display: block;
    padding: 23px 80px 20px 56px;
    color: #0c8ac9;
    font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
    height: 60px;
    text-transform: uppercase;
    position: relative;
    box-sizing: border-box;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2220px%22%20height%3D%2221px%22%20%20viewBox%3D%220%200%2020%2021%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M2%2020.1C2%2016.83%203.86%2016%209.53%2016h1c5.65%200%207.5.83%207.5%204.1a1%201%200%200%200%201%201%201%201%200%200%200%201-1c0-4.82-2.87-6.1-9.5-6.1h-1C2.88%2014%200%2015.28%200%2020.1a1%201%200%200%200%201%201%201%201%200%200%200%201-1zm8.03-8.1a6%206%200%201%200-.01-12.01A6%206%200%200%200%2010.03%2012zm0-10a4%204%200%201%201%200%208%204%204%200%200%201%200-8z%22%2F%3E%3C%2Fsvg%3E")
      20px 20px no-repeat;
  }
  .mob_menu_title {
    color: #fff;
    font: 20px/24px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
    text-align: center;
    background: #0c8ac9;
    padding: 33px 20px;
    text-transform: uppercase;
  }
  .fixed_mob2_wr {
    background-image: linear-gradient(110deg, #00668f 0%, #033673 100%);
  }
  .bot_menu_wr.mobile {
    padding: 0 55px 20px;
    li {
      display: block;
      a {
        color: #fff;
        text-decoration: none;
        text-transform: uppercase;
        font: 14px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        padding: 10px 0;
        display: block;
      }
    }
  }
  .mob_menu {
    width: 260px;
    margin: 0 auto;
    background: #fff;
    > li {
      border-bottom: 1px solid #eee8ef;
      > a {
        display: block;
        color: #212121;
        font: 16px/23px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        padding: 16px 26px 14px 6px;
        position: relative;
      }
      ul {
        background: #fff;
        .waSlideMenu-back {
          border: none;
          margin: 0;
          a {
            color: #0c8ac9;
            font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
              sans-serif;
            padding: 21px 80px 22px 56px;
            text-transform: uppercase;
            text-decoration: none;
            display: block;
            position: relative;
            height: 60px;
            box-sizing: border-box;
          }
          a:before {
            position: absolute;
            content: "";
            left: 21px;
            top: 21px;
            width: 8px;
            height: 14px;
            transform: rotate(180deg);
            background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
              0 0 no-repeat;
          }
          .parent-item {
            margin: 0;
            border: none;
            a {
              display: block;
              padding: 33px 60px 33px 55px;
              text-decoration: none;
              text-transform: uppercase;
              font: 20px/24px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
                sans-serif;
              color: #fff;
              background: #0c8ac9;
              position: relative;
            }
          }
        }
        li {
          display: block;
          margin: 0 50px;
          border-bottom: 1px solid #eee8ef;
          > a {
            display: block;
            color: #212121;
            font: 16px/23px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
              sans-serif;
            text-decoration: none;
            text-transform: uppercase;
            padding: 16px 26px 14px 6px;
            position: relative;
          }
          a {
            display: block;
            color: #212121;
            font: 16px/23px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
              sans-serif;
            text-decoration: none;
            text-transform: uppercase;
            padding: 16px 26px 14px 6px;
            position: relative;
          }
          ul {
            top: 0 !important;
          }
        }
        li.sublevel > a:before {
          position: absolute;
          right: 10px;
          top: 50%;
          content: "";
          margin-top: -5px;
          width: 6px;
          height: 10px;
          background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
            0 0 no-repeat;
        }
        li:last-child {
          border: none;
        }
      }
      ul.waSlideMenu-inheritedmenu {
        top: -150px;
      }
      .parent-item {
        margin: 0;
        border: none;
        a {
          display: block;
          padding: 33px 60px 33px 55px;
          text-decoration: none;
          text-transform: uppercase;
          font: 20px/24px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
            sans-serif;
          color: #fff;
          background: #0c8ac9;
          position: relative;
        }
      }
    }
    > li:last-child {
      border: none;
    }
    > li.sublevel > a:before {
      position: absolute;
      right: 10px;
      top: 50%;
      content: "";
      margin-top: -5px;
      width: 6px;
      height: 10px;
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
}
.fixed_mob_wrapper.active {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}
.menu_top_wrapper {
  position: relative;
  padding: 22px 25px;
  box-sizing: border-box;
  width: 100%;
  z-index: 1;
  max-width: 1334px;
  margin: 0 auto;
  .menu_top {
    text-align: right;
    position: relative;
    > li {
      vertical-align: top;
      display: inline-block;
      > a {
        position: relative;
        padding: 12px 8px;
        display: block;
        text-decoration: none;
        text-transform: uppercase;
        font: 14px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        color: #fff;
        transition: all 0.3s;
      }
      > a:before {
        position: absolute;
        content: "";
        left: 50%;
        right: 50%;
        bottom: 0;
        opacity: 0;
        visibility: hidden;
        background: #fff;
        transition: all 0.3s;
        height: 1px;
      }
      > a:hover,
      > a.s3-menu-allin-open {
        color: #0c8ac9;
      }
      > a:hover:before,
      > a.s3-menu-allin-open:before {
        opacity: 1;
        visibility: visible;
        background: #0c8ac9;
        left: 0;
        right: 0;
      }
    }
  }
}
.menu_top_wrapper.mobile {
  display: block;
  padding: 20px 50px 12px;
  .menu_top {
    text-align: left;
    > li {
      display: block;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
}
.waSlideMenu-nav {
  position: relative;
}
.waSlideMenu-wrapper {
  left: 0;
  position: relative;
  top: 0;
}
.waSlideMenu-menu {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: inherit;
  left: 0;
}
@media screen and (max-width: 1580px) {
  .menu_top_wrapper {
    max-width: 1120px;
  }
}
@media screen and (max-width: 1180px) {
  .menu_top_wrapper {
    max-width: 870px;
    margin: 0 auto;
    padding: 8px 20px 6px;
  }
}
@media screen and (max-width: 1023px) {
  .fixed_mob_wrapper {
    display: block;
    z-index: 210;
    width: 320px;
  }
  .menu_top_wrapper {
    display: none;
  }
}
@media screen and (max-width: 699px) {
  .fixed_mob_wrapper {
    width: 320px;
    .menu_close {
      width: 52px;
      height: 52px;
    }
    .cab_enter {
      padding: 18px 80px 17px 56px;
      height: 52px;
      background-position: 15px 15px;
    }
    .mob_menu > li {
      ul.waSlideMenu-inheritedmenu {
        top: -142px;
      }
      ul {
        .waSlideMenu-back {
          a {
            padding: 18px 80px 17px 56px;
            height: 52px;
          }
          a:before {
            top: 19px;
          }
        }
      }
    }
  }
}
</style>

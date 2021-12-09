<template>
  <footer role="contentinfo " class="site_footer">
    <div class="site_footer_in" :class="{ slide: slide }">
      <nav class="bot_menu_wr">
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
      <div class="bot_blocks_wrap clear-self">
        <div class="left_block">
          <nav class="bot_menu2_wr">
            <ul class="menu-default bot_menu2">
              <li class="opened active">
                <router-link :to="'/magazin/'">Главная</router-link>
              </li>
              <li>
                <router-link :to="'/magazin/About'">О компании</router-link>
              </li>
              <li><router-link :to="'/magazin/akcii'">Акции</router-link></li>
              <li><router-link :to="'/magazin/news'">Новости</router-link></li>
              <li>
                <router-link :to="'/magazin/servisnyy-tsentr'"
                  >Сервисный центр</router-link
                >
              </li>
              <li>
                <router-link :to="'/magazin/kak-oformit-zakaz'"
                  >Как оформить заказ</router-link
                >
              </li>
              <li>
                <router-link :to="'/magazin/kontakty'">Контакты</router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="mid_block">
          <div class="f_phones_wr">
            <div class="f_phones_title">Телефон:</div>
            <div class="f_phones_body">
              <div>
                <a :href="'tel:' + companyData.firstPhone">{{
                  companyData.firstPhone
                }}</a>
              </div>
              <div>
                <a :href="'tel:' + companyData.lastPhone">{{
                  companyData.lastPhone
                }}</a>
              </div>
            </div>
            <div class="f_time_block">
              (с {{ companyData.startTime }} до {{ companyData.endTime }} без
              выходных)
            </div>
          </div>
          <div class="f_address_wr">
            <div class="f_address_title">Адрес: {{ companyData.address }}</div>
          </div>
          <div class="social_wrap">
            <div class="social_body">
              <a
                :href="'http://' + companyData.facebook"
                class="social"
                target="_blank "
                ><img
                  src="../assets/facebook_icon.svg "
                  alt="Facebook"
                  style="width: 25px; height: 25px"
              /></a>
              <a
                :href="'http://' + companyData.instagram"
                class="social"
                target="_blank "
                ><img
                  src="../assets/instagram.svg "
                  alt="Instagram"
                  style="width: 25px; height: 25px"
              /></a>
              <a
                :href="'skype:' + companyData.skypeUser"
                class="social"
                target="_blank "
                ><img
                  src="../assets/skype.svg "
                  alt="Skype"
                  style="width: 25px; height: 25px"
              /></a>
              <a
                :href="'http://' + companyData.twitter"
                class="social"
                target="_blank "
                ><img
                  src="../assets/twitter.svg "
                  alt="Twitter"
                  style="width: 25px; height: 25px"
              /></a>
            </div>
          </div>
        </div>
        <div class="right_block">
          <div class="counters_block"></div>
          <div class="site_name_bottom">
            Copyright © 2019 - {{ date }} TeploVann
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: ["slide"],
  name: "Footer",
  computed: {
    date: function () {
      return new Date().getFullYear();
    },
    companyData: function () {
      return this.$store.state.companyData;
    },
  },
};
</script>
<style scoped lang="scss">
.site_footer {
  position: relative;
  background: #fff;
  min-height: 100px;
  max-width: 1334px;
  margin: 0 auto;
  width: 100%;
  flex: none;
  padding: 0 0 45px;
  .site_footer_in {
    max-width: 1040px;
    margin: 0 auto;
    transition: transform 0.3s;
  }
  .bot_menu_wr {
    text-align: center;
    padding: 0 0 48px;
    .bot_menu {
      font-size: 0;
      display: inline-block;
      vertical-align: top;
      border-bottom: 1px solid #eee8ef;
      li {
        display: inline-block;
        vertical-align: top;
        margin: 0 6px;
        a {
          font: 16px/26px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
            sans-serif;
          padding: 11px 7px 8px;
          color: #212121;
          text-decoration: none;
          display: block;
          position: relative;
        }
        a:before {
          position: absolute;
          content: "";
          left: 50%;
          right: 50%;
          bottom: -1px;
          opacity: 0;
          visibility: hidden;
          height: 1px;
          background: #0c8ac9;
          transition: all 0.3s;
        }
        a:hover {
          color: #0c8ac9;
        }
        a:hover:before {
          right: 0;
          left: 0;
          opacity: 1;
          visibility: visible;
        }
      }
      li:last-child {
        margin-right: 0;
      }
    }
  }
  .bot_blocks_wrap {
    .left_block {
      float: left;
      width: 255px;
      margin: 0 84px 0 0;
    }
    .bot_menu2 li {
      display: block;
      a {
        display: inline-block;
        vertical-align: top;
        text-decoration: none;
        color: #212121;
        font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
        letter-spacing: 0.1px;
        padding: 8px 0 7px;
        transition: all 0.3s;
      }
      a:hover {
        color: #0c8ac9;
      }
    }
    .mid_block {
      float: left;
      width: 378px;
      padding: 3px 0 0 0;
      .f_phones_wr {
        padding: 0 0 20px;
      }
      .f_phones_title {
        color: #212121;
        font: 16px/21px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
      }
      .f_phones_body {
        color: #212121;
        font: 14px/18px "noto_sans-r", Arial, Helvetica, sans-serif;
        div {
          display: inline-block;
          vertical-align: top;
          a {
            color: inherit;
            cursor: text;
            text-decoration: none;
          }
        }
        div + div {
          padding-left: 10px;
        }
      }
      .f_time_block {
        color: #212121;
        font: 14px/18px "noto_sans-r", Arial, Helvetica, sans-serif;
      }
      .f_address_wr {
        padding: 0 0 16px;
      }
      .f_address_title {
        color: #212121;
        font: 16px/21px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
      }
      .f_address {
        color: #212121;
        font: 14px/18px "noto_sans-r", Arial, Helvetica, sans-serif;
      }
      .social_title {
        color: #212121;
        font: 16px/21px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        padding: 0 0 16px;
      }
      .social_body {
        .social {
          display: inline-block;
          vertical-align: middle;
          width: 21px;
          text-decoration: none;
          margin: 0 7px 0 0;
          img {
            border: none;
          }
        }
        .social:last-child {
          margin-right: 0;
        }
      }
    }
    .right_block {
      float: right;
      width: 240px;
      padding: 20px 0 0 0;
      text-align: right;
    }
    .counters_block {
      margin: 0 0 14px;
    }
    .site_name_bottom {
      color: #000;
      font: 12px/1.2 "noto_sans-r", Arial, Helvetica, sans-serif;
      padding: 0 0 14px;
    }
    .site-copyright {
      font: 12px/1.2 "noto_sans-r", Arial, Helvetica, sans-serif;
      color: #000;
      span {
        font-size: 12px !important;
      }
      a {
        color: #000;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
  }
}
@media screen and (max-width: 1580px) {
  .site_footer {
    .site_footer_in {
      max-width: 830px;
    }
    .bot_blocks_wrap {
      .left_block {
        margin: 0 30px 0 0;
        width: 215px;
      }
      .mid_block {
        width: 310px;
      }
    }
  }
}

@media screen and (min-width: 1300px) {
  .site_footer .site_footer_in.slide {
    transform: translateX(112px);
  }
}

@media screen and (max-width: 1180px) {
  .site_footer {
    max-width: 870px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 1023px) {
  .site_footer {
    max-width: 100%;
    padding: 30px 64px 45px;
    box-sizing: border-box;
    .bot_menu_wr {
      display: none;
    }
    .bot_blocks_wrap {
      .left_block {
        display: none;
      }
      .mid_block {
        width: 380px;
        padding: 0;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .site_footer .bot_blocks_wrap .mid_block {
    width: 300px;
  }
}
@media screen and (max-width: 699px) {
  .site_footer {
    padding: 25px 20px 60px;
    .bot_blocks_wrap {
      .mid_block {
        float: none;
        width: auto;
        text-align: center;
        padding: 0 0 40px;
      }
      .right_block {
        width: auto;
        text-align: center;
        float: none;
        padding: 0;
      }
      .site_name_bottom {
        font-size: 13px;
      }
    }
  }
}
</style>

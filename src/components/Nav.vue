<template>
  <nav class="menu_top_wrapper desktop">
    <ul class="menu-default menu_top">
      <li
        v-for="link of links"
        :key="link.name"
        :class="{
          'opened active': currentPage === link.link,
        }"
      >
        <router-link :to="link.link" @click="close"
          >{{ link.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  data: () => ({
    links: [
      {
        name: "Главная",
        link: "/magazin/",
      },
      {
        name: "О компании",
        link: "/magazin/About",
      },

      {
        name: "Новости",
        link: "/magazin/news",
      },

      {
        name: "Как оформить заказ",
        link: "/magazin/kak-oformit-zakaz",
      },
      {
        name: "Контакты",
        link: "/magazin/kontakty",
      },
    ],
  }),
  computed: {
    currentPage() {
      return this.$route.fullPath;
    },
  },
  methods: {
    close: function () {
      this.$emit("close");
    },
  },
};
</script>
<style scoped lang="scss">
ol,
ul {
  margin-top: 0px;
  margin-bottom: 0px;
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
      ul li {
        display: block;
        a {
          display: block;
          text-transform: uppercase;
          text-decoration: none;
        }
        ul li a {
          padding-left: 35px;
        }
      }
    }
    > li.s3-menu-allin-active {
      > a {
        color: #0c8ac9;
      }
      > a:before {
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
      > a {
        padding: 13px 40px 11px 5px;
        font-size: 14px;
        line-height: 19px;
      }
    }
  }
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
@media screen and (min-width: 1024px) {
  .menu_top_wrapper .menu_top > li ul {
    display: none;
    position: absolute;
    width: 164px;
    text-align: left;
    background: #fff;
    border-radius: 1px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07), inset 0 1px 0 #0c8ac9;
    li {
      position: relative;
      a {
        color: #212121;
        font: 13px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
        letter-spacing: 0.09px;
        padding: 9px 12px 8px 12px;
        position: relative;
      }
      a:hover {
        background: #0c8ac9;
        color: #fff;
      }
      ul {
        left: 100%;
        top: 0;
        li ul {
          left: auto;
          right: 100%;
          top: 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .menu_top_wrapper {
    display: none;
    .menu_top > li ul {
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      li {
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        a {
          padding: 13px 40px 11px 25px;
          font-size: 14px;
          font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica,
            sans-serif;
          line-height: 19px;
          color: #fff;
          position: relative;
          transition: all 0.3s;
        }
        a:before {
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
        a:hover {
          color: #0c8ac9;
        }
        a:hover:before {
          opacity: 1;
          visibility: visible;
          background: #0c8ac9;
          left: 0;
          right: 0;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>

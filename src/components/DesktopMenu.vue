<template>
  <div
    class="fixed_menu_wrapper"
    @click.stop="toggleClass"
    :class="{ active: categoryStatus }"
  >
    <div class="fixed_menu_in">
      <nav class="fixed_menu_wr">
        <div class="menu_title">Каталог товаров</div>
        <ul class="fixed_menu menu-default">
          <li v-for="item of menu" :key="item.name" class="sublevel">
            <router-link
              :to="'/cat' + item.link"
              class="normal"
              @click.stop="close"
              @mouseenter="onHover($event)"
              @mouseleave="ofHover($event)"
              >{{ item.name }} <span class="open_ul"></span
            ></router-link>

            <div
              :key="item.name"
              class="sub"
              :style="{
                height: '907px',
                top: '48px',
                left: '226px',
                display: 'none',
              }"
              @mouseenter="onHover($event)"
              @mouseleave="ofHover($event)"
            >
              <ul>
                <li v-for="subItem of item.sublevel" :key="subItem.name">
                  <router-link
                    :to="'/cat' + item.link + subItem.link"
                    @click.stop="close"
                    >{{ subItem.name }}
                  </router-link>

                  <div class="sub" v-if="subItem.subSubLevel !== null">
                    <ul>
                      <li
                        v-for="subSubItem of subItem.subSubLevel"
                        :key="subSubItem.name"
                      >
                        <router-link
                          :to="'/cat' + item.link + subSubItem.link"
                          @click.stop="close"
                          >{{ subSubItem.name }}
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  props: ["categoryStatus"],
  data: () => ({
    display: "none",
  }),
  computed: {
    menu() {
      return this.$store.state.menu;
    },
  },
  methods: {
    onHover: function (event) {
      event.target.parentElement.children[1].style.display = "block";
    },
    ofHover: function (event) {
      event.target.parentElement.children[1].style.display = "none";
    },
    close: function () {
      this.$emit("close");
    },
  },
};
</script>
<style scoped lang="scss">
.fixed_menu_wrapper {
  position: fixed;
  left: 50%;
  top: 90px;
  bottom: 0;
  min-height: 100%;
  width: 0;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  overflow: visible;
  z-index: 9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.14);
  transition: all 0.3s;
  transform: translate(-667px, 0);
  .fixed_menu_in {
    height: 100%;
    width: 226px;
    overflow-y: auto;
    transition: opacity 0.1s;
    opacity: 0;
    visibility: hidden;
  }
  .menu_title {
    font: 18px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: -0.18px;
    color: #09538e;
    padding: 36px 20px 32px;
    box-shadow: inset 0 -1px 0 #e3e3e3;
    position: relative;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
  }
  .fixed_menu_wr .fixed_menu {
    > li {
      > a {
        color: #212121;
        font: 16px/23px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        display: block;
        position: relative;
        text-decoration: none;
        text-transform: uppercase;
        padding: 15px 36px 14px 20px;
      }
      > a:hover,
      > a.over {
        color: #fff;
        background: #0c8ac9;
        .open_ul {
          right: 5px;
          background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
            50% no-repeat;
        }
      }
      > .sub {
        display: none;
        position: absolute;
        left: 100% !important;
        top: 0 !important;
        width: 1108px;
        overflow-y: auto;
        background: #fff;
        box-shadow: 0 4px 8px rgba(6, 44, 81, 0.14);
        padding: 35px 34px 46px 34px;
        box-sizing: border-box;
        > ul > li {
          display: inline-block;
          vertical-align: top;
          width: 170px;
          margin: 0 40px 10px 0;
          > a {
            color: #212121;
            font: 16px/23px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
              sans-serif;
            text-decoration: none;
            text-transform: uppercase;
            display: inline-block;
            vertical-align: top;
          }
          .sub {
            display: block !important;
            ul {
              margin-top: 10px;
            }
            li {
              display: block;
              a {
                display: block;
                color: #212121;
                font: 15px/28px "fira_sans_extra_condensed-r", Arial, Helvetica,
                  sans-serif;
                text-decoration: none;
                &:hover {
                  text-decoration: underline;
                }
              }
            }
          }
        }
      }
    }
    li {
      display: block;

      .open_ul {
        position: absolute;
        right: 11px;
        top: 50%;
        margin-top: -9px;
        width: 18px;
        height: 18px;
        transition: all 0.3s;
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
          50% no-repeat;
      }
    }
    li.opened_level {
      a {
        color: #fff;
        background: #0c8ac9;
      }
      .open_ul {
        right: 5px;
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%226px%22%20height%3D%2210px%22%20%20viewBox%3D%220%200%206%2010%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M5.680%2C5.689%20L1.690%2C9.683%20C1.303%2C10.075%200.671%2C10.077%200.280%2C9.689%20C0.278%2C9.687%200.276%2C9.685%200.274%2C9.683%20C-0.117%2C9.295%20-0.120%2C8.663%200.268%2C8.271%20C0.270%2C8.269%200.272%2C8.267%200.274%2C8.265%20L3.566%2C4.980%20L0.274%2C1.695%20C-0.117%2C1.307%20-0.120%2C0.675%200.268%2C0.283%20C0.270%2C0.281%200.272%2C0.279%200.274%2C0.278%20C0.662%2C-0.114%201.294%2C-0.116%201.685%2C0.272%20C1.687%2C0.274%201.689%2C0.276%201.690%2C0.278%20L5.680%2C4.271%20C5.870%2C4.471%205.970%2C4.721%205.970%2C4.980%20L5.970%2C4.980%20C5.970%2C5.240%205.870%2C5.490%205.680%2C5.689%20Z%22%2F%3E%3C%2Fsvg%3E")
          50% no-repeat;
      }
    }
  }
}
.fixed_menu_wrapper.on_scroll {
  top: 0;
}
.fixed_menu_wrapper.active {
  opacity: 1;
  visibility: visible;
  width: 226px;
  z-index: 100;
  .fixed_menu_in {
    opacity: 1;
    visibility: visible;
  }
  .menu_title {
    opacity: 1;
    visibility: visible;
  }
}
@media screen and (min-width: 1581px) {
  .fixed_menu_wrapper
    .fixed_menu_wr
    .fixed_menu
    > li
    > .sub
    > ul
    > li:nth-child(5n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 1580px) {
  .fixed_menu_wrapper {
    transform: translate(-560px, 0);
    .fixed_menu_wr {
      .fixed_menu > li > .sub {
        width: 894px;
        padding: 35px 20px 46px;
        > ul > li {
          width: 155px;
          margin: 0 15px 10px 0;
        }
      }
    }
  }
}
@media screen and (max-width: 1299px) {
  .fixed_menu_wrapper {
    transform: translate(-501px, 0);
  }
}
@media screen and (min-width: 1181px) {
  .fixed_menu_wrapper
    .fixed_menu_wr
    .fixed_menu
    > li
    > .sub
    > ul
    > li:nth-child(4n) {
    margin-right: 0;
  }
}
@media screen and (max-width: 1180px) {
  .fixed_menu_wrapper {
    transform: translate(-435px, 0);
    top: 60px;
    .fixed_menu_wr .fixed_menu > li > .sub {
      width: 644px;
      padding: 20px 20px 20px;
      > ul > li:nth-child(3n) {
        margin-right: 0;
      }
    }
    .menu_title {
      padding: 21px 20px 17px;
    }
  }
}
@media screen and (max-width: 1023px) {
  .fixed_menu_wrapper {
    display: none !important;
  }
}
</style>

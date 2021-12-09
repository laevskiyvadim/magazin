<template>
  <div
    class="cart_bl_wrapper"
    @click="openMob"
    :class="{ opened: mobCart, active: !mobCart }"
  >
    <div
      class="cart_bl_wr opened"
      v-if="getCountAndCost.count > 0"
      :class="{ active: mobCart }"
    >
      <div id="shop2-cart-preview">
        <router-link :to="'/cart'" class="cart_bl_icon active">
          <span>{{ getCountAndCost.count }}</span>
        </router-link>
        <div class="cart_close_icon" @click.stop="closeMob"></div>
        <div class="shop2-block cart-preview opened">
          <div class="cart_body">
            <div class="cart_pr_amount">
              {{ getCountAndCost.count }}<span> шт</span>
            </div>
            <div class="cart_bl_sum">
              {{ getCountAndCost.cost }} <span>руб.</span>
            </div>
            <div class="cart_link_wr">
              <router-link class="cart_bl_link" :to="'/cart'"
                >Оформить заказ</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <!-- Cart Preview -->
    </div>
    <div
      class="cart_bl_wr"
      v-else
      :class="{ active: getHoverClass }"
      @mouseover="activeHoverClass()"
      @mouseleave="disactiveHoverClass()"
    >
      <div id="shop2-cart-preview">
        <div class="cart_bl_icon"></div>
        <div class="cart_close_icon"></div>
        <div class="shop2-block cart-preview">
          <div class="cart_body">
            <div class="empty_cart">ВАША КОРЗИНА ПУСТА</div>
          </div>
        </div>
      </div>
      <!-- Cart Preview -->
    </div>
  </div>
</template>
<script>
export default {
  props: ["mobCart", "count", "sum"],
  data: () => ({ getHoverClass: false }),
  computed: {
    getCountAndCost: function () {
      return this.$store.getters.getCountAndCost;
    },
  },
  methods: {
    disactiveHoverClass: function () {
      this.getHoverClass = false;
    },
    activeHoverClass: function () {
      this.getHoverClass = true;
    },
    openMob: function () {
      this.$emit("openMob");
    },
    closeMob: function () {
      this.$emit("closeMob");
    },
  },
};
</script>
<style lang="scss" scoped>
.fixed_panel_wrapper .cart_bl_wrapper {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  .cart_bl_wr {
    width: 100%;
  }
  #shop2-cart-preview {
    position: relative;
    height: 90px;
    width: 90px;
    font-size: 0;
    transition: all 0.3s;
    .cart-preview {
      position: absolute;
      top: 0;
      left: 100%;
      width: 0;
      opacity: 0;
      transition: all 0.3s;
      visibility: hidden;
      display: inline-block;
      vertical-align: top;
      background: #19bbe1;
      .cart_body {
        opacity: 1;
        visibility: visible;
      }
      .empty_cart {
        color: #fff;
        font: 18px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        padding: 2px 0 0 0;
      }
    }
    .cart_body {
      padding: 32px 20px 32px 20px;
      width: 226px;
      opacity: 0;
      visibility: hidden;
      height: 90px;
      transition: all 0.5s;
      box-sizing: border-box;
    }
    .cart_bl_sum {
      font: 20px/26px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      color: #fff;
      display: inline-block;
      vertical-align: top;
      span {
        font: 16px/1 "noto_sans-r", Arial, Helvetica, sans-serif;
      }
    }
    .cart_link_wr {
      text-align: center;
      .cart_bl_link {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        font-size: 0;
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
          right 13px top 38px no-repeat;
      }
    }
  }
  .cart_bl_icon {
    cursor: pointer;
    height: 90px;
    width: 90px;
    display: inline-block;
    vertical-align: top;
    transition: all 0.3s;
    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2223px%22%20height%3D%2226px%22%20%20viewBox%3D%220%200%2023%2026%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%2325c6ec%22%20d%3D%22M2.39%209.52C2.6%207.55%204.23%206%206.09%206H8V4a4%204%200%200%201%208%200v2h1.91c1.86%200%203.49%201.55%203.7%203.52l1.37%2012.62c.22%202.1-1.25%203.86-3.23%203.86H4.25c-1.98%200-3.45-1.76-3.23-3.86zm.62%2012.83c-.1.95.48%201.65%201.24%201.65h15.5c.76%200%201.34-.7%201.24-1.65L19.62%209.74c-.1-.98-.9-1.74-1.71-1.74H6.09c-.81%200-1.61.76-1.71%201.74zM10%206h4V4a2%202%200%200%200-2-2%202%202%200%200%200-2%202z%22%2F%3E%3C%2Fsvg%3E");
    background-position: 50% 50%;
    background-repeat: no-repeat;
    text-align: center;
  }
  .cart_bl_wr.active {
    .cart_bl_icon {
      background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2223px%22%20height%3D%2226px%22%20%20viewBox%3D%220%200%2023%2026%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M2.39%209.52C2.6%207.55%204.23%206%206.09%206H8V4a4%204%200%200%201%208%200v2h1.91c1.86%200%203.49%201.55%203.7%203.52l1.37%2012.62c.22%202.1-1.25%203.86-3.23%203.86H4.25c-1.98%200-3.45-1.76-3.23-3.86zm.62%2012.83c-.1.95.48%201.65%201.24%201.65h15.5c.76%200%201.34-.7%201.24-1.65L19.62%209.74c-.1-.98-.9-1.74-1.71-1.74H6.09c-.81%200-1.61.76-1.71%201.74zM10%206h4V4a2%202%200%200%200-2-2%202%202%200%200%200-2%202z%22%2F%3E%3C%2Fsvg%3E");
      background-color: #25c6ec;
      span {
        font-size: 0;
      }
    }
    #shop2-cart-preview .cart-preview {
      opacity: 1;
      visibility: visible;
      width: 226px;
    }
  }
  .cart_close_icon {
    display: none;
  }
  .cart_bl_icon.active {
    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2223px%22%20height%3D%2226px%22%20%20viewBox%3D%220%200%2023%2026%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M2.39%209.52C2.6%207.55%204.23%206%206.09%206H8V4a4%204%200%200%201%208%200v2h1.91c1.86%200%203.49%201.55%203.7%203.52l1.37%2012.62c.22%202.1-1.25%203.86-3.23%203.86H4.25c-1.98%200-3.45-1.76-3.23-3.86zm.62%2012.83c-.1.95.48%201.65%201.24%201.65h15.5c.76%200%201.34-.7%201.24-1.65L19.62%209.74c-.1-.98-.9-1.74-1.71-1.74H6.09c-.81%200-1.61.76-1.71%201.74zM10%206h4V4a2%202%200%200%200-2-2%202%202%200%200%200-2%202z%22%2F%3E%3C%2Fsvg%3E");
    background-color: #25c6ec;
  }
  .cart_bl_wr.opened .cart_bl_icon {
    background-image: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2223px%22%20height%3D%2226px%22%20%20viewBox%3D%220%200%2023%2026%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M2.39%209.52C2.6%207.55%204.23%206%206.09%206H8V4a4%204%200%200%201%208%200v2h1.91c1.86%200%203.49%201.55%203.7%203.52l1.37%2012.62c.22%202.1-1.25%203.86-3.23%203.86H4.25c-1.98%200-3.45-1.76-3.23-3.86zm.62%2012.83c-.1.95.48%201.65%201.24%201.65h15.5c.76%200%201.34-.7%201.24-1.65L19.62%209.74c-.1-.98-.9-1.74-1.71-1.74H6.09c-.81%200-1.61.76-1.71%201.74zM10%206h4V4a2%202%200%200%200-2-2%202%202%200%200%200-2%202z%22%2F%3E%3C%2Fsvg%3E");
    background-color: #25c6ec;
  }
  .cart_bl_wr.opened #shop2-cart-preview {
    .cart-preview {
      opacity: 1;
      visibility: visible;
      width: 226px;
      .cart_body {
        opacity: 1;
        visibility: visible;
      }
    }
    .cart_pr_amount {
      color: #fff;
      font: 20px/26px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      display: inline-block;
      vertical-align: top;
      padding: 0 14px 0 0;
      span {
        font: 16px/1 "noto_sans-r", Arial, Helvetica, sans-serif;
      }
    }
  }
}

@media screen and (max-width: 1180px) {
  .fixed_panel_wrapper .cart_bl_wrapper {
    left: 17px;
    #shop2-cart-preview {
      left: 0;
      height: 60px;
      width: 60px;
      .cart_body {
        padding: 17px 20px 17px 20px;
        height: 60px;
      }
      .cart_link_wr .cart_bl_link {
        background-position: right 13px top 23px;
      }
    }
    .cart_bl_icon {
      width: 60px;
      height: 60px;
    }
  }
}
@media screen and (min-width: 1024px) {
  .fixed_panel_wrapper .cart_bl_wrapper {
    .cart_bl_wr {
      background: rgba(255, 255, 255, 0.0001);
    }
    .cart_bl_wr.active #shop2-cart-preview .cart_link_wr .cart_bl_link {
      left: -90px;
    }
    #shop2-cart-preview .cart-preview:hover {
      background: #25c6ec;
    }
    .cart_bl_wr.opened {
      .cart_bl_icon span {
        font-size: 0;
      }
      #shop2-cart-preview .cart_link_wr .cart_bl_link {
        left: -90px;
      }
    }
  }
}
@media screen and (max-width: 1023px) {
  .fixed_panel_wrapper .cart_bl_wrapper {
    left: auto;
    transition: all 0.3s;
    right: -276px;
    #shop2-cart-preview {
      width: 336px;
      height: auto;
      min-height: 60px;
      .cart-preview {
        width: auto;
        text-align: center;
        position: static;
      }
      .cart_body {
        width: 276px;
        height: auto;
        padding: 17px 81px 17px 20px;
      }
      .cart_link_wr {
        padding: 40px 0 0 0;
        .cart_bl_link {
          display: inline-block;
          vertical-align: top;
          position: relative;
          text-decoration: none;
          padding: 13px 37px 11px 20px;
          color: #212121;
          font: 16px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
            sans-serif;
          text-transform: uppercase;
          border-radius: 1px;
          background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23212121%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
            right 14px top 50% no-repeat #fff;
        }
      }
    }
    .cart_close_icon {
      position: absolute;
      right: 10px;
      top: 10px;
      width: 40px;
      height: 40px;
      display: block;
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
        50% no-repeat;
    }
    .cart_bl_wr.opened #shop2-cart-preview .cart-preview {
      width: 276px;
    }
    .cart_bl_wr.active #shop2-cart-preview .cart-preview {
      width: 276px;
    }
  }
}
@media screen and (max-width: 699px) {
  .fixed_panel_wrapper .cart_bl_wrapper {
    right: -268px;
    #shop2-cart-preview {
      width: 320px;
      min-height: 52px;
      .cart_body {
        padding: 15px 50px 13px 20px;
        width: 268px;
      }
    }
    .cart_bl_icon {
      width: 52px;
      height: 52px;
    }
    .cart_close_icon {
      top: 5px;
      right: 5px;
    }
    .cart_bl_wr.active #shop2-cart-preview .cart-preview {
      width: 268px;
    }
    .cart_bl_wr.opened #shop2-cart-preview .cart-preview {
      width: 268px;
    }
  }
}
</style>

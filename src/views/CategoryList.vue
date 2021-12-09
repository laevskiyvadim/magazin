<template>
  <main role="main" class="site-main">
    <SitePathProduct />
    <h1>{{ catName }}</h1>
    <CategorySort
      @price="ClassProductList('product-list-price')"
      @thumbs="ClassProductList('product-list-thumbs')"
      @simple="ClassProductList('product-list-simple')"
    />

    <div class="prod_list_wrap">
      <div class="product-list">
        <div class="product_list_in" :class="currentClass">
          <!-- thumbs simple price-->
          <ListItem :item="item" v-for="item of info" :key="item.id" />
        </div>
      </div>
    </div>
    <div class="shop2-pagelist">
      <div class="pagelist_mobile">
        <div class="page_prev clone">
          <a href="/magazin/folder/polotentsesushiteli/p/1">пред.</a>
        </div>
        <div class="page_next clone">
          <a href="/magazin/folder/polotentsesushiteli/p/3">след.</a>
        </div>
      </div>
      <div class="page_prev">
        <a href="/magazin/folder/polotentsesushiteli/p/1">пред.</a>
      </div>

      <div class="page_num">
        <a href="/magazin/folder/polotentsesushiteli">1</a>
      </div>
      <div class="page_num">
        <a href="/magazin/folder/polotentsesushiteli/p/1">2</a>
      </div>
      <div class="page_num active_num"><span>3</span></div>
      <div class="page_num">
        <a href="/magazin/folder/polotentsesushiteli/p/3">4</a>
      </div>
      <div class="page_num">
        <a href="/magazin/folder/polotentsesushiteli/p/4">5</a>
      </div>

      <div class="page_num dotts_next"><span>...</span></div>
      <div class="page_last">
        <a href="/magazin/folder/polotentsesushiteli/p/31">32</a>
      </div>

      <div class="page_next">
        <a href="/magazin/folder/polotentsesushiteli/p/3">след.</a>
      </div>
    </div>
  </main>
</template>
<script>
import SitePathProduct from "@/components/App/SitePathProduct.vue";
import CategorySort from "@/components/CategoryList/CategorySort.vue";
import ListItem from "@/components/CategoryList/ListItem.vue";
export default {
  name: "CategoryList",
  data: () => ({
    items: [
      {
        CatName: "INCORNER полотенцесушитель",
        CatLink: "/INCORNER",
        id: 1,
        title: "Terma Alex 1140/500 полотенцесушитель",
        vendor: "TERMA Польша",
        description: `Alex - простой и элегантный прибор. Идеально подойдёт,
                        как в классические, так и современные интерьеры ванных
                        комнат и кухни. Будет всегда радовать своим цветом, и
                        формой. Тепловая мощность: 180-1253 Вт.Возможность
                        использования электронагревателя<br />
                        250 цветов на выбор, а также хром. Быстрая сушка
                        ткани.<br />`,
        price: "15 736 руб.",
        lastPrice: "16 626 руб.",
        firstImg: "/assets/alex_1140_500_ral_9016_sx.png",
        secondImg: "/assets/alex_1140_500_ral_9016_sx_1.png",
      },
    ],
    currentClass: "product-list-thumbs",
  }),
  computed: {
    category: function () {
      return this.$route.params.category;
    },
    info: function (category) {
      return this.$store.getters.getProducts(category);
    },
    catName: function () {
      return this.info[0].CatName;
    },
  },
  methods: {
    ClassProductList: function (item) {
      this.currentClass = item;
    },
  },
  components: { SitePathProduct, CategorySort, ListItem },
};
</script>
<style lang="scss" scoped>
.site-main {
  flex: 1 0 0%;
  order: 1;
  max-width: 100%;
  box-sizing: border-box;
}
.product-list {
  line-height: 0;
  font-size: 0;
  margin: 10px 0;
}
.product_list_in.product-list-thumbs {
  line-height: 1.25;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.product_list_in.product-list-simple {
  line-height: 1.25;
  font-size: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.shop2-pagelist,
.shop2-pagelist li {
  list-style: none;
  line-height: 0;
  font-size: 0;
  padding: 0;
  margin: 0;
}
.shop2-pagelist {
  margin: 20px 0;
  text-align: center;
  div {
    display: inline-block;
    vertical-align: middle;
    font: 14px "noto_sans-r", Arial, Helvetica, sans-serif;
    color: #212121;
    text-align: left;
  }
  .pagelist_mobile {
    display: none;
    width: auto;
    margin: 0 auto 20px;
    .page_prev,
    .page_next {
      display: inline-block;
      width: 94px;
      margin: 0;
    }
    .page_prev + .page_next {
      margin-left: 20px;
    }
  }
  div.page_prev {
    position: relative;
    background: #fff;
    margin: 3px 22px 3px 0;
    transition: all 0.3s;
    box-shadow: inset 0 0 0 2px #0c8ac9;
    a {
      position: relative;
      text-decoration: none;
      display: block;
      width: 84px;
      height: 40px;
      color: #0c8ac9;
      font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      padding: 12px 0 0 37px;
      box-sizing: border-box;
      text-transform: uppercase;
    }
    a:before {
      position: absolute;
      content: "";
      width: 14px;
      height: 8px;
      left: 10px;
      top: 15px;
      transform: rotate(90deg);
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
  div.page_prev:before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.3s;
    background-color: rgba(0, 0, 0, 0.1);
  }
  div.page_prev:hover {
    background: #0c8ac9;
    a {
      color: #fff;
    }
    a:before {
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
  div.page_prev:active {
    box-shadow: none;
    background: #0c8ac9;
    a {
      color: #fff;
    }
    a:before {
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
  div.page_prev:active:before {
    opacity: 1;
    visibility: visible;
  }
  div.page_next {
    position: relative;
    background: #fff;
    margin: 3px 0 3px 22px;
    transition: all 0.3s;
    box-shadow: inset 0 0 0 2px #0c8ac9;
    a {
      position: relative;
      text-decoration: none;
      display: block;
      width: 84px;
      height: 40px;
      color: #0c8ac9;
      font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      padding: 12px 0 0 11px;
      box-sizing: border-box;
      text-transform: uppercase;
    }
    a:before {
      position: absolute;
      content: "";
      width: 14px;
      height: 8px;
      right: 10px;
      top: 15px;
      transform: rotate(-90deg);
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
  div.page_next:before {
    position: absolute;
    content: "";
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.3s;
    background-color: rgba(0, 0, 0, 0.1);
  }
  div.page_next:hover {
    background: #0c8ac9;
    a {
      color: #fff;
    }
    a:before {
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
  div.page_next:active {
    box-shadow: none;
    background: #0c8ac9;
    a {
      color: #fff;
    }
    a:before {
      background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
        0 0 no-repeat;
    }
  }
  div.page_next:active:before {
    opacity: 1;
    visibility: visible;
  }
  div.page_next a:before {
    position: absolute;
    content: "";
    width: 14px;
    height: 8px;
    right: 10px;
    top: 15px;
    transform: rotate(-90deg);
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
      0 0 no-repeat;
  }
  div.page_num {
    margin: 0 12px;
    a {
      color: #212121;
      text-decoration: none;
    }
    a:hover {
      text-decoration: underline;
    }
  }
  div.active_num {
    width: 54px;
    height: 40px;
    text-align: center;
    font: 15px/40px "noto_sans-r", Arial, Helvetica, sans-serif;
    color: #fff;
    background: #0c8ac9;
    margin: 3px 0;
  }
}
@media screen and (max-width: 699px) {
  .site-main {
    padding: 0 12px 20px;
  }
  .product_list_in.product-list-thumbs {
    margin: 0 -12px;
  }
  .product_list_in.product-list-simple {
    margin: 0 -14px;
    display: block;
  }
  .shop2-pagelist .pagelist_mobile {
    display: block;
    text-align: center;
  }
  .shop2-pagelist {
    div.page_prev {
      display: none;
    }
    div.page_next {
      display: none;
    }
  }
}
</style>

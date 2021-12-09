<template>
  <div class="site_container" style="z-index: 2">
    <main role="main " class="site-main">
      <h1>Главная</h1>
      <div class="shop2-cookies-disabled shop2-warning hide"></div>

      <div class="new_shop_main_block">
        <div class="shop2-main-header">Интернет-магазин TeploVann</div>

        <div class="shop2-main-before">
          <p>
            Крупный интернет-магазин, который предлагает большой выбор
            сантехники в Москве, МО, и всех регионах России по доступным ценам.
            Основная задача нашей деятельности - реализация сантехнического
            оборудования, сопутствующих аксессуаров, мебельных комплектов и
            крупной сантехники, представленных популярными брендами. Наш
            ассортимент включает современные душевые кабины, акриловые ванны и
            унитазы, оригинальные полотенцесушители и дизайн радиаторы ведущих
            брендов.
          </p>
        </div>
      </div>
    </main>
    <!-- .site-main -->
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.site_container {
  width: 100%;
  position: relative;
  z-index: 1;
  max-width: 1040px;
  margin: 0 auto;
  transition: transform 0.3s;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px 0 20px;
}

.new_shop_main_block {
  .shop2-main-header {
    background: none;
    padding: 0 0 17px;
    font: 30px/38px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
    color: #212121;
    border-radius: 0;
  }
  .shop2-main-before {
    padding: 0;
    line-height: 24px;
    p {
      margin-top: 0;
    }
  }
}
@media screen and (max-width: 1580px) {
  .site_container {
    max-width: 830px;
  }
}
@media screen and (min-width: 1300px) {
  .site_container.slide {
    transform: translateX(112px);
  }
}
@media screen and (max-width: 1023px) {
  .site_container {
    max-width: 100%;
    padding: 0 40px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 699px) {
  .site_container {
    padding: 0;
  }
  .new_shop_main_block {
    .shop2-main-before {
      padding: 0 12px;
    }
    .shop2-main-header {
      padding: 0 12px 17px;
      font-size: 26px;
      line-height: 37px;
    }
  }
}
</style>

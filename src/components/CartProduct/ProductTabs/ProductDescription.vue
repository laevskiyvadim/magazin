<template>
  <div
    class="desc-area r-tabs-state-default"
    :class="{
      'r-tabs-state-active': descriptions,
      'r-tabs-state-default': !descriptions,
    }"
  >
    <div class="table-wrapper">
      <table border="0" cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <th>Цвет</th>
            <td>белый,RAL,хром</td>
          </tr>
          <tr>
            <th>Срок&nbsp;поставки</th>
            <td>до 45 рабочих дней</td>
          </tr>
          <tr>
            <th>Тип&nbsp;подключения</th>
            <td>электрический / закрытый контур / комбинированный</td>
          </tr>
          <tr>
            <th>Высота,&nbsp;мм</th>
            <td>1140</td>
          </tr>
          <tr>
            <th>Ширина,&nbsp;мм</th>
            <td>500</td>
          </tr>
          <tr>
            <th>Глубина,&nbsp;мм</th>
            <td>120</td>
          </tr>
          <tr>
            <th>Блок&nbsp;управления</th>
            <td>отдельно</td>
          </tr>
          <tr>
            <th>Подключение&nbsp;к&nbsp;сети&nbsp;220&nbsp;В</th>
            <td>справа, слева, скрытое, в розетку</td>
          </tr>
          <tr>
            <th>Мощность&nbsp;ТЭНа,&nbsp;Вт</th>
            <td>600</td>
          </tr>
          <tr>
            <th>Комплектация</th>
            <td>настенные крепления</td>
          </tr>
          <tr>
            <th>Производство</th>
            <td>Польша</td>
          </tr>
          <tr>
            <th>Гарантия,&nbsp;лет</th>
            <td>8</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="shop2-clear-container"></div>
  </div>
</template>
<script>
export default {
  props: ["descriptions"],
};
</script>
<style lang="scss" scoped>
.shop-product-tabs .shop-product-desc .desc-area {
  display: none;
  padding: 38px 20px 42px;
}

@media screen and (max-width: 1023px) {
  .shop-product-tabs .shop-product-desc .desc-area {
    padding: 38px 20px 35px;
  }
}
.shop-product-tabs .shop-product-desc .desc-area.r-tabs-state-active {
  display: block;
}
.shop-product-tabs .shop-product-desc .desc-area {
  display: none;
  padding: 38px 20px 42px;
}

@media screen and (max-width: 1023px) {
  .shop-product-tabs .shop-product-desc .desc-area {
    padding: 38px 20px 35px;
  }
}
.shop-product-tabs
  .shop-product-desc
  .r-tabs-accordion-title.r-tabs-state-active
  a {
  background: #0c8ac9;
  color: #fff;
  box-shadow: inset 0 1px 0 #0c8ac9;
}
.table-wrapper {
  overflow: auto;
}
</style>

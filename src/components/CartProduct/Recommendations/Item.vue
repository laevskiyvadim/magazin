<template>
  <div class="owl-item active" style="width: 200px; margin-right: 10px">
    <div class="shop-kind-item" style="height: 316px">
      <div class="kind-image" style="height: 184px">
        <router-link :to="itemOne.link"
          ><img
            :src="itemOne.img"
            :alt="itemOne.name"
            :title="itemOne.name"
            style="height: 184px"
        /></router-link>
      </div>
      <div class="kind-details">
        <div class="kind-name">
          <router-link :to="itemOne.link">{{ itemOne.name }}</router-link>
        </div>
        <div class="vendor-name">
          <a href="/magazin/vendor/terma-polsha" @click.prevent>{{
            itemOne.producer
          }}</a>
        </div>
        <div class="kind-price">
          <div class="kind_price_wr">
            <div class="price-current">{{ itemOne.cost }} руб.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["itemOne"],
};
</script>
<style lang="scss" scoped>
.owl-item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-height: 1px;
  user-select: none;
}
.shop-group-kinds .shop-kind-item {
  margin: 0 10px 10px 0;
  flex: 0 1 200px;
  width: 200px;
  max-width: 200px;
  box-sizing: border-box;
  background: #fff;
  border: none;
  padding: 8px 8px 18px;
}

@media screen and (min-width: 700px) and (max-width: 767px) {
  .shop-group-kinds .shop-kind-item {
    width: auto;
  }
}

@media screen and (max-width: 699px) {
  .shop-group-kinds .shop-kind-item {
    margin: 0;
  }
}

@media screen and (max-width: 599px) {
  .shop-group-kinds .shop-kind-item {
    width: 160px;
    max-width: 160px;
    flex: 0 1 160px;
    padding: 8px 9px 16px;
  }
}
.shop-group-kinds.owl-loaded .shop-kind-item {
  margin: 0 auto;
}
.shop-group-kinds .shop-kind-item .kind-image {
  font-size: 0;
  margin: 0 0 9px;
  height: 184px !important;
  width: 184px !important;
}

@media screen and (min-width: 700px) and (max-width: 767px) {
  .shop-group-kinds .shop-kind-item .kind-image {
    width: auto !important;
    height: auto !important;
  }
}

@media screen and (max-width: 599px) {
  .shop-group-kinds .shop-kind-item .kind-image {
    width: 142px !important;
    height: 142px !important;
  }
  .shop-group-kinds .shop-kind-item .kind-image a {
    img {
      width: 122px !important;
      height: 142px !important;
    }
  }
}

.shop-group-kinds .shop-kind-item .kind-image a {
  display: block;
}

.shop-group-kinds .shop-kind-item .kind-image.no-image {
  background: #f4f4f4 url("/assets/last_no_image.jpg") 50% 50% / cover no-repeat;
}
.shop-group-kinds .kind-name {
  color: #212121;
  font: 15px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 8px;
}

@media screen and (max-width: 599px) {
  .shop-group-kinds .kind-name {
    font-size: 14px;
  }
}

.shop-group-kinds .kind-name a {
  text-decoration: none;
  color: inherit;
}

.shop-group-kinds .kind-name a:hover {
  text-decoration: underline;
}
.shop-group-kinds .vendor-name {
  color: #6e6e6e;
  font: 12px/17px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 18px;
}

.shop-group-kinds .vendor-name a {
  text-decoration: none;
  color: inherit;
}

.shop-group-kinds .vendor-name a:hover {
  color: #0c8ac9;
}
.shop-group-kinds .kind_price_wr {
  display: block;
}
.shop-group-kinds .kind_price_wr .price-current {
  flex: 1 1 auto;
  color: #212121;
  font: 14px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

.shop-group-kinds .kind_price_wr .price-current strong {
  font-size: 18px;
  line-height: 22px;
  font-weight: normal;
}

@media screen and (max-width: 599px) {
  .shop-group-kinds .kind_price_wr .price-current strong {
    font-size: 16px;
  }
}

.shop-group-kinds .kind_price_wr .price-old {
  flex: 0 1 auto;
  color: #9b9b9b;
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  display: none;
}

.shop-group-kinds .kind_price_wr .price-old.question {
  display: inline-block;
  vertical-align: top;
  background: url("/assets/question-price.png") 100% 50% no-repeat;
  padding: 3px 20px 0 0;
  display: none;
}

.shop-group-kinds .kind_price_wr .price-old strong {
  font-size: 14px;
  font-weight: normal;
  position: relative;
}

.shop-group-kinds .kind_price_wr .price-old strong:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: #f481ab;
}
</style>

<template>
  <div class="top_sl_wrap">
    <div
      class="top_sl_block owl-loaded owl-drag"
      :style="{ width: currentWidth + 'px' }"
    >
      <div class="owl-stage-outer">
        <div
          class="owl-stage"
          :style="{
            transform: `translate3d(-${width}px, 0px, 0px)`,
            transition: 'all 0s ease 0s',
            width: `${currentWidth * maxId}px`,
          }"
        >
          <div
            class="owl-item active"
            :style="{ width: `${currentWidth}px` }"
            v-for="item of carusel"
            :key="item.id"
          >
            <div
              class="top_sl_item"
              style="height: 558px"
              :style="{ width: currentWidth + 'px' }"
            >
              <div
                class="sl_bg"
                :style="{
                  backgroundImage: `url(${item.srcImg})`,
                  width: currentWidth + 'px',
                }"
              ></div>
              <div class="sl_item_wrap">
                <div class="sl_item_title">{{ item.title }}</div>
                <div class="sl_item_desc">{{ item.desc }}</div>
                <div class="sl_item_button">
                  <router-link :to="item.link"
                    ><span>подробнее</span></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="owl-nav">
        <div class="owl-prev" @click="prev">prev</div>
        <div class="owl-next" @click="next">next</div>
      </div>
      <div class="owl-dots">
        <div
          class="owl-dot"
          v-for="item of carusel"
          :key="item.id"
          @click="currentSlide(item.id)"
          :class="{ active: activeId == item.id }"
        >
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    width: 0,
    currentWidth: 1040,
    activeId: 1,
    maxId: 6,
    carusel: [
      {
        id: 1,
        srcImg: "../../magazin/assets/michelle_1620_500_chrome_9005_det.jpg",
        title: "MICHELLE Terma дизайн радиаторы",
        desc: "TERMA MICHELLE",
        link: "/magazin/cat/nalichie/michelle",
      },

      {
        id: 2,
        srcImg: "../../magazin/assets/terma_iron_s.jpg",
        title: "Terma дизайн радиаторы",
        desc: "TERMA IRON S",
        link: "/magazin/cat/nalichie/iron",
      },
      {
        id: 3,
        srcImg: "../../magazin/assets/michelle_1620_500_chrome_9005_det.jpg",
        title: "MICHELLE Terma дизайн радиаторы",
        desc: "TERMA MICHELLE",
        link: "/magazin/cat/nalichie/michelle",
      },

      {
        id: 4,
        srcImg: "../../magazin/assets/terma_iron_s.jpg",
        title: "Terma дизайн радиаторы",
        desc: "TERMA IRON S",
        link: "/magazin/cat/nalichie/iron",
      },
      {
        id: 5,
        srcImg: "../../magazin/assets/michelle_1620_500_chrome_9005_det.jpg",
        title: "MICHELLE Terma дизайн радиаторы",
        desc: "TERMA MICHELLE",
        link: "/magazin/cat/nalichie/michelle",
      },

      {
        id: 6,
        srcImg: "../../magazin/assets/terma_iron_s.jpg",
        title: "Terma дизайн радиаторы",
        desc: "TERMA IRON S",
        link: "/magazin/cat/nalichie/iron",
      },
    ],
  }),
  created() {
    this.resized();
  },
  mounted() {
    window.addEventListener("resize", this.resized);
  },
  methods: {
    resized: function () {
      const clientWidth = window.innerWidth;
      if (clientWidth < 1550) {
        this.currentWidth = clientWidth - 40;
      } else {
        this.currentWidth = 1040;
      }
      this.width = this.currentWidth * this.activeId;
    },
    next: function () {
      if (this.width >= this.currentWidth * (this.maxId - 1)) {
        this.width = 0;
        this.activeId = 1;
      } else {
        this.width += this.currentWidth;
        this.activeId += 1;
      }
    },
    prev: function () {
      if (this.width <= 0) {
        this.width = this.currentWidth * (this.maxId - 1);
        this.activeId = this.maxId;
      } else {
        this.activeId -= 1;
        this.width -= this.currentWidth;
      }
    },
    currentSlide: function (id) {
      this.width = this.currentWidth * id - this.currentWidth;
      this.activeId = id;
    },
  },
};
</script>
<style scoped lang="scss">
.top_sl_wrap {
  flex: none;
  max-width: 1334px;
  margin: 0 auto;
  width: 100%;
  padding: 20px 0 20px;
  transition: transform 0.3s;
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap {
    max-width: 896px;
    padding: 20px 40px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap {
    padding: 0;
    margin: 0 0 30px;
  }
}

@media screen and (min-width: 1300px) {
  .top_sl_wrap.slide {
    transform: translateX(112px);
  }
}

.top_sl_wrap .top_sl_block {
  max-width: 1040px;
  margin: 0 auto;
  position: relative;
}

@media screen and (max-width: 1580px) {
  .top_sl_wrap .top_sl_block {
    max-width: 830px;
  }
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .top_sl_block {
    max-width: 100%;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .top_sl_block {
    background: #25c6ec;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-item {
    margin-bottom: 40px;
  }
}

.top_sl_wrap .top_sl_item {
  position: relative;
  padding: 220px 60px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  text-align: right;
  border-radius: 2px;
}

@media screen and (max-width: 1580px) {
  .top_sl_wrap .top_sl_item {
    padding: 164px 60px 163px;
  }
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .top_sl_item {
    padding: 114px 48px 109px;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .top_sl_item {
    justify-content: center;
    text-align: center;
    padding: 114px 40px 109px;
    min-height: 0;
  }
}

@media screen and (max-width: 599px) {
  .top_sl_wrap .top_sl_item {
    padding: 74px 40px 69px;
  }
}

@media screen and (max-width: 599px) {
  .top_sl_wrap .top_sl_item {
    padding: 59px 20px 61px;
  }
}

.top_sl_wrap .top_sl_item:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  z-index: -1;
  background-image: linear-gradient(
    -45deg,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0) 100%
  );
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .top_sl_item:before {
    background: rgba(0, 0, 0, 0.3);
  }
}

.top_sl_wrap .sl_bg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 2px;
  background-size: cover;
  background-position: 50% 0;
  z-index: -2;
}

.top_sl_wrap .sl_item_wrap {
  display: inline-block;
  vertical-align: top;
}

.top_sl_wrap .sl_item_wrap .sl_item_title {
  color: #fff;
  font: 34px/43px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .sl_item_wrap .sl_item_title {
    font-size: 30px;
    line-height: 40px;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .sl_item_wrap .sl_item_title {
    font-size: 24px;
    line-height: 33px;
  }
}

.top_sl_wrap .sl_item_wrap .sl_item_desc {
  color: #fff;
  font: 18px/28px "noto_sans-r", Arial, Helvetica, sans-serif;
  margin: -6px 0 0 0;
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .sl_item_wrap .sl_item_desc {
    font-size: 16px;
    line-height: 22px;
    margin-top: -1px;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .sl_item_wrap .sl_item_desc {
    font-size: 14px;
    line-height: 20px;
  }
}

.top_sl_wrap .sl_item_wrap .sl_item_button {
  padding: 13px 0 0 0;
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .sl_item_wrap .sl_item_button {
    position: absolute;
    left: 40px;
    right: 40px;
    bottom: -40px;
  }
}

.top_sl_wrap .sl_item_wrap .sl_item_button a {
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 26px 11px;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  position: relative;
  background: #25c6ec;
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .sl_item_wrap .sl_item_button a {
    width: 100%;
    text-align: center;
    box-sizing: border-box;
  }
}

.top_sl_wrap .sl_item_wrap .sl_item_button a span {
  color: #fff;
  position: relative;
}

.top_sl_wrap .sl_item_wrap .sl_item_button a:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  visibility: hidden;
}

.top_sl_wrap .sl_item_wrap .sl_item_button a:after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  background: rgba(255, 255, 255, 0.3);
  opacity: 0;
  visibility: hidden;
}

.top_sl_wrap .sl_item_wrap .sl_item_button a:hover:before {
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .sl_item_wrap .sl_item_button a:hover:before {
    display: none;
  }
}

.top_sl_wrap .sl_item_wrap .sl_item_button a:active:after {
  opacity: 1;
  visibility: visible;
}

.top_sl_wrap .sl_item_wrap .sl_item_button a:active:before {
  opacity: 0;
  visibility: hidden;
}

.top_sl_wrap .owl-prev {
  position: absolute;
  left: -20px;
  top: 50%;
  margin-top: -45px;
  width: 40px;
  height: 90px;
  font-size: 0;
  z-index: 1;
  background: rgba(37, 198, 236, 0.8);
  /*&:before {
     position: absolute;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
     @include transition(opacity 0.3s);
     background:#fff;
     content: '';
     opacity: .2;
     }*/
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .owl-prev {
    left: -40px;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-prev {
    bottom: 0;
    top: auto;
    left: 0;
    margin-top: 0;
    height: 40px;
  }
}

.top_sl_wrap .owl-prev:hover {
  background: #25c6ec;
}

.top_sl_wrap .owl-prev:hover:before {
  opacity: 0;
}

.top_sl_wrap .owl-prev:hover:after {
  opacity: 1;
}

.top_sl_wrap .owl-prev:after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity 0.3s;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2014%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0.504%2C10.773%20C-0.177%2C11.444%20-0.178%2C12.533%200.503%2C13.204%20C0.612%2C13.312%200.735%2C13.405%200.869%2C13.481%20L11.052%2C23.518%20C11.759%2C24.163%2012.862%2C24.121%2013.517%2C23.425%20C14.136%2C22.765%2014.136%2C21.747%2013.517%2C21.088%20L4.243%2C11.936%20L13.402%2C2.918%20C14.086%2C2.249%2014.089%2C1.161%2013.411%2C0.487%20C13.408%2C0.484%2013.405%2C0.481%2013.402%2C0.478%20C12.723%2C-0.191%2011.627%2C-0.191%2010.948%2C0.478%20L0.504%2C10.773%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  content: "";
  z-index: 2;
  opacity: 0.8;
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-prev:after {
    background-size: 8px 14px;
  }
}

.top_sl_wrap .owl-next {
  position: absolute;
  right: -20px;
  top: 50%;
  margin-top: -45px;
  width: 40px;
  height: 90px;
  font-size: 0;
  z-index: 1;
  background: rgba(37, 198, 236, 0.8);
  /*&:before {
     position: absolute;
     left: 0;
     right: 0;
     top: 0;
     bottom: 0;
     @include transition(opacity 0.3s);
     background:#fff;
     content: '';
     opacity: .2;
     }*/
}

@media screen and (max-width: 1023px) {
  .top_sl_wrap .owl-next {
    right: -40px;
  }
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-next {
    bottom: 0;
    top: auto;
    right: 0;
    margin-top: 0;
    height: 40px;
  }
}

.top_sl_wrap .owl-next:hover {
  background: #25c6ec;
}

.top_sl_wrap .owl-next:hover:before {
  opacity: 0;
}

.top_sl_wrap .owl-next:hover:after {
  opacity: 1;
}

.top_sl_wrap .owl-next:after {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  transition: opacity 0.3s;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%2224px%22%20%20viewBox%3D%220%200%2014%2024%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M13.465%2C13.227%20C14.147%2C12.556%2014.147%2C11.467%2013.466%2C10.796%20C13.357%2C10.688%2013.234%2C10.595%2013.100%2C10.519%20L2.917%2C0.482%20C2.210%2C-0.163%201.107%2C-0.121%200.452%2C0.575%20C-0.167%2C1.235%20-0.167%2C2.253%200.452%2C2.912%20L9.727%2C12.064%20L0.567%2C21.082%20C-0.116%2C21.751%20-0.120%2C22.839%200.559%2C23.513%20C0.561%2C23.516%200.564%2C23.519%200.567%2C23.522%20C1.246%2C24.191%202.343%2C24.191%203.022%2C23.522%20L13.465%2C13.227%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  content: "";
  z-index: 2;
  opacity: 0.8;
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-next:after {
    background-size: 8px 14px;
  }
}

.top_sl_wrap .owl-dots {
  font-size: 0;
  text-align: center;
  padding: 14px 0 0 0;
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-dots {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 48px;
    z-index: 2;
  }
}

.top_sl_wrap .owl-dots .owl-dot {
  display: inline-block;
  vertical-align: top;
  width: 8px;
  height: 8px;
  margin: 0 12px 0 0;
  background: #909396;
  border-radius: 50%;
}

@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-dots .owl-dot {
    background: rgba(0, 0, 0, 0.4);
  }
}

.top_sl_wrap .owl-dots .owl-dot:last-child {
  margin-right: 0;
}

.top_sl_wrap .owl-dots .owl-dot.active {
  background: #25c6ec;
}
.top_sl_wrap .sl_bg {
  z-index: 1;
}

.top_sl_wrap .sl_item_wrap {
  z-index: 2;
}
.owl-loaded {
  position: relative;
}
.owl-stage-outer {
  position: relative;
  overflow: hidden;
  z-index: 1;
}
.owl-stage {
  position: relative;
}
.owl-item {
  position: relative;
  display: inline-block;
  vertical-align: top;
  min-height: 1px;
  user-select: none;
}
@media screen and (max-width: 699px) {
  .top_sl_wrap .owl-item {
    margin-bottom: 40px;
  }
}
</style>

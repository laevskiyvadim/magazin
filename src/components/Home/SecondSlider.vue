<template>
  <div class="main_folders_wrapper">
    <nav class="main_folders_wr">
      <ul class="main_folders menu-default slider owl-loaded owl-drag">
        <div class="owl-stage-outer">
          <div
            class="owl-stage"
            :style="{
              display: 'flex',
              transform: `translate3d(-${width}px, 0px, 0px)`,
              transition: 'all 0s ease 0s',
              width: '1000px',
            }"
          >
            <div
              class="owl-item"
              :style="{
                width: `${currentWidth}px`,
                marginRight: '10px',
              }"
              v-for="item of data"
              :key="item.id"
            >
              <li>
                <a :href="item.href"
                  ><span class="folder_pic"
                    ><img :src="item.srcImg" :alt="item.title" /></span
                  ><span class="folder_title">{{ item.title }}</span></a
                >
              </li>
            </div>
          </div>
        </div>
        <div class="owl-nav">
          <div class="owl-prev" @click="prev">prev</div>
          <div class="owl-next" @click="next">next</div>
        </div>
        <div class="owl-dots disabled"></div>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  data: () => ({
    width: 0,
    height: "200px",
    currentWidth: 220,
    activeId: 1,
    maxId: 10,
    data: [
      {
        id: 1,
        href: "/magazin/folder/polotencesushiteli-terma-v-nalichii-1",
        srcImg: "/assets/dcea2338850ff83aff83740cb7b86eab.webp",
        title: "Полотенцесушители TERMA в наличии",
      },
      {
        id: 2,
        href: "/magazin/folder/polotentsesushiteli",
        srcImg: "/assets/48856.webp",
        title: "Полотенцесушители",
      },
      {
        id: 3,
        href: "/magazin/folder/smesiteli",
        srcImg: "/assets/48849.webp",
        title: "Смесители",
      },
      {
        id: 4,
        href: "/magazin/folder/teny-terma",
        srcImg:
          "/assets/ten-elektricheskiy-dlya-polotentsesushitelya-terma-ktx-2-khrom.webp",
        title: "Тэны, блоки управления, терморегуляторы TERMA",
      },
      {
        id: 5,
        href: "/magazin/folder/aksessuary-dlya-vannoy",
        srcImg: "/assets/48859.webp",
        title: "Аксессуары для ванной",
      },
      {
        id: 6,
        href: "/magazin/folder/polotencesushiteli-terma-v-nalichii-1",
        srcImg: "/assets/dcea2338850ff83aff83740cb7b86eab.webp",
        title: "Полотенцесушители TERMA в наличии",
      },
      {
        id: 7,
        href: "/magazin/folder/polotentsesushiteli",
        srcImg: "/assets/48856.webp",
        title: "Полотенцесушители",
      },
      {
        id: 8,
        href: "/magazin/folder/smesiteli",
        srcImg: "/assets/48849.webp",
        title: "Смесители",
      },
      {
        id: 9,
        href: "/magazin/folder/teny-terma",
        srcImg:
          "/assets/ten-elektricheskiy-dlya-polotentsesushitelya-terma-ktx-2-khrom.webp",
        title: "Тэны, блоки управления, терморегуляторы TERMA",
      },
      {
        id: 10,
        href: "/magazin/folder/aksessuary-dlya-vannoy",
        srcImg: "/assets/48859.webp",
        title: "Аксессуары для ванной",
      },
    ],
  }),
  methods: {
    next: function () {
      console.log("asfa");
      if (this.width >= 1099) {
        this.width = 0;
        this.activeId = 1;
      } else {
        this.width += 220;
        this.activeId += 1;
      }
    },
    prev: function () {
      console.log(this.currentWidth);
      if (this.width <= 0) {
        this.width = 1099;
        this.activeId = this.maxId;
      } else {
        this.activeId -= 1;
        this.width -= 220;
      }
    },
  },
};
</script>
<style scoped lang="scss">
.main_folders_wrapper {
  padding: 15px 0;
  max-width: 1334px;
  margin: 0 auto;
  width: 100%;
  transition: transform 0.3s;
}

@media screen and (max-width: 1023px) {
  .main_folders_wrapper {
    max-width: 896px;
    padding: 15px 40px;
    box-sizing: border-box;
  }
}

@media screen and (max-width: 699px) {
  .main_folders_wrapper {
    padding: 0;
    margin: 0 0 20px;
  }
}

@media screen and (min-width: 1300px) {
  .main_folders_wrapper.slide {
    transform: translateX(112px);
  }
}

.main_folders_wrapper .main_folders_wr {
  max-width: 1040px;
  margin: 0 auto;
}

@media screen and (max-width: 1580px) {
  .main_folders_wrapper .main_folders_wr {
    max-width: 830px;
  }
}

@media screen and (max-width: 1023px) {
  .main_folders_wrapper .main_folders_wr {
    max-width: 896px;
  }
}

.main_folders_wrapper .main_folders {
  font-size: 0;
}

.main_folders_wrapper .main_folders.slider {
  margin: 0;
  display: block;
  width: auto;
}

.main_folders_wrapper .main_folders li {
  display: inline-block;
  vertical-align: top;
  width: 200px;
  height: 160px;
  background: #fff;
  margin: 0 10px 0 0;
}

@media screen and (max-width: 1580px) {
  .main_folders_wrapper .main_folders li:nth-child(4n) {
    margin-right: 0;
  }
}

@media screen and (min-width: 1581px) {
  .main_folders_wrapper .main_folders li:nth-child(5n) {
    margin-right: 0;
  }
}

.main_folders_wrapper .main_folders li:hover {
  position: relative;
}

.main_folders_wrapper .main_folders li:hover:before {
  position: absolute;
  left: 0;
  right: 0;
}

.main_folders_wrapper .main_folders li a {
  position: relative;
  display: block;
  text-decoration: none;
}

.main_folders_wrapper .main_folders li a:hover .folder_pic:before {
  background: #25c6ec;
}

@media screen and (max-width: 1023px) {
  .main_folders_wrapper .main_folders li a:hover .folder_pic:before {
    background: none;
  }
}

.main_folders_wrapper .main_folders li a .folder_pic {
  position: relative;
  display: block;
  width: 200px;
  height: 160px;
}

.main_folders_wrapper .main_folders li a .folder_pic:before {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  content: "";
  background: #fff;
  opacity: 0.36;
  z-index: 2;
}

.main_folders_wrapper .main_folders li a .folder_title {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  padding: 13px 20px 20px;
  color: #212121;
  font: 18px/23px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  z-index: 3;
}

.main_folders_wrapper .main_folders li a .folder_title.no_pic {
  position: static;
  display: inline-block;
}

.main_folders_wrapper .owl-prev {
  position: absolute;
  left: -20px;
  top: 50%;
  height: 40px;
  width: 40px;
  margin-top: -20px;
  z-index: 1;
}

@media screen and (max-width: 1023px) {
  .main_folders_wrapper .owl-prev {
    left: -40px;
  }
}

@media screen and (max-width: 699px) {
  .main_folders_wrapper .owl-prev {
    left: 0;
    top: auto;
    bottom: 0;
    margin: 0;
  }
}

.main_folders_wrapper .owl-prev:hover:after,
.main_folders_wrapper .owl-prev:hover:before {
  opacity: 1;
}

.main_folders_wrapper .owl-prev:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #25c6ec;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.main_folders_wrapper .owl-prev:after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M0.287%2C6.292%20C-0.103%2C6.681%20-0.106%2C7.314%200.281%2C7.707%20C0.345%2C7.772%200.417%2C7.828%200.496%2C7.873%20L6.310%2C13.724%20C6.696%2C14.117%207.325%2C14.119%207.715%2C13.730%20C7.717%2C13.728%207.719%2C13.726%207.721%2C13.724%20C8.106%2C13.334%208.106%2C12.704%207.721%2C12.314%20L2.424%2C6.972%20L7.651%2C1.711%20C8.041%2C1.322%208.043%2C0.689%207.657%2C0.296%20C7.655%2C0.295%207.653%2C0.293%207.651%2C0.291%20C7.264%2C-0.097%206.638%2C-0.097%206.250%2C0.291%20L0.287%2C6.292%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  z-index: 2;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.main_folders_wrapper .owl-next {
  position: absolute;
  right: -20px;
  top: 50%;
  height: 40px;
  width: 40px;
  margin-top: -20px;
  z-index: 1;
}

@media screen and (max-width: 1023px) {
  .main_folders_wrapper .owl-next {
    right: -40px;
  }
}

@media screen and (max-width: 699px) {
  .main_folders_wrapper .owl-next {
    right: 0;
    top: auto;
    bottom: 0;
    margin: 0;
  }
}

.main_folders_wrapper .owl-next:hover:after,
.main_folders_wrapper .owl-next:hover:before {
  opacity: 1;
}

.main_folders_wrapper .owl-next:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: #25c6ec;
  opacity: 0.8;
  transition: opacity 0.3s;
}

.main_folders_wrapper .owl-next:after {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23fff%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
  z-index: 2;
  opacity: 0.8;
  transition: opacity 0.3s;
}
.menu-default,
.menu-default ul,
.menu-default li {
  padding: 0;
  margin: 0;
  list-style: none;
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
.owl-nav .owl-next,
.owl-nav .owl-prev {
  cursor: pointer;
}
</style>

<template>
  <div>
    <FirstSlider />
    <Title />
    <FourBlock />
    <div class="text_bl_wrapper">
      <div class="text_bl_wrap">
        <div class="text_bl_title">TeploVann</div>
      </div>
    </div>
    <Brends />
  </div>
</template>
<script>
import FirstSlider from "@/components/Home/FirstSlider.vue";
import Title from "@/components/Home/Title.vue";
import FourBlock from "@/components/Home/FourBlock.vue";
import Brends from "@/components/Home/Brends.vue";
export default {
  name: "Home",
  components: {
    FirstSlider,
    Title,
    FourBlock,
    Brends,
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
.text_bl_wrapper {
  background: #f5fafb;
  max-width: 1334px;
  width: 100%;
  margin: 0 auto;
  padding: 15px 0 15px;
  transition: transform 0.3s;
}

.text_bl_wrapper .text_bl_wrap {
  max-width: 1040px;
  margin: 0 auto;
}
.text_bl_wrapper .text_bl_title {
  color: #212121;
  font: 28px/37px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  padding: 0 0 9px;
}
.text_bl_wrapper .text_bl_body {
  color: #4a4a4a;
  font: 15px/24px "noto_sans-r", Arial, Helvetica, sans-serif;
  p {
    margin-top: 0;
  }
}
@media screen and (max-width: 1023px) {
  .text_bl_wrapper {
    box-sizing: border-box;
    padding: 15px 40px;
    max-width: 100%;
  }
}
@media screen and (max-width: 699px) {
  .text_bl_wrapper {
    padding: 15px 12px 18px;
  }
}
@media screen and (min-width: 1300px) {
  .text_bl_wrapper.slide {
    transform: translateX(112px);
  }
}
@media screen and (max-width: 1580px) {
  .text_bl_wrapper .text_bl_wrap {
    max-width: 830px;
  }
}
@media screen and (max-width: 1023px) {
  .text_bl_wrapper .text_bl_wrap {
    max-width: 100%;
  }
}
</style>

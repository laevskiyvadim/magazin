<template>
  <div class="edit_bl_wrapper">
    <div
      class="edit_bl_wrap"
      style="
        background-image: url(../../assets/ce4a4bd3bc13acec9f52da37839ea147.jpg);
      "
    >
      <div class="edit_bl_txt_wr">
        <div class="edit_bl_title">PAJĄK дизайн радиатор</div>
        <div class="edit_bl_desc">максимальный комфорт в ванной комнате</div>
        <div class="edit_bl_but">
          <a href="http://teplovann.ru/magazin/folder/pajak-dizajn-radiator "
            ><span>Подробнее</span></a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped lang="scss">
.site_content_wrapper {
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #f5fafb;
}
@media screen and (max-width: 1180px) {
  .site_content_wrapper {
    max-width: 870px;
    margin: 0 auto;
    padding: 0 20px;
    box-sizing: border-box;
  }
}
@media screen and (max-width: 1023px) {
  .site_content_wrapper {
    max-width: 100%;
    padding: 20px 24px;
  }
}

@media screen and (max-width: 699px) {
  .site_content_wrapper {
    padding: 20px 0;
  }
}
.edit_bl_wrapper {
  padding: 20px 0;
  max-width: 1334px;
  width: 100%;
  margin: 0 auto;
  transition: transform 0.3s;
  &.block2.slide {
    transform: translateX(0);
  }
  .edit_bl_wrap {
    max-width: 1040px;
    margin: 0 auto;
    background-size: cover;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    position: relative;
    &:before {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      content: "";
      background: rgba(0, 0, 0, 0.26);
    }
  }
  .edit_bl_txt_wr {
    position: relative;
    padding: 65px 100px 64px 100px;
    min-height: 131px;
  }
  .edit_bl_title {
    color: #fff;
    font: 34px/43px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
  }
  .edit_bl_desc {
    color: #fff;
    font: 18px/28px "noto_sans-r", Arial, Helvetica, sans-serif;
  }
  .edit_bl_but {
    padding: 24px 0 0 0;
    a {
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
      position: relative;
      padding: 12px 26px 11px;
      font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      color: #25c6ec;
      background: #fff;
      box-shadow: inset 0 0 0 2px #25c6ec;
      /*&:hover {
     @include box-shadow(inset 0 0 0 1px $mainColor3);
     }
     &:active {
     @include box-shadow(inset 0 0 0 2px $mainColor3);
     background: #f2f2f2;
     }*/
      &:before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.1);
        opacity: 0;
        transition: all 0.3s;
        visibility: hidden;
      }
      &:hover {
        background: #25c6ec;
        box-shadow: none;
        span {
          color: #fff;
        }
      }
      &:active {
        background: #25c6ec;
        box-shadow: none;
        span {
          color: #fff;
        }
        &:before {
          opacity: 1;
          visibility: visible;
        }
      }
      span {
        color: #25c6ec;
        position: relative;
      }
    }
  }
}
@media screen and (max-width: 1580px) {
  .edit_bl_wrapper {
    .edit_bl_txt_wr {
      padding: 55px 60px 55px;
    }
    .edit_bl_wrap {
      max-width: 830px;
    }
  }
}
@media screen and (min-width: 1300px) {
  .edit_bl_wrapper {
    max-width: 100%;
    padding: 20px 40px;
    box-sizing: border-box;
    &.slide {
      transform: translateX(112px);
    }
    .edit_bl_wrap {
      max-width: 100%;
    }
    .edit_bl_but a:hover {
      background: #fff;
      box-shadow: inset 0 0 0 2px #25c6ec;
    }
    .edit_bl_but a:hover span {
      color: #25c6ec;
    }
  }
}
@media screen and (max-width: 699px) {
  .edit_bl_wrapper {
    padding: 0;
    margin: 0 0 15px;
    .edit_bl_desc {
      font-size: 14px;
      line-height: 20px;
    }
    .edit_bl_title {
      font-size: 24px;
      line-height: 33px;
      padding: 0 0 5px;
    }
    .edit_bl_txt_wr {
      padding: 37px 20px 40px;
      text-align: center;
    }
  }
}
</style>

<template>
  <div
    class="desc-area r-tabs-panel"
    :class="{
      'r-tabs-state-active': otzyvi,
      'r-tabs-state-default': !otzyvi,
    }"
  >
    <div class="tpl-block-header">Оставьте отзыв</div>

    <div class="tpl-info">
      Заполните обязательные поля <span class="tpl-required">*</span>.
    </div>

    <form action="" method="post" class="tpl-form">
      <input type="hidden" name="comment_id" value="" />

      <div class="tpl-field">
        <label class="tpl-title" for="d[1]">
          Комментарий:
          <span class="tpl-required">*</span>
        </label>

        <div class="tpl-value">
          <textarea cols="55" rows="2" name="text"></textarea>
        </div>
      </div>

      <div class="tpl-field">
        <label class="tpl-title" for="d[1]">
          Оценка:
          <span class="tpl-required">*</span>
        </label>

        <div class="tpl-value">
          <div class="tpl-stars">
            <span class="tpl-active"></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <input name="rating" type="hidden" value="0" />
          </div>
        </div>
      </div>

      <div class="tpl-field">
        <div class="tpl_form_big">
          <input
            type="submit"
            class="tpl-button tpl-button-big"
            value="Отправить"
          />
        </div>
      </div>
    </form>

    <div class="shop2-clear-container"></div>
  </div>
</template>
<script>
export default {
  props: ["otzyvi"],
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
.shop-product-tabs .shop-product-desc .desc-area.r-tabs-state-active {
  display: block;
}
.tpl-block-header {
  color: #212121;
  font: 28px/37px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  margin: 0 0 10px;
}

@media screen and (max-width: 1023px) {
  .tpl-block-header {
    font-size: 26px;
  }
}

@media screen and (max-width: 1023px) {
  .tpl-block-header {
    font-size: 22px;
    line-height: 1.2;
  }
}
.tpl-info {
  box-shadow: #fdfbf7 0 1px 0 inset, rgba(0, 0, 0, 0.45) 0 2px 6px;
  border: 1px solid #e1c893;
  background-color: #f2e6cf;
  text-align: left;
  color: #494949;
  font-size: 12px;
  margin: 10px 0px;
  padding: 10px 14px;
}
.tpl-info {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.18), 0 -1px 4px rgba(0, 0, 0, 0);
  border: none;
  background: #f5fafb;
  color: #4a4a4a;
  padding: 13px 20px;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  border-radius: 1px;
}
.tpl-info + .tpl-form {
  margin: 20px 0px 0px;
}
.tpl-form .tpl-field {
  margin: 0px 0px 10px 0px;
}
.tpl-form .tpl-title {
  display: block;
  font: 12px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #212121;
  margin-bottom: 5px;
}
.tpl-required {
  color: #eb3c3c;
}
.tpl-form input[type="text"],
.tpl-form input[type="password"],
.tpl-form textarea,
.tpl-form select {
  vertical-align: middle;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 4px;
}
.tpl-form textarea {
  font: 13px/18px "noto_sans-r", Arial, Helvetica, sans-serif;
  color: #26281a;
  background: #f5fafb;
  border: 1px solid #f5fafb;
  padding: 10px 14px 10px;
  box-shadow: none;
  outline: none;
  transition: all 0.3s;
  box-sizing: border-box;
}

.tpl-form textarea:hover {
  border-color: #f5fafb;
  background: #fff;
}

.tpl-form textarea:focus {
  border-color: #f5fafb;
  background: #fff;
  box-shadow: inset 0 0 0 1px #f5fafb;
}
.tpl-form .tpl-stars {
  background: url("/assets/stars-big2.png") 0 0 repeat-x;
  width: 115px;
  height: 20px;
  overflow: hidden;
}
.tpl-form .tpl-stars span {
  font-size: 0;
}
.tpl-form .tpl-stars span.tpl-active {
  background: url("/assets/stars-big.png") 0 -25px repeat-x;
}
.tpl-form .tpl-stars span {
  display: block;
  float: left;
  cursor: pointer;
  width: 23px;
  height: 20px;
}
.tpl-form .tpl_form_big {
  padding: 12px 20px 12px;
  width: auto;
  display: inline-block;
  box-sizing: border-box;
  text-transform: uppercase;
  box-shadow: none;
  min-width: 196px;
  margin: 25px 0 0 0;
  background: #fff;
  border-radius: 1px;
  box-shadow: inset 0 0 0 2px #0c8ac9;
  position: relative;
}

.tpl-form .tpl_form_big:before {
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

.tpl-form .tpl_form_big:hover {
  box-shadow: none;
  background: #0c8ac9;
}

.tpl-form .tpl_form_big:hover input {
  color: #fff;
}

.tpl-form .tpl_form_big:active {
  box-shadow: none;
  background: #0c8ac9;
}

.tpl-form .tpl_form_big:active:before {
  opacity: 1;
  visibility: visible;
}

.tpl-form .tpl_form_big:active input {
  color: #fff;
}

.tpl-form .tpl_form_big input {
  outline: none;
  font: 16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-align: center;
  display: block;
  text-transform: uppercase;
  position: relative;
  color: #0c8ac9;
  background: none;
  padding: 0;
  margin: 0 auto;
  box-shadow: none;
}
.tpl-button {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  color: #333;
  background-color: #eee;
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;
  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  border-radius: 4px;
}

.tpl-button:hover {
  background-color: #f6f6f6;
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.tpl-button:active {
  background-color: #e6e6e6;
  background-image: -moz-linear-gradient(top, #dedede, #f1f1f1);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#dedede),
    to(#f1f1f1)
  );
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}
</style>

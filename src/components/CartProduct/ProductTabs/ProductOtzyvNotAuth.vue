<template>
  <div
    class="desc-area r-tabs-state-default"
    :class="{
      'r-tabs-state-active': otzyvi,
      'r-tabs-state-default': !otzyvi,
    }"
  >
    <div class="tpl-block-header">
      Авторизуйтесь, чтобы оставить комментарий
    </div>
    <form method="post" class="tpl-form tpl-auth" action="/registraciya/login">
      <div class="tpl-left">
        <div class="tpl-field">
          <div class="tpl-title">Введите Ваш e-mail:</div>
          <div class="tpl-value">
            <input type="text" name="login" value="" />
          </div>
        </div>

        <div class="tpl-field">
          <div class="tpl-title">Введите Ваш пароль:</div>
          <div class="tpl-value clearfix">
            <input class="pull-left" type="password" name="password" />
          </div>
        </div>
        <div class="tpl-field">
          <div class="tpl-value">
            <button class="tpl-button pull-right" type="submit">
              <span>Войти</span>
            </button>
          </div>
        </div>

        <div class="tpl-field">
          <a class="tpl_reg" href="/registraciya/register"
            ><span>Регистрация</span></a
          >
        </div>
      </div>

      <div class="tpl-right">
        <div class="tpl-field">
          Если Вы уже зарегистрированы на нашем сайте, но забыли пароль или Вам
          не пришло письмо подтверждения, воспользуйтесь формой восстановления
          пароля.
        </div>

        <div class="tpl-field">
          <a class="tpl-button forgot" href="/registraciya/forgot_password"
            ><span>Восстановить пароль</span></a
          >
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
form {
  display: flex;
}
@media screen and (max-width: 500px) {
  form {
    flex-direction: column;
  }
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
@media screen and (max-width: 1023px) {
  .tpl-form.tpl-auth {
    padding: 10px 0 0 0;
  }
}
.tpl-auth .tpl-left {
  width: 211px;
  margin: 0 29px 0 0;
}
.tpl-form .tpl-field {
  margin: 0 0 13px;
}
.tpl-form.tpl-auth .tpl-field {
  font: 14px/24px "noto_sans-r", Arial, Helvetica, sans-serif;
  color: #4a4a4a;
}
.tpl-form .tpl-title {
  display: block;
  font: 12px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  color: #212121;
  margin-bottom: 5px;
}
.tpl-form.tpl-auth .tpl-title {
  color: #212121;
  font: 12px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  padding: 0 0 5px;
}
.tpl-form .tpl-value {
  margin: 3px 0px 0px;
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
.tpl-form input[type="text"] {
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

.tpl-form input[type="text"]:hover {
  border-color: #f5fafb;
  background: #fff;
}

.tpl-form input[type="text"]:focus {
  border-color: #f5fafb;
  background: #fff;
  box-shadow: inset 0 0 0 1px #f5fafb;
}
.tpl-form.tpl-auth .tpl-value input[type="text"],
.tpl-form.tpl-auth .tpl-value input[type="password"] {
  background: #f5fafb;
  color: #212121;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
  padding: 5px 8px 7px;
}

.tpl-form.tpl-auth .tpl-value input[type="text"]::-webkit-input-placeholder,
.tpl-form.tpl-auth
  .tpl-value
  input[type="password"]::-webkit-input-placeholder {
  color: #212121;
}

.tpl-form.tpl-auth .tpl-value input[type="text"]:moz-placeholder,
.tpl-form.tpl-auth .tpl-value input[type="password"]:moz-placeholder {
  color: #212121;
}

.tpl-form.tpl-auth .tpl-value input[type="text"]::-moz-placeholder,
.tpl-form.tpl-auth .tpl-value input[type="password"]::-moz-placeholder {
  color: #212121;
}

.tpl-form.tpl-auth .tpl-value input[type="text"]:-ms-input-placeholder,
.tpl-form.tpl-auth .tpl-value input[type="password"]:-ms-input-placeholder {
  color: #212121;
}

.tpl-form.tpl-auth .tpl-value input[type="text"]:hover,
.tpl-form.tpl-auth .tpl-value input[type="password"]:hover {
  border-color: #f5fafb;
  background: #fff;
}

.tpl-form.tpl-auth .tpl-value input[type="text"]:focus,
.tpl-form.tpl-auth .tpl-value input[type="password"]:focus {
  background: #fff;
  box-shadow: inset 0 0 0 1px #eae9f4;
}
.clearfix:before,
.clearfix:after {
  display: table;
  line-height: 0;
  content: "";
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
  line-height: 0;
  font-size: 0;
}
.tpl-form.tpl-auth .tpl-field.checkbox input[type="checkbox"] {
  display: inline-block;
  vertical-align: middle;
  opacity: 0;
  height: 0;
  width: 0;
  visibility: hidden;
  overflow: hidden;
}

.tpl-form.tpl-auth
  .tpl-field.checkbox
  input[type="checkbox"]:checked
  + label:before {
  background: url("/assets/compare_icon.svg") 50% 50% no-repeat #0c8ac9;
  box-shadow: none;
}

.tpl-form.tpl-auth
  .tpl-field.checkbox
  input[type="checkbox"]:checked
  + label:hover:before {
  background: url("/assets/compare_icon.svg") 50% 50% no-repeat #0c8ac9;
  box-shadow: 0 0 0 1px #e7e7e7;
}
.tpl-form.tpl-auth .tpl-field.checkbox .tpl-title {
  padding: 3px 0 4px 30px;
  position: relative;
  display: inline-block;
  vertical-align: top;
}

.tpl-form.tpl-auth .tpl-field.checkbox .tpl-title:hover:before {
  box-shadow: 0 0 0 1px #e7e7e7;
}

.tpl-form.tpl-auth .tpl-field.checkbox .tpl-title:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 24px;
  height: 24px;
  border: 2px solid #0c8ac9;
  background: #fff;
  border-radius: 1px;
  transition: background-color 0.2s linear;
}
.tpl-form.tpl-auth .tpl-field.checkbox .checkbox_title {
  display: inline-block;
  vertical-align: middle;
  padding: 1px 0 0 5px;
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
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}
.tpl-form.tpl-auth .tpl-value .pull-right {
  position: relative;
  float: none !important;
  margin: 0;
  width: auto;
  color: #0c8ac9;
  background: #fff;
  min-width: 167px;
  text-transform: uppercase;
  padding: 12px 40px 10px;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  border-radius: 1px;
  box-shadow: none;
  box-sizing: border-box;
  transition: all 0.3s;
  outline: none;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}

.tpl-form.tpl-auth .tpl-value .pull-right:before {
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

.tpl-form.tpl-auth .tpl-value .pull-right:hover {
  background: #0c8ac9;
  box-shadow: none;
}

.tpl-form.tpl-auth .tpl-value .pull-right:hover span {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .tpl-form.tpl-auth .tpl-value .pull-right:hover {
    background: #fff;
    box-shadow: inset 0 0 0 2px #0c8ac9;
  }
  .tpl-form.tpl-auth .tpl-value .pull-right:hover span {
    color: #0c8ac9;
  }
}

.tpl-form.tpl-auth .tpl-value .pull-right:active {
  background: #0c8ac9;
  box-shadow: none;
}

.tpl-form.tpl-auth .tpl-value .pull-right:active:before {
  opacity: 1;
  visibility: visible;
}

.tpl-form.tpl-auth .tpl-value .pull-right:active span {
  color: #fff;
}

.tpl-form.tpl-auth .tpl-value .pull-right span {
  color: #0c8ac9;
  position: relative;
}
.tpl-form.tpl-auth .tpl-field .tpl_reg {
  background: #0c8ac9;
  text-decoration: none;
  position: relative;
  padding: 12px 40px 10px;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  display: inline-block;
  vertical-align: top;
  text-transform: uppercase;
  transition: all 0.3s;
}

.tpl-form.tpl-auth .tpl-field .tpl_reg span {
  color: #fff;
  position: relative;
}

.tpl-form.tpl-auth .tpl-field .tpl_reg:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.1);
}

.tpl-form.tpl-auth .tpl-field .tpl_reg:hover:before {
  opacity: 1;
  visibility: visible;
}

@media screen and (max-width: 1023px) {
  .tpl-form.tpl-auth .tpl-field .tpl_reg:hover:before {
    display: none;
  }
}

.tpl-form.tpl-auth .tpl-field .tpl_reg:active:before {
  opacity: 1;
  visibility: visible;
  background: rgba(255, 255, 255, 0.3);
}
a.tpl-button {
  display: inline-block;
  text-decoration: none;
  padding: 5px 11px;
}
.tpl-form.tpl-auth .tpl-button.forgot {
  position: relative;
  margin: 0;
  width: auto;
  color: #0c8ac9;
  background: #fff;
  text-transform: uppercase;
  padding: 12px 30px 10px;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  border-radius: 1px;
  box-shadow: none;
  box-sizing: border-box;
  transition: all 0.3s;
  outline: none;
  box-shadow: inset 0 0 0 2px #0c8ac9;
}

.tpl-form.tpl-auth .tpl-button.forgot:before {
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

.tpl-form.tpl-auth .tpl-button.forgot:hover {
  background: #0c8ac9;
  box-shadow: none;
}

.tpl-form.tpl-auth .tpl-button.forgot:hover span {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .tpl-form.tpl-auth .tpl-button.forgot:hover {
    background: #fff;
    box-shadow: inset 0 0 0 2px #0c8ac9;
  }
  .tpl-form.tpl-auth .tpl-button.forgot:hover span {
    color: #0c8ac9;
  }
}

.tpl-form.tpl-auth .tpl-button.forgot:active {
  background: #0c8ac9;
  box-shadow: none;
}

.tpl-form.tpl-auth .tpl-button.forgot:active:before {
  opacity: 1;
  visibility: visible;
}

.tpl-form.tpl-auth .tpl-button.forgot:active span {
  color: #fff;
}

.tpl-form.tpl-auth .tpl-button.forgot span {
  color: #0c8ac9;
  position: relative;
}
</style>

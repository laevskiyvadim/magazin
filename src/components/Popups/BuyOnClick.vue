<template>
  <div class="buy-one-click-form-wr">
    <!--active-->
    <div class="buy-one-click-form-in">
      <div class="close-btn"></div>
      <div
        class="tpl-anketa"
        data-api-url="/my/s3/xapi/public/?method=form/postform&amp;param[form_id]=63035861&amp;param[tpl]=global:form.minimal.2.2.63.tpl"
        data-api-type="form"
      >
        <div class="form_bl_title">Купить в один клик</div>
        <form method="post" action="/" data-s3-anketa-id="63035861">
          <input type="hidden" name="form_id" value="63035861" />
          <input
            type="hidden"
            name="tpl"
            value="global:form.minimal.2.2.63.tpl"
          />
          <input type="hidden" name="placeholdered_fields" value="1" />
          <div class="form_inner">
            <div class="tpl-field type-text">
              <div class="field-value">
                <input
                  type="hidden"
                  size="30"
                  maxlength="100"
                  value="94.102.125.120"
                  name="d[0]"
                  placeholder="IP-адрес заказчика"
                />
              </div>
            </div>
            <div class="tpl-field type-text">
              <div class="field-value">
                <input
                  type="hidden"
                  size="30"
                  maxlength="100"
                  value=""
                  name="d[1]"
                  placeholder="Название товара"
                  class="productName"
                />
              </div>
            </div>
            <div class="tpl-field type-text">
              <div class="field-value">
                <input
                  type="hidden"
                  size="30"
                  maxlength="100"
                  value=""
                  name="d[2]"
                  placeholder="Ссылка на страницу товара"
                  class="productLink"
                />
              </div>
            </div>
            <div class="tpl-field type-text field-required">
              <div class="field-value">
                <input
                  required=""
                  type="text"
                  size="30"
                  maxlength="100"
                  value=""
                  name="d[3]"
                  placeholder="Ваше имя"
                />
              </div>
            </div>
            <div class="tpl-field type-text field-required">
              <div class="field-value">
                <input
                  required=""
                  type="text"
                  size="30"
                  maxlength="100"
                  value=""
                  name="d[4]"
                  placeholder="Ваш контактный телефон"
                />
              </div>
            </div>
            <div class="tpl-field type-textarea">
              <div class="field-value">
                <textarea
                  cols="50"
                  rows="7"
                  name="d[5]"
                  placeholder="Комментарий"
                ></textarea>
              </div>
            </div>

            <div class="tpl-field tpl-field-button">
              <button type="submit" class="tpl-form-button">
                <span>Отправить</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.buy-one-click-form-wr {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  white-space: nowrap;
  text-align: center;
  z-index: 250;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s;
}

@media screen and (max-width: 599px) {
  .buy-one-click-form-wr {
    white-space: normal;
  }
}

.buy-one-click-form-wr.active {
  opacity: 1;
  visibility: visible;
  background: rgba(3, 54, 115, 0.8);
}

@media screen and (max-width: 599px) {
  .buy-one-click-form-wr.active {
    background: #fff;
  }
}

.buy-one-click-form-wr:before {
  height: 100%;
  display: inline-block;
  vertical-align: middle;
  content: "";
}

@media screen and (max-width: 599px) {
  .buy-one-click-form-wr:before {
    display: none;
  }
}
.buy-one-click-form-wr.active {
  opacity: 1;
  visibility: visible;
  background: rgba(3, 54, 115, 0.8);
}

@media screen and (max-width: 599px) {
  .buy-one-click-form-wr.active {
    background: #fff;
  }
}
.buy-one-click-form-wr .buy-one-click-form-in {
  display: inline-block;
  white-space: normal;
  vertical-align: middle;
  text-align: left;
  position: relative;
  z-index: 1;
  background: #fff;
  max-width: 400px;
  padding: 47px 58px 47px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(6, 44, 81, 0.14);
}

@media screen and (max-width: 599px) {
  .buy-one-click-form-wr .buy-one-click-form-in {
    max-width: 100%;
    padding: 30px 30px 30px;
    display: block;
  }
}
.buy-one-click-form-wr .close-btn {
  position: absolute;
  right: 0;
  top: 0;
  width: 45px;
  height: 45px;
  cursor: pointer;
  z-index: 2;
  background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
    50% no-repeat;
}
.buy-one-click-form-wr .form_bl_title {
  color: #212121;
  font: 18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 0 0 27px;
}
.buy-one-click-form-wr .tpl-field {
  margin: 0 0 15px 0;
  font-size: 16px;
}
.buy-one-click-form-wr .tpl-field input[type="text"] {
  width: 100%;
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

.buy-one-click-form-wr .tpl-field input[type="text"]:hover {
  border-color: #f5fafb;
  background: #fff;
}

.buy-one-click-form-wr .tpl-field input[type="text"]:focus {
  border-color: #f5fafb;
  background: #fff;
  box-shadow: inset 0 0 0 1px #f5fafb;
}
.buy-one-click-form-wr .tpl-field textarea {
  width: 100%;
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

.buy-one-click-form-wr .tpl-field textarea:hover {
  border-color: #f5fafb;
  background: #fff;
}

.buy-one-click-form-wr .tpl-field textarea:focus {
  border-color: #f5fafb;
  background: #fff;
  box-shadow: inset 0 0 0 1px #f5fafb;
}
.buy-one-click-form-wr .tpl-field .tpl-form-button {
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 20px 11px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: none;
  background: #0c8ac9;
  position: relative;
}

.buy-one-click-form-wr .tpl-field .tpl-form-button:hover:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.1);
}

.buy-one-click-form-wr .tpl-field .tpl-form-button:active:before {
  background: rgba(255, 255, 255, 0.3);
}

.buy-one-click-form-wr .tpl-field .tpl-form-button span {
  position: relative;
  color: #fff;
}
</style>

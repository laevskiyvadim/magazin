<template>
  <div class="form_bl_wrapper" :class="{ slide: slider }">
    <div class="form_bl_in">
      <div
        class="tpl-anketa"
        style="display: flex; flex-wrap: wrap"
        data-api-url="/my/s3/xapi/public/?method=form/postform&param[form_id]=63036061&param[tpl]=global:form.minimal.2.2.63.tpl "
        data-api-type="form "
      >
        <div class="form_bl_title">
          Подписаться на рассылку выгодных предложений нашего магазина
        </div>
        <form method="post" action="/ " data-s3-anketa-id="63036061 ">
          <div class="form_inner">
            <div class="tpl-field type-text field-required">
              <div class="field-value">
                <input
                  required
                  type="text"
                  size="30"
                  maxlength="100"
                  value=" "
                  name="d[0]"
                  placeholder="Ваш e-mail:"
                  style="color: black !important"
                />
              </div>
            </div>

            <div class="tpl-field tpl-field-button">
              <button type="submit " class="tpl-form-button">
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
export default {
  props: ["slider"],
};
</script>
<style scoped lang="scss">
.form_bl_wrapper {
  padding: 20px 0 50px;
  max-width: 1334px;
  margin: 0 auto;
  width: 100%;
  flex: none;
  transition: transform 0.3s;
}

.form_bl_wrapper .form_bl_in {
  max-width: 1040px;
  margin: 0 auto;
  padding: 16px 20px 1px;
  background: #fff;
  box-sizing: border-box;
}
@media screen and (max-width: 1580px) {
  .form_bl_wrapper .form_bl_in {
    max-width: 830px;
  }
}
.form_bl_wrapper .tpl-anketa {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1580px) {
  .form_bl_wrapper .tpl-anketa .form_bl_title {
    flex: 0 1 260px;
    margin: 0 25px 15px 0;
    min-width: 260px;
  }
}
.form_bl_wrapper .tpl-anketa .form_bl_title {
  color: #000;
  font: 16px/20px "fira_sans_extra_condensed-r", Arial, Helvetica, sans-serif;
  margin: 0 45px 15px 0;
  flex: 0 1 294px;
}
.form_bl_wrapper .tpl-anketa form {
  width: 100%;
  display: block;
}
.form_bl_wrapper .tpl-anketa form .form_inner {
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  font-size: 0;
}
.form_bl_wrapper .tpl-anketa form.formClass .tpl-field {
  max-width: 67%;
  margin-right: 3%;
}

.form_bl_wrapper .tpl-anketa .tpl-field {
  margin: 0 4% 15px 0;
  max-width: 48%;
  font-size: 16px;
  flex: 1 1 48%;
}
.form_bl_wrapper .tpl-anketa .tpl-field input[type="text"] {
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
.form_bl_wrapper .tpl-anketa form.formClass .tpl-field.tpl-field-button {
  max-width: 30%;
  margin-right: 0;
}
.form_bl_wrapper .tpl-anketa form.formClass .tpl-field {
  max-width: 67%;
  margin-right: 3%;
}
.form_bl_wrapper .tpl-anketa .tpl-field:nth-child(2n) {
  margin-right: 0;
}
.form_bl_wrapper .tpl-anketa .tpl-field {
  margin: 0 4% 15px 0;
  max-width: 48%;
  font-size: 16px;
  flex: 1 1 48%;
}
.form_bl_wrapper .tpl-anketa .tpl-field .tpl-form-button {
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
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  -webkit-appearance: button;
  cursor: pointer;
}
button,
select {
  text-transform: none;
}
button {
  overflow: visible;
}
.form_bl_wrapper .tpl-anketa .tpl-field .tpl-form-button span {
  position: relative;
  color: #fff;
}
</style>

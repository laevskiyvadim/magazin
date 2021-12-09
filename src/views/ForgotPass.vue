<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Восстановление пароля</h1>

    Введите Ваш e-mail (на него будет отправлен Ваш пароль)
    <form method="post">
      <div class="g-form-row">
        <div
          class="g-form-field g-form-field--title-pos-1 g-form-field--required"
        >
          <div class="g-form-field__title">
            <label for="email">
              E-mail
              <span class="g-form-field__required-mark">*</span>
            </label>
          </div>
          <div class="g-form-field__value">
            <input
              placeholder="sample@domain.ru"
              required=""
              class="
                g-form-control-text g-form-control-value
                g-form-control--required
              "
              type="email"
              size="30"
              maxlength="100"
              value=""
              name="email"
              id="email"
            />
          </div>
        </div>
      </div>
      <div class="g-form-field">
        <button type="submit" class="g-button">Отправить</button>
        <br />
        <br />
      </div>
      <input type="hidden" name="mode" value="forgot_password" />
      <textarea
        name="g-recaptcha-response"
        style="display: none !important"
      ></textarea>
    </form>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "ForgotPass",
  components: { SitePath },
};
</script>
<style lang="scss" scoped>
.site-main {
  -webkit-box-flex: 1;
  -webkit-flex: 1 0 0%;
  -moz-box-flex: 1;
  -moz-flex: 1 0 0%;
  -ms-flex: 1 0 0%;
  flex: 1 0 0%;
  -webkit-box-ordinal-group: 2;
  -moz-box-ordinal-group: 2;
  -webkit-order: 1;
  -moz-order: 1;
  -ms-flex-order: 1;
  order: 1;
  max-width: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

@media screen and (max-width: 699px) {
  .site-main {
    padding: 0 12px 20px;
  }
}
.g-form-field {
  padding: 0.3333em;
  position: relative;
}
.g-form-field {
  padding: 0.3333em;
  position: relative;
}
.g-form-field__title {
  font-size: 0.8667em;
  line-height: 1.2em;
  font-weight: bold;
  max-width: 100%;
  margin-bottom: 0.5385em;
  position: relative;
}
.g-form-field__title::after {
  content: "";
  display: block;
  clear: both;
  width: 100%;
  visibility: hidden;
  height: 0;
}
.g-form-field__required-mark {
  color: red;
}
.g-form-field__value {
  vertical-align: top;
  display: inline-block;
  position: relative;
  font-family: Arial, sans-serif;
  margin-bottom: 0.66667em;
}
.g-form-field::after {
  display: table;
  clear: both;
  content: "";
}
input[type="text"][name="_cn"],
.g-form-control-text,
.g-form-control-textarea {
  box-sizing: border-box;
  background: #fff;
  border: 1px solid #c5c5c5;
  box-shadow: inset 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #484848;
  font-size: 14px;
  line-height: 1.2;
  outline: none;
  padding: 0.5em 0.71428em;
  transition: border-color 0.3s, box-shadow 0.3s;
}
.g-form-control-text,
.g-form-control-textarea {
  width: 100%;
  display: block;
}
.g-form-control-text,
.g-form-control-textarea {
  margin: 0;
}
.g-button {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 1.35714em;
  cursor: pointer;
  text-decoration: none !important;
  color: #fff !important;
  border: 0.07143em solid rgba(0, 0, 0, 0.1);
  border-radius: 0.28571em;
  outline: none;
  background-color: #f06354;
  background-image: linear-gradient(-180deg, #f6a39a 0%, #f06354 100%);
  box-shadow: 0 0.07143em 0.07143em 0 rgba(0, 0, 0, 0.2);
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 1.2;
}
</style>

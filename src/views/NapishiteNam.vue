<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Напишите нам</h1>

    <div class="g-page g-page-anketa">
      <form data-s3-anketa-id="63035661" method="post" id="form_g-anketa">
        <div
          class="g-form-field g-form-field--title-pos-1 g-form-field--required"
        >
          <div class="g-form-field__title">
            <label for="d[0]">
              Ваше имя или название организации
              <span class="g-form-field__required-mark">*</span>
            </label>
          </div>
          <div class="g-form-field__value">
            <input
              required=""
              class="
                g-form-control-text g-form-control-value
                g-form-control--required
              "
              type="text"
              size="30"
              maxlength="100"
              value=""
              name="d[0]"
              id="d[0]"
            />
          </div>
        </div>

        <div
          class="g-form-field g-form-field--title-pos-1 g-form-field--required"
        >
          <div class="g-form-field__title">
            <label for="d[1]">
              Ваш E-mail или телефон
              <span class="g-form-field__required-mark">*</span>
            </label>
          </div>
          <div class="g-form-field__value">
            <input
              required=""
              class="
                g-form-control-text g-form-control-value
                g-form-control--required
              "
              type="text"
              size="30"
              maxlength="100"
              value=""
              name="d[1]"
              id="d[1]"
            />
          </div>
        </div>

        <div
          class="g-form-field g-form-field--title-pos-1 g-form-field--required"
        >
          <div class="g-form-field__title">
            <label for="d[2]">
              Текст
              <span class="g-form-field__required-mark">*</span>
            </label>
          </div>
          <div class="g-form-field__value">
            <textarea
              required=""
              class="
                g-form-control-textarea g-form-control-value
                g-form-control--required
              "
              cols="50"
              rows="7"
              name="d[2]"
              id="d[2]"
            ></textarea>
          </div>
        </div>

        <div class="g-form-row g-form-row--submit">
          <input type="submit" class="g-button" value="Отправить" />
        </div>
        <textarea
          name="g-recaptcha-response"
          style="display: none !important"
        ></textarea>
      </form>
    </div>
  </main>
  <!-- .site-main -->
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "NapishiteNam",
  components: { SitePath },
};
</script>
<style lang="scss" scoped>
.site-main {
  flex: 1 0 0%;
  order: 1;
  max-width: 100%;
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
.g-form-field__title {
  font-size: 0.8667em;
  line-height: 1.2em;
  font-weight: bold;
  max-width: 100%;
  margin-bottom: 0.5385em;
  position: relative;
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
.g-form-control-text,
.g-form-control-textarea {
  margin: 0;
}
.g-form-control-text,
.g-form-control-textarea {
  width: 100%;
  display: block;
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
.g-form-row--submit,
.g-form-row--captcha {
  padding: 1.3333em 0.3333em 0.3333em !important;
}
button,
html input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
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

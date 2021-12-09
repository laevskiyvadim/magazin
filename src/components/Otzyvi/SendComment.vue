<template>
  <form
    method="post"
    id="form_g-anketa"
    class="g-board__form"
    action="#g-board__form"
  >
    <div class="g-form-field g-form-field--required">
      <div class="g-form-field__title">
        <label for="post_name">
          Имя
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
          maxlength="300"
          value=""
          name="post_name"
          id="post_name"
        />
      </div>
    </div>

    <div class="g-form-field g-form-field--required">
      <div class="g-form-field__title">
        <label for="post_mail">
          E-mail
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
          type="email"
          size="30"
          maxlength="300"
          value=""
          name="post_mail"
          id="post_mail"
        />
      </div>
    </div>

    <div class="g-form-field g-form-field--required">
      <div class="g-form-field__title">
        <label for="post_body">
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
          cols="70"
          rows="7"
          name="post_body"
          id="post_body"
        ></textarea>
      </div>
    </div>
    <div class="g-form-row g-form-row--submit">
      <input type="submit" class="g-button" value="Отправить" />
    </div>
  </form>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
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
.g-form-row--submit,
.g-form-row--captcha {
  padding: 1.3333em 0.3333em 0.3333em !important;
}
.g-form-field {
  padding: 0.3333em;
  position: relative;
}
.g-form-field::after {
  display: table;
  clear: both;
  content: "";
}
.g-form-control-text,
.g-form-control-textarea {
  max-width: 100%;
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
</style>

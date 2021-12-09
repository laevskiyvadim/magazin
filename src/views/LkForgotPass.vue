<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Восстановление пароля</h1>
    <Tab />

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
              value="laevskiy.vadim@mail.ru"
              name="email"
              readonly=""
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
import Tab from "@/components/LK/Tab.vue";
export default {
  name: "LkForgotPass",
  components: {
    SitePath,
    Tab,
  },
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
</style>

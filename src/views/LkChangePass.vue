<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Смена пароля</h1>
    <Tab />

    <br />
    <form method="post" id="form_g-user-register" novalidate="">
      <input type="hidden" name="user_id" value="175802902" />

      <div class="g-form-row__subrow">
        <div class="g-form-field-wrap">
          <div
            class="
              g-form-field g-form-field--title-pos-2 g-form-field--required
            "
          >
            <div class="g-form-field__title g-user-setting__title-field-2">
              <label for="pwd">
                Старый пароль
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
                type="password"
                size="32"
                maxlength="32"
                value=""
                name="pwd"
                id="pwd"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="g-form-row__subrow">
        <div class="g-form-field-wrap">
          <div
            class="
              g-form-field g-form-field--title-pos-2 g-form-field--required
            "
          >
            <div class="g-form-field__title g-user-setting__title-field-2">
              <label for="pwd_new">
                Новый пароль
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
                type="password"
                size="32"
                maxlength="32"
                value=""
                name="pwd_new"
                id="pwd_new"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="g-form-row__subrow">
        <div class="g-form-field-wrap">
          <div
            class="
              g-form-field g-form-field--title-pos-2 g-form-field--required
            "
          >
            <div class="g-form-field__title g-user-setting__title-field-2">
              <label for="pwd_new2">
                Введите пароль повторно
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
                type="password"
                size="32"
                maxlength="32"
                value=""
                name="pwd_new2"
                id="pwd_new2"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="g-form-row g-form-row--submit">
        <input
          type="submit"
          class="g-button g-user__button"
          value="Сохранить"
        />
        &nbsp;&nbsp;<router-link :to="'/lkforgotpass'"
          >Забыли пароль?</router-link
        >
      </div>
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
  name: "LkChangePass",
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

<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Личные данные</h1>
    <Tab />

    <br />

    <div class="g-user-setting">
      <div class="g-user-setting__side-left page-suttings">
        <form method="post" id="form_g-user-register">
          <div class="g-form-row__subrow">
            <div class="g-form-field-wrap">
              <input type="hidden" name="user_id" value="175802902" />
            </div>
          </div>
          <div class="g-form-row__subrow">
            <div class="g-form-field-wrap">
              <input type="hidden" name="mode" value="settings" />
            </div>
          </div>
          <div class="g-form-row__subrow">
            <div class="g-form-field-wrap">
              <input
                type="hidden"
                name="email"
                value="laevskiy.vadim@mail.ru"
              />
            </div>
          </div>
          <div class="g-form-row__subrow">
            <div class="g-form-field-wrap">
              <div class="g-form-field g-form-field--title-pos-2">
                <div class="g-form-field__title g-user-setting__title-field-2">
                  <label for="name"> Имя </label>
                </div>
                <div class="g-form-field__value">
                  <input
                    class="g-form-control-text g-form-control-value"
                    type="text"
                    size="32"
                    maxlength="100"
                    value=""
                    name="name"
                    id="name"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="g-form-row__subrow">
            <div class="g-form-field-wrap">
              <div class="g-form-field g-form-field--title-pos-2">
                <div class="g-form-field__title g-user-setting__title-field-2">
                  <label for="surname"> Фамилия </label>
                </div>
                <div class="g-form-field__value">
                  <input
                    class="g-form-control-text g-form-control-value"
                    type="text"
                    size="32"
                    maxlength="100"
                    value=""
                    name="surname"
                    id="surname"
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
                  <label for="phone">
                    Телефон
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
                    size="32"
                    maxlength="100"
                    value="89927774242"
                    name="phone"
                    id="phone"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="g-form-row__subrow">
            <div class="g-form-field-wrap">
              <div class="g-form-field g-form-field--title-pos-2">
                <div class="g-form-field__title g-user-setting__title-field-2">
                  <label for="fax"> Факс </label>
                </div>
                <div class="g-form-field__value">
                  <input
                    class="g-form-control-text g-form-control-value"
                    type="text"
                    size="32"
                    maxlength="100"
                    value=""
                    name="fax"
                    id="fax"
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
          </div>
          <textarea
            name="g-recaptcha-response"
            style="display: none !important"
          ></textarea>
        </form>
      </div>
    </div>
    <div class="clear"></div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
import Tab from "@/components/LK/Tab.vue";
export default {
  name: "LkData",
  components: { SitePath, Tab },
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

<template>
  <div class="shop2_cart_reg_wr opened">
    <div class="shop2_cart_registration">
      <div class="table_registration">
        <div class="cart_form_close"></div>
        <div class="cell_l">
          <div class="cell_l_in">
            <div class="cell_form_title">Оформить заказ</div>
            <form
              method="post"
              action="/registraciya"
              class="form-registration"
            >
              <input type="hidden" name="mode" value="login" />
              <div class="login_field">
                <label for="reg-login" class="reg-login">Логин:</label>
                <label class="registration-field">
                  <input type="text" id="reg-login" value="" name="login" />
                </label>
              </div>
              <div class="reg_field">
                <label for="reg-password" class="reg-password">Пароль:</label>
                <label class="registration-field">
                  <input
                    type="password"
                    id="reg-password"
                    value=""
                    name="password"
                  />
                </label>
              </div>
              <button class="shop2-btn login_btn" type="submit">
                <span>Войти и купить</span>
              </button>
              <textarea
                name="g-recaptcha-response"
                style="display: none !important"
              ></textarea>
            </form>
          </div>
        </div>
        <div class="cell_r">
          <div class="cell_r_in">
            <div class="cell_r_text">
              Для получения персональных и сезонных скидок, участия в бонусной
              программе, а также уникальных предложений предлагаем Вам пройти
              несложную процедуру
            </div>
            <div class="cell_r_reg">
              <a href="/registraciya/register"
                ><span>регистрации в магазине</span></a
              >
            </div>
            <div class="cell_r_no_reg">
              <a href="/magazin?mode=order" class="shop2-btn"
                ><span>Купить без регистрации</span></a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

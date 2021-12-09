<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Регистрация</h1>

    <form method="post" id="orderForm">
      <input type="hidden" name="user_id" value="" />
      <input type="hidden" name="mode" value="register" />
      <span style="color: red">*</span><b>E-mail:</b>
      <br />
      <input type="text" size="32" name="email" maxlength="50" value="" />
      <br />
      <br />
      <span style="color: red">*</span><b>Логин:</b>
      <br />
      <input type="text" size="32" name="login" maxlength="50" value="" />
      <br />
      <br />
      <span style="color: red">*</span><b>Пароль:</b>
      <br />
      <input type="password" size="32" name="pwd" maxlength="32" value="" />
      <br />
      <br />

      <span style="color: red">*</span><b>Введите пароль повторно:</b>
      <br />
      <input type="password" size="32" name="pwd2" maxlength="32" value="" />
      <br />
      <br />

      <b>Имя:</b>
      <br />
      <input type="text" size="32" name="name" maxlength="100" value="" />
      <br />
      <br />
      <b>Фамилия:</b>
      <br />
      <input type="text" size="32" name="surname" maxlength="100" value="" />
      <br />
      <br />
      <span style="color: red">*</span><b>Телефон:</b>
      <br />
      <input type="text" size="32" name="phone" maxlength="100" value="" />
      <br />
      <br />
      <b>Факс:</b>
      <br />
      <input type="text" size="32" name="fax" maxlength="100" value="" />
      <br />
      <br />
      <input type="submit" value="Зарегистрироваться" />
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
  name: "Register",
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
#orderForm {
  background: #fff;
  padding: 15px 30px 30px;
}
b,
strong {
  font-weight: normal;
  font-family: "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
}
#orderForm input[type="text"],
#orderForm input[type="password"] {
  font: 13px/18px "noto_sans-r", Arial, Helvetica, sans-serif;
  color: #26281a;
  height: auto;
  background: #f5fafb;
  border: 1px solid #f5fafb;
  padding: 10px 14px 10px;
  box-shadow: none;
  outline: none;
  transition: all 0.3s;
  box-sizing: border-box;
}

#orderForm input[type="text"]:hover,
#orderForm input[type="password"]:hover {
  border-color: #f5fafb;
  background: #fff;
}

#orderForm input[type="text"]:focus,
#orderForm input[type="password"]:focus {
  border-color: #f5fafb;
  background: #fff;
  box-shadow: inset 0 0 0 1px #f5fafb;
}
#orderForm input[type="submit"] {
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  color: #fff;
  padding: 12px 23px 11px !important;
  border-radius: 0;
  box-shadow: none;
  width: auto;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: none;
  text-transform: uppercase;
  background: #0c8ac9;
  position: relative;
}
</style>

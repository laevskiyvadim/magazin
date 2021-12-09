<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Авторизация</h1>

    <form method="post">
      <b>Войти в систему</b>
      (
      <router-link :to="'/register'"><b>Регистрация на сайте</b></router-link> )
      <br /><br />
      <input type="hidden" name="mode" value="login" />
      E-mail:<br /><input
        type="text"
        size="35"
        name="login"
        value=""
      /><br /><br />
      Пароль:<br /><input
        type="password"
        size="15"
        name="password"
      /><br /><br />
      Если вы уже зарегистрированы на нашем сайте, но забыли пароль или Вам не
      пришло письмо подтверждения, воспользуйтесь
      <router-link :to="'/forgotpass'">формой восстановления пароля</router-link
      >.
      <br />

      <div class="g-auth__personal-note">
        Я согласен(на) на обработку моих персональных данных.
        <router-link :to="'/persdata'">Подробнее</router-link>
      </div>
      <br />
      <input type="submit" value="Вход" />
      <textarea
        name="g-recaptcha-response"
        style="display: none !important"
      ></textarea>
    </form>
    <br />
    <br />
    <br />
    Внимание! Для корректной работы у Вас в браузере должна быть включена
    поддержка cookie. В случае если по каким-либо техническим причинам передача
    и хранение cookie у Вас не поддерживается, вход в систему будет недоступен.
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "auth",
  components: { SitePath },
};
</script>
<style lang="scss" scoped>
.g-auth__personal-note {
  font-size: 14px;
  line-height: 1.4;
  max-width: 300px;
  margin-top: 27px;
}
.g-auth__personal-note {
  font: 13px "noto_sans-r", Arial, Helvetica, sans-serif;
  color: #212121;
}
</style>

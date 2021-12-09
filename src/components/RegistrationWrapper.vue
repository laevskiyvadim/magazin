<template>
  <div
    class="fixed_reg_wrapper"
    @click.stop
    :class="{ active: registrationStatus, opened: registrationStatus }"
  >
    <div class="reg_close" @click.stop="closeRegWrapper"></div>
    <div class="reg_back" @click.stop="closeRegWrapper">Назад</div>
    <div class="fixed_reg_in">
      <div class="shop2-block login-form">
        <div class="block-title">Вход в кабинет</div>
        <div class="block-body">
          <form method="get" action="/auth">
            <input type="hidden" name="mode " value="login " />
            <div class="row">
              <label class="label_class" for="login ">Логин:</label>
              <label class="field text"
                ><input
                  placeholder="user-name@mail.com "
                  type="text "
                  name="login "
                  id="login "
                  tabindex="1 "
                  value=" "
              /></label>
            </div>
            <div class="row">
              <label class="label_class" for="password ">Пароль:</label>
              <label class="field password"
                ><input
                  placeholder="********* "
                  type="password "
                  name="password "
                  id="password "
                  tabindex="2 "
                  value=" "
              /></label>
            </div>
            <div class="forg_link">
              <router-link :to="'/forgotpass'">Забыли пароль?</router-link>
            </div>
            <div class="button_wr">
              <button type="submit " class="signin-btn" tabindex="3 ">
                <span>Войти</span>
              </button>
            </div>
          </form>
          <div class="reg_link">
            <router-link :to="'/register'" class="register"
              >Регистрация</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["registrationStatus"],
  methods: {
    closeRegWrapper: function () {
      this.$emit("closeAufhForm");
    },
  },
};
</script>
<style scoped lang="scss">
.fixed_reg_wrapper {
  position: fixed;
  left: 50%;
  top: 90px;
  bottom: 0;
  min-height: 100%;
  width: 0;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 221;
  box-shadow: 0 4px 8px rgba(6, 44, 81, 0.14);
  transition: all 0.3s;
  transform: translate(-667px, 0);
  opacity: 0;
  visibility: hidden;
  .fixed_reg_in {
    width: 226px;
  }
  .reg_back {
    display: none;
    color: #0c8ac9;
    font: 16px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
    text-transform: uppercase;
    padding: 18px 60px 20px 55px;
    position: relative;
  }
  .reg_back:before {
    position: absolute;
    content: "";
    left: 21px;
    top: 22px;
    width: 8px;
    height: 14px;
    transform: rotate(180deg);
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%228px%22%20height%3D%2214px%22%20%20viewBox%3D%220%200%208%2014%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M7.713%2C7.691%20C8.103%2C7.303%208.106%2C6.671%207.719%2C6.279%20C7.655%2C6.215%207.583%2C6.159%207.504%2C6.114%20L1.690%2C0.275%20C1.304%2C-0.116%200.675%2C-0.119%200.285%2C0.270%20C0.283%2C0.271%200.281%2C0.273%200.279%2C0.275%20C-0.106%2C0.665%20-0.106%2C1.293%200.279%2C1.683%20L5.576%2C7.012%20L0.349%2C12.262%20C-0.041%2C12.650%20-0.043%2C13.282%200.343%2C13.673%20C0.345%2C13.675%200.347%2C13.677%200.349%2C13.679%20C0.736%2C14.066%201.362%2C14.066%201.750%2C13.679%20L7.713%2C7.691%20Z%22%2F%3E%3C%2Fsvg%3E")
      0 0 no-repeat;
  }
  .reg_close {
    display: none;
    position: absolute;
    right: 0;
    top: 0;
    width: 60px;
    height: 60px;
    z-index: 5;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
      50% no-repeat;
  }
  .login-form {
    .block-title {
      padding: 34px 20px 44px;
      color: #09538e;
      font: 18px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      letter-spacing: -0.18px;
      text-align: center;
      text-transform: uppercase;
      a {
        text-decoration: none;
        color: inherit;
      }
    }
    .block-body {
      padding: 0 20px;
    }
    .label_class {
      color: #212121;
      font: 14px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      padding: 0 0 6px;
      display: block;
    }
    .row {
      padding: 0 0 16px;
    }
    label.field input,
    label.password input {
      background: #f5fafb;
      color: #212121;
      border: 1px solid #f5fafb;
      transition: all 0.3s;
      border-radius: 1px;
      box-shadow: none;
      box-sizing: border-box;
      font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
      outline: none;
      width: 100%;
      padding: 8px 20px 7px 12px;
    }
    label.field input::-webkit-input-placeholder,
    label.password input::-webkit-input-placeholder {
      color: #212121;
    }
    label.field input:moz-placeholder,
    label.password input:moz-placeholder {
      color: #212121;
    }
    label.field input::-moz-placeholder,
    label.password input::-moz-placeholder {
      color: #212121;
    }
    label.field input:-ms-input-placeholder,
    label.password input:-ms-input-placeholder {
      color: #212121;
    }
    label.field input:hover,
    label.password input:hover {
      border-color: #f5fafb;
      background: #fff;
    }
    label.field input:focus,
    label.password input:focus {
      box-shadow: inset 0 0 0 1px #eae9f4;
    }
    .forg_link {
      padding: 3px 0 22px;
      text-align: center;
      a {
        color: #0c8ac9;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    }
    .button_wr {
      padding: 0 0 16px;
    }
    button {
      font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      padding: 12px 20px 11px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      outline: none;
      text-transform: uppercase;
      box-shadow: none;
      background: #0c8ac9;
      position: relative;
      span {
        position: relative;
        color: #fff;
      }
    }
    button:hover:before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    button:active:before {
      background: rgba(255, 255, 255, 0.3);
    }
    .reg_link {
      a {
        display: block;
        text-align: center;
        text-decoration: none;
        padding: 8px 20px 8px;
        font: 16px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        color: #0c8ac9;
        background: #fff;
        border: 1px solid #0c8ac9;
        border-radius: 1px;
        box-shadow: inset 0 0 0 1px #0c8ac9;
      }
      a:hover {
        color: #0c8ac9;
        box-shadow: none;
      }
      a:active {
        color: #0c8ac9;
        box-shadow: inset 0 0 0 1px #0c8ac9;
        background: #e5e5e5;
      }
    }
  }
}
.fixed_reg_wrapper.on_scroll {
  top: 0;
}
.fixed_reg_wrapper.active {
  opacity: 1;
  visibility: visible;
  width: 226px;
}
@media screen and (max-width: 1580px) {
  .fixed_reg_wrapper {
    transform: translate(-560px, 0);
  }
}
@media screen and (max-width: 1299px) {
  .fixed_reg_wrapper {
    transform: translate(-501px, 0);
  }
}
@media screen and (max-width: 1180px) {
  .fixed_reg_wrapper {
    transform: translate(-435px, 0);
    top: 60px;
    .login-form .block-title {
      padding: 30px 20px 24px;
    }
  }
}
@media screen and (max-width: 1023px) {
  .fixed_reg_wrapper.opened {
    opacity: 1;
    visibility: visible;
    transform: translate(0, 0);
    width: 320px;
  }
  .fixed_reg_wrapper {
    top: 0;
    left: 0;
    width: 360px;
    transform: translate(-360px, 0);
    .fixed_reg_in {
      width: 260px;
      margin: 0 auto;
      padding: 0 0 40px;
    }
    .reg_back {
      display: block;
    }
    .reg_close {
      display: block;
    }
    .login-form {
      .block-title {
        padding: 30px 20px;
      }
      .label_class {
        text-transform: uppercase;
      }
    }
  }
}
@media screen and (max-width: 699px) {
  .fixed_reg_wrapper {
    width: 320px;
    transform: translate(-320px, 0);
    .reg_back {
      padding: 15px 60px 15px 55px;
    }
    .reg_back:before {
      top: 19px;
    }
    .reg_close {
      width: 52px;
      height: 52px;
    }
  }
  .fixed_reg_wrapper.active {
    width: 320px;
  }
}
</style>

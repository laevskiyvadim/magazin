<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Спасибо за заказ</h1>
    <p>Ваш заказ принят. Спасибо за сотрудничество!!!</p>

    <div class="shop2-order-completed">
      <div>
        Проверить статус заказа Вы можете по
        <router-link :to="'/orderInfo'">ссылке</router-link>
      </div>
      <div>Номер Вашего заказа: <strong>№ 666 (209812704)</strong></div>
      <div>Дата заказа: <strong>14.08.21 20:59</strong></div>

      <div>
        Доставка:
        <strong> бесплатно </strong>
      </div>

      <div>Сумма к оплате: <strong>76&nbsp;305 руб.</strong></div>

      <div>
        <a class="shop2-btn" href="#" id="order-print"
          ><span>Распечатать бланк заказа</span></a
        >
      </div>
    </div>

    <div id="shop2-order" class="shop2-order-print hide">
      <fieldset class="shop2-order-data">
        <legend>Личные данные</legend>

        <div class="table-wrapper">
          <table>
            <tbody>
              <tr>
                <th>ФИО</th>
                <td>vadim</td>
              </tr>
              <tr>
                <th>Телефон</th>
                <td>45454</td>
              </tr>
              <tr>
                <th>E-mail</th>
                <td>dd@ss.tr</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>

      <fieldset class="shop2-order-data">
        <legend>Сведения о заказе</legend>

        <div class="table-wrapper">
          <table>
            <tbody>
              <tr>
                <th>Номер заказа</th>
                <td>666 (209812704)</td>
              </tr>
              <tr>
                <th>Статус заказа</th>
                <td>Новый</td>
              </tr>
              <tr>
                <th>Создан</th>
                <td>14.08.2021 20:59</td>
              </tr>
              <tr>
                <th>Оплаченная сумма</th>
                <td>0 из 76&nbsp;305 руб.</td>
              </tr>
              <tr>
                <th>Способ оплаты</th>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>

      <fieldset class="shop2-order-data">
        <legend>Сведения о доставке</legend>
        <div class="table-wrapper">
          <table>
            <tbody>
              <tr>
                <th>Доставка</th>
                <td>Самовывоз</td>
              </tr>

              <tr>
                <th>Стоимость доставки</th>
                <td>бесплатно</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>

      <div class="table-wrapper">
        <table class="shop2-table-order">
          <tbody>
            <tr>
              <th>Название</th>
              <th>Цена, руб.</th>
              <th>Со скидкой, руб.</th>
              <th>Количество</th>
              <th class="wide-cell">Вес</th>
              <th>Сумма, руб.</th>
            </tr>

            <tr>
              <td>
                <p>
                  <img
                    src="/thumb/2/7XrmuGNHH2dReSA8f5FRjw/60c60/d/bone_760_500_ral_9016_sx_1.png"
                    alt=""
                  />
                  <span>
                    <strong>Terma Bone 760/500 полотенцесушитель</strong>
                  </span>
                </p>
                <p>Производитель: TERMA Польша</p>

                <p>Цвет: Белый</p>
              </td>

              <td>14&nbsp;744</td>
              <td>14&nbsp;744</td>
              <td>1</td>
              <td>-</td>
              <td>14&nbsp;744</td>
            </tr>

            <tr>
              <td>
                <p>
                  <img
                    src="/thumb/2/05cRDxE1EHsfjdWTDJVIdg/60c60/d/fiona_660_400_ral9016_reg2.jpg"
                    alt=""
                  />
                  <span>
                    <strong>Terma Fiona 660/430 полотенцесушитель</strong>
                  </span>
                </p>
                <p>Производитель: TERMA Польша</p>

                <p>Цвет: Белый</p>
              </td>

              <td>10&nbsp;088</td>
              <td>10&nbsp;088</td>
              <td>3</td>
              <td>-</td>
              <td>30&nbsp;264</td>
            </tr>

            <tr>
              <td>
                <p>
                  <img
                    src="/thumb/2/_lLobNYP27ozTfbEpMwcSw/60c60/d/polotentsesushitel_alex.jpg"
                    alt=""
                  />
                  <span>
                    <strong>Terma Alex 760/500 полотенцесушитель</strong>
                  </span>
                </p>
                <p>Производитель: TERMA Польша</p>

                <p>Цвет: Белый</p>
              </td>

              <td>11&nbsp;898</td>
              <td>11&nbsp;898</td>
              <td>1</td>
              <td>-</td>
              <td>11&nbsp;898</td>
            </tr>

            <tr>
              <td>
                <p>
                  <img
                    src="/thumb/2/DV-3Lp9ZpEyfRFxWPHqy1g/60c60/d/alex_1580_500_ral_9016_sx.png"
                    alt=""
                  />
                  <span>
                    <strong>Terma Alex 1580/500 полотенцесушитель</strong>
                  </span>
                </p>
                <p>Производитель: TERMA Польша</p>

                <p>Цвет: Белый</p>
              </td>

              <td>19&nbsp;399</td>
              <td>19&nbsp;399</td>
              <td>1</td>
              <td>-</td>
              <td>19&nbsp;399</td>
            </tr>

            <tr>
              <th colspan="5">Сумма к оплате:</th>
              <th>76&nbsp;305</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "OrderConfirm",
  components: {
    SitePath,
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
.shop2-order-completed {
  margin: 20px 0;
  text-align: left;
}
.shop2-order-completed div {
  margin: 10px 0;
}
.shop2-btn {
  padding: 0;
  margin: 0;
  vertical-align: middle;
  border: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 13px;
  color: #333;
  background-color: #eee;
  background-image: -moz-linear-gradient(top, #f8f8f8, #dfdfdf);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#f8f8f8),
    to(#dfdfdf)
  );
  background-image: -webkit-linear-gradient(top, #f8f8f8, #dfdfdf);
  background-image: -o-linear-gradient(top, #f8f8f8, #dfdfdf);
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;
  -webkit-box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  -moz-box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.shop2-btn:hover {
  background-color: #f6f6f6;
  background-image: -moz-linear-gradient(top, #fbfbfb, #efefef);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#fbfbfb),
    to(#efefef)
  );
  background-image: -webkit-linear-gradient(top, #fbfbfb, #efefef);
  background-image: -o-linear-gradient(top, #fbfbfb, #efefef);
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.shop2-btn:active {
  background-color: #e6e6e6;
  background-image: -moz-linear-gradient(top, #dedede, #f1f1f1);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#dedede),
    to(#f1f1f1)
  );
  background-image: -webkit-linear-gradient(top, #dedede, #f1f1f1);
  background-image: -o-linear-gradient(top, #dedede, #f1f1f1);
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}

.shop2-btn.disabled,
.shop2-btn.disabled:hover,
.shop2-btn.disabled:active,
.shop2-btn.notavailable,
.shop2-btn.notavailable:hover,
.shop2-btn.notavailable:active {
  -webkit-box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  -moz-box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  box-shadow: rgba(0, 0, 0, 0.2) 0 0 0 inset;
  background: none #eee;
  color: #494949;
  cursor: default;
}
a.shop2-btn {
  display: inline-block;
  text-decoration: none;
  padding: 5px 11px;
}
#order-print,
a.shop2-btn {
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 15px 11px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  -ms-border-radius: 0;
  -o-border-radius: 0;
  border-radius: 0;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  width: auto;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  border: none;
  outline: none;
  box-shadow: none;
  text-transform: uppercase;
  background: #0c8ac9;
  position: relative;
  color: #fff;
}

#order-print:hover,
a.shop2-btn:hover,
#order-print:active,
a.shop2-btn:active {
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  color: #fff;
  background: #0c8ac9;
}
</style>

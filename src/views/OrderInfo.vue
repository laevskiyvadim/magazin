<template>
  <main role="main" class="site-main">
    <SitePath />
    <h1>Ваш заказ</h1>
    <div class="text-right-left">
      <button class="btn_payment_rest g-button" style="margin-bottom: 5px">
        Изменить способ оплаты
      </button>
      <a
        @click.prevent="print"
        class="g-button g-button--invert"
        href="#"
        id="order-print"
        style="margin-bottom: 5px"
        >Распечатать бланк заказа</a
      >
      <a
        href="/my/s3/api/shop2/?cmd=printOrder&amp;type=receipt&amp;template=3142077201&amp;order_id=209812704&amp;hash=b59652c0c6a9585b2fca25432133d1ae&amp;ver_id=2463773&amp;shop_id=3637461&amp;attach_id=12976661"
        target="_blank"
        class="g-button g-button--invert"
        style="margin-bottom: 5px"
        >Квитанция сбербанка</a
      >
      <a
        href="/my/s3/api/shop2/?cmd=printOrder&amp;type=non_cash&amp;template=1001689221&amp;order_id=209812704&amp;hash=b59652c0c6a9585b2fca25432133d1ae&amp;ver_id=2463773&amp;shop_id=3637461&amp;attach_id=12976861"
        target="_blank"
        class="g-button g-button--invert"
        style="margin-bottom: 5px"
        >Безналичный платеж</a
      >
    </div>
    <div class="shop2-order-options-wrapper" style="display: none">
      <form method="post" action="#" class="shop2-order-options">
        <div class="options-list">
          <div class="option-type active-type">
            <label class="option-label">
              <input
                name="payment_id"
                value="12976661"
                autocomplete="off"
                checked="checked"
                type="radio"
              />
              <span class="label-name"> Квитанция сбербанка </span>
            </label>
            <div class="option-details"></div>
          </div>
          <div class="option-type">
            <label class="option-label">
              <input
                name="payment_id"
                value="12976861"
                autocomplete="off"
                type="radio"
              />
              <span class="label-name"> Безналичный платеж </span>
            </label>
            <div class="option-details">
              <div class="option-item">
                <label>
                  <span>Плательщик: </span>
                  <input
                    name="12976861[payer_name]"
                    type="text"
                    size="30"
                    maxlength="100"
                    value=""
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <input type="hidden" name="step" value="payments" />
        <input type="hidden" name="mode" value="order" />
        <input type="hidden" name="action" value="save" />
        <input type="hidden" name="amount" value="76305" />
        <input type="hidden" name="shop_id" value="3637461" />
        <div class="text-center">
          <button class="g-button" type="submit">Продолжить</button>
        </div>
        <textarea
          name="g-recaptcha-response"
          style="display: none !important"
        ></textarea>
      </form>
    </div>
    <!-- Payment -->

    <div id="shop2-order">
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
                <th>Изменен</th>
                <td>14.08.2021 21:11</td>
              </tr>
              <tr>
                <th>Оплаченная сумма</th>
                <td>0 из 76&nbsp;305 руб.</td>
              </tr>
              <tr>
                <th>Способ оплаты</th>
                <td>Квитанция сбербанка</td>
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

    <div class="preloader loadingio-spinner-eclipse">
      <div class="spinner"></div>
    </div>
    <div class="text-right"></div>
  </main>
</template>
<script>
import SitePath from "@/components/App/SitePath.vue";
export default {
  name: "OrderInfo",
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
@media (min-width: 980px) {
  .text-right-left {
    text-align: right;
  }
  .text-right-left:after {
    content: "";
    width: 100%;
    display: block;
    clear: both;
  }
  .text-right-left .g-button {
    float: right;
    margin-bottom: 5px;
  }
  .text-right-left .btn_payment_rest,
  .text-right-left #order-print {
    float: left;
  }
  .text-right-left #order-print {
    margin-left: 5px;
  }
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
.g-button.g-button--invert {
  color: #f06354 !important;
  border-color: rgba(240, 99, 84, 0.5);
  background: #fff;
  background-image: none;
  box-shadow: none;
  text-shadow: none;
}

#order-print,
a.shop2-btn {
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 15px 11px;
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
  color: #fff;
}
fieldset.shop2-order-data {
  border: 1px solid #dedede;
  padding: 5px;
  margin: 0 0 10px 0;
}

fieldset.shop2-order-data legend {
  padding: 2px 10px;
  font-size: 12px;
}

fieldset.shop2-order-data table {
  border-collapse: collapse;
}

fieldset.shop2-order-data td,
fieldset.shop2-order-data th {
  border-top: 1px solid #eee;
  font-size: 13px;
  margin: 0;
  padding: 5px 10px;
  text-align: left;
  vertical-align: middle;
}

fieldset.shop2-order-data tr:first-child td,
fieldset.shop2-order-data tr:first-child th {
  border-top: none;
}

fieldset.shop2-order-data th {
  width: 220px;
}
img,
textarea,
object,
object embed,
.table-wrapper {
  max-width: 100%;
}
.table-wrapper {
  overflow: auto;
}
table.shop2-table-order {
  border-collapse: collapse;
  border-spacing: 0;
  margin: 20px 0;
  width: 100%;
}

table.shop2-table-order th,
table.shop2-table-order td {
  border: 1px solid #dedede;
  vertical-align: middle;
  padding: 5px;
  margin: 0;
  text-align: left;
  font-size: 13px;
}

table.shop2-table-order th img,
table.shop2-table-order td img {
  vertical-align: middle;
  margin-right: 7px;
}

table.shop2-table-order th span,
table.shop2-table-order td span {
  vertical-align: middle;
}

table.shop2-table-order tr:first-child th {
  background-color: #dedede;
  color: #3c3c3c;
}

table.shop2-table-order tr:first-child th.wide-cell {
  width: 55px;
}
</style>

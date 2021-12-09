<template>
  <div
    class="option-type"
    :class="{ 'active-type': active }"
    @click.prevent="$emit('check')"
  >
    <label class="option-label">
      <input
        class="option_input"
        name="delivery_id"
        type="radio"
        autocomplete="off"
        value="14818661"
        :checked="active"
      />
      <label for="option_input" class="input_label"><span> Ems </span> </label>
    </label>
    <div class="option-details">
      <div class="option-item">
        <label>
          <span>Адрес доставки <span class="required">*</span></span>
          <textarea
            class="shop2-textarea"
            name="14818661[0]"
            disabled="disabled"
            cols="50"
            rows="5"
          ></textarea>
        </label>
      </div>
      <div class="option-item">
        <label>
          <span>Почтовый индекс <span class="required">*</span></span>
          <input
            class="shop2-input"
            name="14818661[1]"
            disabled="disabled"
            type="text"
            size="30"
            maxlength="100"
            value=""
          />
        </label>
      </div>

      <div class="option-item">
        <label>
          <span>Телефон </span>
          <input
            class="shop2-input"
            name="14818661[2]"
            disabled="disabled"
            type="text"
            size="30"
            maxlength="100"
            value=""
          />
        </label>
      </div>

      <div class="option-item">
        <label>
          <span>Город <span class="required">*</span></span>
          <select id="delivery-to" name="14818661[to]">
            <option value="">--выберите город--</option>
            <optgroup label="Город">
              <option value="city--abakan">АБАКАН</option>
              <option value="city--anadyr">АНАДЫРЬ</option>
              <option value="city--anapa">АНАПА</option>
              <option value="city--arhangelsk">АРХАНГЕЛЬСК</option>
              <option value="city--astrahan">АСТРАХАНЬ</option>
              <option value="city--bajkonur">БАЙКОНУР</option>
              <option value="city--barnaul">БАРНАУЛ</option>
              <option value="city--belgorod">БЕЛГОРОД</option>
              <option value="city--birobidzhan">БИРОБИДЖАН</option>
              <option value="city--blagoveshhensk">БЛАГОВЕЩЕНСК</option>
              <option value="city--brjansk">БРЯНСК</option>
              <option value="city--velikij-novgorod">ВЕЛИКИЙ НОВГОРОД</option>
              <option value="city--vladivostok">ВЛАДИВОСТОК</option>
              <option value="city--vladikavkaz">ВЛАДИКАВКАЗ</option>
              <option value="city--vladimir">ВЛАДИМИР</option>
              <option value="city--volgograd">ВОЛГОГРАД</option>
              <option value="city--vologda">ВОЛОГДА</option>
              <option value="city--vorkuta">ВОРКУТА</option>
              <option value="city--voronezh">ВОРОНЕЖ</option>
              <option value="city--gorno-altajsk">ГОРНО-АЛТАЙСК</option>
              <option value="city--groznyj">ГРОЗНЫЙ</option>
              <option value="city--dudinka">ДУДИНКА</option>
              <option value="city--ekaterinburg">ЕКАТЕРИНБУРГ</option>
              <option value="city--elizovo">ЕЛИЗОВО</option>
              <option value="city--ivanovo">ИВАНОВО</option>
              <option value="city--izhevsk">ИЖЕВСК</option>
              <option value="city--irkutsk">ИРКУТСК</option>
              <option value="city--ioshkar-ola">ЙОШКАР-ОЛА</option>
              <option value="city--kazan">КАЗАНЬ</option>
              <option value="city--kaliningrad">КАЛИНИНГРАД</option>
              <option value="city--kaluga">КАЛУГА</option>
              <option value="city--kemerovo">КЕМЕРОВО</option>
              <option value="city--kirov">КИРОВ</option>
              <option value="city--kostomuksha">КОСТОМУКША</option>
              <option value="city--kostroma">КОСТРОМА</option>
              <option value="city--krasnodar">КРАСНОДАР</option>
              <option value="city--krasnojarsk">КРАСНОЯРСК</option>
              <option value="city--kurgan">КУРГАН</option>
              <option value="city--kursk">КУРСК</option>
              <option value="city--kyzyl">КЫЗЫЛ</option>
              <option value="city--lipeck">ЛИПЕЦК</option>
              <option value="city--magadan">МАГАДАН</option>
              <option value="city--magnitogorsk">МАГНИТОГОРСК</option>
              <option value="city--majkop">МАЙКОП</option>
              <option value="city--mahachkala">МАХАЧКАЛА</option>
              <option value="city--mineralnye-vody">МИНЕРАЛЬНЫЕ ВОДЫ</option>
              <option value="city--mirnyj">МИРНЫЙ</option>
              <option value="city--moskva">МОСКВА</option>
              <option value="city--murmansk">МУРМАНСК</option>
              <option value="city--mytishhi">МЫТИЩИ</option>
              <option value="city--naberezhnye-chelny">НАБЕРЕЖНЫЕ ЧЕЛНЫ</option>
              <option value="city--nadym">НАДЫМ</option>
              <option value="city--nazran">НАЗРАНЬ</option>
              <option value="city--nalchik">НАЛЬЧИК</option>
              <option value="city--narjan-mar">НАРЬЯН-МАР</option>
              <option value="city--nerjungri">НЕРЮНГРИ</option>
              <option value="city--neftejugansk">НЕФТЕЮГАНСК</option>
              <option value="city--nizhnevartovsk">НИЖНЕВАРТОВСК</option>
              <option value="city--nizhnij-novgorod">НИЖНИЙ НОВГОРОД</option>
              <option value="city--novokuzneck">НОВОКУЗНЕЦК</option>
              <option value="city--novorossijsk">НОВОРОССИЙСК</option>
              <option value="city--novosibirsk">НОВОСИБИРСК</option>
              <option value="city--novyj-urengoj">НОВЫЙ УРЕНГОЙ</option>
              <option value="city--norilsk">НОРИЛЬСК</option>
              <option value="city--nojabrsk">НОЯБРЬСК</option>
              <option value="city--omsk">ОМСК</option>
              <option value="city--orel">ОРЁЛ</option>
              <option value="city--orenburg">ОРЕНБУРГ</option>
              <option value="city--penza">ПЕНЗА</option>
              <option value="city--perm">ПЕРМЬ</option>
              <option value="city--petrozavodsk">ПЕТРОЗАВОДСК</option>
              <option value="city--petropavlovsk-kamchatskij">
                ПЕТРОПАВЛОВСК-КАМЧАТСКИЙ
              </option>
              <option value="city--pskov">ПСКОВ</option>
              <option value="city--rostov-na-donu">РОСТОВ-НА-ДОНУ</option>
              <option value="city--rjazan">РЯЗАНЬ</option>
              <option value="city--salehard">САЛЕХАРД</option>
              <option value="city--samara">САМАРА</option>
              <option value="city--sankt-peterburg">САНКТ-ПЕТЕРБУРГ</option>
              <option value="city--saransk">САРАНСК</option>
              <option value="city--saratov">САРАТОВ</option>
              <option value="city--smolensk">СМОЛЕНСК</option>
              <option value="city--sochi">СОЧИ</option>
              <option value="city--stavropol">СТАВРОПОЛЬ</option>
              <option value="city--strezhevoj">СТРЕЖЕВОЙ</option>
              <option value="city--surgut">СУРГУТ</option>
              <option value="city--syktyvkar">СЫКТЫВКАР</option>
              <option value="city--tambov">ТАМБОВ</option>
              <option value="city--tver">ТВЕРЬ</option>
              <option value="city--toljatti">ТОЛЬЯТТИ</option>
              <option value="city--tomsk">ТОМСК</option>
              <option value="city--tula">ТУЛА</option>
              <option value="city--tynda">ТЫНДА</option>
              <option value="city--tjumen">ТЮМЕНЬ</option>
              <option value="city--ulan-udje">УЛАН-УДЭ</option>
              <option value="city--uljanovsk">УЛЬЯНОВСК</option>
              <option value="city--usinsk">УСИНСК</option>
              <option value="city--ufa">УФА</option>
              <option value="city--uhta">УХТА</option>
              <option value="city--khabarovsk">ХАБАРОВСК</option>
              <option value="city--khanty-mansijsk">ХАНТЫ-МАНСИЙСК</option>
              <option value="city--kholmsk">ХОЛМСК</option>
              <option value="city--cheboksary">ЧЕБОКСАРЫ</option>
              <option value="city--cheljabinsk">ЧЕЛЯБИНСК</option>
              <option value="city--cherepovec">ЧЕРЕПОВЕЦ</option>
              <option value="city--cherkessk">ЧЕРКЕССК</option>
              <option value="city--chita">ЧИТА</option>
              <option value="city--elista">ЭЛИСТА</option>
              <option value="city--yuzhno-sahalinsk">ЮЖНО-САХАЛИНСК</option>
              <option value="city--yakutsk">ЯКУТСК</option>
              <option value="city--yaroslavl">ЯРОСЛАВЛЬ</option>
              <option value="city--sevastopol">СЕВАСТОПОЛЬ</option>
              <option value="city--simferopol">СИМФЕРОПОЛЬ</option>
            </optgroup>
            <optgroup label="Регионы">
              <option value="region--respublika-adygeja">
                АДЫГЕЯ РЕСПУБЛИКА
              </option>
              <option value="region--respublika-altaj">АЛТАЙ РЕСПУБЛИКА</option>
              <option value="region--altajskij-kraj">АЛТАЙСКИЙ КРАЙ</option>
              <option value="region--amurskaja-oblast">АМУРСКАЯ ОБЛАСТЬ</option>
              <option value="region--arhangelskaja-oblast">
                АРХАНГЕЛЬСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--astrahanskaja-oblast">
                АСТРАХАНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-bashkortostan">
                БАШКОРТОСТАН РЕСПУБЛИКА
              </option>
              <option value="region--belgorodskaja-oblast">
                БЕЛГОРОДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--brjanskaja-oblast">
                БРЯНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-burjatija">
                БУРЯТИЯ РЕСПУБЛИКА
              </option>
              <option value="region--vladimirskaja-oblast">
                ВЛАДИМИРСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--volgogradskaja-oblast">
                ВОЛГОГРАДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--vologodskaja-oblast">
                ВОЛОГОДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--voronezhskaja-oblast">
                ВОРОНЕЖСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-dagestan">
                ДАГЕСТАН РЕСПУБЛИКА
              </option>
              <option value="region--evrejskaja-ao">
                ЕВРЕЙСКАЯ АВТОНОМНАЯ ОБЛАСТЬ
              </option>
              <option value="region--zabajkalskij-kraj">
                ЗАБАЙКАЛЬСКИЙ КРАЙ
              </option>
              <option value="region--ivanovskaja-oblast">
                ИВАНОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-ingushetija">
                ИНГУШЕТИЯ РЕСПУБЛИКА
              </option>
              <option value="region--irkutskaja-oblast">
                ИРКУТСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--kabardino-balkarskaja-respublika">
                КАБАРДИНО-БАЛКАРСКАЯ РЕСПУБЛИКА
              </option>
              <option value="region--kaliningradskaja-oblast">
                КАЛИНИНГРАДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-kalmykija">
                КАЛМЫКИЯ РЕСПУБЛИКА
              </option>
              <option value="region--kaluzhskaja-oblast">
                КАЛУЖСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--kamchatskij-kraj">КАМЧАТСКИЙ КРАЙ</option>
              <option value="region--karachaevo-cherkesskaja-respublika">
                КАРАЧАЕВО-ЧЕРКЕССКАЯ РЕСПУБЛИКА
              </option>
              <option value="region--respublika-karelija">
                КАРЕЛИЯ РЕСПУБЛИКА
              </option>
              <option value="region--kemerovskaja-oblast">
                КЕМЕРОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--kirovskaja-oblast">
                КИРОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-komi">КОМИ РЕСПУБЛИКА</option>
              <option value="region--kostromskaja-oblast">
                КОСТРОМСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--krasnodarskij-kraj">
                КРАСНОДАРСКИЙ КРАЙ
              </option>
              <option value="region--krasnojarskij-kraj">
                КРАСНОЯРСКИЙ КРАЙ
              </option>
              <option value="region--kurganskaja-oblast">
                КУРГАНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--kurskaja-oblast">КУРСКАЯ ОБЛАСТЬ</option>
              <option value="region--leningradskaja-oblast">
                ЛЕНИНГРАДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--lipeckaja-oblast">ЛИПЕЦКАЯ ОБЛАСТЬ</option>
              <option value="region--magadanskaja-oblast">
                МАГАДАНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-marij-el">
                МАРИЙ ЭЛ РЕСПУБЛИКА
              </option>
              <option value="region--respublika-mordovija">
                МОРДОВИЯ РЕСПУБЛИКА
              </option>
              <option value="region--moskovskaja-oblast">
                МОСКОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--murmanskaja-oblast">
                МУРМАНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--neneckij-ao">
                НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ
              </option>
              <option value="region--nizhegorodskaja-oblast">
                НИЖЕГОРОДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--novgorodskaja-oblast">
                НОВГОРОДСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--novosibirskaja-oblast">
                НОВОСИБИРСКАЯ ОБЛАСТЬ
              </option>
              <option value="663300">НОРИЛЬСКИЙ ПРОМЫШЛЕНННЫЙ РАЙОН</option>
              <option value="region--omskaja-oblast">ОМСКАЯ ОБЛАСТЬ</option>
              <option value="region--orenburgskaja-oblast">
                ОРЕНБУРГСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--orlovskaja-oblast">
                ОРЛОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--penzenskaja-oblast">
                ПЕНЗЕНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--permskij-kraj">ПЕРМСКИЙ КРАЙ</option>
              <option value="region--primorskij-kraj">ПРИМОРСКИЙ КРАЙ</option>
              <option value="region--pskovskaja-oblast">
                ПСКОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--rostovskaja-oblast">
                РОСТОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--rjazanskaja-oblast">
                РЯЗАНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--samarskaja-oblast">
                САМАРСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--saratovskaja-oblast">
                САРАТОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-saha-yakutija">
                САХА (ЯКУТИЯ) РЕСПУБЛИКА
              </option>
              <option value="region--sahalinskaja-oblast">
                САХАЛИНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--sverdlovskaja-oblast">
                СВЕРДЛОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-sev.osetija-alanija">
                СЕВЕРНАЯ ОСЕТИЯ-АЛАНИЯ РЕСПУБЛИКА
              </option>
              <option value="region--smolenskaja-oblast">
                СМОЛЕНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--stavropolskij-kraj">
                СТАВРОПОЛЬСКИЙ КРАЙ
              </option>
              <option value="region--tajmyrskij-ao">
                ТАЙМЫРСКИЙ ДОЛГАНО-НЕНЕЦКИЙ РАЙОН
              </option>
              <option value="region--tambovskaja-oblast">
                ТАМБОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--respublika-tatarstan">
                ТАТАРСТАН РЕСПУБЛИКА
              </option>
              <option value="region--tverskaja-oblast">ТВЕРСКАЯ ОБЛАСТЬ</option>
              <option value="region--tomskaja-oblast">ТОМСКАЯ ОБЛАСТЬ</option>
              <option value="region--tulskaja-oblast">ТУЛЬСКАЯ ОБЛАСТЬ</option>
              <option value="region--respublika-tyva">ТЫВА РЕСПУБЛИКА</option>
              <option value="region--tjumenskaja-oblast">
                ТЮМЕНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--udmurtskaja-respublika">
                УДМУРТСКАЯ РЕСПУБЛИКА
              </option>
              <option value="region--uljanovskaja-oblast">
                УЛЬЯНОВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--khabarovskij-kraj">
                ХАБАРОВСКИЙ КРАЙ
              </option>
              <option value="region--respublika-khakasija">
                ХАКАСИЯ РЕСПУБЛИКА
              </option>
              <option value="region--khanty-mansijskij-ao">
                ХАНТЫ-МАНСИЙСКИЙ-ЮГРА АВТОНОМНЫЙ ОКРУГ
              </option>
              <option value="region--cheljabinskaja-oblast">
                ЧЕЛЯБИНСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--chechenskaya-respublika">
                ЧЕЧЕНСКАЯ РЕСПУБЛИКА
              </option>
              <option value="region--chuvashskaja-respublika">
                ЧУВАШСКАЯ РЕСПУБЛИКА
              </option>
              <option value="region--chukotskij-ao">
                ЧУКОТСКИЙ АВТОНОМНЫЙ ОКРУГ
              </option>
              <option value="region--yamalo-neneckij-ao">
                ЯМАЛО-НЕНЕЦКИЙ АВТОНОМНЫЙ ОКРУГ
              </option>
              <option value="region--yaroslavskaja-oblast">
                ЯРОСЛАВСКАЯ ОБЛАСТЬ
              </option>
              <option value="region--crimea">КРЫМ РЕСПУБЛИКА</option>
            </optgroup>
          </select>
        </label>
      </div>

      <label>
        <a
          class="shop2-btn"
          href="#"
          data-attach-id="14818661"
          id="shop2-ems-calc"
          ><span>Рассчитать</span></a
        >
        <span id="delivery-14818661-cost">0</span> руб.
      </label>
    </div>
  </div>
</template>
<script>
export default { props: ["active"] };
</script>
<style lang="scss" scoped>
.shop2-order-options .option-type .option-label {
  overflow: hidden;
  cursor: pointer;
  display: block;
  padding: 5px 10px;
  line-height: 0;
  font-size: 0;
}

.shop2-order-options .option-type .option-label input[type="radio"] {
  cursor: pointer;
  margin: 0 0 1px;
  vertical-align: middle;
}

.shop2-order-options .option-type .option-label span {
  font-size: 14px;
  line-height: normal;
  padding: 8px 10px;
  padding-left: 10px;
  vertical-align: middle;
}
.shop2-order-options.shop2-delivery .option-type .option-label {
  padding: 10px;
}
.shop2-order-options.shop2-delivery .option-type .option-label {
  padding: 20px;
}
input[type="checkbox"],
input[type="radio"] {
  box-sizing: border-box;
  padding: 0;
}
.shop2-order-options.shop2-delivery .option_input {
  opacity: 0;
  visibility: hidden;
  width: 0;
  height: 0;
  position: absolute;
}

.shop2-order-options.shop2-delivery .option_input:checked + label:before {
  box-shadow: inset 0 0 0 8px #0c8ac9;
}

.shop2-order-options.shop2-delivery .option_input:checked + label:hover:before {
  box-shadow: inset 0 0 0 8px #09538e, 0 0 0 2px #e7e7e7;
}
.shop2-order-options .option-type .option-label input[type="radio"] {
  cursor: pointer;
  margin: 0 0 1px;
  vertical-align: middle;
}
.shop2-order-options.shop2-delivery .input_label {
  padding: 6px 0 5px 30px;
  display: block;
  position: relative;
  pointer-events: none;
}

.shop2-order-options.shop2-delivery .input_label:hover:before {
  box-shadow: inset 0 0 0 2px #0c8ac9, 0 0 0 2px #e7e7e7;
}

.shop2-order-options.shop2-delivery .input_label:before {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  width: 28px;
  height: 28px;
  background: #fff;
  box-shadow: inset 0 0 0 2px #0c8ac9;
  border-radius: 50%;
  transition: box-shadow 0.2s linear;
}
.shop2-order-options .option-type .option-label span {
  font-size: 14px;
  line-height: normal;
  padding: 8px 10px;
  padding-left: 10px;
  vertical-align: middle;
}
.shop2-order-options .option-type .option-label span {
  font: 16px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.shop2-order-options .option-type .option-details {
  overflow: hidden;
  padding: 0 20px 20px 40px;
  display: none;
}
.shop2-order-options .option-type .option-details {
  overflow: visible;
}
.shop2-order-options .option-type .option-details {
  padding: 0 20px 20px 60px;
  border-radius: 1px;
}
.shop2-order-options .option-type.active-type .option-details {
  display: block;
}
.shop2-order-options .option-type .option-details .option-item {
  margin: 10px 0;
}

.shop2-order-options .option-type .option-details .option-item label {
  display: inline-block;
}

.shop2-order-options .option-type .option-details .option-item label > span {
  display: block;
  margin-bottom: 2px;
}
.shop2-order-options .option-type .option-details .option-item {
  margin: 10px 0 15px;
}

.shop2-order-options .option-type .option-details .option-item label > span {
  margin-bottom: 8px;
  font: 13px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
}
.error,
.required {
  color: #eb3c3c !important;
}
.shop2-textarea {
  height: 26px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid silver;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 14px;
  height: auto;
  padding: 5px;
}
.shop2-order-options.shop2-delivery .shop2-textarea {
  margin: 0;
  height: auto;
  background: #f5fafb;
  color: #212121;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
  padding: 8px 8px 10px;
}

.shop2-order-options.shop2-delivery .shop2-textarea::-webkit-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea:moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea::-moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea:-ms-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-textarea:hover {
  border-color: #f5fafb;
  background: #fff;
}

.shop2-order-options.shop2-delivery .shop2-textarea:focus {
  background: #fff;
  box-shadow: inset 0 0 0 1px #eae9f4;
}
.shop2-input {
  height: 26px;
  box-sizing: border-box;
  background-color: white;
  border: 1px solid silver;
  border-radius: 4px;
  padding: 0 5px;
  font-size: 14px;
}
.shop2-order-options.shop2-delivery .shop2-input {
  margin: 0;
  height: auto;
  background: #f5fafb;
  color: #212121;
  border: 1px solid #f5fafb;
  transition: all 0.3s;
  border-radius: 1px;
  box-sizing: border-box;
  box-shadow: none;
  font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
  outline: none;
  width: 100%;
  padding: 8px 8px 10px;
}

.shop2-order-options.shop2-delivery .shop2-input::-webkit-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input:moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input::-moz-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input:-ms-input-placeholder {
  color: #212121;
}

.shop2-order-options.shop2-delivery .shop2-input:hover {
  border-color: #f5fafb;
  background: #fff;
}

.shop2-order-options.shop2-delivery .shop2-input:focus {
  background: #fff;
  box-shadow: inset 0 0 0 1px #eae9f4;
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
  background-image: linear-gradient(to bottom, #f8f8f8, #dfdfdf);
  background-repeat: repeat-x;

  box-shadow: #ccc 1px 1px 0 inset, #ccc -1px -1px 0 inset,
    #ccc -1px 1px 0 inset, #ccc 1px -1px 0 inset;
  border-radius: 4px;
}

.shop2-btn:hover {
  background-image: linear-gradient(to bottom, #fbfbfb, #efefef);
  background-repeat: repeat-x;
}

.shop2-btn:active {
  background-image: linear-gradient(to bottom, #dedede, #f1f1f1);
  background-repeat: repeat-x;
  box-shadow: rgba(0, 0, 0, 0.2) 0 1px 1px 0 inset;
}

.shop2-btn.disabled,
.shop2-btn.disabled:hover,
.shop2-btn.disabled:active,
.shop2-btn.notavailable,
.shop2-btn.notavailable:hover,
.shop2-btn.notavailable:active {
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
.shop2-order-options.shop2-delivery .shop2-btn {
  margin: 0 10px 0 0;
  font: 16px/17px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  padding: 12px 20px 11px;
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

.shop2-order-options.shop2-delivery .shop2-btn.bottom {
  margin: 0 0 30px;
}

.shop2-order-options.shop2-delivery .shop2-btn:before {
  position: absolute;
  content: "";
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s;
  background: rgba(0, 0, 0, 0.1);
}

.shop2-order-options.shop2-delivery .shop2-btn:hover:before {
  opacity: 1;
  visibility: visible;
}

.shop2-order-options.shop2-delivery .shop2-btn:active:before {
  opacity: 1;
  visibility: visible;
  background: rgba(255, 255, 255, 0.3);
}

.shop2-order-options.shop2-delivery .shop2-btn span {
  position: relative;
  color: #fff;
}
.shop2-order-options .option-type {
  border-bottom: 1px solid #dedede;
}
</style>

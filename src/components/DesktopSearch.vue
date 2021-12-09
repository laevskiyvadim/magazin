<template>
  <div
    class="fixed_search_wrapper"
    :class="{ active: searchStatus }"
    @click.stop
  >
    <div class="fixed_search_in">
      <div class="shop2-block search-form" :class="{ opened: opened }">
        <div class="block-title" @click.stop="opened = !opened">
          Расширенный поиск
          <div class="search_close" @click.stop="disactiveSearchForm"></div>
        </div>

        <div class="block-body">
          <form action="/search" enctype="multipart/form-data" @click.stop>
            <input type="hidden" name="sort_by" value="" />

            <div class="row">
              <label
                class="row-title"
                @click.stop="name = !name"
                :class="{ active: name }"
                for="shop2-name"
                >Название:</label
              >
              <div class="row_body" :class="{ active: name }">
                <input
                  type="text"
                  name="s[name]"
                  size="20"
                  id="shop2-name"
                  value=""
                />
              </div>
            </div>

            <div class="row search_price range_slider_wrapper">
              <div
                class="row-title"
                @click="price = !price"
                :class="{ active: price }"
              >
                Цена
              </div>
              <div class="row_body" :class="{ active: price }">
                <div class="price_range clear-self">
                  <input
                    name="s[price][min]"
                    type="text"
                    size="5"
                    class="small low"
                    value="0"
                  />
                  <input
                    name="s[price][max]"
                    type="text"
                    size="5"
                    class="small hight"
                    data-max="200000"
                    value="200000"
                  />
                </div>
                <span class="price_from">от</span
                ><span class="price_till">до</span>
                <div
                  class="
                    input_range_slider
                    noUi-target noUi-ltr noUi-horizontal noUi-background
                  "
                >
                  <div class="noUi-base">
                    <div
                      class="noUi-origin noUi-connect noUi-dragable"
                      style="left: 0%"
                    >
                      <div class="noUi-handle noUi-handle-lower"></div>
                    </div>
                    <div class="noUi-origin noUi-background" style="left: 100%">
                      <div class="noUi-handle noUi-handle-upper"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <label
                class="row-title"
                @click="article = !article"
                :class="{ active: article }"
                for="shop2-article"
                >Артикул:</label
              >
              <div class="row_body" :class="{ active: article }">
                <input
                  type="text"
                  name="s[article]"
                  id="shop2-article"
                  value=""
                />
              </div>
            </div>

            <div class="row">
              <label
                class="row-title"
                for="shop2-text"
                @click="text = !text"
                :class="{ active: text }"
                >Текст:</label
              >
              <div class="row_body" :class="{ active: text }">
                <input
                  type="text"
                  name="search_text"
                  size="20"
                  id="shop2-text"
                  value=""
                />
              </div>
            </div>

            <div class="row">
              <div
                class="row-title"
                @click="category = !category"
                :class="{ active: category }"
              >
                Выберите категорию:
              </div>
              <div class="row_body" :class="{ active: category }">
                <div
                  id="s[folder_id]-styler"
                  data-placeholder="Все"
                  class="jq-selectbox jqselect"
                  style="
                    display: inline-block;
                    position: relative;
                    z-index: 100;
                  "
                >
                  <select
                    name="s[folder_id]"
                    id="s[folder_id]"
                    data-placeholder="Все"
                    style="
                      margin: 0px;
                      padding: 0px;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 100%;
                      height: 100%;
                      opacity: 0;
                    "
                  >
                    <option value="">Все</option>
                    <option value="833464661">
                      Полотенцесушители TERMA в наличии
                    </option>
                    <option value="833646661">» ALEX полотенцесушитель</option>
                    <option value="833646861">
                      » JADE M полотенцесушитель
                    </option>
                    <option value="833647661">» POLA полотенцесушитель</option>
                    <option value="833648261">
                      » DEXTER полотенцесушитель
                    </option>
                    <option value="833648661">
                      » ZIG ZAG полотенцесушитель
                    </option>
                    <option value="833651861">» BONE полотенцесушитель</option>
                    <option value="833652261">» DOMI полотенцесушитель</option>
                    <option value="833652461">» FIONA полотенцесушитель</option>
                    <option value="833654461">» VIVO полотенцесушитель</option>
                    <option value="761875261">Полотенцесушители</option>
                    <option value="766212461">» Terma</option>
                    <option value="784716461">»» ALEX полотенцесушитель</option>
                    <option value="786171261">
                      »» ALEX ONE полотенцесушитель
                    </option>
                    <option value="785160261">»» BONE полотенцесушитель</option>
                    <option value="801381661">
                      »» BONE ONE полотенцесушитель
                    </option>
                    <option value="786193061">»» CITY полотенцесушитель</option>
                    <option value="787076661">
                      »» CRYSTAL полотенцесушитель
                    </option>
                    <option value="787764661">
                      »» DEXTER полотенцесушитель
                    </option>
                    <option value="788049661">
                      »» DIAMOND полотенцесушитель
                    </option>
                    <option value="788175861">»» DOMI полотенцесушитель</option>
                    <option value="791943661">
                      »» INCORNER полотенцесушитель
                    </option>
                    <option value="792046461">
                      »» OUTCORNER полотенцесушитель
                    </option>
                    <option value="788743861">
                      »» FIONA полотенцесушитель
                    </option>
                    <option value="799382061">
                      »» JADE M полотенцесушитель
                    </option>
                    <option value="801270861">
                      »» KIOTO полотенцесушитель
                    </option>
                    <option value="801303461">
                      »» KIOTO ONE полотенцесушитель
                    </option>
                    <option value="803305461">»» LENA полотенцесушитель</option>
                    <option value="800501661">»» LIMA полотенцесушитель</option>
                    <option value="801067461">
                      »» LUKKA полотенцесушитель
                    </option>
                    <option value="801451061">
                      »» MANTIS полотенцесушитель
                    </option>
                    <option value="802573061">
                      »» MARLIN полотенцесушитель
                    </option>
                    <option value="801520061">
                      »» MANTIS ONE полотенцесушитель
                    </option>
                    <option value="802046661">»» MIKE полотенцесушитель</option>
                    <option value="802523061">
                      »» MIKE ONE полотенцесушитель
                    </option>
                    <option value="803083061">»» POLA полотенцесушитель</option>
                    <option value="806578061">
                      »» POLA ONE полотенцесушитель
                    </option>
                    <option value="805172861">
                      »» QUADRUS SLIM полотенцесушитель
                    </option>
                    <option value="805207061">
                      »» QUADRUS BOLD полотенцесушитель
                    </option>
                    <option value="805976461">
                      »» RETRO полотенцесушитель
                    </option>
                    <option value="805981861">
                      »» RETRO S полотенцесушитель
                    </option>
                    <option value="806091461">
                      »» STAND полотенцесушитель
                    </option>
                    <option value="804111661">
                      »» SIMPLE полотенцесушитель
                    </option>
                    <option value="806162861">
                      »» SPIRO полотенцесушитель
                    </option>
                    <option value="803567061">
                      »» TYTUS полотенцесушитель
                    </option>
                    <option value="796391461">»» VIVO полотенцесушитель</option>
                    <option value="806509861">»» WARP полотенцесушитель</option>
                    <option value="803912461">»» WIND полотенцесушитель</option>
                    <option value="791567461">
                      »» ZIG ZAG полотенцесушитель
                    </option>
                    <option value="785714061">»» AERO V Дизайн радиатор</option>
                    <option value="785845861">»» AERO H Дизайн радиатор</option>
                    <option value="785977661">
                      »» AERO HG Дизайн радиатор
                    </option>
                    <option value="786125661">
                      »» ANGUS DW Дизайн радиатор
                    </option>
                    <option value="786125861">
                      »» ANGUS H Дизайн радиатор
                    </option>
                    <option value="786126061">
                      »» ANGUS V Дизайн радиатор
                    </option>
                    <option value="785366861">
                      »» CYKLON V дизайн радиатор
                    </option>
                    <option value="785316861">
                      »» CYKLON H дизайн радиатор
                    </option>
                    <option value="785381061">
                      »» CASE SLIM панель бетон Дизайн радиатор
                    </option>
                    <option value="785392461">
                      »» CASE SLIM панель зеркало Дизайн радиатор
                    </option>
                    <option value="785411261">
                      »» CASE SLIM панель печать (рисунок) на стекле Дизайн
                      радиатор
                    </option>
                    <option value="785411661">
                      »» CASE SLIM панель стекло Дизайн радиатор
                    </option>
                    <option value="785412061">
                      »» CASE SLIM панель металл Дизайн радиатор
                    </option>
                    <option value="785586061">»» CАNE Дизайн радиатор</option>
                    <option value="796491861">»» DELFIN дизайн радиатор</option>
                    <option value="788690461">»» EASY дизайн радиатор</option>
                    <option value="788721461">
                      »» EASY ONE дизайн радиатор
                    </option>
                    <option value="826078661">
                      »» MICHELLE Дизайн радиатор
                    </option>
                    <option value="796764261">»» HEX дизайн радиатор</option>
                    <option value="797526661">»» IRON D дизайн радиатор</option>
                    <option value="797541661">
                      »» IRON S дизайн радиаторы
                    </option>
                    <option value="798145461">»» INTRA дизайн радиатор</option>
                    <option value="799009061">
                      »» INTRA M дизайн радиатор
                    </option>
                    <option value="806052061">»» VIPERA дизайн радиатор</option>
                    <option value="806666261">
                      »» VIPERA ONE полотенцесушитель
                    </option>
                    <option value="807376261">»» NEMO дизайн радиатор</option>
                    <option value="807453661">»» PASSO дизайн радиатор</option>
                    <option value="807531261">»» PERŁA дизайн радиатор</option>
                    <option value="808245261">»» PLC дизайн радиатор</option>
                    <option value="808291461">»» PAJĄK дизайн радиатор</option>
                    <option value="808310461">»» PIER дизайн радиатор</option>
                    <option value="808424261">»» RIBBON дизайн радиатор</option>
                    <option value="808527061">
                      »» SHERWOOD дизайн радиатор
                    </option>
                    <option value="809400261">»» TRIGA дизайн радиатор</option>
                    <option value="809938061">»» TUNE дизайн радиатор</option>
                    <option value="809957261">
                      » Аксессуары для полотенцесушителей
                    </option>
                    <option value="809957461">»» Крючки</option>
                    <option value="810283861">»» Вешалки</option>
                    <option value="810394461">»» Полочки</option>
                    <option value="816024661">» Вентиля и адаптеры</option>
                    <option value="821524861">»» Переходники</option>
                    <option value="821528261">»» Термоголовки</option>
                    <option value="821550261">»» Маскировочный элемент</option>
                    <option value="821599461">»» Вентиля</option>
                    <option value="761873861">Смесители</option>
                    <option value="761874261">» Для кухни</option>
                    <option value="820255861">
                      »» смесители для кухни Schein
                    </option>
                    <option value="820256261">
                      »» смесители для кухни Wasser Kraft
                    </option>
                    <option value="761874061">
                      » Для ванной с длинным изливом
                    </option>
                    <option value="820256661">
                      »» смесители для ванной Wasser Kraft
                    </option>
                    <option value="820257461">
                      »» смесители для ванной Schein
                    </option>
                    <option value="773555661">
                      » Для ванной с коротким изливом
                    </option>
                    <option value="820256861">
                      »» смеситель для ванной Wasser Kraft
                    </option>
                    <option value="820257061">
                      »» смесители для ванной Schein
                    </option>
                    <option value="773549861">
                      » Смеситель для умывальника
                    </option>
                    <option value="820257861">
                      »» смесители для умывальника Wasser Kraft
                    </option>
                    <option value="820258061">
                      »» смесители для умывальника Schein
                    </option>
                    <option value="773566661">
                      » Встраиваемый смеситель для раковины
                    </option>
                    <option value="820258861">
                      »» встраиваемые смесители для раковины Wasser Kraft
                    </option>
                    <option value="820259461">
                      »» встраиваемые смесители для раковины Schein
                    </option>
                    <option value="811294261">» Смеситель для биде</option>
                    <option value="773566861">» Смеситель на борт ванны</option>
                    <option value="773567061">» Смеситель для душа</option>
                    <option value="820259861">
                      »» смесители для душа Wasser Kraft
                    </option>
                    <option value="820260061">
                      »» смесители для душа Schein
                    </option>
                    <option value="769300061">» Встраиваемые комплекты</option>
                    <option value="773567661">» Напольный смеситель</option>
                    <option value="769300461">
                      » Изделия для встраиваемой системы
                    </option>
                    <option value="769321461">» Стойки для душа</option>
                    <option value="820274261">
                      »» душевые стойки Wasser Kraft
                    </option>
                    <option value="820274461">»» душевые стойки Schein</option>
                    <option value="820274661">»» душевые стойки SSWW</option>
                    <option value="773613061">» Лейки Шланги</option>
                    <option value="769322061">» Системы слива</option>
                    <option value="801450261">
                      Тэны, блоки управления, терморегуляторы TERMA
                    </option>
                    <option value="802481061">» Terma тэн MEG</option>
                    <option value="802522861">» Terma тэн MOA</option>
                    <option value="807541461">
                      » Terma MOA BLUE (Bluetooth) тэн
                    </option>
                    <option value="801451861">» Terma тэн DRY</option>
                    <option value="803954261">» Terma тэн REG 2</option>
                    <option value="805885061">» Terma тэн REG 3</option>
                    <option value="806616261">» Terma тэн SIM</option>
                    <option value="805910861">
                      » Terma SPLIT нагревательный элемент
                    </option>
                    <option value="805906061">
                      » Terma KTX 1 блок управления
                    </option>
                    <option value="805907061">
                      » Terma KTX 2 блок управления
                    </option>
                    <option value="805909261">
                      » Terma KTX 3 блок управления
                    </option>
                    <option value="805909461">
                      » Terma KTX 4 блок управления
                    </option>
                    <option value="806655261">
                      » Terma KTX 4 BLUE (Bluetooth) блок управления
                    </option>
                    <option value="808249061">» Terma ONE тэн внешний</option>
                    <option value="761875461">Аксессуары для ванной</option>
                    <option value="761875661">» Настенные аксессуары</option>
                    <option value="826525861">»» Серия Diemel K-2200</option>
                    <option value="826526261">»» Серия Elbe K-7200</option>
                    <option value="826526461">»» Серия Oder К-3000</option>
                    <option value="826526661">»» Серия Kammel K-8300</option>
                    <option value="826526861">
                      »» Серия Kammel K-8300WHITE
                    </option>
                    <option value="826527061">»» Серия Leine К-5000</option>
                    <option value="826527261">»» Серия Lippe К-6500</option>
                    <option value="826527661">»» Серия Wern K-2500</option>
                    <option value="826527861">»» Серия Exter K-5200</option>
                    <option value="826528061">»» Серия Isar K-7300</option>
                    <option value="826528261">
                      »» Серия Leine K-5000WHITE
                    </option>
                    <option value="826528661">»» Серия Berkel К-6800</option>
                    <option value="826528861">»» Серия Isen К-4000</option>
                    <option value="826529061">»» Серия Ammer К-7000</option>
                    <option value="826529261">»» Серия Donau K-9400</option>
                    <option value="826529461">»» Серия Rhein К-6200</option>
                    <option value="761875861">» Настольные аксессуары</option>
                    <option value="832868261">»» Серия Oder K-9600</option>
                    <option value="832868661">»» Серия Berkel K-4900</option>
                    <option value="832868861">»» Серия Elba K-2700</option>
                    <option value="832869261">»» Серия Salm K-7600</option>
                    <option value="832872461">»» Серия Amper K-5400</option>
                    <option value="832872661">»» Серия Ruwer K-6700</option>
                    <option value="832872861">»» Серия Eider К-33300</option>
                    <option value="832873061">»» Серия Ohre К-37700</option>
                    <option value="832873461">»» Серия Inn K-4300</option>
                    <option value="832873661">»» Серия Leine K-3800</option>
                    <option value="832874261">»» Серия Main K-4700</option>
                    <option value="832874461">»» Серия Lippe K-8100</option>
                    <option value="832874861">»» Серия Lossa K-3400</option>
                    <option value="832875061">»» Серия Ammer K-6400</option>
                    <option value="832875461">»» Серия Dinkel K-4600</option>
                    <option value="832875661">»» Серия Rossel K-5700</option>
                    <option value="832876261">»» Серия Exter K-5500</option>
                    <option value="832876661">»» Серия Isar K-2300</option>
                    <option value="832876861">»» Серия Donau K-2400</option>
                    <option value="832877061">»» Серия Wern K-7500</option>
                    <option value="769296661">
                      » Дополнительные аксессуары
                    </option>
                    <option value="769296861">» Шторки для ванной</option>
                    <option value="769297061">» Коврики для ванной</option>
                    <option value="769299861">
                      » Корзины для ванной комнаты
                    </option>
                  </select>
                  <div class="jq-selectbox__select" style="position: relative">
                    <div class="jq-selectbox__select-text placeholder">Все</div>
                    <div class="jq-selectbox__trigger">
                      <div class="jq-selectbox__trigger-arrow"></div>
                    </div>
                  </div>
                  <div
                    class="jq-selectbox__dropdown"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      display: none;
                    "
                  >
                    <ul
                      style="
                        position: relative;
                        list-style: none;
                        overflow: auto;
                        overflow-x: hidden;
                      "
                    >
                      <li class="selected sel" style="">Все</li>
                      <li style="">Полотенцесушители TERMA в наличии</li>
                      <li style="">» ALEX полотенцесушитель</li>
                      <li style="">» JADE M полотенцесушитель</li>
                      <li style="">» POLA полотенцесушитель</li>
                      <li style="">» DEXTER полотенцесушитель</li>
                      <li style="">» ZIG ZAG полотенцесушитель</li>
                      <li style="">» BONE полотенцесушитель</li>
                      <li style="">» DOMI полотенцесушитель</li>
                      <li style="">» FIONA полотенцесушитель</li>
                      <li style="">» VIVO полотенцесушитель</li>
                      <li style="">Полотенцесушители</li>
                      <li style="">» Terma</li>
                      <li style="">»» ALEX полотенцесушитель</li>
                      <li style="">»» ALEX ONE полотенцесушитель</li>
                      <li style="">»» BONE полотенцесушитель</li>
                      <li style="">»» BONE ONE полотенцесушитель</li>
                      <li style="">»» CITY полотенцесушитель</li>
                      <li style="">»» CRYSTAL полотенцесушитель</li>
                      <li style="">»» DEXTER полотенцесушитель</li>
                      <li style="">»» DIAMOND полотенцесушитель</li>
                      <li style="">»» DOMI полотенцесушитель</li>
                      <li style="">»» INCORNER полотенцесушитель</li>
                      <li style="">»» OUTCORNER полотенцесушитель</li>
                      <li style="">»» FIONA полотенцесушитель</li>
                      <li style="">»» JADE M полотенцесушитель</li>
                      <li style="">»» KIOTO полотенцесушитель</li>
                      <li style="">»» KIOTO ONE полотенцесушитель</li>
                      <li style="">»» LENA полотенцесушитель</li>
                      <li style="">»» LIMA полотенцесушитель</li>
                      <li style="">»» LUKKA полотенцесушитель</li>
                      <li style="">»» MANTIS полотенцесушитель</li>
                      <li style="">»» MARLIN полотенцесушитель</li>
                      <li style="">»» MANTIS ONE полотенцесушитель</li>
                      <li style="">»» MIKE полотенцесушитель</li>
                      <li style="">»» MIKE ONE полотенцесушитель</li>
                      <li style="">»» POLA полотенцесушитель</li>
                      <li style="">»» POLA ONE полотенцесушитель</li>
                      <li style="">»» QUADRUS SLIM полотенцесушитель</li>
                      <li style="">»» QUADRUS BOLD полотенцесушитель</li>
                      <li style="">»» RETRO полотенцесушитель</li>
                      <li style="">»» RETRO S полотенцесушитель</li>
                      <li style="">»» STAND полотенцесушитель</li>
                      <li style="">»» SIMPLE полотенцесушитель</li>
                      <li style="">»» SPIRO полотенцесушитель</li>
                      <li style="">»» TYTUS полотенцесушитель</li>
                      <li style="">»» VIVO полотенцесушитель</li>
                      <li style="">»» WARP полотенцесушитель</li>
                      <li style="">»» WIND полотенцесушитель</li>
                      <li style="">»» ZIG ZAG полотенцесушитель</li>
                      <li style="">»» AERO V Дизайн радиатор</li>
                      <li style="">»» AERO H Дизайн радиатор</li>
                      <li style="">»» AERO HG Дизайн радиатор</li>
                      <li style="">»» ANGUS DW Дизайн радиатор</li>
                      <li style="">»» ANGUS H Дизайн радиатор</li>
                      <li style="">»» ANGUS V Дизайн радиатор</li>
                      <li style="">»» CYKLON V дизайн радиатор</li>
                      <li style="">»» CYKLON H дизайн радиатор</li>
                      <li style="">
                        »» CASE SLIM панель бетон Дизайн радиатор
                      </li>
                      <li style="">
                        »» CASE SLIM панель зеркало Дизайн радиатор
                      </li>
                      <li style="">
                        »» CASE SLIM панель печать (рисунок) на стекле Дизайн
                        радиатор
                      </li>
                      <li style="">
                        »» CASE SLIM панель стекло Дизайн радиатор
                      </li>
                      <li style="">
                        »» CASE SLIM панель металл Дизайн радиатор
                      </li>
                      <li style="">»» CАNE Дизайн радиатор</li>
                      <li style="">»» DELFIN дизайн радиатор</li>
                      <li style="">»» EASY дизайн радиатор</li>
                      <li style="">»» EASY ONE дизайн радиатор</li>
                      <li style="">»» MICHELLE Дизайн радиатор</li>
                      <li style="">»» HEX дизайн радиатор</li>
                      <li style="">»» IRON D дизайн радиатор</li>
                      <li style="">»» IRON S дизайн радиаторы</li>
                      <li style="">»» INTRA дизайн радиатор</li>
                      <li style="">»» INTRA M дизайн радиатор</li>
                      <li style="">»» VIPERA дизайн радиатор</li>
                      <li style="">»» VIPERA ONE полотенцесушитель</li>
                      <li style="">»» NEMO дизайн радиатор</li>
                      <li style="">»» PASSO дизайн радиатор</li>
                      <li style="">»» PERŁA дизайн радиатор</li>
                      <li style="">»» PLC дизайн радиатор</li>
                      <li style="">»» PAJĄK дизайн радиатор</li>
                      <li style="">»» PIER дизайн радиатор</li>
                      <li style="">»» RIBBON дизайн радиатор</li>
                      <li style="">»» SHERWOOD дизайн радиатор</li>
                      <li style="">»» TRIGA дизайн радиатор</li>
                      <li style="">»» TUNE дизайн радиатор</li>
                      <li style="">» Аксессуары для полотенцесушителей</li>
                      <li style="">»» Крючки</li>
                      <li style="">»» Вешалки</li>
                      <li style="">»» Полочки</li>
                      <li style="">» Вентиля и адаптеры</li>
                      <li style="">»» Переходники</li>
                      <li style="">»» Термоголовки</li>
                      <li style="">»» Маскировочный элемент</li>
                      <li style="">»» Вентиля</li>
                      <li style="">Смесители</li>
                      <li style="">» Для кухни</li>
                      <li style="">»» смесители для кухни Schein</li>
                      <li style="">»» смесители для кухни Wasser Kraft</li>
                      <li style="">» Для ванной с длинным изливом</li>
                      <li style="">»» смесители для ванной Wasser Kraft</li>
                      <li style="">»» смесители для ванной Schein</li>
                      <li style="">» Для ванной с коротким изливом</li>
                      <li style="">»» смеситель для ванной Wasser Kraft</li>
                      <li style="">»» смесители для ванной Schein</li>
                      <li style="">» Смеситель для умывальника</li>
                      <li style="">
                        »» смесители для умывальника Wasser Kraft
                      </li>
                      <li style="">»» смесители для умывальника Schein</li>
                      <li style="">» Встраиваемый смеситель для раковины</li>
                      <li style="">
                        »» встраиваемые смесители для раковины Wasser Kraft
                      </li>
                      <li style="">
                        »» встраиваемые смесители для раковины Schein
                      </li>
                      <li style="">» Смеситель для биде</li>
                      <li style="">» Смеситель на борт ванны</li>
                      <li style="">» Смеситель для душа</li>
                      <li style="">»» смесители для душа Wasser Kraft</li>
                      <li style="">»» смесители для душа Schein</li>
                      <li style="">» Встраиваемые комплекты</li>
                      <li style="">» Напольный смеситель</li>
                      <li style="">» Изделия для встраиваемой системы</li>
                      <li style="">» Стойки для душа</li>
                      <li style="">»» душевые стойки Wasser Kraft</li>
                      <li style="">»» душевые стойки Schein</li>
                      <li style="">»» душевые стойки SSWW</li>
                      <li style="">» Лейки Шланги</li>
                      <li style="">» Системы слива</li>
                      <li style="">
                        Тэны, блоки управления, терморегуляторы TERMA
                      </li>
                      <li style="">» Terma тэн MEG</li>
                      <li style="">» Terma тэн MOA</li>
                      <li style="">» Terma MOA BLUE (Bluetooth) тэн</li>
                      <li style="">» Terma тэн DRY</li>
                      <li style="">» Terma тэн REG 2</li>
                      <li style="">» Terma тэн REG 3</li>
                      <li style="">» Terma тэн SIM</li>
                      <li style="">» Terma SPLIT нагревательный элемент</li>
                      <li style="">» Terma KTX 1 блок управления</li>
                      <li style="">» Terma KTX 2 блок управления</li>
                      <li style="">» Terma KTX 3 блок управления</li>
                      <li style="">» Terma KTX 4 блок управления</li>
                      <li style="">
                        » Terma KTX 4 BLUE (Bluetooth) блок управления
                      </li>
                      <li style="">» Terma ONE тэн внешний</li>
                      <li style="">Аксессуары для ванной</li>
                      <li style="">» Настенные аксессуары</li>
                      <li style="">»» Серия Diemel K-2200</li>
                      <li style="">»» Серия Elbe K-7200</li>
                      <li style="">»» Серия Oder К-3000</li>
                      <li style="">»» Серия Kammel K-8300</li>
                      <li style="">»» Серия Kammel K-8300WHITE</li>
                      <li style="">»» Серия Leine К-5000</li>
                      <li style="">»» Серия Lippe К-6500</li>
                      <li style="">»» Серия Wern K-2500</li>
                      <li style="">»» Серия Exter K-5200</li>
                      <li style="">»» Серия Isar K-7300</li>
                      <li style="">»» Серия Leine K-5000WHITE</li>
                      <li style="">»» Серия Berkel К-6800</li>
                      <li style="">»» Серия Isen К-4000</li>
                      <li style="">»» Серия Ammer К-7000</li>
                      <li style="">»» Серия Donau K-9400</li>
                      <li style="">»» Серия Rhein К-6200</li>
                      <li style="">» Настольные аксессуары</li>
                      <li style="">»» Серия Oder K-9600</li>
                      <li style="">»» Серия Berkel K-4900</li>
                      <li style="">»» Серия Elba K-2700</li>
                      <li style="">»» Серия Salm K-7600</li>
                      <li style="">»» Серия Amper K-5400</li>
                      <li style="">»» Серия Ruwer K-6700</li>
                      <li style="">»» Серия Eider К-33300</li>
                      <li style="">»» Серия Ohre К-37700</li>
                      <li style="">»» Серия Inn K-4300</li>
                      <li style="">»» Серия Leine K-3800</li>
                      <li style="">»» Серия Main K-4700</li>
                      <li style="">»» Серия Lippe K-8100</li>
                      <li style="">»» Серия Lossa K-3400</li>
                      <li style="">»» Серия Ammer K-6400</li>
                      <li style="">»» Серия Dinkel K-4600</li>
                      <li style="">»» Серия Rossel K-5700</li>
                      <li style="">»» Серия Exter K-5500</li>
                      <li style="">»» Серия Isar K-2300</li>
                      <li style="">»» Серия Donau K-2400</li>
                      <li style="">»» Серия Wern K-7500</li>
                      <li style="">» Дополнительные аксессуары</li>
                      <li style="">» Шторки для ванной</li>
                      <li style="">» Коврики для ванной</li>
                      <li style="">» Корзины для ванной комнаты</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="shop2_search_custom_fields"></div>

            <div id="shop2_search_global_fields">
              <div class="row">
                <div
                  class="row-title"
                  @click="color = !color"
                  :class="{ active: color }"
                >
                  Цвет:
                </div>
                <div class="row_body" :class="{ active: color }">
                  <div
                    data-placeholder="Все"
                    class="jq-selectbox jqselect"
                    style="
                      display: inline-block;
                      position: relative;
                      z-index: 100;
                    "
                  >
                    <select
                      name="s[cvet_420]"
                      data-placeholder="Все"
                      style="
                        margin: 0px;
                        padding: 0px;
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                      "
                    >
                      <option value="">Все</option>
                      <option value="313197261">Бронза</option>
                      <option value="313197461">Хром</option>
                      <option value="313197661">RAL</option>
                      <option value="313197861">Белый</option>
                      <option value="323173461">Серебристый</option>
                      <option value="323173661">Черный</option>
                      <option value="323173861">Золото</option>
                      <option value="328325061">Медь</option>
                    </select>
                    <div
                      class="jq-selectbox__select"
                      style="position: relative"
                    >
                      <div class="jq-selectbox__select-text placeholder">
                        Все
                      </div>
                      <div class="jq-selectbox__trigger">
                        <div class="jq-selectbox__trigger-arrow"></div>
                      </div>
                    </div>
                    <div
                      class="jq-selectbox__dropdown"
                      style="
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        display: none;
                      "
                    >
                      <ul
                        style="
                          position: relative;
                          list-style: none;
                          overflow: auto;
                          overflow-x: hidden;
                        "
                      >
                        <li class="selected sel" style="">Все</li>
                        <li style="">Бронза</li>
                        <li style="">Хром</li>
                        <li style="">RAL</li>
                        <li style="">Белый</li>
                        <li style="">Серебристый</li>
                        <li style="">Черный</li>
                        <li style="">Золото</li>
                        <li style="">Медь</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row">
                <div
                  class="row-title"
                  @click="watt = !watt"
                  :class="{ active: watt }"
                >
                  Мощность:
                </div>
                <div class="row_body" :class="{ active: watt }">
                  <div
                    data-placeholder="Все"
                    class="jq-selectbox jqselect"
                    style="
                      display: inline-block;
                      position: relative;
                      z-index: 100;
                    "
                  >
                    <select
                      name="s[mosnost_]"
                      data-placeholder="Все"
                      style="
                        margin: 0px;
                        padding: 0px;
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        width: 100%;
                        height: 100%;
                        opacity: 0;
                      "
                    >
                      <option value="">Все</option>
                      <option value="323175061">120 Вт</option>
                      <option value="323182661">200 Вт</option>
                      <option value="323182861">300 Вт</option>
                      <option value="323183061">400 Вт</option>
                      <option value="323183261">600 Вт</option>
                      <option value="323183461">800 Вт</option>
                      <option value="323183661">1000 Вт</option>
                      <option value="323183861">1200 Вт</option>
                      <option value="323184061">1500 Вт</option>
                    </select>
                    <div
                      class="jq-selectbox__select"
                      style="position: relative"
                    >
                      <div class="jq-selectbox__select-text placeholder">
                        Все
                      </div>
                      <div class="jq-selectbox__trigger">
                        <div class="jq-selectbox__trigger-arrow"></div>
                      </div>
                    </div>
                    <div
                      class="jq-selectbox__dropdown"
                      style="
                        position: absolute;
                        left: 0px;
                        top: 0px;
                        display: none;
                      "
                    >
                      <ul
                        style="
                          position: relative;
                          list-style: none;
                          overflow: auto;
                          overflow-x: hidden;
                        "
                      >
                        <li class="selected sel" style="">Все</li>
                        <li style="">120 Вт</li>
                        <li style="">200 Вт</li>
                        <li style="">300 Вт</li>
                        <li style="">400 Вт</li>
                        <li style="">600 Вт</li>
                        <li style="">800 Вт</li>
                        <li style="">1000 Вт</li>
                        <li style="">1200 Вт</li>
                        <li style="">1500 Вт</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row select">
              <div
                class="row-title"
                @click="producer = !producer"
                :class="{ active: producer }"
              >
                Производитель:
              </div>
              <div class="row_body" :class="{ active: producer }">
                <div
                  data-placeholder="Все"
                  class="jq-selectbox jqselect"
                  style="
                    display: inline-block;
                    position: relative;
                    z-index: 100;
                  "
                >
                  <select
                    name="s[vendor_id]"
                    data-placeholder="Все"
                    style="
                      margin: 0px;
                      padding: 0px;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 100%;
                      height: 100%;
                      opacity: 0;
                    "
                  >
                    <option value="">Все</option>
                    <option value="163124061">La Tezza</option>
                    <option value="182426261">MEER</option>
                    <option value="163269861">SSWW</option>
                    <option value="161947661">TERMA Польша</option>
                    <option value="163124261">Tessoro</option>
                    <option value="160337061">Производитель 1</option>
                    <option value="160338861">Производитель 10</option>
                    <option value="160339061">Производитель 11</option>
                    <option value="160339261">Производитель 12</option>
                    <option value="160339461">Производитель 13</option>
                    <option value="160339661">Производитель 14</option>
                    <option value="160339861">Производитель 15</option>
                    <option value="160340061">Производитель 16</option>
                    <option value="160340261">Производитель 17</option>
                    <option value="160340461">Производитель 18</option>
                    <option value="160340661">Производитель 19</option>
                    <option value="160337261">Производитель 2</option>
                    <option value="160340861">Производитель 20</option>
                    <option value="160341061">Производитель 21</option>
                    <option value="160341261">Производитель 22</option>
                    <option value="160341461">Производитель 23</option>
                    <option value="160341661">Производитель 24</option>
                    <option value="160341861">Производитель 25</option>
                    <option value="160342061">Производитель 26</option>
                    <option value="160342261">Производитель 27</option>
                    <option value="160337461">Производитель 3</option>
                    <option value="160337661">Производитель 4</option>
                    <option value="160337861">Производитель 5</option>
                    <option value="160338061">Производитель 6</option>
                    <option value="160338261">Производитель 7</option>
                    <option value="160338461">Производитель 8</option>
                    <option value="160338661">Производитель 9</option>
                  </select>
                  <div class="jq-selectbox__select" style="position: relative">
                    <div class="jq-selectbox__select-text placeholder">Все</div>
                    <div class="jq-selectbox__trigger">
                      <div class="jq-selectbox__trigger-arrow"></div>
                    </div>
                  </div>
                  <div
                    class="jq-selectbox__dropdown"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      display: none;
                    "
                  >
                    <ul
                      style="
                        position: relative;
                        list-style: none;
                        overflow: auto;
                        overflow-x: hidden;
                      "
                    >
                      <li class="selected sel" style="">Все</li>
                      <li style="">La Tezza</li>
                      <li style="">MEER</li>
                      <li style="">SSWW</li>
                      <li style="">TERMA Польша</li>
                      <li style="">Tessoro</li>
                      <li style="">Производитель 1</li>
                      <li style="">Производитель 10</li>
                      <li style="">Производитель 11</li>
                      <li style="">Производитель 12</li>
                      <li style="">Производитель 13</li>
                      <li style="">Производитель 14</li>
                      <li style="">Производитель 15</li>
                      <li style="">Производитель 16</li>
                      <li style="">Производитель 17</li>
                      <li style="">Производитель 18</li>
                      <li style="">Производитель 19</li>
                      <li style="">Производитель 2</li>
                      <li style="">Производитель 20</li>
                      <li style="">Производитель 21</li>
                      <li style="">Производитель 22</li>
                      <li style="">Производитель 23</li>
                      <li style="">Производитель 24</li>
                      <li style="">Производитель 25</li>
                      <li style="">Производитель 26</li>
                      <li style="">Производитель 27</li>
                      <li style="">Производитель 3</li>
                      <li style="">Производитель 4</li>
                      <li style="">Производитель 5</li>
                      <li style="">Производитель 6</li>
                      <li style="">Производитель 7</li>
                      <li style="">Производитель 8</li>
                      <li style="">Производитель 9</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row select">
              <div class="row-title">Новинка:</div>
              <div class="row_body">
                <div
                  data-placeholder="Все"
                  class="jq-selectbox jqselect"
                  style="
                    display: inline-block;
                    position: relative;
                    z-index: 100;
                  "
                >
                  <select
                    name="s[new]"
                    data-placeholder="Все"
                    style="
                      margin: 0px;
                      padding: 0px;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 100%;
                      height: 100%;
                      opacity: 0;
                    "
                  >
                    <option value="">Все</option>
                    <option value="1">да</option>
                    <option value="0">нет</option>
                  </select>
                  <div class="jq-selectbox__select" style="position: relative">
                    <div class="jq-selectbox__select-text placeholder">Все</div>
                    <div class="jq-selectbox__trigger">
                      <div class="jq-selectbox__trigger-arrow"></div>
                    </div>
                  </div>
                  <div
                    class="jq-selectbox__dropdown"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      display: none;
                    "
                  >
                    <ul
                      style="
                        position: relative;
                        list-style: none;
                        overflow: auto;
                        overflow-x: hidden;
                      "
                    >
                      <li class="selected sel" style="">Все</li>
                      <li style="">да</li>
                      <li style="">нет</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row select">
              <div class="row-title">Спецпредложение:</div>
              <div class="row_body">
                <div
                  data-placeholder="Все"
                  class="jq-selectbox jqselect"
                  style="
                    display: inline-block;
                    position: relative;
                    z-index: 100;
                  "
                >
                  <select
                    name="s[special]"
                    data-placeholder="Все"
                    style="
                      margin: 0px;
                      padding: 0px;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 100%;
                      height: 100%;
                      opacity: 0;
                    "
                  >
                    <option value="">Все</option>
                    <option value="1">да</option>
                    <option value="0">нет</option>
                  </select>
                  <div class="jq-selectbox__select" style="position: relative">
                    <div class="jq-selectbox__select-text placeholder">Все</div>
                    <div class="jq-selectbox__trigger">
                      <div class="jq-selectbox__trigger-arrow"></div>
                    </div>
                  </div>
                  <div
                    class="jq-selectbox__dropdown"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      display: none;
                    "
                  >
                    <ul
                      style="
                        position: relative;
                        list-style: none;
                        overflow: auto;
                        overflow-x: hidden;
                      "
                    >
                      <li class="selected sel" style="">Все</li>
                      <li style="">да</li>
                      <li style="">нет</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row select">
              <div class="row-title">Результатов на странице:</div>
              <div class="row_body">
                <div
                  class="jq-selectbox jqselect"
                  style="
                    display: inline-block;
                    position: relative;
                    z-index: 100;
                  "
                >
                  <select
                    name="s[products_per_page]"
                    style="
                      margin: 0px;
                      padding: 0px;
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      width: 100%;
                      height: 100%;
                      opacity: 0;
                    "
                  >
                    <option value="5">5</option>
                    <option value="20">20</option>
                    <option value="35">35</option>
                    <option value="50">50</option>
                    <option value="65">65</option>
                    <option value="80">80</option>
                    <option value="95">95</option>
                  </select>
                  <div class="jq-selectbox__select" style="position: relative">
                    <div class="jq-selectbox__select-text">5</div>
                    <div class="jq-selectbox__trigger">
                      <div class="jq-selectbox__trigger-arrow"></div>
                    </div>
                  </div>
                  <div
                    class="jq-selectbox__dropdown"
                    style="
                      position: absolute;
                      left: 0px;
                      top: 0px;
                      display: none;
                    "
                  >
                    <ul
                      style="
                        position: relative;
                        list-style: none;
                        overflow: auto;
                        overflow-x: hidden;
                      "
                    >
                      <li class="selected sel" style="">5</li>
                      <li style="">20</li>
                      <li style="">35</li>
                      <li style="">50</li>
                      <li style="">65</li>
                      <li style="">80</li>
                      <li style="">95</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="clear-container"></div>
            <div class="row_button">
              <button type="submit" class="search-btn">Найти</button>
            </div>
          </form>
          <div class="clear-container"></div>
        </div>
      </div>
      <!-- Search Form -->
      <nav class="site_search_wr">
        <form
          action="/search"
          enctype="multipart/form-data"
          class="search_form"
        >
          <input
            class="search_text"
            placeholder="Хочу найти..."
            autocomplete="off"
            name="s[name]"
            value=""
          />
          <div class="search_button">
            <input
              type="submit"
              class="search_button"
              value="Найти"
              @click.prevent="close"
            />
          </div>
        </form>
      </nav>
    </div>
  </div>
</template>
<script>
//import Input from "@/components/LeftPanel/Input.vue";
//import Select from "@/components/LeftPanel/Select.vue";
//import SelectRow from "@/components/LeftPanel/SelectRow.vue";
export default {
  props: ["searchStatus"],
  data: () => ({
    opened: false,
    name: true,
    price: true,
    article: true,
    text: false,
    category: false,
    color: false,
    watt: false,
    producer: false,
  }),
  computed: {
    items() {
      return this.$store.state.items;
    },
  },
  methods: {
    disactiveSearchForm: function () {
      this.$emit("disactiveSearchForm");
    },
    close: function () {
      this.$emit("close");
    },
  },
  components: {
    //Input,
    //Select,
    //SelectRow,
  },
};
</script>
<style scoped lang="scss">
.fixed_search_wrapper {
  position: fixed;
  left: 50%;
  top: 90px;
  bottom: 0;
  min-height: 100%;
  width: 0;
  background: #fff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 220;
  box-shadow: 0 4px 8px rgba(6, 44, 81, 0.14);
  transition: all 0.3s;
  transform: translate(-667px, 0);
  opacity: 0;
  visibility: hidden;
  .fixed_search_in {
    width: 226px;
  }
  .block-body {
    display: none;
    position: absolute;
    background: #fff;
    z-index: 1;
    width: 226px;
  }
  .block-title {
    cursor: pointer;
    font: 18px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
      sans-serif;
    text-transform: uppercase;
    letter-spacing: -0.18px;
    color: #09538e;
    padding: 36px 20px 32px;
    box-shadow: inset 0 -1px 0 #e3e3e3;
    position: relative;
    .search_close {
      display: none;
    }
  }
  .block-title:before {
    position: absolute;
    content: "";
    right: 20px;
    top: 41px;
    width: 14px;
    height: 8px;
    transition: all 0.3s;
    background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2214px%22%20height%3D%228px%22%20%20viewBox%3D%220%200%2014%208%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M13.542%2C1.681%20L7.619%2C7.558%20C7.617%2C7.560%207.615%2C7.562%207.613%2C7.564%20C7.226%2C7.945%206.601%2C7.942%206.217%2C7.558%20L0.295%2C1.681%20L0.295%2C1.681%20C0.293%2C1.679%200.291%2C1.677%200.289%2C1.675%20C-0.095%2C1.291%20-0.092%2C0.671%200.295%2C0.290%20C0.297%2C0.288%200.299%2C0.286%200.301%2C0.285%20C0.688%2C-0.096%201.313%2C-0.094%201.697%2C0.290%20L6.918%2C5.472%20L12.140%2C0.290%20C12.142%2C0.288%2012.144%2C0.286%2012.146%2C0.285%20C12.533%2C-0.096%2013.158%2C-0.094%2013.542%2C0.290%20C13.544%2C0.292%2013.546%2C0.294%2013.547%2C0.296%20C13.931%2C0.680%2013.929%2C1.300%2013.542%2C1.681%20Z%22%2F%3E%3C%2Fsvg%3E")
      0 0 no-repeat;
  }
  .search-form.opened {
    .block-body {
      display: block;
    }
    .block-title:before {
      transform: rotate(180deg);
    }
  }
  .search-form {
    .row {
      box-shadow: inset 0 -1px 0 #e3e3e3;
      .row-title {
        padding: 10px 45px 10px 20px;
        color: #212121;
        font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        text-transform: uppercase;
        display: block;
        cursor: pointer;
        position: relative;
      }
      .row-title.active:before {
        transform: rotate(-180deg);
      }
      .row-title:before {
        position: absolute;
        content: "";
        right: 20px;
        top: 50%;
        height: 6px;
        width: 10px;
        margin-top: -3px;
        transition: all 0.3s;
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%231B1B1B%22%20d%3D%22M5.000%2C6.000%20L-0.000%2C-0.000%20L10.000%2C-0.000%20L5.000%2C6.000%20Z%22%2F%3E%3C%2Fsvg%3E")
          0 0 no-repeat;
      }
      .row_check {
        font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        padding: 10px 45px 10px 20px;
        color: #212121;
      }
      .row_body {
        padding: 10px 20px 20px;
        display: none;
      }
      .row_body.active {
        display: block;
      }
      input[type="text"] {
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
        padding: 6px 8px 8px;
      }
      input[type="text"]::-webkit-input-placeholder {
        color: #212121;
      }
      input[type="text"]:moz-placeholder {
        color: #212121;
      }
      input[type="text"]::-moz-placeholder {
        color: #212121;
      }
      input[type="text"]:-ms-input-placeholder {
        color: #212121;
      }
      input[type="text"]:hover {
        border-color: #f5fafb;
        background: #fff;
      }
      input[type="text"]:focus {
        background: #fff;
        box-shadow: inset 0 0 0 1px #eae9f4;
      }
      .shop2-color-ext-select {
        background: #f5fafb;
        color: #1ea5e0;
        border: 1px solid #f5fafb;
        transition: all 0.3s;
        border-radius: 1px;
        box-sizing: border-box;
        box-shadow: none;
        font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
        outline: none;
        width: 100%;
        height: 34px;
        li.shop2-color-ext-selected {
          background: none !important;
        }
        span {
          margin-top: 2px;
          width: 28px !important;
          height: 28px !important;
          border-radius: 50%;
          border: none;
        }
        div {
          padding-top: 5px;
          font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
        }
      }
      .shop2-color-ext-select.opened i {
        transform: rotate(-180deg);
        position: absolute;
        content: "";
        right: 18px;
        top: 50%;
        width: 10px;
        height: 6px;
        margin-top: -3px;
        border: none;
        transition: transform 0.3s;
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M9.727%2C1.693%20C9.725%2C1.695%209.723%2C1.697%209.721%2C1.699%20L5.715%2C5.710%20C5.515%2C5.900%205.265%2C6.001%205.004%2C6.001%20L5.004%2C6.001%20C4.743%2C6.001%204.493%2C5.900%204.293%2C5.710%20L0.286%2C1.699%20C-0.106%2C1.309%20-0.109%2C0.674%200.281%2C0.281%20C0.283%2C0.279%200.285%2C0.277%200.286%2C0.275%20C0.676%2C-0.118%201.310%2C-0.121%201.703%2C0.269%20C1.705%2C0.271%201.707%2C0.273%201.709%2C0.275%20L5.004%2C3.584%20L8.299%2C0.275%20C8.689%2C-0.118%209.323%2C-0.121%209.716%2C0.269%20C9.718%2C0.271%209.720%2C0.273%209.721%2C0.275%20C10.114%2C0.665%2010.117%2C1.300%209.727%2C1.693%20Z%22%20%2F%3E%3C%2Fsvg%3E")
          50% / cover no-repeat;
      }
      .jqselect {
        background: #f5fafb;
        color: #0c8ac9;
        border: 1px solid #f5fafb;
        transition: all 0.3s;
        border-radius: 1px;
        box-sizing: border-box;
        box-shadow: none;
        font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
        outline: none;
        width: 100%;
        .jq-selectbox__select {
          padding: 6px 30px 8px 12px;
        }
        .jq-selectbox__dropdown {
          width: 100%;
          background: #fff;
          box-sizing: border-box;
          box-shadow: inset 0 0 0 1px #0c8ac9;
          ul {
            padding: 0;
            margin: 0;
            list-style: none;
            li {
              padding: 6px 15px;
              font-family: "noto_sans-r", Arial, Helvetica, sans-serif;
              font-size: 14px;
              line-height: 18px;
              color: #212121;
            }
            li:hover {
              color: #fff;
              background: #0c8ac9;
            }
            li.sel {
              color: #fff;
              background: #0c8ac9;
            }
          }
        }
      }
      .jqselect::-webkit-input-placeholder {
        color: #0c8ac9;
      }
      .jqselect:moz-placeholder {
        color: #0c8ac9;
      }
      .jqselect::-moz-placeholder {
        color: #0c8ac9;
      }
      .jqselect:-ms-input-placeholder {
        color: #0c8ac9;
      }
      .jqselect.opened:before {
        transform: rotate(-180deg);
      }
      .jqselect:before {
        position: absolute;
        content: "";
        right: 18px;
        top: 50%;
        width: 10px;
        height: 6px;
        margin-top: -3px;
        background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2210px%22%20height%3D%226px%22%20%20viewBox%3D%220%200%2010%206%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%22%3Cpath%20fill%3D%22%230c8ac9%22%20d%3D%22M9.727%2C1.693%20C9.725%2C1.695%209.723%2C1.697%209.721%2C1.699%20L5.715%2C5.710%20C5.515%2C5.900%205.265%2C6.001%205.004%2C6.001%20L5.004%2C6.001%20C4.743%2C6.001%204.493%2C5.900%204.293%2C5.710%20L0.286%2C1.699%20C-0.106%2C1.309%20-0.109%2C0.674%200.281%2C0.281%20C0.283%2C0.279%200.285%2C0.277%200.286%2C0.275%20C0.676%2C-0.118%201.310%2C-0.121%201.703%2C0.269%20C1.705%2C0.271%201.707%2C0.273%201.709%2C0.275%20L5.004%2C3.584%20L8.299%2C0.275%20C8.689%2C-0.118%209.323%2C-0.121%209.716%2C0.269%20C9.718%2C0.271%209.720%2C0.273%209.721%2C0.275%20C10.114%2C0.665%2010.117%2C1.300%209.727%2C1.693%20Z%22%20%2F%3E%3C%2Fsvg%3E")
          50% / cover no-repeat;
      }
      .price_range {
        padding: 0 0 23px;
        font-size: 0;
        .small {
          width: 90px;
          text-align: center;
        }
        .small + .small {
          margin-left: 6px;
        }
      }
      .price_from {
        font: 12px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        color: #212121;
        float: left;
        margin: -5px 0 0 0;
      }
      .price_till {
        font: 12px/16px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        color: #212121;
        float: right;
        margin: -5px 0 0 0;
      }
      .noUi-horizontal {
        height: 6px;
        margin: 0 35px 0 15px;
        .noUi-origin.noUi-background {
          height: 6px;
          background: #fff;
        }
        .noUi-origin.noUi-background:before {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          margin-top: -1px;
          height: 2px;
          background: #000;
        }
        .noUi-connect {
          background: #09538e;
          height: 6px;
        }
        .noUi-handle {
          width: 20px;
          height: 20px;
          left: 0;
          top: 50%;
          margin-top: -10px;
          background: #0c8ac9;
          cursor: pointer;
          border-radius: 15px;
          box-shadow: 0 2px 4px rgba(40, 33, 104, 0.2);
          transition: all 0.3s ease-in-out;
        }
        .noUi-handle.noUi-handle-lower {
          margin-top: -10px;
        }
      }
      .noUi-horizontal:before {
        content: "";
        position: absolute;
        left: 0;
        right: -20px;
        top: 50%;
        margin-top: -1px;
        height: 2px;
        background: #1b1b1b;
      }
    }
    .row_button {
      padding: 20px;
      .search-btn {
        font: 16px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
        padding: 8px 20px 7px;
        width: 100%;
        border: none;
        text-transform: uppercase;
        outline: none;
        box-shadow: none;
        border-radius: 1px;
        cursor: pointer;
        color: #fff;
        background: #0c8ac9;
        position: relative;
      }
      .search-btn:hover:before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.1);
      }
      .search-btn:active:before {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
  .site_search_wr {
    padding: 28px 20px;
    .search_text {
      background: #f5fafb;
      color: #212121;
      border: 1px solid #f5fafb;
      transition: all 0.3s;
      border-radius: 1px;
      box-shadow: none;
      font: 14px/20px "noto_sans-r", Arial, Helvetica, sans-serif;
      outline: none;
      width: 100%;
      box-sizing: border-box;
      padding: 6px 20px 8px 12px;
      margin: 0 0 28px;
    }
    .search_text::-webkit-input-placeholder {
      color: #212121;
    }
    .search_text:moz-placeholder {
      color: #212121;
    }
    .search_text::-moz-placeholder {
      color: #212121;
    }
    .search_text:-ms-input-placeholder {
      color: #212121;
    }
    .search_text:hover {
      border-color: #f5fafb;
      background: #fff;
    }
    .search_text:focus {
      box-shadow: inset 0 0 0 1px #eae9f4;
      background: #fff;
    }
    .search_button {
      font: 16px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
        sans-serif;
      outline: none;
      box-shadow: none;
      border-radius: 1px;
      cursor: pointer;
      color: #fff;
      background: #0c8ac9;
      position: relative;
      input {
        width: 100%;
        box-shadow: none;
        border: none;
        background: none;
        padding: 8px 20px 7px;
        text-transform: uppercase;
        color: #fff;
        font: 16px/22px "fira_sans_extra_condensed-s-b", Arial, Helvetica,
          sans-serif;
      }
    }
    .search_button:hover:before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.1);
    }
    .search_button:active:before {
      position: absolute;
      content: "";
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(255, 255, 255, 0.3);
    }
  }
}

.fixed_search_wrapper.active {
  opacity: 1;
  visibility: visible;
  width: 226px;
}
.row-title {
  padding: 10px 45px 10px 20px;
  color: #212121;
  font: 14px/18px "fira_sans_extra_condensed-s-b", Arial, Helvetica, sans-serif;
  text-transform: uppercase;
  display: block;
  cursor: pointer;
  position: relative;
}

@media screen and (max-width: 1580px) {
  .fixed_search_wrapper {
    transform: translate(-560px, 0);
  }
}
@media screen and (max-width: 1299px) {
  .fixed_search_wrapper {
    transform: translate(-501px, 0);
  }
}
@media screen and (max-width: 1180px) {
  .fixed_search_wrapper {
    transform: translate(-435px, 0);
    top: 60px;
    .search-form {
      .block-title {
        padding: 20px 20px 18px;
      }
      .block-title:before {
        top: 26px;
      }
    }
  }
}

@media screen and (min-width: 1024px) {
  .fixed_search_wrapper.on_scroll {
    top: 0;
  }
}
@media screen and (max-width: 1023px) {
  .fixed_search_wrapper {
    transform: translate(-180px, -20%);
    width: 360px;
    top: 0;
    .fixed_search_in {
      width: auto;
    }
    .search-form {
      .block-body {
        width: 260px;
        left: 50px;
        padding: 20px 60px 18px 53px;
        .block-title .search_close {
          display: block;
          position: absolute;
          right: 10px;
          top: 10px;
          width: 40px;
          height: 40px;
          background: url("data:image/svg+xml,%3Csvg%20version%3D%221.1%22%20baseProfile%3D%22full%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20xmlns%3Aev%3D%22http%3A%2F%2Fwww.w3.org%2F2001%2Fxml-events%22%20xml%3Aspace%3D%22preserve%22%20x%3D%220px%22%20y%3D%220px%22%20width%3D%2218px%22%20height%3D%2218px%22%20%20viewBox%3D%220%200%2018%2018%22%20preserveAspectRatio%3D%22none%22%20shape-rendering%3D%22geometricPrecision%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M0.290%2C1.696%20L7.505%2C8.910%20L0.290%2C16.125%20C-0.098%2C16.509%20-0.100%2C17.136%200.285%2C17.524%20C0.287%2C17.526%200.289%2C17.528%200.290%2C17.530%20C0.675%2C17.918%201.302%2C17.921%201.690%2C17.536%20C1.692%2C17.534%201.694%2C17.532%201.696%2C17.530%20L8.910%2C10.315%20L16.125%2C17.530%20C16.509%2C17.918%2017.136%2C17.921%2017.524%2C17.536%20C17.526%2C17.534%2017.528%2C17.532%2017.530%2C17.530%20C17.918%2C17.145%2017.921%2C16.518%2017.536%2C16.130%20C17.534%2C16.128%2017.532%2C16.127%2017.530%2C16.125%20L10.315%2C8.910%20L17.530%2C1.696%20C17.918%2C1.311%2017.921%2C0.684%2017.536%2C0.296%20C17.534%2C0.294%2017.532%2C0.292%2017.530%2C0.290%20C17.145%2C-0.098%2016.518%2C-0.100%2016.130%2C0.285%20C16.128%2C0.287%2016.127%2C0.289%2016.125%2C0.290%20L8.910%2C7.505%20L1.696%2C0.290%20C1.311%2C-0.098%200.684%2C-0.100%200.296%2C0.285%20C0.294%2C0.287%200.292%2C0.289%200.290%2C0.290%20C-0.098%2C0.675%20-0.100%2C1.302%200.285%2C1.690%20C0.287%2C1.692%200.289%2C1.694%200.290%2C1.696%20Z%22%2F%3E%3C%2Fsvg%3E")
            50% no-repeat;
        }
        .block-title:before {
          right: auto;
          left: 21px;
        }
      }
      .row .price_range {
        .small {
          width: 48%;
        }
        .small + .small {
          margin-left: 4%;
        }
      }
    }
    .site_search_wr {
      max-width: 220px;
      padding: 40px 0;
      margin: 0 auto;
      .search_text {
        margin: 0 0 22px;
      }
    }
  }
  .fixed_search_wrapper.active {
    transform: translate(-180px, 0);
    width: 360px;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.07),
      0 0 0 10000px rgba(255, 255, 255, 0.6);
  }
}

@media screen and (max-width: 639px) {
  .fixed_search_wrapper {
    transform: translate(-160px, -20%);
    width: 320px;
    .search-form .block-body {
      left: 30px;
    }
  }
  .fixed_search_wrapper.active {
    transform: translate(-160px, 0);
    width: 320px;
  }
}
</style>

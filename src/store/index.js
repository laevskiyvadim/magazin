import { createStore } from "vuex";

export default createStore({
  state: {
    companyData: {
      firstPhone: "8 (977) 495-79-90",
      lastPhone: "8 (977) 848-57-58",
      inn: "(инн)",
      ogrn: "(ogrn)",
      domain: "teplovann.ru",
      orgName: "ИП Уффельман",
      address: `601422, Владимирская область, Вязниковский район, д.Воронино,
            ул.Совхозная , д.1`,
      facebook: "fb.com",
      instagram: "instagramm.com",
      skypeUser: "skype.com",
      twitter: "twitter.com",
      startTime: "9:00",
      endTime: "18:00",
    },
    menu: [
      {
        name: "В наличии",
        link: "/nalichie",
        sublevel: [
          {
            name: "ALEX полотенцесушитель",
            link: "/Alex",
          },
          {
            name: "JADE M полотенцесушитель",
            link: "/JADE_M",
          },
          {
            name: "POLA полотенцесушитель",
            link: "/POLA",
          },
          {
            name: "DEXTER полотенцесушитель",
            link: "/DEXTER",
          },
          {
            name: "ZIG ZAG полотенцесушитель",
            link: "/ZIG_ZAG",
          },
          {
            name: "BONE полотенцесушитель",
            link: "/BONE",
          },
          {
            name: "DOMI полотенцесушитель",
            link: "/DOMI",
          },
          {
            name: "FIONA полотенцесушитель",
            link: "/FIONA",
          },
          {
            name: "VIVO полотенцесушитель",
            link: "/VIVO",
          },
        ],
      },
      {
        name: "Terma",
        link: "/terma",
        sublevel: [
          {
            name: "Полотенцесушители",
            link: "/polotentsesushiteli",
            subSubLevel: [
              {
                name: "MIKE полотенцесушитель",
                link: "/MIKE",
                items: [
                  {
                    id: 196,
                    name: "Terma Mike 1635/530 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1635_530_ral_7047_sx.png",
                            "/assets/mike/eb886931b87b37aa21fc9b3a2b5f7b40.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_3.jpg",
                            "/assets/mike/mike_1635_530_ral_3028_sx_1.png",
                            "/assets/mike/mike_1635_530_ral_3028_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1635_530_cro_sx.png",
                            "/assets/mike/3753750x0.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1635",
                    weight: "530",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "800",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 197,
                    name: "Terma Mike 1635/430 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1635_430_ral_7047_sx.png",
                            "/assets/mike/60c3288e8659815dfaf8d2684a42906b.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_electro_1.jpg",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/terma_mike_3.jpg",
                            "/assets/mike/mike_1635_430_ral_1023_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1635_430_cro_sx.png",
                            "/assets/mike/3753750x0.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1635",
                    weight: "430",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "800",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 198,
                    name: "Terma Mike 1335/530 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1335_530_ral_9016_sx.png",
                            "/assets/mike/mike_1335_530_ral_9016_sx_1.png",
                            "/assets/mike/60c3288e8659815dfaf8d2684a42906b.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/wgmik073043.jpg",
                            "/assets/mike/mike_1335_530_ral_7024_sx.png",
                            "/assets/mike/mike_1335_530_ral_3028_sx.png",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/mike_1335_530_6029_front_1_1.png",
                            "/assets/mike/terma_mike_2_1.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1335_530_cro_sx.png",
                            "/assets/mike/mikejpgpagespeedceymuo18lv_c.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1335",
                    weight: "530",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "800",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 199,
                    name: "Terma Mike 1335/430 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1335_430_ral_9016_sx.png",
                            "/assets/mike/mike_1335_430_ral_9016_sx_1.png",
                            "/assets/mike/eb886931b87b37aa21fc9b3a2b5f7b40.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/wgmik073043.jpg",
                            "/assets/mike/mike_1335_430_ral_8024_sx.png",
                            "/assets/mike/mike_1335_430_ral_3028_sx.png",
                            "/assets/mike/mike_1335_430_ral_6018_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1335_430_cro_sx.png",
                            "/assets/mike/136806.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1335",
                    weight: "430",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "600",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 200,
                    name: "Terma Mike 1035/530 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1035_430_ral_7047_sx.png",
                            "/assets/mike/eb886931b87b37aa21fc9b3a2b5f7b40.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_3.jpg",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/mike_1035_530_ral_7023_sx.png",
                            "/assets/mike/mike_1035_530_ral_3028_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1035_530_cro_sx.png",
                            "/assets/mike/1727-mike.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1035",
                    weight: "530",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "600",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 201,
                    name: "Terma Mike 1035/430 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1035_430_ral_7047_sx.png",
                            "/assets/mike/60c3288e8659815dfaf8d2684a42906b.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/terma_mike_3.jpg",
                            "/assets/mike/terma_mike_2_1.jpg",
                            "/assets/mike/terma_mike_electro_1.jpg",
                            "/assets/mike/mike_1035_430_ral_5022_sx.png",
                            "/assets/mike/mike_1035_430_ral_3028_sx.png",
                            "/assets/mike/mike_1035_430_ral_3028_sx_1.png",
                            "/assets/mike/mike_1035_430_ral_3004_sx.png",
                            "/assets/mike/mike_1035_430_ral_1033_sx.png",
                            "/assets/mike/mike_1035_430_ral_1024_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1035_430_cro_sx.png",
                            "/assets/mike/1727-mike.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1035",
                    weight: "430",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "400",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 202,
                    name: "Terma Mike 735/530 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_735_430_ral_7047_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/mike_735_430_ral_3028_sx.png",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_735_430_cro_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "735",
                    weight: "430",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "400",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 203,
                    name: "Terma Mike 435/530 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_435_530_ral_7047_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/terma_mike_2_1.jpg",
                            "/assets/mike/mike_435_530_ral_3028_sx_1.png",
                            "/assets/mike/mike_435_530_ral_3028_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_435_530_cro_sx.png",
                            "/assets/mike/mike_435_430_cro_sx_1.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "435",
                    weight: "530",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "400",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 204,
                    name: "Terma Mike 435/430 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_435_430_ral_7047_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/mike_435_430_ral_3028_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_435_430_cro_sx.png",
                            "/assets/mike/mike_435_430_cro_sx_1.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "435",
                    weight: "430",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "120",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 205,
                    name: "Terma Mike 1710/230 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1710_230_ral_7047_sx.png",
                            "/assets/mike/60c3288e8659815dfaf8d2684a42906b.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/mike_1710_230_ral_7016_sx.png",
                            "/assets/mike/mike_1710_230_ral_5015_sx.png",
                            "/assets/mike/mike_1710_230_ral_3028_sx.png",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/terma_mike_electro_1.jpg",
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1710_230_cro_sx.png",
                            "/assets/mike/3753750x0.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1710",
                    weight: "230",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "400",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 206,
                    name: "Terma Mike 1460/230 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1460_230_ral_9016_sx.png",
                            "/assets/mike/mike_1460_230_ral_9016_sx_1.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/mike_1460_230_ral_8007_sx.png",
                            "/assets/mike/mike_1460_230_ral_3028_sx.png",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_electro_2_1.jpg",
                            "/assets/mike/terma_mike_electro_3_1.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1460_230_cro_sx.png",
                            "/assets/mike/3753750x0.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1460",
                    weight: "230",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "400",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 207,
                    name: "Terma Mike 1210/230 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_1210_230_ral_7047_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/eb886931b87b37aa21fc9b3a2b5f7b40.jpg",
                            "/assets/mike/mike_1210_230_ral_3028_sx.png",
                            "/assets/mike/mike_1210_230_ral_6011_sx.png",
                            "/assets/mike/mike_1210_230_ral_4003_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_1210_230_cro_sx.png",
                            "/assets/mike/3753750x0.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "1210",
                    weight: "230",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "300",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 208,
                    name: "Terma Mike 960/230 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/eb886931b87b37aa21fc9b3a2b5f7b40.jpg",
                            "/assets/mike/mike_960_230_ral_9003_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/wgmik073043.jpg",
                            "/assets/mike/eb886931b87b37aa21fc9b3a2b5f7b40.jpg",
                            "/assets/mike/mike_960_230_ral_3028_sx.png",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_960_230_cro_sx.png",
                            "/assets/mike/3753750x0.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "960",
                    weight: "230",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "200",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 209,
                    name: "Terma Mike 710/230 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_710_230_ral_7047_sx.png",
                            "/assets/mike/mike_01-1.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/mike_710_230_ral_3028_sx.png",
                            "/assets/mike/mike_710_230_ral_3028_sx_1.png",
                            "/assets/mike/terma_mike_electro_4.jpg",
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_710_230_cro_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "710",
                    weight: "230",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "200",
                    guaranty: "8",
                    recommendations: [],
                  },
                  {
                    id: 209,
                    name: "Terma Mike 460/230 полотенцесушитель",
                    color: [
                      {
                        Белый: {
                          imgs: [
                            "/assets/mike/mike_460_230_ral_7047_sx.png",
                            "/assets/mike/mike_01-1.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        RAL: {
                          imgs: [
                            "/assets/mike/terma_mike_electro_3.jpg",
                            "/assets/mike/terma_mike_2_1.jpg",
                            "/assets/mike/mike_460_230_ral_3028_sx.png",
                            "/assets/mike/mike_460_230_ral_7047_sx.png",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                      {
                        Хром: {
                          imgs: [
                            "/assets/mike/mike_460_230_cro_sx.png",
                            "/assets/mike/1727-mike.jpg",
                            "/assets/mike/terma_mike_shema_s_razmerami_230_mm_foto.jpg",
                          ],
                          cost: "",
                        },
                      },
                    ],
                    desc: `Представляет собой идеальное решение для каждого типа помещения. Расстояние между секциями труб позволит оптимально разместить полотенца в ванной, а доступные цвета легко адаптировать полотенцесушитель к различным помещениям. Элегантный и простой полотенцесушитель Mike предлагается в разнообразных размерах и типах подключений. Доступен в водной, водно-электрической и электрической версиях. Тепловая мощность: 203 - 864 Вт.; в гальваническом покрытии: 142 - 605 Вт.250 цветов на выбор, а также хром. Возможность использования электронагревателя`,
                    count: "",
                    producer: "TERMA Польша",
                    typeConnect:
                      "электрический / закрытый контур / комбинированный",
                    height: "460",
                    weight: "230",
                    glub: "72",
                    tenToComplect: "отдельно",
                    ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
                    complect: "настенные крепления",
                    tenWatt: "120",
                    guaranty: "8",
                    recommendations: [],
                  },
                ],
              },
              {
                name: "MIKE ONE полотенцесушитель",
                link: "/MIKE_ONE",
              },
              {
                name: "POLA полотенцесушитель",
                link: "/POLA",
              },
              {
                name: "POLA ONE полотенцесушитель",
                link: "/POLA_ONE",
              },
              {
                name: "QUADRUS SLIM полотенцесушитель",
                link: "/QUADRUS_SLIM",
              },
              {
                name: "QUADRUS BOLD полотенцесушитель",
                link: "/QUADRUS_BOLD",
              },
              {
                name: "RETRO полотенцесушитель",
                link: "/RETRO",
              },
              {
                name: "RETRO S полотенцесушитель",
                link: "/RETRO_S",
              },
              {
                name: "STAND полотенцесушитель",
                link: "/STAND",
              },
              {
                name: "SIMPLE полотенцесушитель",
                link: "/SIMPLE",
              },
              {
                name: "SPIRO полотенцесушитель",
                link: "/SPIRO",
              },
              {
                name: "TYTUS полотенцесушитель",
                link: "/TYTUS",
              },
              {
                name: "VIVO полотенцесушитель",
                link: "/VIVO",
              },
              {
                name: "WARP полотенцесушитель",
                link: "/WARP",
              },
              {
                name: "WIND полотенцесушитель",
                link: "/WIND",
              },
              {
                name: "ZIG ZAG полотенцесушитель",
                link: "/ZIG_ZAG",
              },
              {
                name: "AERO V Дизайн радиатор",
                link: "/AERO_V",
              },
              {
                name: "AERO H Дизайн радиатор",
                link: "/AERO_H",
              },
              {
                name: "AERO HG Дизайн радиатор",
                link: "/AERO_HG",
              },
              {
                name: "ANGUS DW Дизайн радиатор",
                link: "/ANGUS_DW",
              },
              {
                name: "ANGUS H Дизайн радиатор",
                link: "/ANGUS_H",
              },
              {
                name: "ANGUS V Дизайн радиатор",
                link: "/ANGUS_V",
              },
              {
                name: "CYKLON V дизайн радиатор",
                link: "/CYKLON_V",
              },
              {
                name: "CYKLON H дизайн радиатор",
                link: "/CYKLON_H",
              },
              {
                name: "CASE SLIM панель бетон Дизайн радиатор",
                link: "/CASE_SLIM_b",
              },
              {
                name: "CASE SLIM панель зеркало Дизайн радиатор",
                link: "/CASE_SLIM_z",
              },
              {
                name: "CASE SLIM панель стекло Дизайн радиатор",
                link: "/CASE_SLIM_s",
              },
              {
                name: "CASE SLIM панель металл Дизайн радиатор",
                link: "/CASE_SLIM_m",
              },
              {
                name: "CАNE Дизайн радиатор",
                link: "/CАNE",
              },
              {
                name: "DELFIN дизайн радиатор",
                link: "/DELFIN",
              },
              {
                name: "EASY дизайн радиатор",
                link: "/EASY",
              },
              {
                name: "EASY ONE дизайн радиатор",
                link: "/EASY_ONE",
              },
              {
                name: "MICHELLE Дизайн радиатор",
                link: "/MICHELLE",
              },
              {
                name: "HEX дизайн радиатор",
                link: "/HEX",
              },
              {
                name: "IRON D дизайн радиатор",
                link: "/IRON_D",
              },
              {
                name: "IRON S дизайн радиаторы",
                link: "/IRON_S",
              },
              {
                name: "INTRA дизайн радиатор",
                link: "/INTRA",
              },
              {
                name: "INTRA M дизайн радиатор",
                link: "/INTRA_M",
              },
              {
                name: "VIPERA дизайн радиатор",
                link: "/VIPERA",
              },
              {
                name: "VIPERA ONE полотенцесушитель",
                link: "/VIPERA_ONE",
              },
              {
                name: "NEMO дизайн радиатор",
                link: "/NEMO",
              },
              {
                name: "PASSO дизайн радиатор",
                link: "/PASSO",
              },
              {
                name: "PERŁA дизайн радиатор",
                link: "/PERŁA",
              },
              {
                name: "PLC дизайн радиатор",
                link: "/PLC",
              },
              {
                name: "PAJĄK дизайн радиатор",
                link: "/PAJĄK",
              },
              {
                name: "PIER дизайн радиатор",
                link: "/PIER",
              },
              {
                name: "RIBBON дизайн радиатор",
                link: "/RIBBON",
              },
              {
                name: "SHERWOOD дизайн радиатор",
                link: "/SHERWOOD",
              },
              {
                name: "TRIGA дизайн радиатор",
                link: "/TRIGA",
              },
              {
                name: "TUNE дизайн радиатор",
                link: "/TUNE",
              },
            ],
          },
          {
            name: "Аксессуары для полотенцесушителей",
            link: "/aksessuary-dlya-polotencesushitelej",
            subSubLevel: [
              {
                name: "Крючки",
                link: "/kryuchki",
              },
              {
                name: "Вешалки",
                link: "/veshalki",
              },
              {
                name: "Полочки",
                link: "/polochki",
              },
            ],
          },
          {
            name: "Вентиля и адаптеры",
            link: "/ventilya-i-adaptery",
            subSubLevel: [
              {
                name: "Переходники",
                link: "/perehodniki",
              },
              {
                name: "Термоголовки",
                link: "/termogolovki",
              },
              {
                name: "Маскировочный элемент",
                link: "/maskirovochnyj-element",
              },
              {
                name: "Вентиля",
                link: "/ventilya",
              },
            ],
          },
        ],
      },
      {
        name: "Смесители",
        link: "/smesiteli",
        sublevel: [
          {
            name: "Для кухни",
            link: "/dlya-kukhni",
            subSubLevel: [
              {
                name: "смесители для кухни Schein",
                link: "/smesiteli-dlya-kuhni-schein",
              },
            ],
          },
          {
            name: "Для ванной с длинным изливом",
            link: "/dlya-vannoy",
            subSubLevel: [
              {
                name: "смесители для ванной Wasser Kraft",
                link: "/smesiteli-dlya-vannoj-wasser-kraft",
              },
              {
                name: "смесители для ванной Schein",
                link: "/smesiteli-dlya-vannoj-schein",
              },
            ],
          },
          {
            name: "Для ванной с коротким изливом",
            link: "/dlya-vannoj-s-korotkim-izlivom",
            subSubLevel: [
              {
                name: "смеситель для ванной Wasser Kraft",
                link: "/smesitel-dlya-vannoj-wasser-kraft",
              },
              {
                name: "смесители для ванной Schein",
                link: "/smesiteli-dlya-vannoj-schein",
              },
            ],
          },
          {
            name: "Смеситель для умывальника",
            link: "/smesitel-dlya-umyvalnika",
            subSubLevel: [
              {
                name: "смесители для умывальника Wasser Kraft",
                link: "/smesiteli-dlya-umyvalnika-wasser-kraft",
              },
              {
                name: "смесители для умывальника Schein",
                link: "/smesiteli-dlya-umyvalnika-schein",
              },
            ],
          },
          {
            name: "Встраиваемый смеситель для раковины",
            link: "/vstraivaemyj-smesitel-dlya-rakoviny",
            subSubLevel: [
              {
                name: "встраиваемые смесители для раковины Wasser Kraft",
                link: "/vstraivaemye-smesiteli-dlya-rakoviny-wasser-kraft",
              },
              {
                name: "встраиваемые смесители для раковины Schein",
                link: "/vstraivaemye-smesiteli-dlya-rakoviny-schein",
              },
            ],
          },
          {
            name: "Смеситель для биде",
            link: "/smesitel-dlya-bide",
          },

          {
            name: "Смеситель на борт ванны",
            link: "/smesitel-na-bort-vanny",
          },
          {
            name: "Смеситель для душа",
            link: "/smesitel-dlya-dusha",
            subSubLevel: [
              {
                name: "смесители для душа Wasser Kraft",
                link: "/smesiteli-dlya-dusha-wasser-kraft",
              },
              {
                name: "смесители для душа Schein",
                link: "/smesiteli-dlya-dusha-schein",
              },
            ],
          },
          {
            name: "Встраиваемые комплекты",
            link: "/vstraivaemye-komplekty-1",
          },
          {
            name: "Напольный смеситель",
            link: "/napolnyj-smesitel",
          },
          {
            name: "Изделия для встраиваемой системы",
            link: "/izdeliya-dlya-vstraivaemoj-sistemy-1",
          },
          {
            name: "Стойки для душа",
            link: "/stojki-dlya-dusha-1",
            subSubLevel: [
              {
                name: "душевые стойки Wasser Kraft",
                link: "/dushevye-stojki-schein",
              },
              {
                name: "душевые стойки Schein",
                link: "/smesiteli-dlya-vannoj-schein",
              },
              {
                name: "душевые стойки SSWW",
                link: "/dushevye-stojki-ssww",
              },
            ],
          },
          {
            name: "Лейки Шланги",
            link: "/lejki-shlangi",
          },
          {
            name: "Системы слива",
            link: "/sistemy-sliva-1",
          },
        ],
      },
      {
        name: "Тэны, блоки управления, терморегуляторы TERMA",
        link: "/ten",
        sublevel: [
          {
            name: "Terma тэн MEG",
            link: "/terma-ten-meg",
          },
          {
            name: "Terma тэн MOA",
            link: "/terma-ten-moa",
          },
          {
            name: "Terma MOA BLUE (Bluetooth) тэн",
            link: "/terma-moa-blue-bluetooth-ten",
          },
          {
            name: "Terma тэн DRY",
            link: "/terma-ten-dry",
          },
          {
            name: "Terma тэн REG 2",
            link: "/terma-ten-reg-2",
          },
          {
            name: "Terma тэн REG 3",
            link: "/terma-ten-reg-3",
          },
          {
            name: "Terma тэн SIM",
            link: "/terma-ten-sim",
          },
          {
            name: "Terma SPLIT нагревательный элемент",
            link: "/terma-split-nagrevatelnyj-element",
          },
          {
            name: "Terma KTX 1 блок управления",
            link: "/terma-ktx-1-blok-upravleniya",
          },
          {
            name: "Terma KTX 2 блок управления",
            link: "/terma-ktx-2-blok-upravleniya",
          },
          {
            name: "Terma KTX 3 блок управления",
            link: "/terma-ktx-3-blok-upravleniya",
          },
          {
            name: "Terma KTX 4 блок управления",
            link: "/terma-ktx-4-blok-upravleniya",
          },
          {
            name: "Terma KTX 4 BLUE (Bluetooth) блок управления",
            link: "/terma-ktx-4-blue-bluetooth-blok-upravleniya",
          },
          {
            name: "Terma ONE тэн внешний",
            link: "/terma-one-ten-vneshnij",
          },
        ],
      },
      {
        name: "Аксессуары для ванной",
        link: "/aksesuar",
        sublevel: [
          {
            name: "Настенные аксессуары",
            link: "/derzhateli-polotentsa",
            subSubLevel: [
              {
                name: "Серия Diemel K-2200",
                link: "/seriya-diemel-k-2200",
              },
              {
                name: "Серия Elbe K-7200",
                link: "/seriya-elbe-k-7200",
              },
              {
                name: "Серия Oder К-3000",
                link: "/seriya-oder-k-3000",
              },
              {
                name: "Серия Kammel K-8300",
                link: "/seriya-kammel-k-8300",
              },
              {
                name: "Серия Kammel K-8300WHITE",
                link: "/seriya-kammel-k-8300white",
              },
              {
                name: "Серия Leine К-5000",
                link: "/seriya-leine-k-5000",
              },
              {
                name: "Серия Lippe К-6500",
                link: "/seriya-lippe-k-6500",
              },
              {
                name: "Серия Wern K-2500",
                link: "/seriya-wern-k-2500",
              },
              {
                name: "Серия Exter K-5200",
                link: "/seriya-exter-k-5200",
              },
              {
                name: "Серия Isar K-7300",
                link: "/seriya-isar-k-7300",
              },
              {
                name: "Серия Leine K-5000WHITE",
                link: "/seriya-leine-k-5000white",
              },
              {
                name: "Серия Berkel К-6800",
                link: "/seriya-berkel-k-6800",
              },
              {
                name: "Серия Isen К-4000",
                link: "/seriya-isen-k-4000",
              },
              {
                name: "Серия Ammer К-7000",
                link: "/seriya-ammer-k-7000",
              },
              {
                name: "Серия Donau K-9400",
                link: "/seriya-donau-k-9400",
              },
              {
                name: "Серия Rhein К-6200",
                link: "/seriya-rhein-k-6200",
              },
            ],
          },
          {
            name: "Настольные аксессуары",
            link: "/derzhateli-bumagi",
            subSubLevel: [
              {
                name: "Серия Oder K-9600",
                link: "/seriya-oder-k-9600",
              },
              {
                name: "Серия Berkel K-4900",
                link: "/seriya-berkel-k-4900",
              },
              {
                name: "Серия Elba K-2700",
                link: "/seriya-elba-k-2700",
              },
              {
                name: "Серия Salm K-7600",
                link: "/seriya-salm-k-7600",
              },
              {
                name: "Серия Amper K-5400",
                link: "/seriya-amper-k-5400",
              },
              {
                name: "Серия Ruwer K-6700",
                link: "/seriya-ruwer-k-6700",
              },
              {
                name: "Серия Eider К-33300",
                link: "/seriya-eider-k-33300",
              },
              {
                name: "Серия Ohre К-37700",
                link: "/seriya-ohre-k-37700",
              },
              {
                name: "Серия Inn K-4300",
                link: "/seriya-inn-k-4300",
              },
              {
                name: "Серия Main K-4700",
                link: "/seriya-main-k-4700",
              },
              {
                name: "Серия Leine K-3800",
                link: "/seriya-leine-k-3800",
              },
              {
                name: "Серия Lippe K-8100",
                link: "/seriya-lippe-k-8100",
              },
              {
                name: "Серия Lossa K-3400",
                link: "/seriya-lossa-k-3400",
              },
              {
                name: "Серия Ammer K-6400",
                link: "/seriya-ammer-k-6400",
              },
              {
                name: "Серия Dinkel K-4600",
                link: "/seriya-dinkel-k-4600",
              },
              {
                name: "Серия Rossel K-5700",
                link: "/seriya-rossel-k-5700",
              },
              {
                name: "Серия Exter K-5500",
                link: "/seriya-exter-k-5500",
              },
              {
                name: "Серия Isar K-2300",
                link: "/seriya-isar-k-2300",
              },
              {
                name: "Серия Donau K-2400",
                link: "/seriya-donau-k-2400",
              },
              {
                name: "Серия Wern K-7500",
                link: "/seriya-wern-k-7500",
              },
            ],
          },
          {
            name: "Дополнительные аксессуары",
            link: "/dopolnitelnye-aksessuary-1",
          },
          {
            name: "Шторки для ванной",
            link: "/shtorki-dlya-vannoj-1",
          },
          {
            name: "Коврики для ванной",
            link: "/kovriki-dlya-vannoj-1",
          },
          {
            name: "Корзины для ванной комнаты",
            link: "/korziny-dlya-vannoj-komnaty-1",
          },
        ],
      },
    ],
    items: [
      {
        categories: [
          { value: "", name: "Все" },
          { value: "833464661", name: "Полотенцесушители TERMA в наличии" },
          { value: "833464661", name: "Полотенцесушители TERMA в наличии" },
          { value: "833646661", name: "&raquo; ALEX полотенцесушитель" },
          { value: "833646861", name: "&raquo; JADE M полотенцесушитель" },
          { value: "833647661", name: "&raquo; POLA полотенцесушитель" },
          { value: "833648261", name: "&raquo; DEXTER полотенцесушитель" },
          { value: "833648661", name: "&raquo; ZIG ZAG полотенцесушитель" },
          { value: "833651861", name: "&raquo; BONE полотенцесушитель" },
          { value: "833652261", name: "&raquo; DOMI полотенцесушитель" },
          { value: "833652461", name: "&raquo; FIONA полотенцесушитель" },
          { value: "833654461", name: "&raquo; VIVO полотенцесушитель" },
          { value: "761875261", name: "Полотенцесушители" },
          { value: "766212461", name: "&raquo; Terma" },
          { value: "784716461", name: "&raquo;&raquo; ALEX полотенцесушитель" },
          {
            value: "786171261",
            name: "&raquo;&raquo; ALEX ONE полотенцесушитель",
          },
          { value: "785160261", name: "&raquo;&raquo; BONE полотенцесушитель" },
          {
            value: "801381661",
            name: "&raquo;&raquo; BONE ONE полотенцесушитель",
          },
          { value: "786193061", name: "&raquo;&raquo; CITY полотенцесушитель" },
          {
            value: "787076661",
            name: "&raquo;&raquo; CRYSTAL полотенцесушитель",
          },
          {
            value: "787764661",
            name: "&raquo;&raquo; DEXTER полотенцесушитель",
          },
          {
            value: "788049661",
            name: "&raquo;&raquo; DIAMOND полотенцесушитель",
          },
          { value: "788175861", name: "&raquo;&raquo; DOMI полотенцесушитель" },
          {
            value: "791943661",
            name: "&raquo;&raquo; INCORNER полотенцесушитель",
          },
          {
            value: "792046461",
            name: "&raquo;&raquo; OUTCORNER полотенцесушитель",
          },
          {
            value: "788743861",
            name: "&raquo;&raquo; FIONA полотенцесушитель",
          },
          {
            value: "799382061",
            name: "&raquo;&raquo; JADE M полотенцесушитель",
          },
          {
            value: "801270861",
            name: "&raquo;&raquo; KIOTO полотенцесушитель",
          },
          {
            value: "801303461",
            name: "&raquo;&raquo; KIOTO ONE полотенцесушитель",
          },
          { value: "803305461", name: "&raquo;&raquo; LENA полотенцесушитель" },
          { value: "800501661", name: "&raquo;&raquo; LIMA полотенцесушитель" },
          {
            value: "801067461",
            name: "&raquo;&raquo; LUKKA полотенцесушитель",
          },
          {
            value: "801451061",
            name: "&raquo;&raquo; MANTIS полотенцесушитель",
          },
          {
            value: "802573061",
            name: "&raquo;&raquo; MARLIN полотенцесушитель",
          },
          {
            value: "801520061",
            name: "&raquo;&raquo; MANTIS ONE полотенцесушитель",
          },
          { value: "802046661", name: "&raquo;&raquo; MIKE полотенцесушитель" },
          {
            value: "802523061",
            name: "&raquo;&raquo; MIKE ONE полотенцесушитель",
          },
          { value: "803083061", name: "&raquo;&raquo; POLA полотенцесушитель" },
          {
            value: "806578061",
            name: "&raquo;&raquo; POLA ONE полотенцесушитель",
          },
          {
            value: "805172861",
            name: "&raquo;&raquo; QUADRUS SLIM полотенцесушитель",
          },
          {
            value: "805207061",
            name: "&raquo;&raquo; QUADRUS BOLD полотенцесушитель",
          },
          {
            value: "805976461",
            name: "&raquo;&raquo; RETRO полотенцесушитель",
          },
          {
            value: "805981861",
            name: "&raquo;&raquo; RETRO S полотенцесушитель",
          },
          {
            value: "806091461",
            name: "&raquo;&raquo; STAND полотенцесушитель",
          },
          {
            value: "804111661",
            name: "&raquo;&raquo; SIMPLE полотенцесушитель",
          },
          {
            value: "806162861",
            name: "&raquo;&raquo; SPIRO полотенцесушитель",
          },
          {
            value: "803567061",
            name: "&raquo;&raquo; TYTUS полотенцесушитель",
          },
          { value: "796391461", name: "&raquo;&raquo; VIVO полотенцесушитель" },
          { value: "806509861", name: "&raquo;&raquo; WARP полотенцесушитель" },
          { value: "803912461", name: "&raquo;&raquo; WIND полотенцесушитель" },
          {
            value: "791567461",
            name: "&raquo;&raquo; ZIG ZAG полотенцесушитель",
          },
          { value: "785714061", name: "&raquo;&raquo; AERO V Дизайн радиатор" },
          { value: "785845861", name: "&raquo;&raquo; AERO H Дизайн радиатор" },
          {
            value: "785977661",
            name: "&raquo;&raquo; AERO HG Дизайн радиатор",
          },
          {
            value: "786125661",
            name: "&raquo;&raquo; ANGUS DW Дизайн радиатор",
          },
          {
            value: "786125861",
            name: "&raquo;&raquo; ANGUS H Дизайн радиатор",
          },
          {
            value: "786126061",
            name: "&raquo;&raquo; ANGUS V Дизайн радиатор",
          },
          {
            value: "785366861",
            name: "&raquo;&raquo; CYKLON V дизайн радиатор",
          },
          {
            value: "785316861",
            name: "&raquo;&raquo; CYKLON H дизайн радиатор",
          },
          {
            value: "785381061",
            name: "&raquo;&raquo; CASE SLIM панель бетон Дизайн радиатор",
          },
          {
            value: "785392461",
            name: "&raquo;&raquo; CASE SLIM панель зеркало Дизайн радиатор",
          },
          {
            value: "785411261",
            name: "&raquo;&raquo; CASE SLIM панель печать (рисунок) на стекле Дизайн радиатор",
          },
          {
            value: "785411661",
            name: "&raquo;&raquo; CASE SLIM панель стекло Дизайн радиатор",
          },
          {
            value: "785412061",
            name: "&raquo;&raquo; CASE SLIM панель металл Дизайн радиатор",
          },
          { value: "785586061", name: "&raquo;&raquo; CАNE Дизайн радиатор" },
          { value: "796491861", name: "&raquo;&raquo; DELFIN дизайн радиатор" },
          { value: "788690461", name: "&raquo;&raquo; EASY дизайн радиатор" },
          {
            value: "788721461",
            name: "&raquo;&raquo; EASY ONE дизайн радиатор",
          },
          {
            value: "826078661",
            name: "&raquo;&raquo; MICHELLE Дизайн радиатор",
          },
          { value: "796764261", name: "&raquo;&raquo; HEX дизайн радиатор" },
          { value: "797526661", name: "&raquo;&raquo; IRON D дизайн радиатор" },
          {
            value: "797541661",
            name: "&raquo;&raquo; IRON S дизайн радиаторы",
          },
          { value: "798145461", name: "&raquo;&raquo; INTRA дизайн радиатор" },
          {
            value: "799009061",
            name: "&raquo;&raquo; INTRA M дизайн радиатор",
          },
          { value: "806052061", name: "&raquo;&raquo; VIPERA дизайн радиатор" },
          {
            value: "806666261",
            name: "&raquo;&raquo; VIPERA ONE полотенцесушитель",
          },
          { value: "807376261", name: "&raquo;&raquo; NEMO дизайн радиатор" },
          { value: "807453661", name: "&raquo;&raquo; PASSO дизайн радиатор" },
          { value: "807531261", name: "&raquo;&raquo; PERŁA дизайн радиатор" },
          { value: "808245261", name: "&raquo;&raquo; PLC дизайн радиатор" },
          { value: "808291461", name: "&raquo;&raquo; PAJĄK дизайн радиатор" },
          { value: "808310461", name: "&raquo;&raquo; PIER дизайн радиатор" },
          { value: "808424261", name: "&raquo;&raquo; RIBBON дизайн радиатор" },
          {
            value: "808527061",
            name: "&raquo;&raquo; SHERWOOD дизайн радиатор",
          },
          { value: "809400261", name: "&raquo;&raquo; TRIGA дизайн радиатор" },
          { value: "809938061", name: "&raquo;&raquo; TUNE дизайн радиатор" },
          {
            value: "809957261",
            name: "&raquo; Аксессуары для полотенцесушителей",
          },
          { value: "809957461", name: "&raquo;&raquo; Крючки" },
          { value: "810283861", name: "&raquo;&raquo; Вешалки" },
          { value: "810394461", name: "&raquo;&raquo; Полочки" },
          { value: "816024661", name: "&raquo; Вентиля и адаптеры" },
          { value: "821524861", name: "&raquo;&raquo; Переходники" },
          { value: "821528261", name: "&raquo;&raquo; Термоголовки" },
          { value: "821550261", name: "&raquo;&raquo; Маскировочный элемент" },
          { value: "821599461", name: "&raquo;&raquo; Вентиля" },
          { value: "761873861", name: "Смесители" },
          { value: "761874261", name: "&raquo; Для кухни" },
          {
            value: "820255861",
            name: "&raquo;&raquo; смесители для кухни Schein",
          },
          {
            value: "820256261",
            name: "&raquo;&raquo; смесители для кухни Wasser Kraft",
          },
          { value: "761874061", name: "&raquo; Для ванной с длинным изливом" },
          {
            value: "820256661",
            name: "&raquo;&raquo; смесители для ванной Wasser Kraft",
          },
          {
            value: "820257461",
            name: "&raquo;&raquo; смесители для ванной Schein",
          },
          { value: "773555661", name: "&raquo; Для ванной с коротким изливом" },
          {
            value: "820256861",
            name: "&raquo;&raquo; смеситель для ванной Wasser Kraft",
          },
          {
            value: "820257061",
            name: "&raquo;&raquo; смесители для ванной Schein",
          },
          { value: "773549861", name: "&raquo; Смеситель для умывальника" },
          {
            value: "820257861",
            name: "&raquo;&raquo; смесители для умывальника Wasser Kraft",
          },
          {
            value: "820258061",
            name: "&raquo;&raquo; смесители для умывальника Schein",
          },
          {
            value: "773566661",
            name: "&raquo; Встраиваемый смеситель для раковины",
          },
          {
            value: "820258861",
            name: "&raquo;&raquo; встраиваемые смесители для раковины Wasser Kraft",
          },
          {
            value: "820259461",
            name: "&raquo;&raquo; встраиваемые смесители для раковины Schein",
          },
          { value: "811294261", name: "&raquo; Смеситель для биде" },
          { value: "773566861", name: "&raquo; Смеситель на борт ванны" },
          { value: "773567061", name: "&raquo; Смеситель для душа" },
          {
            value: "820259861",
            name: "&raquo;&raquo; смесители для душа Wasser Kraft",
          },
          {
            value: "820260061",
            name: "&raquo;&raquo; смесители для душа Schein",
          },
          { value: "769300061", name: "&raquo; Встраиваемые комплекты" },
          { value: "773567661", name: "&raquo; Напольный смеситель" },
          {
            value: "769300461",
            name: "&raquo; Изделия для встраиваемой системы",
          },
          { value: "769321461", name: "&raquo; Стойки для душа" },
          {
            value: "820274261",
            name: "&raquo;&raquo; душевые стойки Wasser Kraft",
          },
          { value: "820274461", name: "&raquo;&raquo; душевые стойки Schein" },
          { value: "820274661", name: "&raquo;&raquo; душевые стойки SSWW" },
          { value: "773613061", name: "&raquo; Лейки Шланги" },
          { value: "769322061", name: "&raquo; Системы слива" },
          {
            value: "801450261",
            name: "Тэны, блоки управления, терморегуляторы TERMA",
          },
          { value: "802481061", name: "&raquo; Terma тэн MEG" },
          { value: "802522861", name: "&raquo; Terma тэн MOA" },
          {
            value: "807541461",
            name: "&raquo; Terma MOA BLUE (Bluetooth) тэн",
          },
          { value: "801451861", name: "&raquo; Terma тэн DRY" },
          { value: "803954261", name: "&raquo; Terma тэн REG 2" },
          { value: "805885061", name: "&raquo; Terma тэн REG 3" },
          { value: "806616261", name: "&raquo; Terma тэн SIM" },
          {
            value: "805910861",
            name: "&raquo; Terma SPLIT нагревательный элемент",
          },
          { value: "805906061", name: "&raquo; Terma KTX 1 блок управления" },
          { value: "805907061", name: "&raquo; Terma KTX 2 блок управления" },
          { value: "805909261", name: "&raquo; Terma KTX 3 блок управления" },
          { value: "805909461", name: "&raquo; Terma KTX 4 блок управления" },
          {
            value: "806655261",
            name: "&raquo; Terma KTX 4 BLUE (Bluetooth) блок управления",
          },
          { value: "808249061", name: "&raquo; Terma ONE тэн внешний" },
          { value: "761875461", name: "Аксессуары для ванной" },
          { value: "761875661", name: "&raquo; Настенные аксессуары" },
          { value: "826525861", name: "&raquo;&raquo; Серия Diemel K-2200" },
          { value: "826526261", name: "&raquo;&raquo; Серия Elbe K-7200" },
          { value: "826526461", name: "&raquo;&raquo; Серия Oder К-3000" },
          { value: "826526661", name: "&raquo;&raquo; Серия Kammel K-8300" },
          {
            value: "826526861",
            name: "&raquo;&raquo; Серия Kammel K-8300WHITE",
          },
          { value: "826527061", name: "&raquo;&raquo; Серия Leine К-5000" },
          { value: "826527261", name: "&raquo;&raquo; Серия Lippe К-6500" },
          { value: "826527661", name: "&raquo;&raquo; Серия Wern K-2500" },
          { value: "826527861", name: "&raquo;&raquo; Серия Exter K-5200" },
          { value: "826528061", name: "&raquo;&raquo; Серия Isar K-7300" },
          {
            value: "826528261",
            name: "&raquo;&raquo; Серия Leine K-5000WHITE",
          },
          { value: "826528661", name: "&raquo;&raquo; Серия Berkel К-6800" },
          { value: "826528861", name: "&raquo;&raquo; Серия Isen К-4000" },
          { value: "826529061", name: "&raquo;&raquo; Серия Ammer К-7000" },
          { value: "826529261", name: "&raquo;&raquo; Серия Donau K-9400" },
          { value: "826529461", name: "&raquo;&raquo; Серия Rhein К-6200" },
          { value: "761875861", name: "&raquo; Настольные аксессуары" },
          { value: "832868261", name: "&raquo;&raquo; Серия Oder K-9600" },
          { value: "832868661", name: "&raquo;&raquo; Серия Berkel K-4900" },
          { value: "832868861", name: "&raquo;&raquo; Серия Elba K-2700" },
          { value: "832869261", name: "&raquo;&raquo; Серия Salm K-7600" },
          { value: "832872461", name: "&raquo;&raquo; Серия Amper K-5400" },
          { value: "832872661", name: "&raquo;&raquo; Серия Ruwer K-6700" },
          { value: "832872861", name: "&raquo;&raquo; Серия Eider К-33300" },
          { value: "832873061", name: "&raquo;&raquo; Серия Ohre К-37700" },
          { value: "832873461", name: "&raquo;&raquo; Серия Inn K-4300" },
          { value: "832873661", name: "&raquo;&raquo; Серия Leine K-3800" },
          { value: "832874261", name: "&raquo;&raquo; Серия Main K-4700" },
          { value: "832874461", name: "&raquo;&raquo; Серия Lippe K-8100" },
          { value: "832874861", name: "&raquo;&raquo; Серия Lossa K-3400" },
          { value: "832875061", name: "&raquo;&raquo; Серия Ammer K-6400" },
          { value: "832875461", name: "&raquo;&raquo; Серия Dinkel K-4600" },
          { value: "832875661", name: "&raquo;&raquo; Серия Rossel K-5700" },
          { value: "832876261", name: "&raquo;&raquo; Серия Exter K-5500" },
          { value: "832876661", name: "&raquo;&raquo; Серия Isar K-2300" },
          { value: "832876861", name: "&raquo;&raquo; Серия Donau K-2400" },
          { value: "832877061", name: "&raquo;&raquo; Серия Wern K-7500" },
          { value: "769296661", name: "&raquo; Дополнительные аксессуары" },
          { value: "769296861", name: "&raquo; Шторки для ванной" },
          { value: "769297061", name: "&raquo; Коврики для ванной" },
          { value: "769299861", name: "&raquo; Корзины для ванной комнаты" },
        ],
      },
      {
        colors: [
          {
            value: "all",
            name: "Все",
          },
          {
            value: "313197261",
            name: "Бронза",
          },
          {
            value: "313197461",
            name: "Хром",
          },
          {
            value: "313197661",
            name: "RAL",
          },
          {
            value: "313197861",
            name: "Белый",
          },
          {
            value: "323173461",
            name: "Серебристый",
          },
          {
            value: "323173661",
            name: "Черный",
          },
          {
            value: "323173861",
            name: "Золото",
          },
          {
            value: "328325061",
            name: "Медь",
          },
        ],
      },
      {
        watt: [
          {
            value: "all",
            name: "Все",
          },
          {
            value: "323175061",
            name: "120 Вт",
          },
          {
            value: "323182661",
            name: "200 Вт",
          },
          {
            value: "323182861",
            name: "300 Вт",
          },
          {
            value: "323183061",
            name: "400 Вт",
          },
          {
            value: "323183261",
            name: "600 Вт",
          },
          {
            value: "323183461",
            name: "800 Вт",
          },
          {
            value: "323183661",
            name: "1000 Вт",
          },
          {
            value: "323183861",
            name: "1200 Вт",
          },
          {
            value: "323184061",
            name: "1500 Вт",
          },
        ],
      },
      {
        producer: [
          {
            value: "all",
            name: "Все",
          },
          {
            value: "163124061",
            name: "La Tezza",
          },
          {
            value: "182426261",
            name: "MEER",
          },
          {
            value: "163269861",
            name: "SSWW",
          },
          {
            value: "161947661",
            name: "TERMA Польша",
          },
          {
            value: "163124261",
            name: "Tessoro",
          },
        ],
      },
    ],
    news: [
      {
        id: 1,
        date: "01.04.2020 12:44",
        title: "Вопрос-ответ о продукции WasserKraft",
        text: "Что такое WasserKRAFT?",
      },
      {
        id: 2,
        date: "27.02.2020 10:04",
        title: "Уже в продаже!",
        text: "Пополнение коллекции душевых уголков Dinkel 58R, Alme 15R.",
      },
      {
        id: 3,
        date: "21.02.2020 13:14",
        title: "КАК ВЫГЛЯДИТ ВОПРОС ГАРАНТИИ?",
        text: "Терма дает гарантию на предлагаемые Вам товары по каталогу:",
      },
      {
        id: 4,
        date: "21.02.2020 13:11",
        title: "Рекомендации дизайнера",
        text: "Летний душ на даче - это гарантия комфортного времяпрепровождения жарких дней. Его обустройство не займет много усилий, зато водные процедуры доставят массу удовольствия!",
      },
      {
        id: 5,
        date: "11.02.2020 12:33",
        title: "БОЛЬШАЯ МОЩНОСТЬ ПО ТОЙ ЖЕ ЦЕНЕ!",
        text: `Теперь для электронагревателей MOA, DRY, MEG, REG 2 i REG
                  3 добавлена мощность 1200 W. Сейчас
                  большая мощность доступна по той же цене.`,
      },
    ],
    posts: [
      {
        id: 1,
        autor: "Сергей М.",
        date: "27 Февраля 2020 в 09:25",
        text: `Замечательный магазин с большим ассортиментом, приятными
                  ценами, на сайте реальный ассортимент и цены.Серьезный
                  магазин, который дорожит репутацией и своими клиентами!!! Ещё
                  и работа консультантов на 5+`,
      },
      {
        id: 2,
        autor: "Елизавета",
        date: "21 Февраля 2020 в 13:22",
        text: `Закончил ремонт в ванной, начали искать где взять
                  полотенцесушитель. В итоге заказали тут, отличный магазин,
                  вежливый менеджер перезвонил и все согласовал. Доставили
                  вовремя! Спасибо.`,
      },
      {
        id: 3,
        autor: "Владимир",
        date: "21 Февраля 2020 в 13:20",
        text: `Достаточно долго пользуюсь этим магазином заказывала
                  сантехнику и сопутствующие товары в квартиру и на дачу,всегда
                  быстрая и недорогая доставка, простые условия оформления и
                  оплаты. Всегда грамотно подходят к заказу. Один и тот же
                  курьер уже два последних заказа, и общаться с ним приятно)) И
                  тут нет переплаты. Я расплатилась наличкой при получении когда
                  мне все передали.`,
      },
      {
        id: 4,
        autor: "Федор Иванович",
        date: "11 Февраля 2020 в 12:40",
        text: `Этот интернет-магазин мне посоветовали знакомые,которые ни раз
                  уже здесь заказывали. Когда я приступил к ремонту в ванной
                  комнате, то появилась необходимость в покупке смесителей в
                  ванну и на умывальник, а также душевой колонки. остановил свой
                  выбор на продукции из Германии «WasserKRAFT». У этого
                  производителя мне понравилось следующее: отличное качество,
                  приличная гарантия на изделие, великолепный дизайн и доступные
                  цены. Можно выбрать по своему вкусу. Вот теперь у меня в
                  ванной установлен термостатический смеситель «WasserKRAFT»
                  модели «Berkel 4811». Уже не нужно крутить ручки холодной и
                  горячей воды для регулировки, тратя эту воду понапрасну.
                  Просто установил на «термостате» нужную температуру и получил,
                  что хотел. Термостатический смеситель я подсоединил к душевой
                  системе «WasserKRAFT» модели «А017». Вот и в душе теперь вода
                  нужной температуры. Пользуюсь уже третий год. Никаких
                  нареканий. Все устраивает. Поэтому на умывальник в ванную
                  приобрел смеситель этой же фирмы (модель «Leine 3503 Мой
                  совет- не скупитесь. У этого производителя можно выбрать
                  изделия, которые будут Вам «по карману» и будут радовать своим
                  качеством.`,
      },
      {
        id: 5,
        autor: "Кирилл В.",
        date: "10 Февраля 2020 в 14:18",
        text: `Делал ремонт в новостройке. Всю сантехнику покупал в
                  Теплованн.ру. Менеджеры здорово помогли с выбором. По ценам
                  получилось совсем недорого, рассчитывал дороже. Самым тяжелым
                  это был выбор, ассортимент в магазине большой. На продукцию
                  дали гарантию. Доставка приехала в срок, никаких форс мажоров
                  не случилось, все целое, никакого пересорта, все в наличии.`,
      },
      {
        id: 6,
        autor: "Григорий",
        date: "06 Февраля 2020 в 09:52",
        text: `Отличный магазин. Большой выбор товаров, приятные цены. Мне
                  мой заказ с доставкой обошёлся недорого. Купил сантехнику на
                  24000 руб. Каждый товар был по акции, по заметно сниженной
                  цене. Оформление покупки простое, доступное. Качество на
                  высоте. Никаких недостатков нет. Всем рекомендую. Буду
                  покупать тут и дальше.`,
      },
      {
        id: 7,
        autor: "Артем",
        date: "20 Января 2020 в 08:48",
        text: `На удивление, найти подходящий полотенцесушитель для меня
                  оказалось большой проблемой. То нет в наличии, то цены
                  закаливают, то бракованный попался, аж обидно. По совету друга
                  решил поискать в интернет-магазинах и по запросу вышел на
                  teplovann.ru. Посмотрел, нашел нужную модель, благо
                  ассортимент ооочень богатый.Есть доставка и гарантию дают!
                  Заказал, привезли, правда на следующий день, а не в этот же,
                  но это не проблема, главное что я нашел нужный товар и по
                  выгодной цене! Теперь вообще в обычные магазины ездить не
                  буду, интернет - сила!)`,
      },
      {
        id: 8,
        autor: "Антон",
        date: "20 Января 2020 в 08:44",
        text: `Подобрали с женой тут все для нашей ванной. Выбирали
                  тщательно, покупка то ведь на долгие годы. Очень удобно, что
                  можно сразу все выбрать на одном сайте. Остались довольны
                  полученным результатом, выглядит даже лучше, чем мы
                  планировали, и бракованных деталей обнаружено не было.`,
      },
      {
        id: 9,
        autor: "Юлия",
        date: "15 Января 2020 в 14:31",
        text: `Через интернет магазин ТеплоВанн я с мужем заказывала душевую
                  кабину. Специально искали по доступной цене. В этом магазине
                  как раз была акция перед Новым годом. Поставили, все работает.
                  К сервису претензий нет. Хорошие гарантии на товар. Быстрая
                  доставка.`,
      },
      {
        id: 10,
        autor: "Лариса Ивановна",
        date: "15 Января 2020 в 14:17",
        text: `Превосходный магазин!На сайте все четко описано:поиск
                  товара,описание и комплектация указаны под каждой позицией.
                  Адекватные цены и быстрая логистика. Заказывала несколько
                  позиций. После оформления быстро связались и подобрали все,
                  что нужно дополнительно для установки сантехники. Доставку
                  осуществили на следующий день.Рекомендую всем этот магазин. В
                  следующий раз за сантехникой буду обращаться только сюда.
                  Магазин супер!!!`,
      },
    ],
    user: [{ Auth: true }],
    itemsToBuy: [
      {
        id: 99,
        CatName: "INCORNER полотенцесушитель",
        CatLink: "/INCORNER",
        name: "Terma Incorner 1545/350 полотенцесушитель",
        color: [
          {
            Белый: {
              imgs: [
                "/assets/incorner/terma_incorner_electro_3.jpg",
                "/assets/incorner/incorner_1545_350_ral_9016_sx.png",
                "/assets/incorner/incorner_1545x350.png",
              ],
              cost: 436.11,
            },
          },
          {
            RAL: {
              imgs: [
                "/assets/incorner/terma_incorner_front_pergamon.jpg",
                "/assets/incorner/terma_incorner_detal_pergamon.jpg",
                "/assets/incorner/ranksluosciu-dziovintuvas-terma-incorner.jpg",
                "/assets/incorner/incorner_1545_350_ral_5017_sx.png",
                "/assets/incorner/incorner_1545_350_ral_3018_sx.png",
                "/assets/incorner/incorner_1275_350_ral3005_det2.jpg",
                "/assets/incorner/incorner_1275_350_ral3005_det.jpg",
                "/assets/incorner/incorner_1005_350_modern_grey_d.jpg",
                "/assets/incorner/incorner_1545x350.png",
              ],
              cost: 457.92,
            },
          },
        ],
        desc: `Необычный полотенцесушитель идеально подходит для размещения в небольших комнатах, оформление которых выполнено в классическом стиле. Оригинальная эстетика, интересное и функциональное расположение труб, делает Incorner идеальным для максимального использования пространства дома. Доступные цвета позволяют удачно расположить полотенцесушитель в интерьере или прекрасно выделить его на стене, что делает его замечательным украшением в помещении.`,
        count: "",
        producer: "TERMA Польша",
        typeConnect: "электрический / закрытый контур / комбинированный",
        height: "1545",
        weight: "350",
        glub: "90",
        tenToComplect: "отдельно",
        ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
        complect: "настенные крепления",
        tenWatt: "300",
        guaranty: "8",
        recommendations: [],
      },
      {
        id: 100,
        CatName: "INCORNER полотенцесушитель",
        CatLink: "/INCORNER",
        name: "Terma Incorner 1275/350 полотенцесушитель",
        color: [
          {
            Белый: {
              imgs: [
                "/assets/incorner/incorner_1275_350_ral_9016_sx.png",
                "/assets/incorner/ranksluosciu-dziovintuvas-terma-incorner.jpg",
                "/assets/incorner/terma_incorner_detal_pergamon.jpg",
                "/assets/incorner/incorner_1275x350.png",
              ],
              cost: 383.21,
            },
          },
          {
            RAL: {
              imgs: [
                "/assets/incorner/ac7447eaaf31bd0de21c2eec36349bf9.jpg",
                "/assets/incorner/incorner_1275_350_ral3005_det.jpg",
                "/assets/incorner/incorner_1275_350_ral3005.jpg",
                "/assets/incorner/incorner_1275_350_ral3005_det2.jpg",
                "/assets/incorner/incorner01.jpg",
                "/assets/incorner/incorner_1275_350_ral_1006_sx.png",
                "/assets/incorner/incorner_1275_350_ral_6024_sx.png",
                "/assets/incorner/incorner_1275x350.png",
              ],
              cost: 402.29,
            },
          },
        ],
        desc: `Необычный полотенцесушитель идеально подходит для размещения в небольших комнатах, оформление которых выполнено в классическом стиле. Оригинальная эстетика, интересное и функциональное расположение труб, делает Incorner идеальным для максимального использования пространства дома. Доступные цвета позволяют удачно расположить полотенцесушитель в интерьере или прекрасно выделить его на стене, что делает его замечательным украшением в помещении.`,
        count: "",
        producer: "TERMA Польша",
        typeConnect: "электрический / закрытый контур / комбинированный",
        height: "1275",
        weight: "350",
        glub: "90",
        tenToComplect: "отдельно",
        ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
        complect: "настенные крепления",
        tenWatt: "300",
        guaranty: "8",
        recommendations: [],
      },
      {
        id: 101,
        CatName: "INCORNER полотенцесушитель",
        CatLink: "/INCORNER",
        name: "Terma Incorner 1005/350 полотенцесушитель",
        color: [
          {
            Белый: {
              imgs: [
                "/assets/incorner/incorner_1005_350_sea_salt.jpg",
                "/assets/incorner/terma_incorner_electro_3.jpg",
                "/assets/incorner/terma_incorner_detal_pergamon.jpg",
                "/assets/incorner/incorner_1005_350_ral_9016_sx.png",
                "/assets/incorner/incorner_735x350.png",
              ],
              cost: 348.53,
            },
          },
          {
            RAL: {
              imgs: [
                "/assets/incorner/incorner01.jpg",
                "/assets/incorner/incorner_1005_350_chrome_effect.jpg",
                "/assets/incorner/incorner_1275_350_ral3005_det.jpg",
                "/assets/incorner/incorner_1275_350_ral3005_det2.jpg",
                "/assets/incorner/incorner_1005_350_chrome_effect_d.jpg",
                "/assets/incorner/incorner_735x350.png",
              ],
              cost: 365.87,
            },
          },
        ],
        desc: `Необычный полотенцесушитель идеально подходит для размещения в небольших комнатах, оформление которых выполнено в классическом стиле. Оригинальная эстетика, интересное и функциональное расположение труб, делает Incorner идеальным для максимального использования пространства дома. Доступные цвета позволяют удачно расположить полотенцесушитель в интерьере или прекрасно выделить его на стене, что делает его замечательным украшением в помещении.`,
        count: "",
        producer: "TERMA Польша",
        typeConnect: "электрический / закрытый контур / комбинированный",
        height: "1005",
        weight: "350",
        glub: "90",
        tenToComplect: "отдельно",
        ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
        complect: "настенные крепления",
        tenWatt: "300",
        guaranty: "8",
        recommendations: [],
      },
      {
        id: 102,
        CatName: "INCORNER полотенцесушитель",
        CatLink: "/INCORNER",
        name: "Terma Incorner 735/350 полотенцесушитель",
        color: [
          {
            Белый: {
              imgs: [
                "/assets/incorner/incorner_1005_350_sea_salt.jpg",
                "/assets/incorner/incorner_735_350_ral_9016_sx.png",
                "/assets/incorner/incorner_735x350.png",
              ],
              cost: 319.06,
            },
          },
          {
            RAL: {
              imgs: [
                "/assets/incorner/terma_incorner_electro_3.jpg",
                "/assets/incorner/terma_incorner_detal_pergamon.jpg",
                "/assets/incorner/ranksluosciu-dziovintuvas-terma-incorner.jpg",
                "/assets/incorner/incorner_735_350_ral_3020_sx.png",
                "/assets/incorner/incorner_735_350_ral_1005_sx.png",
                "/assets/incorner/incorner_1275_350_ral3005_det2.jpg",
                "/assets/incorner/incorner_735x350.png",
              ],
              cost: 334.66,
            },
          },
        ],
        desc: `Необычный полотенцесушитель идеально подходит для размещения в небольших комнатах, оформление которых выполнено в классическом стиле. Оригинальная эстетика, интересное и функциональное расположение труб, делает Incorner идеальным для максимального использования пространства дома. Доступные цвета позволяют удачно расположить полотенцесушитель в интерьере или прекрасно выделить его на стене, что делает его замечательным украшением в помещении.`,
        count: "",
        producer: "TERMA Польша",
        typeConnect: "электрический / закрытый контур / комбинированный",
        height: "735",
        weight: "350",
        glub: "90",
        tenToComplect: "отдельно",
        ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
        complect: "настенные крепления",
        tenWatt: "300",
        guaranty: "8",
        recommendations: [],
      },
      {
        id: 103,
        CatName: "INCORNER полотенцесушитель",
        CatLink: "/INCORNER",
        name: "Terma Incorner 465/350 полотенцесушитель",
        color: [
          {
            Белый: {
              imgs: [
                "/assets/incorner/incorner_1005_350_sea_salt.jpg",
                "/assets/incorner/incorner_465_350_ral_9016_sx.png",
                "/assets/incorner/terma_incorner_detal_pergamon.jpg",
                "/assets/incorner/ac7447eaaf31bd0de21c2eec36349bf9.jpg",
                "/assets/incorner/incorner_465x350.png",
              ],
              cost: 287.84,
            },
          },
          {
            RAL: {
              imgs: [
                "/assets/incorner/incorner_1005_350_modern_grey_nowy.jpg",
                "/assets/incorner/incorner_465_350_ral_1021_sx.png",
                "/assets/incorner/incorner_465_350_ral_2012_sx.png",
                "/assets/incorner/incorner_1005_350_modern_grey_d.jpg",
                "/assets/incorner/incorner_1005_350_chrome_effect_d.jpg",
                "/assets/incorner/incorner_465x350.png",
              ],
              cost: 301.72,
            },
          },
        ],
        desc: `Необычный полотенцесушитель идеально подходит для размещения в небольших комнатах, оформление которых выполнено в классическом стиле. Оригинальная эстетика, интересное и функциональное расположение труб, делает Incorner идеальным для максимального использования пространства дома. Доступные цвета позволяют удачно расположить полотенцесушитель в интерьере или прекрасно выделить его на стене, что делает его замечательным украшением в помещении.`,
        count: "",
        producer: "TERMA Польша",
        typeConnect: "электрический / закрытый контур / комбинированный",
        height: "465",
        weight: "350",
        glub: "90",
        tenToComplect: "отдельно",
        ConnectTo: ["справа", "слева", "скрытое", "в розетку"],
        complect: "настенные крепления",
        tenWatt: "300",
        guaranty: "8",
        recommendations: [],
      },
    ],
  },
  mutations: {},
  actions: {},
  getters: {
    //todo
    getNews:
      (state) =>
      ({ id }) => {
        const obj = state.news.find((news) => news.id === id);
        return obj;
      },
    getCountAndCost: function () {
      return { count: 0, cost: "10 000" };
    },
    getProduct:
      (state) =>
      ({ categoryID, productID }) => {
        const category = state.itemsToBuy.filter((elem) => {
          elem.CatLink == "/" + categoryID;
        });
        const product = category.filter((el) => {
          el.id == productID;
        });
        return product;
      },
    getUser: function (state) {
      return state.user[0];
    },
    getProducts:
      (state) =>
      ({ category }) => {
        const response = state.itemsToBuy.filter(
          (el) => el.CatLink == "/" + category
        );
        return response;
      },
  },
  modules: {},
});

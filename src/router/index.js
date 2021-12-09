import { createRouter, createWebHistory } from "vue-router";
import news from "../router/routes/news";
import order from "../router/routes/order";
import lk from "../router/routes/lk";
const main = [{
        path: "/magazin/",
        name: "Home",
        meta: { titlePage: "Главная" },
        component: () =>
            import ( /* webpackChunkName: "Home" */ "../views/Home.vue"),
    },
    {
        path: "/magazin/About",
        name: "About",
        meta: { titlePage: "О компании" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "About" */ "../views/About.vue"),
    },
    {
        path: "/magazin/akcii",
        name: "Actions",
        meta: { titlePage: "Акции" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Actions" */ "../views/Akcii.vue"),
    },
    {
        path: "/magazin/servisnyy-tsentr",
        name: "ServiceCenter",
        meta: { titlePage: "Сервисный центр" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "ServiceCenter" */
                "../views/ServiceCenter.vue"
            ),
    },
    {
        path: "/magazin/napishite-nam",
        name: "NapishiteNam",
        meta: { titlePage: "Напишите нам" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "ServiceCenter" */
                "../views/NapishiteNam.vue"
            ),
    },
    {
        path: "/magazin/oplata",
        name: "Oplata",
        meta: { titlePage: "Оплата" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "ServiceCenter" */
                "../views/Oplata.vue"
            ),
    },
    {
        path: "/magazin/kak-oformit-zakaz",
        name: "HowToMakeAnOrder",
        meta: { titlePage: "Как оформить заказ" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "HowToMakeAnOrder" */
                "../views/HowToMakeAnOrder.vue"
            ),
    },
    {
        path: "/magazin/kontakty",
        name: "Contacts",
        meta: { titlePage: "Контакты" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../views/Contacts.vue"),
    },
    {
        path: "/magazin/dostavka",
        name: "Dostavka",
        meta: { titlePage: "Доставка" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../views/Dostavka.vue"),
    },
    {
        path: "/magazin/cart",
        name: "Cart",
        meta: { titlePage: "Корзина" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../views/Cart.vue"),
    },
    {
        path: "/magazin/otzyvy",
        name: "Otzyvi",
        meta: { titlePage: "Отзывы" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../views/Otzyvi.vue"),
    },
    {
        path: "/magazin/sitemap",
        name: "Sitemap",
        meta: { titlePage: "Карта сайта" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../views/Sitemap.vue"),
    },
    {
        path: "/magazin/persdata",
        name: "PersData",
        meta: { titlePage: "Пользовательское соглашение" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../views/PersData.vue"),
    },
    {
        path: "/magazin/cat/:category",
        name: "Category",

        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "CategoryList" */
                "../views/CategoryList.vue"
            ),
    },
    {
        path: "/magazin/cat/:category/:productID",
        name: "CartProduct",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "CategoryList" */
                "../views/CartProduct.vue"
            ),
    },
];
const routes1 = main.concat(news);
const routes2 = routes1.concat(order);
const routes3 = routes2.concat(lk);
const router = createRouter({
    history: createWebHistory(),
    routes: routes3,
});

export default router;
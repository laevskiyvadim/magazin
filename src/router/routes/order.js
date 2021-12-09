export default [{
        path: "/magazin/order",
        name: "Order",
        meta: { titlePage: "Выбор способа доставки" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "HowToMakeAnOrder" */
                "../../views/Order.vue"
            ),
    },
    {
        path: "/magazin/orderDop",
        name: "OrderDop",
        meta: { titlePage: "Оформление заказа" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "HowToMakeAnOrder" */
                "../../views/OrderDop.vue"
            ),
    },
    {
        path: "/magazin/confirm",
        name: "OrderConfirm",
        meta: { titlePage: "Спасибо за заказ" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "HowToMakeAnOrder" */
                "../../views/OrderConfirm.vue"
            ),
    },
    {
        path: "/magazin/orderInfo",
        name: "OrderInfo",
        meta: { titlePage: "Информация по заказу" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "HowToMakeAnOrder" */
                "../../views/OrderInfo.vue"
            ),
    },
    {
        path: "/magazin/orderslist",
        name: "OrdersList",
        meta: { titlePage: "Список заказов" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/OrdersList.vue"),
    },
];
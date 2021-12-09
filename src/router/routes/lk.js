export default [{
        path: "/magazin/lk",
        name: "MyLk",
        meta: { titlePage: "Мой кабинет" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/MyLk.vue"),
    },
    {
        path: "/magazin/lkData",
        name: "LkData",
        meta: { titlePage: "Личные данные" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/LkData.vue"),
    },
    {
        path: "/magazin/lkchangepass",
        name: "LkChangePass",
        meta: { titlePage: "Смена пароля" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/LkChangePass.vue"),
    },
    {
        path: "/magazin/lkforgotpass",
        name: "LkForgotPass",
        meta: { titlePage: "Лк Восстановление пароля" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/LkForgotPass.vue"),
    },
    {
        path: "/magazin/auth",
        name: "Auth",
        meta: { titlePage: "Авторизация" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/Auth.vue"),
    },
    {
        path: "/magazin/register",
        name: "Register",
        meta: { titlePage: "Регистрация" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/Register.vue"),
    },
    {
        path: "/magazin/forgotpass",
        name: "ForgotPass",
        meta: { titlePage: "Восстановление пароля" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Contacts" */ "../../views/ForgotPass.vue"),
    },
];
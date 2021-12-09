export default [{
        path: "/magazin/news",
        name: "News",
        meta: { titlePage: "Новости" },
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "News" */ "../../views/News.vue"),
    },
    {
        path: "/magazin/news/:id",
        name: "OnceNews",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "OnceNews" */ "../../views/OnceNews.vue"),
    },
];
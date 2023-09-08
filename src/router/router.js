import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/Not-Authorized/HomePage.vue";
import Authorization from "../components/Not-Authorized/Authorization.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/authorization',
        component: Authorization
    },
];

const router = createRouter({
    routes,
    history: createWebHistory('/cook-on/'),
});

export default router;
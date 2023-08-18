import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/Not-Authorized/HomePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    }
];

const router = createRouter({
    routes,
    history: createWebHistory('/cook-on/'),
});

export default router;
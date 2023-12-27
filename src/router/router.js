import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/Not-Authorized/HomePage.vue";
import Authorization from "../components/Not-Authorized/Authorization.vue";
import Registration from "../components/Not-Authorized/Registration.vue";
import RecipePage from "../components/RecipePage.vue";

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/authorization',
        component: Authorization
    },
    {
        path: '/registration',
        component: Registration
    },
    {
        path: '/recipe-page/:id:title:category:announcement:hashtags:description:detailedDescription',
        component: RecipePage,
        name: 'recipePage',
        props: true
    },
];

const router = createRouter({
    routes,
    history: createWebHistory('/cook-on/'),
});

export default router;
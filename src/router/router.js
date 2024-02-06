import {createRouter, createWebHistory} from "vue-router";
import HomePage from "../components/HomePage.vue";
import Authorization from "../components/Authorization.vue";
import Registration from "../components/Registration.vue";
import RecipePage from "../components/RecipePage.vue";
import CategoriesPage from "../components/CategoriesPage.vue";

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
    {
        path: '/categories',
        component: CategoriesPage
    }
];

const router = createRouter({
    routes,
    history: createWebHistory('/cook-on/'),
});

export default router;
import {defineStore} from "pinia";
import {ref} from "vue";

// Карточка категории
export const useCategoryDetails = defineStore('categoryDetails', () => {
    const categories = ref([
        {
            id: 1,
            announcement: '/category-porridge.png',
            title: 'Каши'
        },
        {
            id: 2,
            announcement: '/category-snacks.png',
            title: 'Закуски'
        },
        {
            id: 3,
            announcement: '/category-soups.png',
            title: 'Супы'
        },
        {
            id: 4,
            announcement: '/category-salads.png',
            title: 'Салаты'
        },
        {
            id: 5,
            announcement: '/category-pies.png',
            title: 'Пироги'
        },
        {
            id: 6,
            announcement: '/category-beverages.png',
            title: 'Напитки'
        },
        {
            id: 7,
            announcement: '/category-desserts.png',
            title: 'Десерты'
        },
        {
            id: 8,
            announcement: '/category-cakes.png',
            title: 'Торты'
        },
        {
            id: 9,
            announcement: '/category-sauces.png',
            title: 'Соусы'
        },
        {
            id: 10,
            announcement: '/category-side-dishes.png',
            title: 'Гарниры'
        },
    ]);

    return {
        categories
    }
});
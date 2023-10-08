import {defineStore} from "pinia";
import {ref} from "vue";

// Карточка рецепта
export const useRecipeDetails = defineStore('recipeDetails', () => {
    const recipes = ref([
        {
            id: 1,
            announcement: '/soup-puree.png',
            category: 'Супы',
            hashtags: [
                {
                    id: 1,
                    name: 'Хит'
                }
            ],
            title: 'Суп-пюре из тыквы со сливками',
            translit: 'sup-pyure-iz-tykvy-so-slivkami',
            description: 'Тыква, картошка, морковь, репчатый лук, чеснок, сливочное масло, сливки 10% жирности, соль, специи',
            moreActive: false,
            calories: '74,26',
            complexity: 'Легко',
            time: '40 мин',
            proteins: '1,73',
            fats: '3,97',
            carbohydrates: '9,05',
            toFavorites: false,
            grade: '5,0'
        },
        {
            id: 2,
            announcement: '/salad-shrimp.png',
            category: 'Салаты',
            hashtags: [
                {
                    id: 1,
                    name: 'Хит'
                },
                {
                    id: 2,
                    name: 'Готовить легко'
                }
            ],
            title: 'Салат из креветок с огурцом и яйцом',
            translit: 'salat-iz-krevetok-s-ogurcom-i-yajcom',
            description: 'Креветки, куриное яйцо, огурец, твердый сыр, майонез, соль, укроп',
            moreActive: false,
            calories: '201,92',
            complexity: 'Легко',
            time: '15 мин',
            proteins: '12,34',
            fats: '15,99',
            carbohydrates: '2,41',
            toFavorites: false,
            grade: '4,8'
        },
        {
            id: 3,
            announcement: '/grated-cherry-pie.png',
            category: 'Пироги',
            hashtags: [
                {
                    id: 1,
                    name: 'Праздничный стол'
                }
            ],
            title: 'Тертый пирог с вишней',
            translit: 'tertyj-pirog-s-vishnej',
            description: 'Пшеничная мука хлебопекарная, сливочное масло, сахар, ванильный сахар, молоко, куриное яйцо, разрыхлитель теста, соль, вишня, картофельный крахмал',
            moreActive: false,
            calories: '263,83',
            complexity: 'Средне',
            time: '2 ч',
            proteins: '4,09',
            fats: '11,83',
            carbohydrates: '35,63',
            toFavorites: false,
            grade: '4,6'
        },
        {
            id: 4,
            announcement: '/cocoa-with-ice-cream.png',
            category: 'Напитки',
            hashtags: [
                {
                    id: 1,
                    name: 'Быстро, просто, вкусно'
                }
            ],
            title: 'Какао с мороженым',
            translit: 'kakao-s-morozhenym',
            description: 'Молоко, какао-порошек, сахар, пломбир, темный шоколад',
            moreActive: false,
            calories: '145,63',
            complexity: 'Легко',
            time: '15 мин',
            proteins: '5,11',
            fats: '7,2',
            carbohydrates: '15,79',
            toFavorites: false,
            grade: '4,5'
        }
    ])

    return {
        recipes
    }
});
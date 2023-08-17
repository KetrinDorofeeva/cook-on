import {defineStore} from "pinia";
import {ref} from "vue";

// Подробно о рецепте (выпадающий список)
export const useRecipeDetails = defineStore('recipeDetails', () => {
    const recipes = ref([
        {
            id: 1,
            announcement: '/soup-puree',
            category: 'СУПЫ',
            title: 'Суп-пюре из тыквы со сливками',
            description: 'Тыква, картошка, морковь, репчатый лук, чеснок, сливочное масло, сливки 10% жирности, соль, специи',
            calories: '74,26',
            complexity: 'Легко',
            time: '40 мин',
            proteins: '1,73 г',
            fats: '3,97 г',
            carbohydrates: '9,05 г',
            toFavorites: false,
            grade: '5,0'
        },
    ])

    // Активность выпадающего списка
    const listActivity = ref(true);
    const enableActivity = () => {
        if (listActivity.value === true) {
            listActivity.value = false
        } else  {
            listActivity.value = true
        }
    }

    // Кликнуть по сердечку в карточке товара (В избранное)
    // const heartActivity = ref(false);
    // const clickHeart = () => {
    //     if (heartActivity.value === false) {
    //         heartActivity.value = true
    //     } else  {
    //         heartActivity.value = false
    //     }
    // }

    return {
        recipes, listActivity, enableActivity
        //heartActivity, clickHeart
    }
});
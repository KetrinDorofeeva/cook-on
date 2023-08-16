import {defineStore} from "pinia";
import {ref} from "vue";

// Подробно о рецепте (выпадающий список)
export const useRecipeDetails = defineStore('recipeDetails', () => {
    // Активность выпадающего списка
    const listActivity = ref(true);

    const enableActivity = () => {
        if (listActivity.value === true) {
            listActivity.value = false
        } else  {
            listActivity.value = true
        }
    }

    return {
        listActivity, enableActivity
    }
});
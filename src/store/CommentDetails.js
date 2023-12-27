import {defineStore} from "pinia";
import {ref} from "vue";

// Комментарий
export const useCommentDetails = defineStore('commentDetails', () => {
    const comments = ref([
        {
            id: 1,
            commentator: 'MariBianko',
            text: 'Делала пирог по этому рецепту, тесто не получилось совсем, очень прилипает к рукам. Думаю, дело в том, что масло нужно было натирать, а не растапливать.',
            date: '20.07.2023',
            time: '13:23',
            idRecipe: 1
        },
        {
            id: 2,
            commentator: 'AlenaKosmos',
            text: 'Замечательный пирог. Испекла и не пожалела. Можно вишню разбавить клубникой, вкус будет понежнее. Спасибо за хороший рецепт.',
            date: '02.06.2023',
            time: '10:52',
            idRecipe: 1
        },
    ]);

    return {
        comments
    }
});
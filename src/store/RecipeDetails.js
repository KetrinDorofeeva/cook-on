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
            detailedDescription: 'Вкусный, осенний, сытный, но низкокалорийный суп, который с удовольствием будут есть и взрослые, и дети, и те, кто сидят на диете, и гурманы. Вкус супа можно регулировать специями. Тыква крайне благосклонно реагирует на любую добавленную пряность, подчеркивая всю вкусовую палитру, поэтому это прекрасное поле для кулинарных экспериментов. Особенно вкусно получится такой суп с куркумой и небольшим количеством мускатного ореха.',
            moreActive: false,
            author: 'kdorf7',
            statusAuthor: 'Читатель и автор CookOn',
            photoAuthor: '/author-1.jpg',
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
            detailedDescription: 'Салат из креветок — это отличный вариант сытного перекуса, приготовление которого не требует много сил. Такое блюдо получается вкусным, полезным и при этом в меру калорийным. Морепродукты в этом салате отлично сочетаются с вареными яйцами и сочными огурцами. В качестве дополнения в салате используется сыр. Он добавляет блюду приятное послевкусие. Использовать готовый салат можно как самостоятельное блюдо на ужин или как гарнир на праздничном столе.',
            moreActive: false,
            author: 'tatyana',
            statusAuthor: 'Кулинарный редактор CookOn',
            photoAuthor: '/author-1.jpg',
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
            detailedDescription: 'Тертый пирог с вишней — выпечка, которую можно приготовить к чаепитию в любое время года. Ягоды можно использовать как свежие, так и замороженные. Если хочется добавить новых вкусовых оттенков, введите в состав немного какао-порошка или разнообразьте начинку любыми другими ягодами или фруктами. Пирог по данному рецепту одинаково хорош в горячем и холодном виде.',
            moreActive: false,
            author: 'madinaTali',
            statusAuthor: 'Кулинарный редактор CookOn',
            photoAuthor: '/author-1.jpg',
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
            detailedDescription: 'Это почти кофе гляссе, но с какао вместо кофе, что намного полезнее. Шоколадный вкус этого горячего напитка идеально сочетается с шариком холодного мороженого. В начале десерт можно есть ложкой, а потом, когда мороженое растает, просто его пить!',
            moreActive: false,
            author: 'annaSini',
            statusAuthor: 'Кулинарный редактор CookOn',
            photoAuthor: '/author-1.jpg',
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
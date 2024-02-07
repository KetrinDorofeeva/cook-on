<template>
  <Header></Header>

  <main class="mb-8" :class="[{menu_bottom: userStore.auth === true}]">
    <article class="px-5 mb-5 text-xs">
      <section class="flex items-center gap-1">
        <Icon icon="ph:house-bold" @click="$router.push('/')" color="#f68b31" width="20" height="20" />
        <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="24" height="24" />
        <p class="font-medium text-orange">{{category}}</p>
        <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="24" height="24" />
        <p class="font-medium text-[rgba(0,0,0,.3)]">{{title}}</p>
      </section>
    </article>

    <TabView v-model:activeIndex="active" class="recipe__page mb-7">
      <!-- Обзор -->
      <TabPanel header="Обзор">
        <img :src="`/public/img/popular${announcement}`" class="mb-6" :alt="title">

        <article class="flex items-center px-5 mb-5">
          <div class="bg-category rounded-[10px] text-xs font-semibold px-[9px] py-[6px] uppercase">{{category}}</div>
          <div v-for="hashtags in hashtags" :key="hashtags.id" class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-[10px] text-xs font-semibold text-white px-[9px] py-[6px]">
            #{{hashtags.name}}
          </div>
        </article>

        <article class="px-5 mb-8">
          <div class="text-xl font-semibold leading-[26px] mb-3">{{title}}</div>
          <p :class="[{show_more: hide_description === false}]" class="text-justify leading-[21px] line-clamp-4 mb-3">{{detailedDescription}}</p>

          <div v-if="hide_description === true" @click="hide_description = false" class="text-orange font-bold">Показать еще</div>
          <div v-else @click="hide_description = true" class="text-orange font-bold">Скрыть</div>
        </article>

        <article class="px-5 mb-7">
          <div class="flex items-center gap-4 px-5 py-4 shadow-[0_0_8px_rgba(0,0,0,.1)] rounded-[20px]">
            <img :src="`/public/img/authors/author-1.jpg`" class="w-[51px] h-[51px] rounded-full" alt="">
            <div class="">
              <p>Автор: <a href="#" class="font-semibold text-orange">kdorf7</a></p>
              <p class="text-sm">Читатель и автор CookOn</p>
            </div>
          </div>
        </article>

        <article class="px-5 mb-7">
          <div class="flex justify-between items-center px-5 py-4 shadow-[0_0_8px_rgba(0,0,0,.1)] rounded-[20px]">
            <div>
              <p class="font-semibold mb-1.5">Будет готово через</p>
              <div class="flex items-center gap-2">
                <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                <p>2 часа</p>
              </div>
            </div>
            <div>
              <p class="font-semibold mb-1.5">Сложность</p>
              <div class="flex items-center gap-2">
                <Icon icon="emojione-monotone:pot-of-food" color="#f4b990" width="22" height="22" />
                <p>Средне</p>
              </div>
            </div>
          </div>
        </article>

        <article class="px-5 mb-8">
          <div class="flex items-center justify-between mb-2.5">
            <section class="w-[93px] py-2 bg-category shadow-[0_0_8px_rgba(0,0,0,.1)] rounded-[20px] text-center">
              <p class="text-sm mx-4 mb-1.5">Калории</p>
              <div class="mx-2 bg-white rounded-xl">
                <div class="py-2.5">
                  <p class="text-lg font-semibold">263</p>
                  <p class="text-sm">кКал</p>
                </div>
              </div>
            </section>
            <section class="w-[93px] py-2 bg-category shadow-[0_0_8px_rgba(0,0,0,.1)] rounded-[20px] text-center">
              <p class="text-sm mx-4 mb-1.5">Белки</p>
              <div class="mx-2 bg-white rounded-xl">
                <div class="py-2.5">
                  <p class="text-lg font-semibold">4,09</p>
                  <p class="text-sm">грамм</p>
                </div>
              </div>
            </section>
            <section class="w-[93px] py-2 bg-category shadow-[0_0_8px_rgba(0,0,0,.1)] rounded-[20px] text-center">
              <p class="text-sm mx-4 mb-1.5">Жиры</p>
              <div class="mx-2 bg-white rounded-xl">
                <div class="py-2.5">
                  <p class="text-lg font-semibold">11,83</p>
                  <p class="text-sm">грамм</p>
                </div>
              </div>
            </section>
            <section class="w-[93px] py-2 bg-category shadow-[0_0_8px_rgba(0,0,0,.1)] rounded-[20px] text-center">
              <p class="text-sm mx-4 mb-1.5">Углеводы</p>
              <div class="mx-2 bg-white rounded-xl">
                <div class="py-2.5">
                  <p class="text-lg font-semibold">35,63</p>
                  <p class="text-sm">грамм</p>
                </div>
              </div>
            </section>
          </div>
          <p class="text-xs text-center text-[rgba(0,0,0,.6)] leading-[18px]">Пищевая ценность на 100 г. Калорийность рассчитана для сырых продуктов</p>
        </article>

        <RecipeEvaluation v-if="userStore.auth === true"></RecipeEvaluation>

        <Comments></Comments>
      </TabPanel>

      <!-- Ингредиенты -->
      <TabPanel header="Ингредиенты">
        <article class="px-5 mb-8">
          <div class="text-lg font-semibold mb-4">Количество порций</div>
          <section class="flex items-center gap-3.5">
            <div class="counter_click flex justify-center items-center w-[46px] h-[39px] bg-white drop-shadow-[0_0_3px_rgba(0,0,0,.2)] rounded-xl">
              <Icon icon="ic:round-minus" @click="counterMinus" color="#f68b31" width="32" height="32" />
            </div>
            <div class="flex justify-center items-center text-xl w-[46px] h-[39px] bg-white drop-shadow-[0_0_3px_rgba(0,0,0,.2)] rounded-xl">{{number_servings}}</div>
            <div class="counter_click flex justify-center items-center w-[46px] h-[39px] bg-white drop-shadow-[0_0_3px_rgba(0,0,0,.2)] rounded-xl">
              <Icon icon="ic:round-plus" @click="counterPlus" color="#f68b31" width="32" height="32" />
            </div>
          </section>
        </article>

        <article class="px-5 mb-8">
          <div class="text-lg font-semibold">Основные ингредиенты</div>
          <section class="relative">
            <div class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
              <p>Пшеничная мука хлебопекарная</p>
              <div class="flex items-center gap-4">
                <p class="whitespace-nowrap">66,67 г</p>
                <Icon icon="fa6-solid:list-ul" @click="units = true" class="list_ul cursor-pointer" color="#f68b31" width="20" height="20" />
              </div>
            </div>

            <!-- Единицы измерения -->
            <div class="units_container text-[rgba(0,0,0,.8)]" v-if="units === true" :class="[{show: units === true}]">
              <div class="flex justify-end border-b-[1.5px] bg-[rgba(246,139,49,.03)] border-solid border-[#EDEDED]">
                <span class="px-3 py-2">грамм (г)</span>
              </div>
              <div class="flex justify-end border-b-[1.5px] border-solid border-[#EDEDED]">
                <span class="px-3 py-2">миллиграмм (мг)</span>
              </div>
               <div class="flex justify-end border-b-[1.5px] border-solid border-[#EDEDED]">
                <span class="px-3 py-2">килограмм (кг)</span>
              </div>
              <div class="flex justify-end border-b-[1.5px] border-solid border-[#EDEDED]">
                <span class="px-3 py-2">столовая ложка (ст.л)</span>
              </div>
              <div class="flex justify-end border-b-[1.5px] border-solid border-[#EDEDED]">
                <span class="px-3 py-2">чайная ложка (ч.л)</span>
              </div>
            </div>
          </section>

          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Сливочное масло</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">30 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Сахар</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">16,67 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Молоко</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">0,5 ст.л</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Куриное яйцо</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">10 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Ванильный сахар</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">0,17 ст.л</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Разрыхлитель теста</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">0,83 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Соль</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">0,83 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
        </article>

        <article class="px-5">
          <div class="text-lg font-semibold">Для начинки</div>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Вишня</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">83,33 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Картофельный крахмал</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">9,33 г</p>
              <Icon icon="fa6-solid:list-ul" color="#f68b31" class="list_ul cursor-pointer" width="20" height="20" />
            </div>
          </section>
          <section class="flex items-center justify-between gap-28 border-b border-solid border-[rgba(237,237,237,.5)] py-3">
            <p>Сахар</p>
            <div class="flex items-center gap-4">
              <p class="whitespace-nowrap">по вкусу</p>
            </div>
          </section>
        </article>
      </TabPanel>

      <!-- Приготовление -->
      <TabPanel header="Приготовление">
        <article class="px-5 mb-8">
          <div class="text-lg font-semibold mb-5">Пошаговый рецепт</div>

          <article class="grid grid-cols-1 gap-5">
            <div class="px-[18px] pt-5 pb-7 rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.1)]">
              <div class="px-5 py-2.5 w-min text-sm font-semibold uppercase bg-category rounded-lg whitespace-nowrap">Подготовка</div>
              <img :src="`/public/img/step-by-step_recipe/preparation.png`" class="rounded-[20px] mt-4 w-full" alt="Подготовка">
              <p class="text-justify mt-4">Вишню вымойте, обсушите, удалите косточки. Если используете замороженные ягоды, разморозьте их и слейте лишнюю жидкость. Замороженное сливочное масло натрите на терке. Подготовьте форму для выпечки. Включите духовку на 200 градусов.</p>
              <div class="flex items-center justify-between mt-8">
                <section class="relative flex items-center cursor-pointer">
                  <div class="p-2.5 rounded-full border-[1.5px] border-solid border-orange bg-white z-20">
                    <Icon icon="pajamas:timer" color="#F68B31" width="26px" height="26px" />
                  </div>
                  <div class="absolute left-2.5 py-[8px] pr-3 pl-12 font-bold text-orange border-[1.5px] border-solid border-orange z-10 rounded-xl whitespace-nowrap">10 мин</div>
                </section>
                <section class="relative cursor-pointer">
                  <div @click="note = true" class="note_block p-1.5 rounded-full border-[1.5px] border-solid border-orange bg-white">
                    <Icon icon="heroicons-outline:light-bulb" color="#F68B31" width="32px" height="32px" />
                  </div>

                  <!-- Примечание -->
                  <div class="note_container px-3 py-2 text-sm min-w-[300px] text-justify text-[rgba(33,33,33,.8)]" v-if="note === true" :class="[{show: note === true}]">
                    Часть пшеничной муки замените цельнозерновой или кукурузной, сахар используйте тростниковый.
                  </div>
                </section>
              </div>
            </div>

            <div class="px-[18px] pt-5 pb-7 rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.1)]">
              <div class="flex items-center justify-between">
                <div class="px-5 py-2.5 w-min text-sm font-semibold uppercase bg-category rounded-lg whitespace-nowrap">Шаг 1</div>
                <div class="flex items-center gap-2">
                  <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                  <p class="font-medium text-[rgba(0,0,0,.6)]">1 ч</p>
                </div>
              </div>
              <p class="text-justify mt-4">Подготовьте тесто. Объедините все сыпучие продукты для теста, смешайте их. Затем добавьте тертое сливочное масло, вбейте яйцо и влейте молоко, активно вымесите. Разделите тесто на две части, оберните пищевой пленкой и отправьте охлаждаться на 1 час.</p>
            </div>

            <div class="px-[18px] pt-5 pb-7 rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.1)]">
              <div class="flex items-center justify-between">
                <div class="px-5 py-2.5 w-min text-sm font-semibold uppercase bg-category rounded-lg whitespace-nowrap">Шаг 2</div>
                <div class="flex items-center gap-2">
                  <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                  <p class="font-medium text-[rgba(0,0,0,.6)]">20 мин</p>
                </div>
              </div>
              <img :src="`/public/img/step-by-step_recipe/step_2.png`" class="rounded-[20px] mt-4 w-full" alt="Шаг 2">
              <p class="text-justify mt-4">Начните формировать пирог. Затем на листе пергамента раскатайте один кусок теста в пласт по величине немного больше подготовленной формы. Выложите его туда вместе с пергаментом, формируя небольшие бортики. Вишню соедините с крахмалом и сахаром, выложите на заготовку.</p>
            </div>

            <div class="px-[18px] pt-5 pb-7 rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.1)]">
              <div class="flex items-center justify-between">
                <div class="px-5 py-2.5 w-min text-sm font-semibold uppercase bg-category rounded-lg whitespace-nowrap">Шаг 3</div>
                <div class="flex items-center gap-2">
                  <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                  <p class="font-medium text-[rgba(0,0,0,.6)]">30 мин</p>
                </div>
              </div>
              <img :src="`/public/img/step-by-step_recipe/step_3.png`" class="rounded-[20px] mt-4 w-full" alt="Шаг 3">
              <p class="text-justify mt-4">Завершите приготовление пирога. Оставшуюся часть теста натрите на терке и распределите по ягодной основе. Поставьте пирог в средний отдел духового шкафа на 30 минут.</p>
            </div>

            <div class="px-[18px] pt-5 pb-7 rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.1)]">
              <div class="px-5 py-2.5 w-min text-sm font-semibold uppercase bg-category rounded-lg whitespace-nowrap">Произвести впечатление</div>
              <img :src="`/public/img/step-by-step_recipe/to_make_an_impression.png`" class="rounded-[20px] mt-4 w-full" alt="Подготовка">
              <p class="text-justify mt-4">Дайте выпечке немного остыть, затем разрежьте на кусочки, положите на порционные тарелки и подайте к столу.</p>
            </div>
          </article>
        </article>
      </TabPanel>
    </TabView>
  </main>
</template>

<script setup>
  import Comments from "../UI/Comments.vue";
  import RecipeEvaluation from "../UI/RecipeEvaluation.vue";

  import { useRoute } from "vue-router";

  import {useUserStore} from "../store/UserStore.js";
  const userStore = useUserStore();

  import {useRecipeDetails} from "../store/RecipeDetails.js";
  const recipeDetails = useRecipeDetails();

  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';

  import {computed, ref} from "vue";

  const active = ref(0);

  // Элементы рецепта
  const route = useRoute();
  const id = computed(() => route.params.id);
  const title = computed(() => route.params.title);
  const category = computed(() => route.params.category);
  const announcement = computed(() => route.params.announcement);
  const hashtags = computed(() => route.params.hashtags);
  const detailedDescription = computed(() => route.params.detailedDescription);
</script>

<script>
  import {Icon} from "@iconify/vue";
  import Header from "../UI/Header.vue";

  export default {
    name: 'RecipePage',
    components: {
      Icon,
      Header
    },
    data() {
      return {
        hide_description: true,
        number_servings: 1,
        units: false,
        note: false,
      }
    },
    methods: {
      counterPlus: function () {
          return this.number_servings++
      },
      counterMinus: function () {
        if (this.number_servings > 1) {
          return this.number_servings--
        }
      }
    },
    created() {
      window.addEventListener('click', e => {
        const target = e.target
        if (!target.closest('.list_ul') && !target.closest('.units_container')) {
          this.units = false
        }
        if (!target.closest('.note_block') && !target.closest('.note_container')) {
          this.note = false
        }
      })
    },
  }
</script>

<style lang="scss">
 .recipe__page .p-tabview-nav-container {
   @apply px-5
 }
 .show_more {
   -webkit-line-clamp: unset !important;
 }
 .p-tabview-nav-container {
   margin-bottom: 28px !important;
 }
 .counter_click:active {
   box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
   transition: .09s
 }

 .units_container,
 .note_container {
   @apply hidden
 }
 .units_container.show {
   @apply block absolute right-0 top-14 bg-white shadow-[0_0_4px_rgba(0,0,0,.2)] rounded-xl;
   animation: avia_pop .3s 1 cubic-bezier(.175,.885,.32,1.275);
 }
 .units_container div {
   @apply transition-[.3s] cursor-pointer;
 }
 .units_container div:hover {
   @apply bg-[rgba(246,139,49,.03)]
 }

 .note_container.show {
   @apply block absolute right-0 bottom-14 bg-white shadow-[0_0_4px_rgba(0,0,0,.2)] rounded-xl;
   animation: avia_pop .3s 1 cubic-bezier(.175,.885,.32,1.275);
 }
 @keyframes avia_pop {
    0% {
      transform: scale(.8);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
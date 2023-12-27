<template>
  <Header></Header>

  <main class="mb-8">
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

        <article class="px-5">
          <p class="text-xl font-semibold uppercase tracking-[0.8px]">Комментарии <span class="font-normal text-[rgba(0,0,0,.5)]">(2)</span></p>

          <section class="border-b border-solid border-[rgba(237,237,237,.5)] py-3" v-for="comment in commentDetails.comments" :key="comment.id">
            <p class="font-bold text-lg mb-1.5">{{comment.commentator}}</p>
            <p class="font-light text-[rgba(0,0,0,.8)] text-justify mb-3">{{comment.text}}</p>
            <p class="font-light text-[rgba(0,0,0,.6)] text-sm">{{comment.date}} в {{comment.time}}</p>
          </section>
        </article>
      </TabPanel>
      <TabPanel header="Ингредиенты">
      </TabPanel>
      <TabPanel header="Приготовление">
      </TabPanel>
    </TabView>
  </main>
</template>

<script setup>
  import { useRoute } from "vue-router";

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

  // Комментарии
  import {useCommentDetails} from "../store/CommentDetails.js";

  const commentDetails = useCommentDetails();
</script>

<script>
  import {Icon} from "@iconify/vue";
  import Header from "../UI/Not-Authorized/Header.vue";

  export default {
    name: 'RecipePage',
    components: {
      Icon,
      Header
    },
    data() {
      return {
        hide_description: true
      }
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
</style>
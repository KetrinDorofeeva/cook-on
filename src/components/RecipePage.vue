<template>
  <Header></Header>

  <main class="mb-8">
    <section class="px-5 mb-5 text-xs">
      <action class="flex items-center gap-1">
        <Icon icon="ph:house-bold" @click="$router.push('/')" color="#f68b31" width="20" height="20" />
        <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="24" height="24" />
        <p class="font-medium text-orange">{{category}}</p>
        <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="24" height="24" />
        <p class="font-medium text-[rgba(0,0,0,.3)]">{{title}}</p>
      </action>
    </section>

    <TabView v-model:activeIndex="active" class="recipe__page mb-7">
      <TabPanel header="Обзор">
        <img :src="`/public/img/popular${announcement}`" class="mb-6" :alt="title">

        <section class="flex items-center px-5">
          <div class="bg-category rounded-[10px] text-xs font-semibold px-[9px] py-[6px] uppercase">{{category}}</div>
          <div v-for="hashtags in hashtags" :key="hashtags.id" class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-[10px] text-xs font-semibold text-white px-[9px] py-[6px]">
            #{{hashtags.name}}
          </div>
        </section>
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
  }
</script>

<style lang="scss">
 .recipe__page .p-tabview-nav-container {
   @apply px-5
 }
</style>
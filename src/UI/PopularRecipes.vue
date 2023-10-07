<template>
  <article>
    <div class="flex items-center justify-between mb-4">
      <div class="text-xl font-bold">Популярные</div>

      <div class="flex items-center gap-1.5">
        <div class="text-orange font-bold">Все</div>
        <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="18" height="18" />
      </div>
    </div>

    <section class="grid grid-cols-1 gap-7 mb-10">
      <div class="shadow-card-main rounded-b-xl" v-for="recipe in recipeDetails.recipes" :key="recipe.id">
        <div class="relative">
          <section class="flex items-center absolute left-5 bottom-2.5">
            <div class="bg-category rounded-[10px] text-xs font-semibold px-[9px] py-[6px]">{{recipe.category}}</div>
            <div v-for="hashtag in recipe.hashtags" :key="hashtag.id" class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-[10px] text-xs font-semibold text-white px-[9px] py-[6px]">
              #{{hashtag.name}}
            </div>
          </section>
          <img :src="`/public/img/popular${recipe.announcement}`" class="rounded-t-xl" :alt="recipe.title">
        </div>

        <div class="py-5">
          <div class="px-5 mb-3.5">
            <div class="text-xl font-semibold leading-[26px] mb-2">{{recipe.title}}</div>
            <p class="text-justify leading-[21px] mb-4">{{recipe.description}}</p>

            <div class="flex items-center" @click="recipe.moreActive = !recipe.moreActive">
              <Icon icon="bx:food-menu" color="#f4b990" width="19" height="19" />
              <p class="text-more ml-2 font-medium">Подробнее</p>
              <Icon icon="ep:arrow-up-bold" class="ml-3 ease-in duration-200" :class="[{flip_arrow_active: recipe.moreActive}]" color="rgba(0,0,0,.4)" width="18" height="18" />
            </div>
          </div>

          <hr class="h-px bg-hr w-full mb-4">

          <!-- Выпадающий список (кКал, сложность, время, БЖУ) -->
          <div class="mb-6" v-if="recipe.moreActive === true">
            <div class="flex items-center justify-between px-5 mb-4">
              <div class="flex items-center">
                <Icon icon="bi:pie-chart-fill" color="#f4b990" width="19" height="19" />
                <p class="text-more ml-2 font-medium">{{recipe.calories}} кКал</p>
              </div>
              <div class="flex items-center">
                <Icon icon="emojione-monotone:pot-of-food" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">{{recipe.complexity}}</p>
              </div>
              <div class="flex items-center">
                <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">{{recipe.time}}.</p>
              </div>
            </div>

            <hr class="h-px bg-hr w-full mb-4">

            <div class="flex items-center justify-between px-5 mb-4">
              <div class="flex items-center">
                <Icon icon="file-icons:dna" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">{{recipe.proteins}} г.</p>
              </div>
              <div class="flex items-center">
                <Icon icon="ph:drop-bold" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">{{recipe.fats}} г.</p>
              </div>
              <div class="flex items-center">
                <Icon icon="lucide:wheat" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">{{recipe.carbohydrates}} г.</p>
              </div>
            </div>

            <hr class="h-px bg-hr w-full">
          </div>

          <div class="flex items-center justify-between px-5 mt-6">
            <div class="flex items-center">
              <div @click="recipe.toFavorites = !recipe.toFavorites">
                <Icon icon="ph:heart-bold" v-if="!recipe.toFavorites" color="#dd727b" width="30" height="30" />
                <Icon icon="ph:heart-fill" v-else color="#dd727b" width="30" height="30" />
              </div>
              <div class="flex items-center">
                <Icon icon="ph:star-fill" class="ml-6" color="#f7d000" width="30" height="30" />
                <p class="text-[rgba(0,0,0,.7)] font-medium ml-2">{{recipe.grade}}</p>
              </div>
            </div>

            <button class="px-4 py-1.5 bg-orange text-white font-semibold rounded-[10px]">К рецепту</button>
          </div>
        </div>
      </div>
    </section>

    <button class="btn all-recipes flex items-center justify-center gap-1.5">
      Все рецепты
      <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="white" width="20" height="20" />
    </button>
  </article>
</template>

<script setup>
  import {useRecipeDetails} from "../store/RecipeDetails.js";

  const recipeDetails = useRecipeDetails();
</script>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'PopularRecipes',
    components: {
      Icon
    },
  }
</script>

<style scoped lang="scss">
  .flip_arrow_active {
    @apply rotate-180 ease-in duration-200
  }
  .all-recipes {
    @apply bg-orange text-white font-semibold
  }
</style>
<template>
  <article class="mb-7">
    <div class="flex items-center justify-between mb-4">
      <div class="text-xl font-bold">Категории</div>

      <div @click="$router.push('/categories')" class="flex items-center gap-1.5">
        <div class="text-orange font-bold">Все</div>
        <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="18" height="18" />
      </div>
    </div>

    <section class="grid grid-cols-2 gap-2.5">
      <div class="relative" v-for="category in categoryDetails.categories" :key="category.id">
        <div v-if="category.id <= 6">
          <div class="absolute text-white font-bold left-3.5 bottom-2">{{category.title}}</div>
          <img :src="`/public/img/categories${category.announcement}`" :alt="category.title" class="rounded-xl">
        </div>
      </div>
    </section>
  </article>
</template>

<script setup>
  import {useCategoryDetails} from "../store/CategoryDetails.js";

  const categoryDetails = useCategoryDetails();
</script>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'CategoriesHomePage',
    components: {
      Icon
    }
  }
</script>

<style scoped lang="scss">

</style>
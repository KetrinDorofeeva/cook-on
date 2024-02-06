<template>
  <Header></Header>

  <main class="px-5 mb-8" :class="[{menu_bottom: userStore.auth === true}]">
    <div class="text-xl font-bold mb-4">Все категории</div>

    <section class="grid grid-cols-2 gap-2.5">
      <div class="relative" v-for="category in categoryDetails.categories" :key="category.id">
        <div class="absolute text-white font-bold left-3.5 bottom-2">{{category.title}}</div>
        <img :src="`/public/img/categories${category.announcement}`" :alt="category.title" class="rounded-xl">
      </div>
    </section>
  </main>
</template>

<script setup>
  import {useUserStore} from "../store/UserStore.js";
  const userStore = useUserStore();

  import {useCategoryDetails} from "../store/CategoryDetails.js";
  const categoryDetails = useCategoryDetails();
</script>

<script>
  import Header from "../UI/Header.vue";

  export default {
    name: 'CategoriesPage',
    components: {Header},
  }
</script>

<style scoped lang="scss">

</style>
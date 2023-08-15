<template>
  <article class="mb-7">
    <div class="flex items-center justify-between mb-4">
      <div class="text-xl font-bold">Категории</div>

      <div class="flex items-center">
        <div class="text-orange font-bold mr-1.5">Все</div>
        <Icon icon="mingcute:arrow-up-fill" class="right-login-arrow rotate-90" color="#f68b31" width="18" height="18" />
      </div>
    </div>

    <section class="grid grid-cols-2 gap-2.5">
      <div class="relative">
        <div class="absolute text-white font-bold left-3.5 bottom-2">Каши</div>
        <img src="/public/img/categories/category-porridge.png" class="rounded-xl">
      </div>
      <div class="relative">
        <div class="absolute text-white font-bold left-3.5 bottom-2">Закуски</div>
        <img src="/public/img/categories/category-snacks.png" class="rounded-xl">
      </div>
      <div class="relative">
        <div class="absolute text-white font-bold left-3.5 bottom-2">Супы</div>
        <img src="/public/img/categories/category-soups.png" class="rounded-xl">
      </div>
      <div class="relative">
        <div class="absolute text-white font-bold left-3.5 bottom-2">Салаты</div>
        <img src="/public/img/categories/category-salads.png" class="rounded-xl">
      </div>
      <div class="relative">
        <div class="absolute text-white font-bold left-3.5 bottom-2">Пироги</div>
        <img src="/public/img/categories/category-pies.png" class="rounded-xl">
      </div>
      <div class="relative">
        <div class="absolute text-white font-bold left-3.5 bottom-2">Напитки</div>
        <img src="/public/img/categories/category-beverages.png" class="rounded-xl">
      </div>
    </section>
  </article>
</template>

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
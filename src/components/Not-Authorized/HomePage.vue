<template>
  <Header class="text-main tracking-main"></Header>

  <main class="text-main font-main tracking-main px-5">
    <CategoriesHomePage></CategoriesHomePage>
    <PopularRecipes></PopularRecipes>
  </main>
</template>

<script>
  import Header from "../../UI/Not-Authorized/Header.vue";
  import CategoriesHomePage from "../../UI/CategoriesHomePage.vue";
  import PopularRecipes from "../../UI/PopularRecipes.vue";

  export default {
    name: 'HomePage',
    components: {PopularRecipes, CategoriesHomePage, Header},
  }
</script>

<style scoped lang="scss">

</style>
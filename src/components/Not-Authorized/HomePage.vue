<template>
  <Header class="text-main tracking-main"></Header>

  <main class="text-main font-main tracking-main px-5">
    <CategoriesHomePage></CategoriesHomePage>
  </main>
</template>

<script>
  import Header from "../../UI/Not-Authorized/Header.vue";
  import CategoriesHomePage from "../../UI/CategoriesHomePage.vue";

  export default {
    name: 'HomePage',
    components: {CategoriesHomePage, Header},
  }
</script>

<style scoped lang="scss">

</style>
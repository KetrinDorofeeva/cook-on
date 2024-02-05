<template>
  <Header></Header>

  <main class="px-5 mb-24">
    <PersonalHomePage v-if="userStore.auth === true"></PersonalHomePage>
    <CategoriesHomePage></CategoriesHomePage>
    <PopularRecipes></PopularRecipes>
  </main>
</template>

<script>
  import Header from "../UI/Header.vue";
  import CategoriesHomePage from "../UI/CategoriesHomePage.vue";
  import PopularRecipes from "../UI/PopularRecipes.vue";
  import PersonalHomePage from "../UI/PersonalHomePage.vue";
  import {useUserStore} from "../store/UserStore.js";

  export default {
    name: 'HomePage',
    components: {PersonalHomePage, PopularRecipes, CategoriesHomePage, Header},
    setup() {
      const userStore = useUserStore();
      return {userStore}
    },
  }
</script>

<style scoped lang="scss">

</style>
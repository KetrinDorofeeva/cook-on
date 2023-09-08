<template>
  <Header></Header>

  <main class="px-5">
    <section class="flex items-center gap-1.5 mb-5">
      <Icon icon="ph:house-bold" color="#f68b31" width="22" height="22" />
      <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="26" height="26" />
      <p class="font-medium text-[rgba(0,0,0,.3)]">Авторизация</p>
    </section>

    <section>
      <h1 class="text-2xl font-semibold mb-6">Авторизация</h1>

      <form>
        <input type="text" id="login-authorization" class="h-12 w-full bg-empty-field border-white rounded-[10px] transition
          focus:ring-0 focus:border-[1.3px] focus:bg-white focus:border-orange" placeholder="Логин">
        <div></div>
        <label for="login-authorization" class="font-medium text-[rgba(0,0,0,.8)]">Логин</label>
      </form>
    </section>
  </main>
</template>

<script>
  import {Icon} from "@iconify/vue";
  import Header from "../../UI/Not-Authorized/Header.vue";

  export default {
    name: 'Authorization',
    components: {
      Icon,
      Header
    },
  }
</script>

<style scoped lang="scss">

</style>
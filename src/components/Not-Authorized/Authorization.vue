<template>
  <Header></Header>

  <main class="px-5 mb-8">
    <section class="flex items-center gap-1.5 mb-5">
      <Icon icon="ph:house-bold" color="#f68b31" width="22" height="22" />
      <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="26" height="26" />
      <p class="font-medium text-[rgba(0,0,0,.3)]">Авторизация</p>
    </section>

    <section class="relative h-screen">
      <h1 class="text-2xl font-semibold mb-6">Авторизация</h1>

      <form>
        <label class="field__item mb-5">
          <input type="text" class="entry__field" v-model="input_login" required/>
          <span class="label__title">Логин</span>
          <img src="/public/img/clear.svg" class="cross__close" @click="input_login=''" alt="Крестик">
        </label>

        <p class="flex justify-end font-medium text-[14px] text-orange mb-1">Забыли пароль?</p>

        <label class="field__item mb-5">
          <input type="password" class="entry__field" v-model="input_password" required/>
          <span class="label__title">Пароль</span>
          <img src="/public/img/clear.svg" class="cross__close" @click="input_password=''" alt="Крестик">
        </label>

        <div class="flex items-center gap-2">
          <p class="text-[rgba(0,0,0,.8)] font-medium">Нет аккаунта? Давайте
            <span class="text-orange font-semibold" @click="$router.push('/registration')">создадим его</span>
          </p>
          <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="18" height="18" />
        </div>

        <button class="btn absolute bottom-0" :class="[{btn__active: input_login !== '' && input_password !== ''}]">
          Войти
        </button>
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
    data() {
      return {
        input_login: '',
        input_password: ''
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
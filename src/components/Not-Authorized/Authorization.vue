<template>
  <Header></Header>

  <main class="px-5 mb-8">
    <section class="flex items-center gap-1.5 mb-5">
      <Icon icon="ph:house-bold" @click="$router.push('/')" color="#f68b31" width="22" height="22" />
      <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="26" height="26" />
      <p class="font-medium text-[rgba(0,0,0,.3)]">Авторизация</p>
    </section>

    <section class="relative h-screen">
      <h1 class="text-2xl font-semibold mb-6">Авторизация</h1>

      <form>
        <div class="mb-5">
          <label class="field__item mb-2">
            <input type="text" class="entry__field" v-model="input_login" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
            <span class="label__title">Логин</span>
            <img src="/public/img/clear.svg" class="cross__close" @click="input_login=''" alt="Крестик">
          </label>

          <p v-if="required_login === true && input_login === ''" class="text-sm text-required-field">Заполните поле "Логин"</p>
        </div>

        <p class="flex justify-end font-medium text-[14px] text-orange mb-1">Забыли пароль?</p>

        <div class="mb-5">
          <label class="field__item mb-2">
            <input type="password" class="entry__field" v-model="input_password" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
            <span class="label__title">Пароль</span>
            <img src="/public/img/clear.svg" class="cross__close" @click="input_password=''" alt="Крестик">
          </label>

          <p v-if="required_password === true && input_password === ''" class="text-sm text-required-field">Заполните поле "Пароль"</p>
        </div>

        <div class="flex items-center gap-2">
          <p class="text-[rgba(0,0,0,.8)] font-medium">Нет аккаунта? Давайте
            <span class="text-orange font-semibold" @click="$router.push('/registration')">создадим его</span>
          </p>
          <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="18" height="18" />
        </div>

        <button class="btn absolute bottom-0" @click="requiredField" :class="[{active: input_login !== '' && input_password !== ''}]">
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
        input_password: '',
        required_login: false,
        required_password: false
      }
    },
    methods: {
      requiredField() {
        if (this.required_login === false) {
          this.required_login = true
        }
        if (this.required_password === false) {
          this.required_password = true
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
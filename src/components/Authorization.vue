<template>
  <Header></Header>

  <main class="px-5 mb-8">
    <article class="flex items-center gap-1 text-xs mb-5">
      <Icon icon="ph:house-bold" @click="$router.push('/')" color="#f68b31" width="20" height="20" />
      <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="24" height="24" />
      <p class="font-medium text-[rgba(0,0,0,.3)]">{{page_title}}</p>
    </article>

    <section class="relative h-screen">
      <h1 class="text-2xl font-semibold mb-6">{{page_title}}</h1>

      <form @submit.prevent="signIn">
        <div class="mb-5">
          <label class="field__item mb-2">
            <input type="text" class="entry__field" v-model="input_login" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
            <span class="label__title">Логин</span>
            <img src="/img/clear.svg" class="cross__close" @click="input_login=''" alt="Крестик">
          </label>

          <p v-if="required_login === true && input_login === ''" class="text-sm text-required-field">Заполните поле "Логин"</p>
        </div>

        <p class="flex justify-end font-medium text-[14px] text-orange mb-1">Забыли пароль?</p>

        <div class="mb-5">
          <label class="field__item mb-2">
            <input type="password" class="entry__field" v-model="input_password" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
            <span class="label__title">Пароль</span>
            <img src="/img/clear.svg" class="cross__close" @click="input_password=''" alt="Крестик">
          </label>

          <p v-if="required_password === true && input_password === ''" class="text-sm text-required-field">Заполните поле "Пароль"</p>

          <p v-if="invalid === true" class="text-sm text-required-field">Неверный логин или пароль</p>
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
  import Header from "../UI/Header.vue";
  import {useUserStore} from "../store/UserStore.js";

  export default {
    name: 'Authorization',
    components: {
      Icon,
      Header
    },
    setup() {
      const userStore = useUserStore();
      return {userStore}
    },
    data() {
      return {
        page_title: 'Авторизация',
        input_login: '',
        input_password: '',
        required_login: false,
        required_password: false,
        invalid: false,
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
      },
      signIn() {
        if ((this.userStore.users.eMail !== this.input_login && this.input_login !== '') || (this.userStore.users.password !== this.input_password && this.input_password !== '')) {
          this.invalid = true
        }

        if (this.input_login && this.input_password) {
          if (this.input_login === this.userStore.users.eMail && this.input_password === this.userStore.users.password) {
            const parsed = JSON.stringify(this.userStore.users);
            localStorage.setItem('users', parsed);

            if (localStorage.getItem('users') != null) {
              this.$router.push(`/`);
              this.userStore.auth = true;
            }
          }
        }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
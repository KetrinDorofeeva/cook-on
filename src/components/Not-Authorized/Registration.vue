<template>
  <Header></Header>

  <main class="px-5 mb-8">
    <section class="flex items-center gap-1.5 mb-5">
      <Icon icon="ph:house-bold" @click="$router.push('/')" color="#f68b31" width="22" height="22" />
      <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="26" height="26" />
      <p class="font-medium text-[rgba(0,0,0,.3)]">Регистрация</p>
    </section>

    <section class="relative h-screen">
      <h1 class="text-2xl font-semibold mb-6">Регистрация</h1>

      <TabView v-model:activeIndex="active">
        <TabPanel header="Личная информация">
          <form>
            <div class="mb-5">
              <label class="field__item mb-2">
                <input type="text" class="entry__field" v-model="input_nickname" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
                <span class="label__title">Никнейм *</span>
                <img src="/public/img/clear.svg" class="cross__close" @click="input_nickname=''" alt="Крестик">
              </label>

              <p v-if="required_nickname === true && input_nickname === ''" class="text-sm text-required-field">Заполните поле "Никнейм"</p>
            </div>
          </form>
        </TabPanel>
        <TabPanel header="Логин и пароль">
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
            ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi.
          </p>
        </TabPanel>
      </TabView>

      <form v-if="show_login_and_password">

      </form>
    </section>
  </main>
</template>

<script setup>
  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';
  import {ref} from "vue";

  const active = ref(0);
</script>

<script>
  import {Icon} from "@iconify/vue";
  import Header from "../../UI/Not-Authorized/Header.vue";

  export default {
    name: 'Registration',
    components: {
      Icon,
      Header
    },
    data() {
      return {
        show_personal_information: false,
        show_login_and_password: false,
        input_nickname: '',
        // input_password: '',
        required_nickname: false,
        // required_password: false
      }
    },
    methods: {
      requiredField() {
        if (this.required_nickname === false) {
          this.required_nickname= true
        }
        // if (this.required_password === false) {
        //   this.required_password = true
        // }
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
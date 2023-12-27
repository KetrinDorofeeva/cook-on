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

      <TabView v-model:activeIndex="active" class="registration__tabs">
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

            <div class="mb-5">
              <label class="field__item mb-2">
                <input type="text" id="calendarBirthday" v-model="input_date_birth" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"
                    datepicker datepicker-autohide datepicker-format="dd.mm.yyyy" datepicker-orientation="bottom left" datepicker-title="Дата рождения"
                    class="entry__field">
                <span class="label__title">Дата рождения *</span>

                <span class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                  <Icon icon="solar:calendar-bold" class="calendar__icon w-[22px] h-[22px] text-[rgba(0,0,0,.3)] transition"/>
                </span>
              </label>

              <p v-if="required_date_birth === true" class="text-sm text-required-field">Заполните поле "Дата рождения"</p>
            </div>

            <div class="mb-5">
              <label class="field__item mb-2">
                <Dropdown v-model="input_selected_gender" :options="genders" optionLabel="name"
                          required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"
                          class="entry__field"/>
                <span class="label__title">Пол *</span>
              </label>

              <p v-if="required_gender === true" class="text-sm text-required-field">Заполните поле "Пол"</p>
            </div>
          </form>
        </TabPanel>
        <TabPanel header="Логин и пароль">
          <form>
            <div class="mb-5">
              <label class="field__item mb-2">
                <input type="text" class="entry__field" v-model="input_email" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
                <span class="label__title">Почта *</span>
                <img src="/public/img/clear.svg" class="cross__close" @click="input_email=''" alt="Крестик">
              </label>

              <p v-if="required_email === true && input_email === ''" class="text-sm text-required-field">Заполните поле "Почта"</p>
            </div>

            <div class="mb-5">
              <label class="field__item mb-2">
                <input type="text" class="entry__field" v-model="input_password" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
                <span class="label__title">Пароль *</span>
                <img src="/public/img/clear.svg" class="cross__close" @click="input_password=''" alt="Крестик">
              </label>

              <p v-if="required_password === true && input_password === ''" class="text-sm text-required-field">Заполните поле "Пароль"</p>
            </div>

            <div class="mb-5">
              <label class="field__item mb-2">
                <input type="text" class="entry__field" v-model="input_repeat_password" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"/>
                <span class="label__title">Повторите пароль *</span>
                <img src="/public/img/clear.svg" class="cross__close" @click="input_repeat_password=''" alt="Крестик">
              </label>

              <p v-if="required_repeat_password === true && input_repeat_password === ''" class="text-sm text-required-field">Заполните поле "Повторите пароль"</p>
            </div>
          </form>
        </TabPanel>
      </TabView>

      <div class="flex items-center gap-2">
        <p class="text-[rgba(0,0,0,.8)] font-medium">У вас уже есть аккаунт?
          <span class="text-orange font-semibold" @click="$router.push('/authorization')">Авторизоваться</span>
        </p>
        <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="18" height="18" />
      </div>

      <button class="btn absolute bottom-0" @click="requiredField" :class="[{active: input_nickname !== '' && input_date_birth !== '' && input_selected_gender !== '' && input_email !== '' && input_password !== '' && input_repeat_password !== ''}]">
        Зарегистрироваться
      </button>
    </section>
  </main>
</template>

<script setup>
  import TabView from 'primevue/tabview';
  import TabPanel from 'primevue/tabpanel';
  import Dropdown from "primevue/dropdown";

  import {ref} from "vue";
  const active = ref(0);

  const input_selected_gender = ref();
  const genders = ref([
    { name: 'Мужской', value: 1 },
    { name: 'Женский', value: 2 },
  ]);
</script>

<script>
  import {Icon} from "@iconify/vue";
  import Header from "../../UI/Not-Authorized/Header.vue";

  // import {Datepicker} from "flowbite-datepicker";

  export default {
    name: 'Registration',
    components: {
      Icon,
      Header
    },
    data() {
      return {
        page_title: 'Регистрация',
        input_nickname: '',
        input_date_birth: '',
        input_email: '',
        input_password: '',
        input_repeat_password: '',
        required_nickname: false,
        required_date_birth: false,
        required_gender: false,
        required_email: false,
        required_password: false,
        required_repeat_password: false
      }
    },
    methods: {
      requiredField() {
        if (this.required_nickname === false) {
          this.required_nickname = true
        }
        if (this.required_date_birth === false) {
          this.required_date_birth = true
        }
        if (this.required_gender === false) {
          this.required_gender = true
        }
        if (this.required_email === false) {
          this.required_email = true
        }
        if (this.required_password === false) {
          this.required_password = true
        }
        if (this.required_repeat_password === false) {
          this.required_repeat_password = true
        }
      },

      // datePicker() {
      //   const datepickerEl = document.getElementById('calendarBirthday');
      //
      //   new Datepicker(datepickerEl, {
      //     maxDate: new Date(),
      //     format: 'dd.mm.yyyy',
      //   });
      // },
    }
  }
</script>

<style lang="scss">
  .registration__tabs .p-tabview-header .p-tabview-title {
    @apply px-[30px]
  }

  // Календарь
  .datepicker-cell.focused {
    @apply bg-orange text-white
  }
  .field__item .entry__field:focus ~ span .calendar__icon,
  .field__item .entry__field:valid ~ span .calendar__icon {
    @apply text-orange
  }
  //.datepicker .datepicker-cell.disabled {
  //  @apply text-gray-300
  //}

  // Пол
  .p-dropdown-trigger svg {
    @apply h-[19px] w-[19px] rotate-180 mr-4 text-[rgba(0,0,0,.3)]
  }
  .p-inputwrapper-focus {
    border: 1px solid orange !important;
    background: white !important;
  }
  //.p-inputwrapper-focus svg {
  //  @apply rotate-0 text-orange ease-in duration-200;
  //}
</style>
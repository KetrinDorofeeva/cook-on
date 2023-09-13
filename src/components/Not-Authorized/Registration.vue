<template>
  <Header></Header>

  <main class="px-5 mb-8">
    <section class="flex items-center gap-1.5 mb-5">
      <Icon icon="ph:house-bold" @click="$router.push('/')" color="#f68b31" width="22" height="22" />
      <Icon icon="iconamoon:arrow-right-2-light" color="rgba(0,0,0,.3)" width="26" height="26" />
      <p class="font-medium text-[rgba(0,0,0,.3)]">{{page_title}}</p>
    </section>

    <section class="relative h-screen">
      <h1 class="text-2xl font-semibold mb-6">{{page_title}}</h1>

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

            <div class="mb-5">
              <label class="field__item mb-2">
                <input type="text" id="calendarBirthday" required oninvalid="this.setCustomValidity(' ')" oninput="setCustomValidity('')"
                    datepicker datepicker-autohide datepicker-format="dd.mm.yyyy" datepicker-orientation="bottom left" datepicker-title="Дата рождения"
                    class="entry__field">
                <span class="label__title">Дата рождения *</span>

                <span class="absolute inset-y-0 right-0 flex items-center pr-3.5 pointer-events-none">
                  <svg class="calendar__icon transition w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
              </label>

              <p v-if="required_date_birth === true" class="text-sm text-required-field">Заполните поле "Дата рождения"</p>
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

  import {Datepicker} from "flowbite-datepicker";

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
        required_nickname: false,
        required_date_birth: false
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
</style>
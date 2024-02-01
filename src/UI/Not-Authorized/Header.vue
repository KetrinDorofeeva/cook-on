<template>
  <header class="flex items-center justify-between px-5 py-3.5 mb-7 shadow-header">
    <div class="font-header text-3xl" @click="$router.push('/')">CookOn</div>

    <div class="flex items-center gap-7">
      <Icon icon="ic:baseline-search" color="#f68b31" width="27" height="27" />

      <div @click="$router.push('/authorization')" v-if="userStore.auth === false" class="flex items-center">
        <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="10" height="10" />
        <Icon icon="lucide:door-open" class="scale-x-[-1]" color="#f68b31" width="26" height="26" />
      </div>

      <div @click="$router.push('/')" v-if="userStore.auth === true" class="flex items-center">
        <Icon icon="lucide:door-open" @click="userStore.logout" class="scale-x-[-1]" color="#f68b31" width="26" height="26" />
        <Icon icon="mingcute:arrow-up-fill" class="rotate-90" color="#f68b31" width="10" height="10" />
      </div>
    </div>
  </header>
</template>

<script>
  import {Icon} from "@iconify/vue";
  import {useUserStore} from "../../store/UserStore.js";

  export default {
    name: 'Header',
    components: {
      Icon
    },
    setup() {
      const userStore = useUserStore();
      return {userStore}
    },
  }
</script>

<style scoped lang="scss">

</style>
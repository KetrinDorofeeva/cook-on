<template>
  <router-view></router-view>
  <BottomMenu v-if="userStore.auth === true"></BottomMenu>
</template>

<script>
  import BottomMenu from "./UI/BottomMenu.vue";
  import {useUserStore} from "./store/UserStore.js";

  export default {
    name: 'App',
    components: {BottomMenu},
    setup() {
      const userStore = useUserStore();
      return {userStore}
    },
  }
</script>

<style scoped lang="scss">

</style>
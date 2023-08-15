<template>
  <header class="flex items-center justify-between px-5 py-3.5 mb-7 shadow-header">
    <div class="font-header text-3xl">CookOn</div>

    <div class="flex items-center">
      <Icon icon="ic:baseline-search" class="mr-7" color="#f68b31" width="27" height="27" />

      <div class="flex items-center relative">
        <Icon icon="mingcute:arrow-up-fill" class="absolute right-login-arrow rotate-90" color="#f68b31" width="10" height="10" />
        <Icon icon="lucide:door-open" class="scale-x-opposite-side" color="#f68b31" width="26" height="26" />
      </div>
    </div>
  </header>
</template>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'Header',
    components: {
      Icon
    }
  }
</script>

<style scoped lang="scss">

</style>
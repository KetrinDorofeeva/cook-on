<template>
  <article class="fixed bottom-0 w-full flex items-center justify-between py-3 px-5 bg-white whitespace-nowrap shadow-[0_0_3px_rgba(0,0,0,.06)]">
    <section class="text-[11px] text-center">
      <Icon icon="ph:house-bold" class="inline-block mb-px" width="24px" height="24px"  style="color: #F68B31" />
      <p>Главная</p>
    </section>
    <section class="text-[11px] text-center">
      <img src="/public/img/cook.svg" class="inline-block mb-px" alt="Мои рецепты">
      <p class="text-[rgba(0,0,0,.6)]">Мои рецепты</p>
    </section>
    <section class="text-[11px] text-center">
      <Icon icon="ph:heart-bold" class="inline-block mb-px" width="22px" height="22px"  style="color: #D2D2D2" />
      <p class="text-[rgba(0,0,0,.6)]">Избранное</p>
    </section>
    <section class="text-[11px] text-center">
      <img src="/public/img/user.svg" class="inline-block mb-px" alt="Профиль">
      <p class="text-[rgba(0,0,0,.6)]">Профиль</p>
    </section>
  </article>
</template>

<script setup>

</script>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'BottomMenu',
    components: {
      Icon
    },
  }
</script>

<style scoped lang="scss">

</style>
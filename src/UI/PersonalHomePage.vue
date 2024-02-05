<template>
  <article class="mb-7">
    <div class="text-xl font-bold mb-4">Личное</div>

    <article class="flex items-center gap-4">
      <div class="w-[120px] h-[103px] py-3 pl-3 pr-[34px] border-[1.5px] border-solid border-orange rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.15)]">
        <Icon icon="akar-icons:circle-plus" class="mb-3.5" width="28px" height="28px"  style="color: #F68B31" />
        <p class="text-orange text-sm font-bold">Добавить<br>рецепт</p>
      </div>
      <div class="w-[120px] h-[103px] py-3 pl-3 pr-[34px] rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.15)]">
        <img src="/public/img/book-mark.svg" class="mb-3.5" alt="Мои рецепты">
        <p class="text-sm font-bold">Мои<br>рецепты</p>
      </div>
      <div class="w-[120px] h-[103px] py-3 pl-3 pr-[34px] rounded-[20px] shadow-[0_0_8px_rgba(0,0,0,.15)]">
        <img src="/public/img/heart.svg" class="mb-3.5" alt="Избранное">
        <p class="text-sm font-bold">Избранное</p>
      </div>
    </article>
  </article>
</template>

<script setup>

</script>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'PersonalHomePage',
    components: {
      Icon
    },
  }
</script>

<style scoped lang="scss">

</style>
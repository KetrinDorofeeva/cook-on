<template>
  <article  class="px-5 mb-8">
    <fieldset class="px-[18px] pt-[27px] pb-[37px] border-2 border-solid border-[#FEDD6C] rounded-xl">
      <legend class="text-xl font-bold uppercase">Понравился рецепт?</legend>

      <section v-if="assessment_set === false">
        <p class="text-[rgba(36,31,32,.7)] text-sm font-bold uppercase mb-4">Оценить:</p>

        <div class="flex items-center justify-between mb-[30px]">
          <div class="flex items-center gap-[11px] px-[11px] py-2 shadow-[0_0_4px_rgba(0,0,0,.1)] rounded-xl">
            <img src="/public/img/emojis/1.png" class="w-[22px] h-[22px]" alt="1">
            <p class="text-lg">1</p>
          </div>
          <div class="flex items-center gap-[11px] px-[11px] py-2 shadow-[0_0_4px_rgba(0,0,0,.1)] rounded-xl">
            <img src="/public/img/emojis/2.png" class="w-[22px] h-[22px]" alt="2">
            <p class="text-lg">2</p>
          </div>
          <div class="flex items-center gap-[11px] px-[11px] py-2 shadow-[0_0_4px_rgba(0,0,0,.1)] rounded-xl">
            <img src="/public/img/emojis/3.png" class="w-[22px] h-[22px]" alt="3">
            <p class="text-lg">3</p>
          </div>
          <div class="flex items-center gap-[11px] px-[11px] py-2 shadow-[0_0_4px_rgba(0,0,0,.1)] rounded-xl">
            <img src="/public/img/emojis/4.png" class="w-[22px] h-[22px]" alt="4">
            <p class="text-lg">4</p>
          </div>
          <div @click="assessment_set = true" class="flex items-center gap-[11px] px-[11px] py-2 shadow-[0_0_4px_rgba(0,0,0,.1)] rounded-xl">
            <img src="/public/img/emojis/5.png" class="w-[22px] h-[22px]" alt="5">
            <p class="text-lg">5</p>
          </div>
        </div>
      </section>

      <section v-else>
        <p class="text-[rgba(36,31,32,.7)] text-sm font-bold uppercase mb-4">Спасибо за оценку!</p>

        <div class="flex items-center gap-7 mb-[30px]">
          <div class="flex items-center gap-4">
            <div class="flex items-center gap-[11px] px-[11px] py-2 shadow-[0_0_4px_rgba(0,0,0,.1)] rounded-xl">
              <img src="/public/img/emojis/5.png" class="w-[22px] h-[22px]" alt="5">
              <p class="text-lg">5</p>
            </div>
            <img src="/img/clear.svg" @click="assessment_set = false" class="w-[34px] h-[34px]" alt="Крестик">
          </div>

          <div class="pl-3 border-l-2 border-solid border-[rgba(196,196,196,.5)]">
            <div class="flex items-center gap-2.5">
              <p class="text-xl font-bold">4,6</p>
              <img src="/public/img/emojis/5.png" class="w-[15px] h-[15px]" alt="5">
            </div>
            <p class="text-sm text-[#B9B9B9]">Рейтинг из 6 оценок</p>
          </div>
        </div>
      </section>

      <section class="flex items-center justify-between">
        <div class="flex items-center gap-2 py-3.5 px-[22px] w-[170px] text-[#DD727B] border-[1.5px] border-solid border-[#DD727B] rounded-[20px] shadow-[0_0_4px_rgba(0,0,0,.1)] whitespace-nowrap">
          <Icon icon="ph:heart-bold" width="22px" height="22px" />
          <button class="text-sm font-bold">В избранное</button>
        </div>
        <div class="flex items-center gap-2 py-3.5 px-[22px] w-[170px text-[#212121] rounded-[20px] shadow-[0_0_4px_rgba(0,0,0,.2)] whitespace-nowrap">
          <Icon icon="material-symbols:share" width="22px" height="22px" />
          <button class="text-sm font-bold">Поделиться</button>
        </div>
      </section>
    </fieldset>
  </article>
</template>

<script setup>

</script>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'RecipePage',
    components: {Icon},
    data() {
      return {
        assessment_set: false
      }
    },
  }
</script>

<style scoped lang="scss">

</style>
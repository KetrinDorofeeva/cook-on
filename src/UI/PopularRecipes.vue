<template>
  <article>
    <div class="flex items-center justify-between mb-4">
      <div class="text-xl font-bold">Популярные</div>

      <div class="flex items-center">
        <div class="text-orange font-bold mr-1.5">Все</div>
        <Icon icon="mingcute:arrow-up-fill" class="right-login-arrow rotate-90" color="#f68b31" width="18" height="18" />
      </div>
    </div>

    <section class="grid grid-cols-1 gap-7">
      <div class="shadow-card-main rounded-b-xl">
        <div class="relative">
          <section class="flex items-center absolute left-5 bottom-2.5">
            <div class="bg-category rounded-category-hashtag text-xs font-semibold px-category-hashtag-x py-category-hashtag-y">СУПЫ</div>
            <div class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-category-hashtag text-xs font-semibold text-white px-category-hashtag-x py-category-hashtag-y">#Хит</div>
          </section>
          <img src="/public/img/popular/soup-puree.png" class="rounded-t-xl">
        </div>

        <div class="px-5 py-5">
          <div class="text-xl font-semibold leading-card-title mb-2">Суп-пюре из тыквы со сливками</div>
          <p class="text-justify leading-card-text mb-4">Тыква, картошка, морковь, репчатый лук, чеснок, сливочное масло, сливки 10% жирности, соль, специи</p>

          <div class="flex items-center">
            <Icon icon="bx:food-menu" color="#f4b990" width="19" height="19" />
            <div class="">Подробнее</div>
            <Icon icon="ep:arrow-up-bold" color="#b2b2b2" width="19" height="19" />
          </div>
        </div>
      </div>

      <div class="shadow-card-main rounded-b-xl">
        <div class="relative">
          <section class="flex items-center absolute left-5 bottom-2.5">
            <div class="bg-category rounded-category-hashtag text-xs font-semibold px-category-hashtag-x py-category-hashtag-y">САЛАТЫ</div>
            <div class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-category-hashtag text-xs font-semibold text-white px-category-hashtag-x py-category-hashtag-y">#Хит</div>
            <div class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-category-hashtag text-xs font-semibold text-white px-category-hashtag-x py-category-hashtag-y">#Готовить легко</div>
          </section>
          <img src="/public/img/popular/salad-shrimp.png" class="rounded-t-xl">
        </div>

        <div class="px-5 py-5">
          <div class="text-xl font-semibold leading-card-title mb-2">Салат из креветок с огурцом и яйцом</div>
          <p class="text-justify leading-card-text">Креветки, куриное яйцо, огурец, твердый сыр, майонез, соль, укроп</p>
        </div>
      </div>
    </section>
  </article>
</template>

<script>
  import {Icon} from "@iconify/vue";

  export default {
    name: 'PopularRecipes',
    components: {
      Icon
    }
  }
</script>

<style scoped lang="scss">

</style>
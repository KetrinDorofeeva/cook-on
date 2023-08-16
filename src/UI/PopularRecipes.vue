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
      <!-- Первый рецепт -->
      <div class="shadow-card-main rounded-b-xl">
        <div class="relative">
          <section class="flex items-center absolute left-5 bottom-2.5">
            <div class="bg-category rounded-br-ten text-xs font-semibold px-category-hashtag-x py-category-hashtag-y">СУПЫ</div>
            <div class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-br-ten text-xs font-semibold text-white px-category-hashtag-x py-category-hashtag-y">#Хит</div>
          </section>
          <img src="/public/img/popular/soup-puree.png" class="rounded-t-xl">
        </div>

        <div class="py-5">
          <div class="px-5 mb-3.5">
            <div class="text-xl font-semibold leading-card-title mb-2">Суп-пюре из тыквы со сливками</div>
            <p class="text-justify leading-card-text mb-4">Тыква, картошка, морковь, репчатый лук, чеснок, сливочное масло, сливки 10% жирности, соль, специи</p>

            <div class="flex items-center">
              <Icon icon="bx:food-menu" color="#f4b990" width="19" height="19" />
              <p class="text-more ml-2 font-medium">Подробнее</p>
              <Icon icon="ep:arrow-up-bold" class="ml-3" color="rgba(33,33,33,.4)" width="18" height="18" />
            </div>
          </div>

          <hr class="h-px bg-hr w-full mb-4">

          <!-- Выпадающий список (кКал, сложность, время, БЖУ) -->
          <div class="mb-6">
            <div class="flex items-center justify-between px-5 mb-4">
              <div class="flex items-center">
                <Icon icon="bi:pie-chart-fill" color="#f4b990" width="19" height="19" />
                <p class="text-more ml-2 font-medium">74,26 кКал</p>
              </div>
              <div class="flex items-center">
                <Icon icon="emojione-monotone:pot-of-food" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">Легко</p>
              </div>
              <div class="flex items-center">
                <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">40 мин.</p>
              </div>
            </div>

            <hr class="h-px bg-hr w-full mb-4">

            <div class="flex items-center justify-between px-5 mb-4">
              <div class="flex items-center">
                <Icon icon="file-icons:dna" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">1,73 г.</p>
              </div>
              <div class="flex items-center">
                <Icon icon="ph:drop-bold" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">3,97 г.</p>
              </div>
              <div class="flex items-center">
                <Icon icon="lucide:wheat" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">9,05 г.</p>
              </div>
            </div>

            <hr class="h-px bg-hr w-full">
          </div>

          <div class="flex items-center justify-between px-5">
            <div class="flex items-center">
              <Icon icon="ph:heart-bold" color="#dd727b" width="30" height="30" />
              <div class="flex items-center">
                <Icon icon="ph:star-fill" class="ml-6" color="#f7d000" width="30" height="30" />
                <p class="text-grade-star font-medium ml-2">5,0</p>
              </div>
            </div>

            <button class="px-4 py-1.5 bg-orange text-white font-semibold rounded-br-ten">К рецепту</button>
          </div>
        </div>
      </div>

      <!-- Второй рецепт -->
      <div class="shadow-card-main rounded-b-xl">
        <div class="relative">
          <section class="flex items-center absolute left-5 bottom-2.5">
            <div class="bg-category rounded-br-ten text-xs font-semibold px-category-hashtag-x py-category-hashtag-y">САЛАТЫ</div>
            <div class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-br-ten text-xs font-semibold text-white px-category-hashtag-x py-category-hashtag-y">#Хит</div>
            <div class="[&:not(:first-child)]:ml-2 bg-category-hashtag rounded-br-ten text-xs font-semibold text-white px-category-hashtag-x py-category-hashtag-y">#Готовить легко</div>
          </section>
          <img src="/public/img/popular/salad-shrimp.png" class="rounded-t-xl">
        </div>

        <div class="py-5">
          <div class="px-5 mb-3.5">
            <div class="text-xl font-semibold leading-card-title mb-2">Салат из креветок с огурцом и яйцом</div>
            <p class="text-justify leading-card-text mb-4">Креветки, куриное яйцо, огурец, твердый сыр, майонез, соль, укроп</p>

            <div class="flex items-center">
              <Icon icon="bx:food-menu" color="#f4b990" width="19" height="19" />
              <p class="text-more ml-2 font-medium">Подробнее</p>
              <Icon icon="ep:arrow-up-bold" class="ml-3" color="rgba(33,33,33,.4)" width="18" height="18" />
            </div>
          </div>

          <hr class="h-px bg-hr w-full mb-4">

          <!-- Выпадающий список (кКал, сложность, время, БЖУ) -->
          <div class="mb-6">
            <div class="flex items-center justify-between px-5 mb-4">
              <div class="flex items-center">
                <Icon icon="bi:pie-chart-fill" color="#f4b990" width="19" height="19" />
                <p class="text-more ml-2 font-medium">201,92 кКал</p>
              </div>
              <div class="flex items-center">
                <Icon icon="emojione-monotone:pot-of-food" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">Легко</p>
              </div>
              <div class="flex items-center">
                <Icon icon="wi:time-3" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">15 мин.</p>
              </div>
            </div>

            <hr class="h-px bg-hr w-full mb-4">

            <div class="flex items-center justify-between px-5 mb-4">
              <div class="flex items-center">
                <Icon icon="file-icons:dna" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">12,34 г.</p>
              </div>
              <div class="flex items-center">
                <Icon icon="ph:drop-bold" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">15,99 г.</p>
              </div>
              <div class="flex items-center">
                <Icon icon="lucide:wheat" color="#f4b990" width="22" height="22" />
                <p class="text-more ml-2 font-medium">2,41 г.</p>
              </div>
            </div>

            <hr class="h-px bg-hr w-full">
          </div>

          <div class="flex items-center justify-between px-5">
            <div class="flex items-center">
              <Icon icon="ph:heart-bold" color="#dd727b" width="30" height="30" />
              <div class="flex items-center">
                <Icon icon="ph:star-fill" class="ml-6" color="#f7d000" width="30" height="30" />
                <p class="text-grade-star font-medium ml-2">4,8</p>
              </div>
            </div>

            <button class="px-4 py-1.5 bg-orange text-white font-semibold rounded-br-ten">К рецепту</button>
          </div>
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
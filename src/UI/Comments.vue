<template>
  <article class="px-5">
    <p class="text-xl font-semibold uppercase tracking-[0.8px]">Комментарии <span class="font-normal text-[rgba(0,0,0,.5)]">(2)</span></p>

    <article v-if="userStore.auth === true" class="pb-[18px] mb-4 border-b-[1.5px] border-solid border-[rgba(237,237,237,.5)]">
      <textarea class="w-full py-2.5 px-4 mt-3 mb-2.5 border-0 bg-empty-field rounded-[10px] cursor-pointer" placeholder="Добавить комментарий"></textarea>
      <button class="w-full py-3 mb-2 text-[rgba(36,31,32,.5)] text-lg bg-empty-field rounded-[10px] uppercase">Отправить</button>
      <p class="text-[10px] text-justify">
        <span class="text-[rgba(36,31,32,.5)]">Обратите внимание: все материалы проверяются модераторами. <br>Нажимая “Отправить”, вы принимаете условия</span> <span class="text-orange font-medium">Пользовательского соглашения CookOn</span>
      </p>
    </article>

    <section class="border-b border-solid border-[rgba(237,237,237,.5)] py-3" v-for="comment in commentDetails.comments" :key="comment.id">
      <p class="font-bold text-lg mb-1.5">{{comment.commentator}}</p>
      <p class="font-light text-[rgba(0,0,0,.8)] text-justify mb-3">{{comment.text}}</p>
      <p class="font-light text-[rgba(0,0,0,.6)] text-sm">{{comment.date}} в {{comment.time}}</p>
    </section>
  </article>
</template>

<script setup>
  import {useUserStore} from "../store/UserStore.js";
  const userStore = useUserStore();

  import {useCommentDetails} from "../store/CommentDetails.js";
  const commentDetails = useCommentDetails();
</script>

<script>
  export default {
    name: 'Comments',
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
  textarea {
    box-shadow: none;
    transition: .2s ease;
  }
  textarea:active,
  textarea:focus {
    outline: 0;
    @apply bg-white border-[1px] border-solid border-orange
  }
</style>
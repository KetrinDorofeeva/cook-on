<template>
  <article class="px-5">
    <p class="text-xl font-semibold uppercase tracking-[0.8px]">Комментарии <span class="font-normal text-[rgba(0,0,0,.5)]">({{number_comments}})</span></p>

    <article v-if="userStore.auth === true" class="pb-[18px] mb-4 border-b-[1.5px] border-solid border-[rgba(237,237,237,.5)]">
      <textarea v-model="input_comment" class="h-[95px] w-full py-2.5 px-4 mt-3 border-0 bg-empty-field rounded-[10px] cursor-pointer" placeholder="Добавить комментарий"></textarea>
      <p v-if="required_comment === true && input_comment === ''" class="text-sm text-required-field">Введите комментарий</p>
      <button @click="sendComment" class="btn mb-2 mt-2.5" :class="[{active: input_comment !== ''}]">Отправить</button>
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
  import {useCommentDetails} from "../store/CommentDetails.js";

  // Дата создания комментария
  const date = new Date();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  const format_date = ('0' + day).slice(-2) + '.' + ('0' + month).slice(-2) + '.' + year;

  // Время создания комментария
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const format_time = hours + ':' + minutes;

  export default {
    name: 'Comments',
    data() {
      return {
        required_comment: false,
        id: Date.now(),
        commentator: 'kdorf7',
        input_comment: '',
        date: `${format_date}`,
        time: `${format_time}`,
        id_recipe: 1,
        number_comments: useCommentDetails().comments.length
      }
    },
    methods: {
      sendComment() {
        if (this.required_comment === false) {
          this.required_comment = true
        }

        const newComment = {
          id: this.id,
          commentator: this.commentator,
          text: this.input_comment,
          date: this.date,
          time: this.time,
          idRecipe: this.id_recipe
        }

        if (this.input_comment) {
          useCommentDetails().comments.push(newComment);
          this.input_comment = '';
          this.required_comment = false;
          this.number_comments += 1;
        }
      },
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
    box-shadow: none;
    @apply bg-white border-[1px] border-solid border-orange
  }
</style>
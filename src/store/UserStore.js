import {defineStore} from "pinia";
import {ref} from "vue";
import router from "../router/router.js";

// Карточка рецепта
export const useUserStore = defineStore('userStore', () => {
    const users = ref({
        id: 1,
        nikname: 'kdorf7',
        dateBirth: '22.05.2001',
        gender: 'Женщина',
        eMail: 'multiveb@mail.ru',
        password: 'test',
    });

    const auth = ref(false);

    const logout = () => {
        router.push(`/`)
        auth.value = false
        localStorage.removeItem('users');
    }

    return {users, auth, logout}
})
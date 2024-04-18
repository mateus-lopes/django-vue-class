import { defineStore } from "pinia";
import { reactive } from "vue";
import { service_login, service_register } from "../service/user";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const state = reactive({
    userId: null,
    acess: "",
    email: "",
    fullName: "",
    userLogged: false,
    message: "",
    isLoading: false,
  });

  const actions = {
    async login(credentials) {
      state.isLoading = true;
      try {
        const data = await service_login(credentials);
        state.userLogged = data;
        state.userId = data.id;
        state.acess = data.acess;
        state.email = data.email;
        state.message = data.message;
      } catch (error) {
        console.error(error);
        state.message = "Erro ao fazer login";
      } finally {
        state.isLoading = false;
        router.push({ name: "home" });
      }
    },
    async register(usuario) {
      state.isLoading = true;
      try {
        const data = await service_register(usuario);
        state.userLogged = data;
        state.email = data.email;
        state.message = data.message;
      } catch (error) {
        console.error(error);
        state.message = "Erro ao registrar";
      } finally {
        state.isLoading = false;
        router.push({ name: "auth/sign-in" });
      }
    },
    logoutUser() {
      state.userLogged = false;
    },
    getUser() {
      return {
        id: state.userId,
        acess: state.acess,
        email: state.email,
        fullName: state.fullName,
      };
    },
    userLogged() {
      return state.userLogged;
    }
  };

  return {
    ...state,
    ...actions,
  };
});
import { defineStore } from "pinia";
import { reactive } from "vue";
import { service_login, service_register } from "../service/user";
import { useRouter } from "vue-router";

export const useUserStore = defineStore("user", () => {
  const router = useRouter();
  const state = reactive({
    userId: null,
    fullName: "",
    email: "",
    logged: false,
    message: "",
    isLoading: false,
  });

  const actions = {
    async login(credentials) {
      let data;
      state.isLoading = true;
      try {
        data = await service_login(credentials);
        if (!data.error) {
          router.push({ name: "home" });
        } else {
          state.message = data.error;
        }
      } catch (error) {
        state.message = error;
      } finally {
        if (data) {
          state.userId = data.id;
          state.email = data.email;
          state.fullName = data.full_name;
          state.logged = true;
        }
        state.isLoading = false;
      }
    },
    async register(usuario) {
      let data;
      state.isLoading = true;
      try {
        data = await service_register(usuario);
        state.message = data.error;
        if (!data.error) {
          router.push({ name: "sign-in" });
        } else {
          state.message = data.error;
        }
      } catch (error) {
        state.message = error;
      } finally {
        state.isLoading = false;
      }
    },
    logout() {
      state.isLoading = true;
      setTimeout(() => {
        state.isLoading = false;
        router.push({ name: "sign-in" });
      }, 1000);
      state.logged = false;
    },
    isLogged() {
      return state.logged;
    },
    getUser() {
      return {
        id: state.userId,
        email: state.email,
        fullName: state.fullName,
      };
    },
    getLoader() { 
      return state.isLoading; 
    },
    getMessage() {
      return state.message;
    }
  };

  return {
    ...state,
    ...actions,
  };
});
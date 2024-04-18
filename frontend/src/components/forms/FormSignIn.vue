
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import ButtonPrimary from "@/components/btns/BtnPrimary.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";

const userStore = useUserStore();

const email = ref("");
const password = ref("");
const error = ref("");

const login = async () => {
  if (!email.value || !password.value) {
    error.value = "Preencha todos os campos";
    return;
  }
  console.log("Nome de usuário:", email.value);
  console.log("Senha:", password.value);

  userStore.login({
    email: email.value,
    password: password.value,
  });
};

const loginWithGoogle = () => {
  console.log("Logar com o Google");
};

const loginWithGithub = () => {
  console.log("Logar com o Github");
};
</script>
<template>
  <form @submit.prevent="login">
    <div class="mb-4 flex flex-col">
      <input
        class="border px-4 py-2 rounded-3xl"
        type="email"
        id="email"
        v-model="email"
        placeholder="Digite seu nome de usuário"
        required
      />
    </div>
    <div class="mb-4 flex flex-col">
      <input
        class="border px-4 py-2 rounded-3xl"
        type="password"
        id="password"
        v-model="password"
        placeholder="Digite sua senha"
        required
      />
    </div>
    <button-primary value="Entrar"></button-primary>
    <div class="p-4 flex gap-10 justify-center border-t mt-5">
      <button class="block" @click="loginWithGoogle">
        <google-icon></google-icon>
      </button>
      <button class="block" @click="loginWithGithub">
        <github-icon></github-icon>
      </button>
    </div>
    {{ error }}
    <router-link
      class="text-gray-400 hover:underline mt-2 block text-center text-sm"
      to="/auth/forgot-password"
      >Esqueci minha senha</router-link
    >
    <router-link
      class="text-gray-400 hover:underline mt-2 block text-center text-sm"
      to="/auth/sign-up"
      >Ainda não tem uma conta?</router-link
    >
  </form>
</template>

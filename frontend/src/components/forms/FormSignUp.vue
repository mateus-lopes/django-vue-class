
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import ButtonPrimary from "@/components/btns/BtnPrimary.vue";
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";

const userStore = useUserStore();

const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");

const register = async () => {
  if (password.value !== confirmPassword.value) {
    alert("As senhas não coincidem!");
    return;
  }

  console.log("Nome completo:", fullName.value);
  console.log("Email:", email.value);
  console.log("Senha:", password.value);
  console.log("Confirmação de senha:", confirmPassword.value);
  userStore.register({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  });
};

const registerWithGoogle = () => {
  console.log("Logar com o Google");
};

const registerWithGithub = () => {
  console.log("Logar com o Github");
};
</script>
<template>
  <form @submit.prevent="register">
    <div class="mb-4 flex flex-col">
      <input
        class="border px-4 py-2 rounded-3xl"
        type="text"
        id="fullName"
        v-model="fullName"
        placeholder="Digite seu nome completo"
        required
      />
    </div>
    <div class="mb-4 flex flex-col">
      <input
        class="border px-4 py-2 rounded-3xl"
        type="email"
        id="email"
        v-model="email"
        placeholder="Digite seu email"
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
    <div class="mb-4 flex flex-col">
      <input
        class="border px-4 py-2 rounded-3xl"
        type="password"
        id="confirmPassword"
        v-model="confirmPassword"
        placeholder="Confirme sua senha"
        required
      />
    </div>
    <button-primary value="Cadastrar"></button-primary>
    <div class="p-4 flex gap-10 justify-center border-t mt-5">
      <button class="block" @click="registerWithGoogle">
        <google-icon></google-icon>
      </button>
      <button class="block" @click="registerWithGithub">
        <github-icon></github-icon>
      </button>
    </div>
    <router-link
      class="text-gray-400 hover:underline mt-2 block text-center text-sm"
      to="/auth/sign-in"
    >
      Já tem uma conta? Faça login
    </router-link>
  </form>
</template>

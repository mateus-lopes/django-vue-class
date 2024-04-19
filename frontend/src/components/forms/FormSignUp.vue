
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import ButtonPrimary from "@/components/btns/BtnPrimary.vue";

const userStore = useUserStore();
const fullName = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const error = ref("");

const register = async () => {
  error.value = "";

  if (password.value !== confirmPassword.value) {
    error.value = "As senhas não coincidem!";
    return;
  }

  userStore.register({
    fullName: fullName.value,
    email: email.value,
    password: password.value,
  });
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
    <span class="error">{{ error }}</span>
  </form>
</template>

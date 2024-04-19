
<script setup>
import { ref } from "vue";
import { useUserStore } from "@/stores/user";
import ButtonPrimary from "@/components/btns/BtnPrimary.vue";

const userStore = useUserStore();
const email = ref("");
const password = ref("");
const error = ref("");

const login = async () => {
  error.value = "";
  
  if (!email.value || !password.value) {
    error.value = "Preencha todos os campos";
    return;
  }

  userStore.login({
    email: email.value,
    password: password.value,
  });
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
    {{ error }}
  </form>
</template>

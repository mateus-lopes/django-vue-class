
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

  const validations = [
    {
      condition: !email.value || !password.value,
      message: "Preencha todos os campos"
    },
    {
      condition: password.value.length < 6,
      message: "A senha deve ter no mínimo 6 caracteres"
    },
    {
      condition: password.value.length > 20,
      message: "A senha deve ter no máximo 20 caracteres"
    }
  ];

  validations.some(validation => error.value = validation.condition ? validation.message : "");
  if (error.value) return;

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
    <span class="error">{{ error }}</span>
  </form>
</template>

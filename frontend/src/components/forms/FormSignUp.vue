
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

  const validations = [
    {
      condition: !fullName.value || !email.value || !password.value || !confirmPassword.value,
      message: "Preencha todos os campos"
    },
    {
      condition: password.value !== confirmPassword.value,
      message: "As senhas não coincidem!"
    },
    {
      condition: password.value.length < 6,
      message: "A senha deve ter no mínimo 6 caracteres"
    },
    {
      condition: password.value.length > 20,
      message: "A senha deve ter no máximo 20 caracteres"
    },
    {
      condition: fullName.value.length > 50,
      message: "O nome deve ter no máximo 50 caracteres"
    },
    {
      condition: fullName.value.split(" ").length < 2,
      message: "Digite seu nome completo"
    }
  ];

  validations.some(validation => error.value = validation.condition ? validation.message : "");
  if (error.value) return;

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

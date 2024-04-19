
<script setup>
import ButtonPrimary from "@/components/btns/BtnPrimary.vue";
const submit = () => {
  console.log("ver senha");
};
</script>
<template>
  <form @submit.prevent="submit">
    <p class="px-2 pb-4">
      Digite seu email para recuperar sua senha
    </p>
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
    <button-primary value="Enviar"></button-primary>
    <router-link
      class="text-gray-400 hover:underline mt-4 block text-center text-sm"
      to="/auth/sign-in"
      >Voltar ao login</router-link
    >
  </form>
</template>

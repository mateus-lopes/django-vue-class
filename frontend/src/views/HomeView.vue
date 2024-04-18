<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

import LayoutComp from "@/components/misc/LayoutComp.vue";
const userStore = useUserStore();
const router = useRouter();
const user = ref("");

onMounted(() => {
  try {
    if (userStore.userLogged()) {
      user.value = userStore.getUser();
    } else {
      setTimeout(() => {
        router.push("auth/sign-in");
      }, 2000);
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
    <layout-comp>
        <div v-if="userStore.userLogged()">
        <h1 class="text-4xl font-bold">Bem vindo, {{ user.username }}</h1>
    </div>
    <div v-else>
      <div class="loader"></div>
      <p>Carregando ...</p>
    </div>
    </layout-comp>
</template>
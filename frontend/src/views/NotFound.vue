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
      }, 1500);
    }
  } catch (error) {
    console.error(error);
  }
});
</script>

<template>
    <layout-comp>
        <div>
            <div class="loader"></div>
            Página não encontrada
        </div>
    </layout-comp>
</template>
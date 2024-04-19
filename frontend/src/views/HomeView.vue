<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

import LayoutComp from "@/components/misc/LayoutComp.vue";
import AuthIcon from '@/components/icons/AuthIcon.vue';

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
      <section v-if="userStore.userLogged()" class="p-12 rounded-3xl min-w-96 max-w-3xl shadow-2xl bg-white">
        <div class="flex justify-start items-center">
          <div class="hidden md:block">
            <auth-icon></auth-icon>
          </div>
          <div class="md:pl-6 flex flex-col">
            <h2 class="font-bold">
              <!-- {{ user.fullName }} -->Mateus Lopes Albano
            </h2>
            <p class="text-gray-500 text-sm">
              <!-- {{ user.email }} --> mateusalbano22@gmail.com
            </p>
          </div>
        </div>
      </section>
      <div v-else>
        <div class="loader"></div>
        Seção Expirada
      </div>
    </layout-comp>
</template>
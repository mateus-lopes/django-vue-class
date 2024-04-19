<script setup>
import { ref, onMounted } from "vue";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";

import LayoutComp from "@/components/misc/LayoutComp.vue";
import AuthIcon from '@/components/icons/AuthIcon.vue';
import BtnPrimary from '@/components/btns/BtnPrimary.vue';
const userStore = useUserStore();
const router = useRouter();
const user = ref("");

onMounted(() => {
  try {
    if (userStore.isLogged()) {
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
      <div v-if="userStore.isLogged()">
        <section class="p-12 rounded-3xl min-w-96 max-w-3xl shadow-2xl bg-white">
          <div class="flex justify-start items-center">
            <div class="hidden md:block">
              <auth-icon></auth-icon>
            </div>
            <div class="md:pl-6 flex flex-col">
              <h2 class="font-bold">
                {{ user }}
              </h2>
              <p class="text-gray-500 text-sm">
                {{ user }}
              </p>
            </div>
          </div>
        </section>
        <div class="mt-8 w-32 mx-auto text-center" @click.stop="userStore.logout()">
          <btn-primary value="Sair"></btn-primary>
        </div>
      </div>
      <div v-else>
        <div class="loader"></div>
        Seção Expirada
      </div>
    </layout-comp>
</template>
<script setup>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>

<template>
    <main v-if="userStore.getLoader()" class="w-screen h-screen flex justify-center items-center bg-slate-50 opacity-50 fixed top-0 bottom-0">
        <div class="loader"></div>
    </main>
</template>
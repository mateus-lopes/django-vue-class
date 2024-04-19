<script setup>
import { useUserStore } from "@/stores/user";
const userStore = useUserStore();
</script>
<template>
    <spa class="error">
        {{ userStore.getMessage() }}
    </spa>
</template>
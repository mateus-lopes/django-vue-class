<script setup>
import { defineProps } from "vue";
defineProps(["value"]);
</script>

<template>
    <button
        class="border p-2 rounded-3xl bg-indigo-600 text-white w-full"
        type="submit"
    >
        {{ value }}
    </button>
</template>

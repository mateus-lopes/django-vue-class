<script setup>
import { defineProps } from "vue";
defineProps(["text"]);
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold text-center mb-4">{{ text }}</h1>
  </div>
</template>
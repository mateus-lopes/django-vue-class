<template>
    <main class="w-screen h-screen flex justify-center items-center">
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-comp text="Login"></title-comp>
            <form-sign-in></form-sign-in>
        </section>
    </main>
</template>
  
<script setup>
import TitleComp from "@/components/TitleComp.vue";
import FormSignIn from "@/components/forms/FormSignIn.vue";
</script>
<template>
    <layout-comp>
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-page text="Criar Conta"></title-page>
            <form-sign-up></form-sign-up>
        </section>
    </layout-comp>
</template>
  
<script setup>
import TitlePage from "@/components/misc/TitlePage.vue";
import FormSignUp from "@/components/forms/FormSignUp.vue";
import LayoutComp from "@/components/misc/LayoutComp.vue";
</script>
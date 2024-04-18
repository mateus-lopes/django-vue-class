<template>
    <layout-comp>
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-page text="Esqueceu sua Senha"></title-page>
            <form-forgot-passowrd></form-forgot-passowrd>
        </section>
    </layout-comp>
</template>
  
<script setup>
import LayoutComp from "@/components/misc/LayoutComp.vue";
import TitlePage from "@/components/misc/TitlePage.vue";
import FormForgotPassowrd from "@/components/forms/FormForgotPassowrd.vue";
</script>
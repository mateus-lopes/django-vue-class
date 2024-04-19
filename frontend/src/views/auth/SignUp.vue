<template>
    <layout-comp>
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-page text="Criar Conta"></title-page>
            <form-sign-up></form-sign-up>
            <additional-auth></additional-auth>
            <router-link
                class="text-gray-400 hover:underline mt-2 block text-center text-sm"
                to="/auth/sign-in"
            >
                Já tem uma conta? Faça login
            </router-link>
        </section>
    </layout-comp>
</template>
  
<script setup>
import TitlePage from "@/components/misc/TitlePage.vue";
import FormSignUp from "@/components/forms/FormSignUp.vue";
import LayoutComp from "@/components/misc/LayoutComp.vue";
import AdditionalAuth from "@/components/forms/AdditionalAuth.vue";
</script>
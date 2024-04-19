<script setup>
import TitlePage from "@/components/misc/TitlePage.vue";
import FormSignUp from "@/components/forms/FormSignUp.vue";
import LayoutComp from "@/components/misc/LayoutComp.vue";
import AdditionalAuth from "@/components/forms/AdditionalAuth.vue";
import LoadingComp from "@/components/misc/LoadingComp.vue";
import ErrorMessage from "@/components/forms/ErrorMessage.vue";
</script>

<template>
    <layout-comp>
        <loading-comp></loading-comp>
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-page text="Criar Conta"></title-page>
            <form-sign-up></form-sign-up>
            <error-message></error-message>
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

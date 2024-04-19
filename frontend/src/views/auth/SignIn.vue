<script setup>
import { useUserStore } from "@/stores/user";
import LayoutComp from "@/components/misc/LayoutComp.vue";
import TitlePage from "@/components/misc/TitlePage.vue";
import FormSignIn from "@/components/forms/FormSignIn.vue";
import AdditionalAuth from "@/components/forms/AdditionalAuth.vue";
import LoadingComp from "@/components/misc/LoadingComp.vue";
import ErrorMessage from "@/components/forms/ErrorMessage.vue";
</script>

<template>
    <layout-comp>
        <loading-comp></loading-comp>
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-page text="Login"></title-page>
            <form-sign-in></form-sign-in>
            <error-message></error-message>
            <additional-auth></additional-auth>
            <router-link
                class="text-gray-400 hover:underline mt-2 block text-center text-sm"
                to="/auth/forgot-password"
            >
                Esqueci minha senha
            </router-link>
            <router-link
                class="text-gray-400 hover:underline mt-2 block text-center text-sm"
                to="/auth/sign-up"
            >
                Ainda não tem uma conta?
            </router-link>
        </section>
    </layout-comp>
</template>
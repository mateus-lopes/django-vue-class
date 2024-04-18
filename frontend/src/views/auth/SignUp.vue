<template>
    <layout-comp>
        <section class="p-8 rounded-3xl w-96 shadow-2xl bg-white">
            <title-comp text="Criar Conta"></title-comp>
            <form-sign-up></form-sign-up>
        </section>
    </layout-comp>
</template>
  
<script setup>
import TitleComp from "@/components/TitleComp.vue";
import FormSignUp from "@/components/forms/FormSignUp.vue";
import LayoutComp from "@/components/LayoutComp.vue";
</script>
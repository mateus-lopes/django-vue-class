<script setup>
import GoogleIcon from "@/components/icons/GoogleIcon.vue";
import GithubIcon from "@/components/icons/GithubIcon.vue";

const authWithGoogle = () => {
    console.log("Logar com o Google");
};

const authWithGithub = () => {
    console.log("Logar com o Github");
};
</script>

<template>
    <section>
        <div class="pt-6 pb-4 flex gap-10 justify-center border-t mt-6">
                <button class="block" @click="authWithGoogle">
                    <google-icon></google-icon>
                </button>
                <button class="block" @click="authWithGithub">
                    <github-icon></github-icon>
                </button>
            </div>
    </section>
</template>
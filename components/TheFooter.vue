<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <footer class="bg-white flex flex-col mx-10 my-8">
        <hr class="border-t border-gray-300 py-2 w-full sm:py-3">
        <div class="flex flex-col justify-center sm:flex-row sm:justify-between">
            <div class="w-full my-1 text-center sm:my-0 sm:text-left">
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/">Home</NuxtLink>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/about">About</NuxtLink>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/blog">Blog</NuxtLink>
            </div>
            <div class="w-full my-1 text-center sm:my-0">
                <a v-for="social in  appConfig.socials" :href="social.url">
                    <NuxtImg :src="social.image" :alt="social.alt" class="h-50 w-50 inline-block mx-1 sm:mx-1" />
                </a>
            </div>
            <div class="w-full my-1 text-center sm:my-0 sm:text-right">
                <p class="px-3">&copy; All rights reserved {{ new Date().getFullYear()
                }}.</p>
            </div>
        </div>
    </footer>
</template>
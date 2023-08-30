<script setup>
const appConfig = useAppConfig()
const padding = 10
</script>

<template>
    <footer class="bg-white flex flex-col items-center justify-center py-8 mx-10">
        <hr class="border-t border-gray-300 mb-6 w-1/2 py-8">
        <div class="flex justify-between items-center w-full">
            <div class="flex justify-left">
                <!-- <a href="#" class="text-gray-500 hover:text-gray-700">&copy; All rights reserved {{ new Date().getFullYear()
                }}.</a> -->
                <p class="px-3">&copy; All rights reserved {{ new Date().getFullYear()
                }}.</p>
            </div>
            <div class="flex">
                <a v-for="social in  appConfig.socials" :href="social.url">
                    <img :src="social.image" :alt="social.alt" class="h-50 w-50 rounded-full inline-block mx-1">
                </a>
            </div>
            <div class="flex">
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/">Home</NuxtLink>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/about">About</NuxtLink>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/blog">Blog</NuxtLink>
            </div>
        </div>
    </footer>
</template>
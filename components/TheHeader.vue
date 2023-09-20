<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <header class="bg-white">
        <nav class="flex flex-wrap justify-between mx-10 py-2">
            <div>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/">{{
                        appConfig.title }}</NuxtLink>
            </div>
            <div>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/">Home</NuxtLink>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/about">About</NuxtLink>
                <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    to="/blog">Blog</NuxtLink>
            </div>
        </nav>
    </header>
</template>

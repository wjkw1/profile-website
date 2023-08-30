<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <header class="bg-white">
        <nav class="flex items-center justify-between mb-4 space-x-4 mx-10">
            <NuxtLink class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                to="/">{{ appConfig.title }}</NuxtLink>
            <div class="flex justify-end">
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

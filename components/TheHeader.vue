<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <header class="bg-white">
        <nav class="flex flex-wrap justify-between mx-10 py-2">
            <div>
                <NuxtLink to="/"
                    class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900">{{
                        appConfig.title }}</NuxtLink>
            </div>
            <div>
                <NuxtLink to="/"
                    class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    active-class="rounded-lg px-3 py-2 text-slate-700 font-medium underline hover:bg-slate-100 hover:text-slate-900">
                    Home
                </NuxtLink>
                <NuxtLink to="/blog"
                    class="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                    active-class="rounded-lg px-3 py-2 text-slate-700 font-medium underline hover:bg-slate-100 hover:text-slate-900">
                    Blog
                </NuxtLink>
            </div>
        </nav>
    </header>
</template>

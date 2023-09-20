
<script setup>
const appConfig = useAppConfig()
definePageMeta({
    title: 'Western'
})
</script>

<template>
    <div class="flex flex-col min-h-screen">
        <TheHeader />
        <main class="flex-grow mx-10 px-3">
            <h1>Home</h1>
            <h2>Title: {{ appConfig.title }}</h2>
        </main>
        <TheFooter />
    </div>
</template>

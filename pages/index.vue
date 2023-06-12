
<script setup>
const appConfig = useAppConfig()
definePageMeta({
    title: 'Western Wilson'
})
</script>

<template>
    <TheHeader />
    <h1>Home</h1>
    <h2>Title: {{ appConfig.title }}</h2>
</template>

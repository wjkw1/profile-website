<script setup>
const appConfig = useAppConfig()
</script>

<template>
    <div>
        <h1>{{ appConfig.title }}</h1>
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/blog">Blog</NuxtLink>
    </div>
</template>

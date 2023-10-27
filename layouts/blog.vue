<script setup lang="ts">
definePageMeta({
    layout: 'blog'
})
</script>

<template>
    <div class="flex flex-col min-h-screen h-full">
        <TheHeader />
        <slot />
        <TheFooter />
    </div>
</template>
  
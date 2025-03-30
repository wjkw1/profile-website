<template>
    <main class="grow my-10 px-3 align-middle grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div v-for="blog in blogs" :key="blog.id">
            <Card :slug="blog.path" :title="blog.title" :description="blog.description" :date="formatDate(blog.date)"
                :tags="blog.tags" :img="blog.img" :img-alt="blog.imgAlt" :readTime="blog.readTime" />
        </div>
    </main>
</template>

<script setup lang="ts">
import { useDateFormat } from '@vueuse/core'
const formatDate = (date: Date) => useDateFormat(date, 'MMM DD, YYYY').value;
const { data: blogs } = await useAsyncData('blog', () => queryCollection('blog').order("date", "DESC").all())
</script>

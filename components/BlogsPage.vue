<template>
    <main class="my-10 px-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div v-for="blog in blogs">
            <Card :key="blog.path" :slug="`/blog/${blog.slug}`" :title="blog.title" :description="blog.description"
                :createdAt="blog.createdAt" :updatedAt="blog.updatedAt" :tags="blog.tags" />
        </div>
    </main>
</template>

<script setup>
const blogs = await queryContent().find()
</script>
<template>
    <main class="grow my-10 px-3 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div v-for="blog in blogs">
            <Card :key="blog.path" :slug="`/blog${blog._path}`" :title="blog.title" :description="blog.description"
                :createdAt="blog.createdAt" :updatedAt="blog.updatedAt" :tags="blog.tags" />
        </div>
    </main>
</template>

<script setup>
// TODO sort by date reverse order, by updatedAt and then createdAt
const blogs = await queryContent().find()
console.error(blogs)
</script>
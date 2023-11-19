<template>
    <main class="grow my-10 px-3 align-middle grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div v-for="blog in blogs" :key="blog._id">
            <Card :slug="blog._path" :title="blog.title" :description="blog.description" :date="formatDate(blog.date)" :tags="blog.tags"
                :img="blog.img" :img-alt="blog.imgAlt" :readTime="blog.readTime" />
        </div>
    </main>
</template>

<script setup>
function formatDate(time) {
    const date = new Date(time);
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric"
    }
    return date.toLocaleString("en", options)
}

const { data: blogs } = await useAsyncData(
    "blogs",
    () => queryContent("blog").find() )
</script>

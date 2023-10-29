<template>
    <main class="grow my-10 px-3 align-middle grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto">
        <div v-for="blog in blogs">
            <Card :key="blog._id" :slug="blog._path" :title="blog.title" :description="blog.description" :date="blog.date"
                :tags="blog.tags" :img="blog.img" :img-alt="blog.imgAlt" />
        </div>
    </main>
</template>

<script setup>
const { data: blogs } = await useAsyncData(
    "blogs",
    () => queryContent("blog").only(['_id', '_path', 'title', 'date', 'description', 'tags', "img", "imgAlt"]).find())
</script>

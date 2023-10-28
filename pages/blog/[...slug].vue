<!-- <ContentDoc :path="$route.params._path.md ? `/blog/${$route.params._path[0].md}` : '/blog'"> -->
<template>
    <ContentRenderer :value="blog">
        <template #default="blog">
            <h1>{{ blog.title }}</h1>
            <ContentRendererMarkdown :value="blog" />
        </template>
        <template #empty>
            <main class="flex flex-col grow mx-10 px-3 items-center justify-center text-center">
                <p class="text-2xl">Sorry, we could not find that blog page. Please check the URL and try again.
                </p>
                <NuxtLink class="text-blue-600 visited:text-purple-600" href="/blog">Go to other blogs posts...
                </NuxtLink>
            </main>
        </template>
    </ContentRenderer>
</template>


<script setup>
const route = useRoute()
const path = computed(() => route.path)
const { data: blog } = await useAsyncData(
    "blog",
    () => queryContent("blog").where({ _path: path.value }).findOne())
</script>
  
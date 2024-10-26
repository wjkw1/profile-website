<template>
    <ContentRenderer :value="blog">
        <template #default="blog">
            <article
                class="prose flex flex-col grow mx-6 my-10 justify-center text-left max-w-2xl sm:text-justify sm:mx-auto">
                <NuxtImg :src="blog.value.img" :alt="blog.value.imgAlt" width="1200" height="300" loading="eager"
                    :placeholder="[1200,300]" class="my-0" />
                <p class="text-sm italic text-slate-500 text-center"><a :href="blog.value.imgSource">Photo</a> by <a :href="blog.value.imgArtistSource">{{
                    blog.value.imgArtistName }}</a></p>
                <h1 class="text-5xl mb-0 mt-2">{{ blog.value.title }}</h1>
                <h3 class="text-sm italic text-slate-500">{{ formatDate(blog.value.date) }} • {{ blog.value.readTime }} read
                </h3>
                <ContentRendererMarkdown :value="blog.value" />
            </article>
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
import { useDateFormat } from '@vueuse/core'
const formatDate = (date) => useDateFormat(date, 'MMM DD, YYYY').value;

const route = useRoute()
const path = computed(() => route.path)
const { data: blog } = await useAsyncData(
    "filename",
    () => queryContent("blog").where({ _path: path.value }).findOne())

if (blog.value) {
    useHead({
        title: `- ${blog.value.title}`
    })
} else {
    useHead({
        title: `- 404 Blog not found`
    })
}

</script>
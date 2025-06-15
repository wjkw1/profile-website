<template>
    <div v-if="blog"
        class="prose flex flex-col grow mx-6 my-10 justify-center text-left max-w-2xl sm:text-justify sm:mx-auto">
        <NuxtImg :src="blog.img" :alt="blog.imgAlt" width="1200" height="300" loading="eager" :placeholder="[1200, 300]"
            class="my-0" />
        <p class="text-sm italic text-slate-500 text-center"><a :href="blog.imgSource">Photo</a> by <a
                :href="blog.imgArtistSource">{{
                    blog.imgArtistName }}</a></p>
        <h1 class="text-5xl mb-0 mt-2 text-center">{{ blog.title }}</h1>
        <h3 class="text-sm italic text-slate-500 text-center">{{ formatDate(blog.date) }} • {{ blog.readTime }} read
        </h3>
        <ContentRenderer v-if="blog" :value="blog" />
    </div>
    <div v-else
        class="prose flex flex-col grow mx-6 my-10 items-center text-center justify-center max-w-2xl sm:text-justify sm:mx-auto">
        <main class="empty-page">
            <p class="text-2xl">Sorry, we couldn't find that blog page. Please check the URL and try again.
            </p>
            <NuxtLink class="text-blue-600 visited:text-purple-600" href="/blog">Or go to other blogs posts...
            </NuxtLink>
        </main>
    </div>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core'
const formatDate = (date) => useDateFormat(date, 'MMM DD, YYYY').value;

const route = useRoute()
// Normalize slug: remove empty strings from array
const slugArray = Array.isArray(route.params.slug) 
  ? route.params.slug.filter(part => part !== '')
  : [route.params.slug]

// Handle trailing slash edge case
const cleanSlug = slugArray.join('/').replace(/\/$/, '')

const { data: blog } = await useAsyncData(`blog-${cleanSlug}`, () => {
    return queryCollection('blog').path(`/blog/${cleanSlug}`).first()
})

</script>
<script setup>
defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    icon: {
        type: String,
        default: 'IconMarkdown'
    },
    img: {
        type: String,
    },
    imgAlt: {
        type: String,
    },
    date: {
        type: String
    },
    slug: {
        type: String,
        default: null
    },
    tags: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <a :href="slug">
        <div class="max-w-sm rounded-lg overflow-hidden shadow-lg m-3 p-6 border border-gray-100">
            <img class="w-full rounded" :src="img" :alt="imgAlt">
            <div class="py-4">
                <h2 class="font-semibold text-3xl mb-2">{{ title }}</h2>
                <em>
                    <p v-if="date" class="my-1 text-sm text-gray-600 font-light">{{ date }}
                    </p>
                </em>
                <p class="text-gray-600 text-base">
                    {{ description }}
                </p>
            </div>
            <div v-if="tags.length > 0" class="flex flex-wrap pt-4 pb-2">
                <span v-for="tag in tags"
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{{
                        tag }}</span>
            </div>
        </div>
    </a>
</template>

<!-- TODO change this to a carasoul implementation -->
<!-- TODO infinite loop https://swiperjs.com/demos#infinite-loop -->
<!-- TODO slides per view https://swiperjs.com/demos#slides-per-view -->

<template>
    <Swiper :modules="[SwiperAutoplay, SwiperGrid, SwiperPagination]" :space-between="30" :slides-per-view="auto"
        :spaceBetween="30" :pagination="{
            clickable: 'true',
        }">
        <SwiperSlide class="border border-red-700" v-for="blog in blogs" :key="blog._id">
            <Card :slug="blog._path" :title="blog.title" :description="blog.description" :date="formatDate(blog.date)"
                :tags="blog.tags" :img="blog.img" :img-alt="blog.imgAlt" :readTime="blog.readTime" />
        </SwiperSlide>
    </Swiper>
</template>

<script setup>
import { useDateFormat } from '@vueuse/core'
const formatDate = (date) => useDateFormat(date, 'MMM DD, YYYY').value;

const { data: blogs } = await useAsyncData(
    "blogs",
    () => queryContent("blog").sort({ date: -1 }).find())
</script>

<style>
.swiper-slide {
    width: auto;
}
</style>
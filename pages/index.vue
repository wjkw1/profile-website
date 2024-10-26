<template>
    <main class="flex grow justify-center mx-10 px-3">
        <div class="flex flex-col grow items-center justify-center text-center max-w-5xl">

            <p class="text-2xl py-10">Kia ora and welcome to my slice of the internet!
            </p>
            <p class="text-2xl py-10">Check out my <NuxtLink to="/blog" class="text-blue-600 visited:text-purple-600">
                    blog</NuxtLink>, and join me on <a class="text-blue-600 visited:text-purple-600"
                    href="https://www.goodreads.com/wjkw1">goodreads</a>
                to see what I'm reading.
            </p>
            <p class="text-2xl py-10">Connect with me on <a class="text-blue-600 visited:text-purple-600"
                    href="https://www.linkedin.com/in/western-wilson">LinkedIn</a> or any socials!
            </p>
        </div>
    </main>
</template>

<script setup>
useHead({
    title: "- Kia ora and welcome to my slice of the internet!"
})
</script>
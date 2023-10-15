
<script setup>
import About from './about.vue';

const appConfig = useAppConfig()
definePageMeta({
    title: 'Western'
})
</script>
# TODO cycle through Wellington-based, and replace with: New Zealand located, Planet Earth being
# TODO cycle through problem-solver, DevOps Engineer, Māori, Kiwi, Team Player
<template>
    <div class="flex flex-col min-h-screen h-full">
        <TheHeader />
        <main class="flex flex-col flex-grow mx-10 px-3 items-center justify-center text-center">
            <p class="text-2xl py-10">I'm a Wellington-based problem solver working as a DevOps
                Engineer at
                <a href="https://tehiku.nz/" class="text-blue-600 visited:text-purple-600">Te Hiku Media</a>
            </p>
            <p class="text-2xl py-10">My latest contribution is on the
                <a href="https://papareo.nz/" class="text-blue-600 visited:text-purple-600">Papa Reo project</a>
            </p>
            <p class="text-2xl py-10">Let's connect on <a href="https://www.linkedin.com/in/western-wilson"
                    class="text-blue-600 visited:text-purple-600">LinkedIn</a> or
                <a href="https://github.com/wjkw1" class="text-blue-600 visited:text-purple-600">GitHub</a>
            </p>
        </main>
        <TheFooter />
    </div>
</template>  

<!-- TODO Ensure that the 404 page pushes content to the bottom -->
<template>
    <ContentDoc :path="$route.params.slug ? `/blog/${$route.params.slug[0]}` : '/blog'">
        <template #not-found>
            <main class="flex flex-col grow mx-10 px-3 items-center justify-center text-center">
                <p class="text-2xl">Sorry, we could not find that blog page. Please check the URL and try again.</p>
                <NuxtLink class="text-blue-600 visited:text-purple-600" href="/blog">Go to main blog page...
                </NuxtLink>
            </main>
        </template>
    </ContentDoc>
</template>
  
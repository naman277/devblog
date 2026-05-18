<script setup>
useHead({
    title: "About DevBlog",
});
</script>

<template>
    <div class="mx-auto p-4 text-white">
        <h1 class="text-3xl font-bold mb-4">About DevBlog</h1>

        <p class="text-gray-200 leading-7">
            DevBlog is a simple blog application built with Nuxt 3, TypeScript,
            and Tailwind CSS. It fetches real blog posts from the
            JSONPlaceholder API and displays them in a responsive layout with
            dynamic routing. The project also uses a custom Lit web component
            for reusable badges and is deployed on Vercel.
        </p>
    </div>
</template>

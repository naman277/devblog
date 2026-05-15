<script setup>
const { id } = useRoute().params;
const { data: post } = await useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
);
</script>

<template>
    <div>
        <NuxtLink to="/" class="text-xl text-blue-500 hover:underline"
            >Back to home</NuxtLink
        >
        <p class="text-blue-800 rounded text-4xl font-bold">Tech</p>
        <h1 class="text-3xl font-bold mb-4">{{ post.title }}</h1>
        <p>{{ post.body }}</p>
    </div>
</template>

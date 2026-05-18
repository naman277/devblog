<script setup>
const { id } = useRoute().params;

const { data: post } = await useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
);
useHead({
    title: `${post.value ? post.value.title : "Loading..."}`,
});
</script>

<template>
    <div class="mx-auto p-4">
        <NuxtLink to="/" class="text-blue-400 hover:underline"
            >← Back to posts</NuxtLink
        >
        <br />
        <br />
        <!-- <p
            class="text-blue-800 rounded-3xl bg-blue-100 px-2 font-semibold w-fit"
        >
            Tech
        </p> -->
        <card-label></card-label>
        <br />

        <h1 class="text-3xl font-bold mb-4 text-white">{{ post.title }}</h1>
        <p class="text-gray-200 leading-7">{{ post.body }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Post } from "~/types";
const { postcard } = defineProps<{
    postcard: Post;
}>();
</script>

<template>
    <NuxtLink
        :to="`/post/${postcard.id}`"
        class="justify-center flex cursor-pointer"
    >
        <div
            class="w-1/1 md:w-full py-2 px-2 justify-center text-center my-3 rounded-lg border-2 border-black hover:border-blue-700 hover:bg-blue-200"
        >
            <div class="flex items-center justify-between pb-2 gap-10">
                <p class="text-blue-800 rounded">Tech</p>
                <h2 class="line-clamp-1">{{ postcard.title }}</h2>
            </div>
            <hr />
            <p class="line-clamp-3">{{ postcard.body }}</p>
        </div>
    </NuxtLink>
</template>

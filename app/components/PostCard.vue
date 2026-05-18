<script setup lang="ts">
import type { Post } from "~/types";
const { postcard } = defineProps<{
    postcard: Post;
}>();
</script>

<template>
    <NuxtLink
        :to="`/posts/${postcard.id}`"
        class="justify-center flex cursor-pointer rounded-lg my-3 border-2 border-gray-600 hover:border-blue-700 hover:bg-blue-900 focus:border-blue-700 focus:bg-blue-900"
        :aria-label="`View post for ${postcard.title}`"
    >
        <div class="w-1/1 py-2 px-3 justify-center rounded-lg">
            <div class="pb-2 gap-10">
                <card-label></card-label>
                <h2 class="line-clamp-1 text-white font-bold pt-1">
                    {{ postcard.title }}
                </h2>
            </div>
            <hr class="border-gray-600" />
            <p class="line-clamp-3 text-gray-300">{{ postcard.body }}</p>
        </div>
    </NuxtLink>
</template>

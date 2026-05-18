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
        <div class="w-1/1 py-2 px-2 justify-center rounded-lg">
            <div class="flex items-center justify-between pb-2 gap-10">
                <!-- <p
                    class="text-blue-800 rounded-3xl bg-blue-100 px-2 font-semibold mt-1 ml-1"
                >
                    Tech
                </p> -->
                <card-label></card-label>
                <h2 class="line-clamp-1 text-white font-bold">
                    {{ postcard.title }}
                </h2>
            </div>
            <hr class="border-gray-600" />
            <p class="line-clamp-3 text-gray-300">{{ postcard.body }}</p>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    postcard: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <div class="justify-center flex">
        <div
            class="w-4/5 md:w-full py-2 px-2 justify-center text-center my-3 rounded-lg border-2 border-black"
        >
            <div class="flex items-center justify-between pb-2 gap-10">
                <p class="text-blue-800 rounded">Tech</p>
                <h2 class="line-clamp-1">{{ postcard.title }}</h2>
            </div>
            <hr />
            <p>{{ postcard.body }}</p>
        </div>
    </div>
</template>

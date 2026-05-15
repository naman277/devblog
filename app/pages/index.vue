<script setup>
let isLoading = ref(true);
let limit = ref(12);
let showAll = ref(false);
function addMore() {
    limit.value += 8;
    if (showAll.value) {
        limit.value = 12;
    }
    if (limit.value >= postcards.value.length) {
        showAll.value = true;
        limit.value = postcards.value.length;
    } else {
        showAll.value = false;
    }
}
// setTimeout(() => {
//     isLoading.value = false;
// }, 1000);
const { data: postcards } = await useFetch(
    "https://jsonplaceholder.typicode.com/posts",
);
isLoading.value = false;
</script>

<template>
    <div>
        <div
            v-if="isLoading"
            class="justify-center flex mt-10 h-70 items-center"
        >
            <div
                v-if="isLoading"
                class="animate-spin inline-block size-6 border-3 border-current border-t-transparent rounded-[999px] text-muted-foreground-2"
                role="status"
                aria-label="loading"
            >
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        <div v-else>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8">
                <PostCard
                    v-for="card in postcards.slice(0, limit)"
                    :key="card.id"
                    :postcard="card"
                ></PostCard>
            </div>
            <button
                class="font-bold py-2 px-4 rounded bg-black text-white justify-center flex mx-auto my-5 cursor-pointer hover:bg-gray-800"
                @click="addMore"
            >
                {{ showAll ? "Show Less" : "Show More" }}
            </button>
        </div>
    </div>
</template>

<script setup></script>

<template>
    <div>
        <div
            class="header flex items-center justify-between text-white bg-gray-600"
        >
            <div class="p-4">
                <dev-badge></dev-badge>
            </div>

            <nav>
                <ul class="flex items-stretch h-full">
                    <li class="flex">
                        <NuxtLink
                            active-class="bg-gray-800"
                            class="flex items-center px-4 py-4 hover:bg-gray-900"
                            to="/"
                        >
                            Home
                        </NuxtLink>
                    </li>

                    <li class="flex">
                        <NuxtLink
                            active-class="bg-gray-800"
                            class="flex items-center px-4 py-4 hover:bg-gray-900"
                            to="/about"
                        >
                            About
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

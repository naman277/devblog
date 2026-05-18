<template>
    <div>
        <header
            class="flex items-center justify-between text-white bg-zinc-800 border-b border-gray-500"
        >
            <div class="p-4">
                <dev-badge></dev-badge>
            </div>

            <nav>
                <ul class="flex items-stretch h-full">
                    <li class="flex">
                        <NuxtLink
                            active-class="text-blue-400"
                            class="flex items-center px-4 py-4 hover:text-blue-400"
                            to="/"
                        >
                            Home
                        </NuxtLink>
                    </li>

                    <li class="flex">
                        <NuxtLink
                            active-class="text-blue-400"
                            class="flex items-center px-4 py-4 hover:text-blue-400"
                            to="/about"
                        >
                            About
                        </NuxtLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script setup lang="ts">
    const { t } = useI18n();
</script>

<template>
    <main
        class="min-h-screen bg-gray-50 py-10 px-5 text-center text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    >
        <!-- Logo -->
        <a href="https://github.com/ymansurozer/Vue-SPA-Template" class="flex justify-center pb-5"><Logo /></a>

        <!-- Header -->
        <p class="text-xl font-semibold">
            {{ t("header.title") }}
        </p>
        <p class="text-md opacity-75">
            {{ t("header.subtitle") }}
        </p>

        <!-- Menu -->
        <div class="flex justify-center py-2"><Menu /></div>

        <RouterView />

        <div
            class="mx-auto mt-5 text-center text-sm opacity-75 dark:opacity-50"
        >
            [{{ t("layout.default") }}]
        </div>
    </main>
</template>

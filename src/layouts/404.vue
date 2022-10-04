<script setup lang="ts">
    const { t } = useI18n();
</script>

<template>
    <main
        class="min-h-screen bg-gray-50 py-10 px-5 text-center text-gray-800 dark:bg-gray-800 dark:text-gray-200"
    >
        <RouterView />

        <div
            class="mx-auto mt-5 text-center text-sm opacity-75 dark:opacity-50"
        >
            [{{ t("layout.notFound") }}]
        </div>
    </main>
</template>

<script setup lang="ts">
    const { t } = useI18n();
    const counterStore = useCounterStore();
</script>

<template>
    <div>
        <div class="p-5 text-gray-800 dark:text-gray-200">
            <p>{{ t("storeContent.count") }}: {{ counterStore.count }}</p>
            <p>
                {{ t("storeContent.doubleCount") }}:
                {{ counterStore.doubleCount }}
            </p>
            <button
                class="mt-2 rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700"
                @click.prevent="counterStore.increment"
            >
                {{ t("button.name") }}
            </button>
        </div>
    </div>
</template>

<style scoped></style>

<route lang="yaml">
meta:
    layout: default
</route>

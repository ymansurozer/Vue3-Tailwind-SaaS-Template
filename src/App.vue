<script setup lang="ts">
// Setup head config, including those required for PWA purposes
useHead({
  title: "Vue SPA Template",
  meta: [
    {
      name: "description",
      content: "Opinionated Vue SPA Template",
    },
    {
      name: "theme-color",
      content: computed(() => (isDark.value ? "#6366f1" : "#ffffff")),
    },
  ],
  link: [
    {
      rel: "icon",
      type: "image/svg+xml",
      href: computed(() =>
        preferredDark.value ? "/favicon-dark.ico" : "/favicon.ico"
      ),
    },
    {
      rel: "apple-touch-icon",
      href: "/pwa-192x192.png",
    },
    {
      rel: "mask-icon",
      href: "/safari-pinned-tab.svg",
      color: "#00aba9",
    },
  ],
});
</script>

<template>
  <RouterView />
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";

const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <Menu as="div" class="flex">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center rounded-md bg-indigo-100 px-4 py-2 text-sm text-indigo-600 hover:bg-indigo-200"
      >
        {{ t("menu.name") }}
      </MenuButton>
    </div>

    <MenuItems class="ml-4 flex space-x-2 font-semibold">
      <MenuItem v-slot="{ active }">
        <button
          class="group flex w-full items-center rounded-md px-3 py-2 text-sm shadow-md"
          :class="[
            active ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800 ',
          ]"
          @click.prevent="toggleDark()"
        >
          {{ isDark ? t("menu.light") : t("menu.dark") }}
        </button>
      </MenuItem>
      <MenuItem v-slot="{ active }">
        <button
          class="group flex w-full items-center rounded-md px-3 py-2 text-sm shadow-md"
          :class="[
            active ? 'bg-indigo-500 text-white' : 'bg-white text-gray-800',
          ]"
          @click.prevent="toggleLocales()"
        >
          {{ locale }}
        </button>
      </MenuItem>
    </MenuItems>
  </Menu>
</template>

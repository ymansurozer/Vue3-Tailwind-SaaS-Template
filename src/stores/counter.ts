import { defineStore } from "pinia";

// DEV NOTE: For some reason, Vue reactivity transform does not work with Pinia's setup stores
export const useCounterStore = defineStore("counterStore", () => {
    // State
    let count = ref(0);

    // Getters
    let doubleCount = computed(() => count.value * 2);

    // Actions
    function increment() {
        count.value++;
    }

    return { count, doubleCount, increment };
});

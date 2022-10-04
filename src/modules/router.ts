import { createRouter, createWebHistory } from "vue-router";
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

// DEV NOTE: Technically, this router is not a module but fits well here

// Setup routes with layouts
const routes = setupLayouts(generatedRoutes);

// Setup router with options
export const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(_to, _from, savedPosition) {
        if (savedPosition) return { savedPosition, behavior: "smooth" };
        else return { top: 0, left: 0, behavior: "smooth" };
    },
});

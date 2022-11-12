import { createApp } from "vue";
import { router } from "@/modules/router";
import type { UserModule } from "@/modules/types";
import App from "@/App.vue";

import "@/styles/tailwind.css";
import "@/styles/fonts.css";
import "nprogress/nprogress.css";

// Create app and router
const app = createApp(App);
app.use(router);

// Install user modules
Object.values(
  import.meta.glob<{ install: UserModule }>("./modules/*.ts", { eager: true })
).forEach(i => i.install?.({ app, router }));

// Mount app to DOM
app.mount("#app");

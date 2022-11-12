import type { App } from "vue";
import type { Router } from "vue-router";

interface AppContext<HasRouter extends boolean = true> {
  app: App<Element>;
  router: HasRouter extends true ? Router : undefined;
}

export type UserModule = (ctx: AppContext) => void;

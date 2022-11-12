import NProgress from "nprogress";
import { type UserModule } from "@/modules/types";

export const install: UserModule = ({ router }) => {
  // Start nprogress in each router navigation
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start();
  });

  router.afterEach(() => {
    NProgress.done();
  });
};

import { type UserModule } from "@/modules/types";
import NProgress from "nprogress";

export const install: UserModule = ({ app, router }) => {
    // Start nprogress in each router navigation
    router.beforeEach((to, from) => {
        if (to.path !== from.path) NProgress.start();
    });

    router.afterEach(() => {
        NProgress.done();
    });
};

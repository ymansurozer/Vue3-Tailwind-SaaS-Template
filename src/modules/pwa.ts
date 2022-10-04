import { type UserModule } from "@/modules/types";

export const install: UserModule = ({ app, router }) => {
    router.isReady().then(async () => {
        const { registerSW } = await import("virtual:pwa-register");
        registerSW({ immediate: true });
    });
};

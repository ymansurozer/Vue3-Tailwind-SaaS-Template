import { type UserModule } from "@/modules/types";
import { createPinia } from "pinia";

export const install: UserModule = ({ app, router }) => {
    const pinia = createPinia();
    app.use(pinia);
};

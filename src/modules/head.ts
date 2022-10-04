import { type UserModule } from "@/modules/types";
import { createHead } from "@vueuse/head";

export const install: UserModule = ({ app, router }) => {
    const head = createHead();
    app.use(head);
};

import { createPinia } from "pinia";
import { type UserModule } from "@/modules/types";

export const install: UserModule = ({ app }) => {
  const pinia = createPinia();
  app.use(pinia);
};

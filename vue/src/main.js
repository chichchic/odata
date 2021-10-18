import { createApp } from "vue";
import "@/styles/element/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(ElTable)
  .use(ElTableColumn)
  .mount("#app");

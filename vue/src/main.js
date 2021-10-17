import { createApp } from "vue";
import { ElTable, ElTableColumn } from "element-plus";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(ElTable)
  .use(ElTableColumn)
  .mount("#app");

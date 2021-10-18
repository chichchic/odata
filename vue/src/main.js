import { createApp } from "vue";
import {
  ElTable,
  ElTableColumn,
  ElButton,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
} from "element-plus";
import "@/styles/element/index.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

createApp(App)
  .use(store)
  .use(router)
  .use(ElTable)
  .use(ElTableColumn)
  .use(ElButton)
  .use(ElCheckboxGroup)
  .use(ElCheckboxButton)
  .use(ElCheckbox)
  .mount("#app");

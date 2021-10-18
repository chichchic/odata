import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RequstData from "../views/RequstData.vue";
import QueryingData from "../views/QueryingData.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/request-data",
    name: "RequstData",
    component: RequstData,
  },
  {
    path: "/querying-data",
    name: "QueryingData",
    component: QueryingData,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

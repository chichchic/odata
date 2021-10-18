import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RequstData from "../views/RequstData.vue";

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

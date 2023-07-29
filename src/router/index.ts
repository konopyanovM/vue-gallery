import MainViewVue from "@/views/MainView.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Main",
    path: "/",
    component: MainViewVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

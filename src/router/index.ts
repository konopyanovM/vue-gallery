import MainViewVue from "@/views/MainView.vue";
import PictureInfoViewVue from "@/views/PictureInfoView.vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    name: "Main",
    path: "/",
    component: MainViewVue,
  },
  {
    name: "Picture Info",
    path: "/picture-info/:id",
    component: PictureInfoViewVue,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

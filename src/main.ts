import { createApp } from "vue";
import { createRouter, createWebHistory, RouterView } from "vue-router";
import Index from "./pages/index.vue";
import firstLab from "./pages/Labs/firstLab.vue";

import "./main.css";
import PRIWP1501 from "./pages/PRIWP/PRIWP(15.01).vue";
import PRIWP2101 from "./pages/PRIWP/PRIWP(21.01).vue";
import Test1701 from "./pages/PRIWP/Test1701.vue";
import shopping from "./pages/DecorSite/shopping.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Index },
    { path: "/Labs/first", component: firstLab },
    { path: "/PRIWP/pr1", component: PRIWP1501 },
    { path: "/PRIWP/lab1", component: PRIWP2101 },
    { path: "/PRIWP/test1701", component: Test1701 },
    { path: "/DecorSite/shopping", component: shopping },
  ],
});

createApp(RouterView).use(router).mount("body");

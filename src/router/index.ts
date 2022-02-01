import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../components/HelloWorld.vue";
import About from "../views/About.vue"
import { i18n } from "../main";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component:About
  }
    
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  i18n.locale = localStorage.getItem("language") || "en";
  return next();
});

export default router;

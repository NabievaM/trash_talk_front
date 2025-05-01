import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import UserLayout from "../layouts/user.vue";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layoutComponent: UserLayout,
    },
  },
  {
    path: "/posts",
    name: "Post",
    component: Post,
    meta: {
      layoutComponent: UserLayout,
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;

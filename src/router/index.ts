import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import Home from "../views/Home.vue";
import Post from "../views/Post.vue";
import Chat from "../views/Chat.vue";
import Profile from "../views/Profile.vue";
import Video from "../views/Video.vue";
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
  {
    path: "/videos",
    name: "Video",
    component: Video,
    meta: {
      layoutComponent: UserLayout,
    },
  },
  {
    path: "/chats",
    name: "Chat",
    component: Chat,
    meta: {
      layoutComponent: UserLayout,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
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

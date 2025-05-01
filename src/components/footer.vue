<template>
  <div
    class="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-[430px] h-20 bg-white z-50 flex justify-around items-center"
  >
    <router-link
      v-for="item in navItems"
      :key="item.name"
      :to="item.route"
      class="flex flex-col items-center"
      @click="active = item.key"
      :class="[active === item.key ? 'text-[#1877F2]' : 'text-[#D0D0D0]']"
    >
      <component :is="item.icon" class="fill-current" />
      <span class="text-xs">{{ item.name }}</span>
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import HomeIcon from "../assets/icons/home.svg";
import VideoIcon from "../assets/icons/video.svg";
import MessageIcon from "../assets/icons/message.svg";
import UserIcon from "../assets/icons/user.svg";

const active = ref("home");

const navItems = [
  { key: "home", name: "Home", icon: HomeIcon, route: "/" },
  { key: "videos", name: "Videos", icon: VideoIcon, route: "/videos" },
  { key: "chats", name: "Chats", icon: MessageIcon, route: "/chats" },
  { key: "profile", name: "Profile", icon: UserIcon, route: "/profile" },
];
</script>

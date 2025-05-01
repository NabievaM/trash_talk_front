<template>
  <div class="bg-white rounded-2xl px-4 py-4 mb-4 w-[390px] mx-auto">
    <div class="flex justify-between items-start mb-3">
      <div class="flex items-center space-x-2">
        <span class="font-roboto font-semibold text-base text-[#19295C]">
          {{ title }}
        </span>
        <Checkmark />
      </div>
      <Setting class="text-[#99A1BE] bg-[#F1F4F5] rounded-full w-[40px]" />
    </div>

    <p class="font-roboto font-normal text-base text-[#2D3F7B] mb-4">
      Hey pals, guess what? 🎉 I've just wrapped up crafting these mind-blowing
      3D wallpapers, drenched in the coolest of the cool colors! 🌈💎
    </p>

    <div class="flex space-x-2 justify-center">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        class="w-[120px] h-[220px] radius-[14px] object-cover rounded-xl"
        alt="3D Wallpaper"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import Checkmark from "../assets/icons/checkmark.svg";
import Setting from "../assets/icons/setting.svg";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";

const { title } = defineProps<{ title: string }>();

const images = [img1, img2, img3];
</script>

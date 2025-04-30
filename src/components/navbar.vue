<script setup lang="ts">
import LogoIcon from "../assets/icons/logo.svg";
import NotificationIcon from "../assets/icons/notification.svg";
import CameraIcon from "../assets/icons/camera.svg";
import LiveVideoIcon from "../assets/icons/live-video.svg";
import CheckinIcon from "../assets/icons/checkin.svg";
</script>

<template>
  <div class="px-4 py-7 bg-white rounded-b-[24px]">
    <div
      class="flex items-center justify-between w-full pb-3 border-b-2"
      style="border-color: #f1f4f5"
    >
      <div class="flex items-center space-x-1">
        <LogoIcon />
        <div class="font-lexend text-[20px] font-[700]">PTTA</div>
      </div>

      <NotificationIcon />
    </div>

    <div class="flex gap-3 mt-3 justify-between">
      <div
        class="flex items-center gap-2 py-1 px-1.5 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
      >
        <CameraIcon />
        <span class="text-sm text-gray-800 font-medium">Photo/video</span>
      </div>

      <div
        class="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
      >
        <LiveVideoIcon />
        <span class="text-sm text-gray-800 font-medium">Live video</span>
      </div>

      <div
        class="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-xl cursor-pointer hover:bg-gray-200"
      >
        <CheckinIcon />
        <span class="text-sm text-gray-800 font-medium">Check in</span>
      </div>
    </div>
  </div>
</template>

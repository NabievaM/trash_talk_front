<template>
  <div
    class="max-w-md mx-auto w-[380px] bg-white p-4 rounded-lg shadow-sm mb-5 mt-2"
  >
    <div class="flex items-center gap-3 mb-3">
      <img
        src="../assets/images/profile.png"
        alt="User avatar"
        class="w-10 h-10 rounded-full object-cover"
      />
      <div class="flex-1">
        <div class="flex items-center gap-1">
          <p class="font-lexend font-semibold text-base text-[#2F2F2F]">
            Jenny Wilson
          </p>
          <Checkmark />
        </div>

        <div class="flex items-center gap-1">
          <World />
          <p class="font-lexend font-normal text-[10px] text-[#979797]">
            2 Hours ago
          </p>
        </div>
      </div>
    </div>

    <div class="mb-3 border-b pb-3">
      <p class="font-lexend font-normal text-base mb-3 text-[#2F2F2F]">
        The Lakers win not with Doncic and LeBron, but with defense. How does it
        all work?
      </p>

      <div class="relative rounded-md overflow-hidden">
        <img
          src="../assets/images/sport3.png"
          alt="Post"
          class="w-full h-auto object-cover"
        />
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="bg-white p-2 rounded-full shadow">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-black"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M6 4l10 6-10 6V4z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex justify-between items-center text-[#CDCDCD] font-normal font-lexend font-base mt-3"
    >
      <div class="flex gap-3">
        <p>07.03.2024</p>
        <p>11:53</p>
      </div>
      <div class="flex items-center gap-5">
        <div class="flex items-center gap-1"><Message /> 190</div>
        <div class="flex items-center gap-1"><Eye /> 1200</div>
        <div class="flex items-center gap-1"><Like /> 12</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Checkmark from "../assets/icons/checkmark.svg";
import World from "../assets/icons/world.svg";
import Like from "../assets/icons/like.svg";
import Eye from "../assets/icons/eye.svg";
import Message from "../assets/icons/comment-message.svg";
</script>

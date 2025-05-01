<template>
  <div class="w-full max-w-md mx-auto mt-7 rounded-md">
    <div class="flex items-center mb-4 gap-2">
      <h2 class="font-lexend font-medium text-xl text-[#1E1E1E]">
        12 Comments
      </h2>
      <Restart />
    </div>

    <div
      class="flex justify-between items-center mb-4 gap-x-2 font-lexend font-medium text-sm"
    >
      <button
        v-for="tab in ['new', 'popular']"
        :key="tab"
        :class="[
          'w-1/2 py-1.5 rounded',
          activeTab === tab
            ? 'bg-[#1877F2] text-white'
            : 'bg-[#F4F4F4] text-[#2F2F2F]',
        ]"
        @click="activeTab = tab"
      >
        {{ tab.charAt(0).toUpperCase() + tab.slice(1) }}
      </button>
    </div>

    <div v-for="(comment, index) in comments" :key="index">
      <div class="flex items-start gap-3">
        <div
          class="w-10 h-10 rounded-full flex items-center justify-center bg-yellow-400 font-bold text-white text-sm uppercase"
        >
          {{ comment.name.charAt(0) }}
        </div>
        <div class="flex-1 font-lexend">
          <div class="flex justify-between items-center">
            <div class="leading-[0.5]">
              <p class="font-semibold text-base text-[#2F2F2F]">
                {{ comment.name }}
              </p>
              <span class="font-normal text-xs text-[#979797]">{{
                comment.date
              }}</span>
            </div>
            <Setting class="w-[28px]" />
          </div>
        </div>
      </div>

      <div class="font-lexend mt-3">
        <p class="font-normal text-base">{{ comment.text }}</p>
        <button
          class="bg-[#F4F4F4] text-[#2F2F2F] font-medium text-sm px-6 py-1 rounded mt-3"
        >
          Answer
        </button>

        <div v-if="comment.reply" class="mt-3 pl-2 border-l-2 border-gray-200">
          <div class="flex gap-2 mb-3">
            <div
              class="w-8 h-8 rounded-full flex items-center justify-center bg-blue-400 font-bold text-white text-sm uppercase"
            >
              {{ comment.reply.from.charAt(0) }}
            </div>
            <div class="flex flex-col gap-1">
              <p class="font-semibold text-xs text-[#2F2F2F]">
                {{ comment.reply.from }}
              </p>
              <p class="font-normal text-[10px] text-[#979797]">
                {{ comment.date }}
              </p>
            </div>
          </div>

          <div class="border-l-2 pl-1">
            <p class="font-normal text-xs text-[#979797]">Answered</p>
            <p
              v-if="comment.reply.to"
              class="font-normal text-xs text-[#2F2F2F]"
            >
              {{ comment.reply.to }}
            </p>
            <p class="text-sm mt-3">{{ comment.reply.text }}</p>
          </div>

          <div class="mb-4">
            <p class="text-[#979797] font-normal text-sm mt-3">Hide comment</p>
            <button
              class="bg-[#F4F4F4] text-[#2F2F2F] font-medium text-sm px-6 py-1 rounded mt-3"
            >
              Answer
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Restart from "../assets/icons/restart.svg";
import Setting from "../assets/icons/setting.svg";

const activeTab = ref("popular");

const comments = ref([
  {
    name: "User name 1",
    date: "3 days ago",
    text: "Oh, it’s that time of the year again—March Madness talk is heating up. This season looks intense. Which teams are already locked in, and who’s still on the bubble? Hoping my favorites don’t choke down the stretch.",
    reply: {
      from: "User name 2",
      to: "User name 1",
      text: "Good bro!",
    },
  },
  {
    name: "User name 3",
    date: "5 days ago",
    text: "Oh, it’s that time of the year again—March Madness talk is heating up. This season looks intense. Which teams are already locked in, and who’s still on the bubble? Hoping my favorites don’t choke down the stretch.",
  },
]);
</script>

<template>
  <div class="px-2 pb-4">
    <div class="font-roboto py-5 px-4 flex justify-between items-center">
      <div class="font-medium text-xl">Groups</div>
      <div class="text-sm font-semibold text-[#1877F2]">See all</div>
    </div>

    <div
      ref="sliderRef"
      class="slider flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory px-2"
      @wheel.prevent="onMouseWheel"
      @click="handleClick"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        class="w-[340px] h-[221px] bg-white rounded-[24px] p-[10px] flex flex-col gap-[10px] shrink-0 snap-start"
      >
        <img
          :src="item.image"
          class="w-[320px] h-[150px] rounded-[16px] object-cover mx-auto"
        />

        <div class="flex items-end justify-between gap-2 font-roboto w-full">
          <div class="flex items-end gap-2">
            <GroupIcon class="w-6 h-6" />
            <div>
              <div class="text-base font-bold">{{ item.title }}</div>
              <div class="font-normal text-[10px] text-[#99A1BE]">
                {{ item.active }} active now, {{ item.postsPerDay }} posts a day
              </div>
            </div>
          </div>
          <button
            class="bg-[#1877F2] hover:bg-[#0e5dd1] active:bg-[#0a47a1] transition-colors duration-200 text-white text-xs font-bold rounded-3xl px-6 py-1.5"
          >
            See all
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GroupIcon from "../assets/icons/group.svg";

const sliderRef = ref<HTMLElement | null>(null);

interface Item {
  title: string;
  image: string;
  active: string;
  postsPerDay: string;
}

import sportImage from "../assets/images/sport.jpg";
import musicImage from "../assets/images/music.webp";
import artImage from "../assets/images/art.jpg";
import livestreamImage from "../assets/images/livestream.jpg";

const items: Item[] = [
  { title: "SPORTS", image: sportImage, active: "274k", postsPerDay: "100" },
  { title: "MUSIC", image: musicImage, active: "150k", postsPerDay: "80" },
  { title: "ART", image: artImage, active: "120k", postsPerDay: "50" },
  {
    title: "LIVESTREAMS",
    image: livestreamImage,
    active: "200k",
    postsPerDay: "120",
  },
];

const onMouseWheel = (e: WheelEvent): void => {
  const slider = sliderRef.value;
  if (slider) {
    slider.scrollLeft += e.deltaY;
  }
};

const handleClick = (e: MouseEvent): void => {
  const slider = sliderRef.value;
  if (!slider) return;

  const rect = slider.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const middle = rect.width / 2;
  const cardWidth = (slider.children[0] as HTMLElement).offsetWidth + 16;

  if (x > middle) {
    slider.scrollBy({ left: cardWidth, behavior: "smooth" });
  } else {
    slider.scrollBy({ left: -cardWidth, behavior: "smooth" });
  }
};
</script>

<style scoped>
.slider {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.slider::-webkit-scrollbar {
  display: none;
}
</style>

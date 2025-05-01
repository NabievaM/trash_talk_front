<template>
  <div class="max-w-md mx-auto">
    <div class="bg-white">
      <img
        src="../assets/images/sport2.jpg"
        alt="March Madness"
        class="w-full h-64 object-cover"
      />
      <div class="p-4">
        <div class="border-b-2 pb-4" style="border-color: #f1f4f5">
          <div class="flex justify-between items-center mb-4">
            <p class="font-lexend font-normal text-sm text-[#BFBFBF]">
              Mar 25 | 2025 | 08:32 PM
            </p>

            <Setting class="w-[32px] h-[32px]" />
          </div>

          <h2 class="font-lexend text-2xl font-medium mb-4">
            Bubble Watch 2025: Conference locks for men’s March Madness
          </h2>

          <p class="font-lexend font-medium text-base text-[#1E1E1E]">
            Author
            <span class="font-semibold text-[#1877F2]">Zhenya Shchetinin</span>
          </p>
        </div>

        <div
          class="flex items-center gap-6 mt-4 font-lexend text-base font-medium text-[#2F2F2F]"
        >
          <div class="flex items-center gap-1">
            <Share />
            <span>Share</span>
          </div>
          <div class="flex items-center gap-1">
            <Comment />
            <span>12</span>
          </div>
          <div
            class="flex items-center gap-1 ml-auto bg-[#F4F4F4] px-3 py-1 rounded-2xl"
          >
            <Like />
            <span>12</span>
          </div>
        </div>

        <p class="font-lexend font-normal text-base text-[#1E1E1E] mt-4">
          Selection Sunday is mere days away, and conference tournaments are
          underway, with the first wave of automatic bids being locked in
          and Joe Lunardi's Bracketology in full swing. <br />
          As of now, according to ESPN Analytics' tournament forecast model, 33
          teams have achieved at least a 95% chance to make the tournament, and
          seven others are in solid shape (70-95%). But that leaves 21 teams
          sitting between 25% and 69% odds, their fates still uncertain. <br />
          Read on for our breakdowns of each bubble team by conference and
          current category (based on their projected NCAA tournament status).
        </p>
        <button
          class="mt-4 w-full font-lexend font-medium text-sm text-[#1877F2] border border-[#1877F2] rounded-md px-4 py-2 hover:bg-[#1877F2] hover:text-white transition-colors duration-200"
        >
          Reading All
        </button>
        <CommentComponent />
      </div>
    </div>
    <CardComponent />
    <div class="px-4 py-1 font-lexend font-medium">
      <p class="text-xl text-[#1E1E1E]">Popular now</p>

      <div class="relative mt-2 rounded overflow-hidden">
        <img
          class="w-full object-cover"
          src="../assets/images/sport2.jpg"
          alt=""
        />

        <div
          class="absolute inset-0 bg-gradient-to-r bg-gradient-to-b from-black via-transparent to-black opacity-60"
        ></div>

        <p
          class="absolute bottom-2 left-2 text-base text-white px-3 py-1 rounded z-10"
        >
          Bubble Watch 2025: Conference locks for men's March Madness
        </p>
      </div>
    </div>
    <PostCardComponent />
  </div>
</template>

<script setup lang="ts">
import Setting from "../assets/icons/setting.svg";
import Share from "../assets/icons/share.svg";
import Comment from "../assets/icons/comment.svg";
import Like from "../assets/icons/like.svg";
import CommentComponent from "../components/comment.vue";
import CardComponent from "../components/groupCardSlider.vue";
import PostCardComponent from "../components/postCard.vue";
</script>

<script setup>
const props = defineProps({
  icon: String,
  title: String,
  content: String,
  bgIconColor: String,
  iconColor: String,
  contentColor: String,
});
import { Icon } from "@iconify/vue";
</script>

<template>
  <div
    class="w-full max-w-[400px] py-3 px-7 flex flex-col gap-4 bg-white rounded-xl shadow-sm"
  >
    <div class="flex gap-3 items-center">
      <div class="p-2 rounded-full" :class="props.bgIconColor">
        <Icon :icon="props.icon" class="text-2xl" :class="props.iconColor" />
      </div>
      <p class="text-[16px] font-semibold text-[#676A71]">
        {{ props.title }}
      </p>
    </div>
    <h1 class="text-4xl font-semibold" :class="props.contentColor">
      {{ props.content }}
    </h1>
  </div>
</template>

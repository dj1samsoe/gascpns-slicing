<script setup>
const props = defineProps({
  image: String,
  title: String,
  icon1: String,
  icon2: String,
  quantity: String,
  period: String,
  income: String,
  price: String,
  discount: String,
  button: String,
  isBuy: Boolean,
});
import { Icon } from "@iconify/vue";
</script>
<template>
  <div
    class="w-full max-w-[300px] flex flex-col gap-4 bg-white rounded-xl p-3 shadow-sm justify-between"
  >
    <img :src="props.image" class="w-full h-40" :alt="props.title" />
    <h1 class="text-xl font-semibold text-text-primary">{{ props.title }}</h1>
    <div class="flex flex-col space-y-2">
      <div class="flex gap-3 items-center">
        <div class="p-2 rounded-full bg-[#E0F3FE]">
          <Icon :icon="props.icon1" class="text-xl text-primary" />
        </div>
        <p class="text-md font-medium text-text-primary">
          {{ props.quantity }}
        </p>
      </div>
      <div class="flex gap-3 items-center">
        <div class="p-2 rounded-full bg-[#E0F3FE]">
          <Icon :icon="props.icon2" class="text-xl text-primary" />
        </div>
        <div class="flex gap-2 items-center">
          <h1 class="text-md font-medium text-text-primary">Periode</h1>
          <p class="text-xs font-medium text-text-quaternary">
            {{ props.period }}
          </p>
        </div>
      </div>
    </div>
    <!-- <div class="flex items-center justify-between">
      <h1 class="text-md font-medium text-text-primary">Pendapatan</h1>
      <p class="text-sm font-medium text-primary">Rp {{ props.income }}</p>
    </div> -->
    <div class="flex items-center justify-between">
      <h1 class="text-[16px] font-semibold text-text-primary line-through">
        Rp {{ props.price }}
      </h1>
      <div
        v-if="props.discount"
        class="px-4 py-1.5 rounded-full"
        :class="{
          'text-[#0BA7E3] bg-[#E0F3FE]': props.isBuy,
          'bg-[#E0FEEE] text-[#22C55E]': !props.isBuy,
        }"
      >
        <p class="text-md font-semibold">Rp {{ props.discount }}</p>
      </div>
    </div>
    <button
      class="w-full rounded-full bg-primary text-white py-2"
      :class="{ 'bg-[#C2C3C6]': props.isBuy }"
    >
      {{ props.button }}
    </button>
  </div>
</template>

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
});
import { Icon } from "@iconify/vue";
</script>
<template>
  <div
    class="w-full max-w-[300px] flex flex-col gap-4 bg-white rounded-xl p-3 shadow-sm"
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
    <div class="flex items-center justify-between">
      <h1 class="text-md font-medium text-text-primary">Pendapatan</h1>
      <p class="text-sm font-medium text-primary">Rp {{ props.income }}</p>
    </div>
    <div class="flex items-center justify-between">
      <h1 class="text-[16px] font-semibold text-[#F11940] line-through">
        Rp {{ props.price }}
      </h1>
      <div class="px-4 py-1.5 bg-[#E0FEEE] rounded-full">
        <p class="text-md font-semibold text-[#22C55E]">
          Rp {{ props.discount }}
        </p>
      </div>
    </div>
  </div>
</template>

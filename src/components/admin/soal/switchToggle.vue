<template>
  <div>
    <input
      type="checkbox"
      id="toggleSwitchDiscount"
      class="hidden"
      v-model="isChecked"
    />

    <!-- Styled label for the switch -->
    <label for="toggleSwitchDiscount" class="flex items-center cursor-pointer">
      <!-- Background of the switch -->
      <div
        class="w-10 h-6 bg-gray-300 rounded-full p-1 transition duration-300 ease-in-out"
        :class="{ 'bg-blue-500': isChecked, 'bg-gray-300': !isChecked }"
      >
        <!-- Slider (the moving part of the switch) -->
        <div
          class="w-4 h-4 bg-white rounded-full shadow-md transform duration-300 ease-in-out"
          :class="{ 'translate-x-4': isChecked }"
        ></div>
      </div>
    </label>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isChecked = ref(false);
</script>

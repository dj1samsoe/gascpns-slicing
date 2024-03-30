<script setup>
const props = defineProps({
  title: String,
  span: String || null,
  icon1: String,
  icon2: String,
  links: Array, // New prop for dynamic links
});
import { Icon } from "@iconify/vue";
</script>

<template>
  <header
    class="fixed z-10 w-full top-0 left-0 right-0 px-7 py-4 pl-72 bg-white shadow-sm"
  >
    <div class="flex justify-between items-center pl-4">
      <!-- Dynamic Navigation Links (Breadcrumb) -->
      <div
        v-if="props.links && props.links.length"
        class="flex text-xl font-medium text-text-primary"
      >
        <template v-for="(link, index) in props.links" :key="index">
          <router-link
            :to="link.to"
            :class="{
              'text-text-primary': index === 0,
              'text-primary': index === props.links.length - 1,
            }"
          >
            {{ link.label }}
          </router-link>
          <!-- Add a divider after each link except the last one -->
          <span v-if="index !== props.links.length - 1" class="mx-1">/</span>
        </template>
      </div>

      <div class="flex gap-5 text-text-tertiary">
        <Icon :icon="props.icon1" class="text-3xl" />
        <Icon :icon="props.icon2" class="text-3xl" />
      </div>
    </div>
  </header>
</template>

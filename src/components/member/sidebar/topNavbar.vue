<script setup>
const props = defineProps({
  title: String,
  span: String || null,
  icon1: String,
  image: String,
  links: Array, // New prop for dynamic links
});
import { Icon } from "@iconify/vue";
import { useRoute, useRouter } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const router = useRouter();
const hideSidebar = computed(
  () => route.path === "/member/latihan" || route.path === "/member/tryout"
);
const goBack = () => {
  router.go(-1); // Navigate back one step in history
};
</script>

<template>
  <header
    v-if="!hideSidebar"
    class="fixed z-10 w-full top-0 left-0 right-0 px-7 py-4 pl-72 bg-white shadow-sm"
    :class="{ 'pl-0': hideSidebar }"
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
        <img
          :src="props.image"
          class="w-8 h-8 rounded-full"
          alt="Profile Image"
        />
      </div>
    </div>
  </header>

  <header
    v-if="hideSidebar"
    class="fixed z-10 w-full top-0 left-0 right-0 px-7 py-4 bg-white shadow-sm"
  >
    <button @click="goBack" class="flex justify-start items-center gap-3">
      <Icon icon="mingcute:left-line" class="text-3xl" />
      <p class="text-lg text-text-primary font-medium">Kembali</p>
    </button>
  </header>
</template>

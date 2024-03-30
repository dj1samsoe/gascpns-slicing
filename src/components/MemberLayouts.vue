<script setup>
import { useRoute } from "vue-router";
import Sidebar from "./member/sidebar/sidebar.vue";
import TopNavbar from "./member/sidebar/topNavbar.vue";
import { computed } from "vue";

const route = useRoute();

// Use a computed property to make hideSidebar reactive
const hideSidebar = computed(
  () => route.path === "/member/latihan" || route.path === "/member/tryout"
);
</script>

<template>
  <div class="flex flex-row min-h-screen w-full">
    <Sidebar v-if="!hideSidebar" />
    <div class="flex flex-col w-full">
      <TopNavbar
        :title="route.meta.title"
        :links="route.meta.links"
        icon1="mage:notification-bell"
        image="/profile.png"
      />

      <main
        class="flex flex-col min-h-screen md:pl-72 w-full px-7 py-20 bg-background"
        :class="{ 'md:!pl-0 bg-white': hideSidebar }"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

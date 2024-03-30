<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
// import { store } from "@/store";
import Logo from "./logo.vue";
import NavigationLink from "./navigation.vue";
const memberLinks = [
  {
    name: "Dashboard",
    url: "/member/dashboard",
    icons: "ri:dashboard-2-line",
  },
  {
    name: "Tryout",
    url: "/member/tryout",
    icons: "f7:question-square",
  },
  {
    name: "Rangking",
    url: "#",
    icons: "flowbite:chart-line-up-outline",
  },
  {
    name: "Statistika",
    url: "#",
    icons: "solar:volleyball-outline",
  },
  {
    name: "Latihan Soal",
    url: "/member/latihan",
    icons: "gg:browser",
  },
  {
    name: "FAQ",
    url: "#",
    icons: "gg:browser",
  },
];

const settings = [
  {
    name: "Pengaturan",
    url: "#",
    icons: "carbon:settings",
  },
  {
    name: "Keluar",
    url: "#",
    icons: "ph:power-bold",
  },
];

// const toggleSidebar = () => {
//   store.sidebarOpen = !store.sidebarOpen;
// };
</script>
<template>
  <!-- <div class="fixed inset-0 bg-black opacity-70 z-40"></div> -->
  <div
    class="w-full max-w-[275px] min-h-screen p-5 border-r-2 flex flex-col gap-8 text-text-primary fixed z-[99999] bg-white"
  >
    <div class="flex justify-between items-center">
      <div class="w-full">
        <Logo />
      </div>
    </div>

    <!-- MENU section -->
    <div class="flex flex-col gap-4">
      <h1 class="text-md font-medium text-text-tertiary">MENU</h1>
      <NavigationLink :links="memberLinks" />
    </div>

    <!-- SETTINGS section -->
    <div class="pt-10 flex flex-col gap-4">
      <h1 class="text-md font-medium text-text-tertiary">SETTINGS</h1>
      <NavigationLink :links="settings" />
    </div>
  </div>
</template>

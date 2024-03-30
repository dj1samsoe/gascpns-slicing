<script setup>
import { useRoute } from "vue-router";
import Sidebar from "./admin/sidebar/sidebar.vue";
import TopNavbar from "./admin/sidebar/topNavbar.vue";

const route = useRoute();
</script>

<template>
  <div class="flex flex-row min-h-screen w-full">
    <Sidebar />
    <div class="flex flex-col w-full">
      <TopNavbar
        :title="route.meta.title"
        :links="route.meta.links"
        icon1="mage:notification-bell"
        icon2="fa6-solid:circle-user"
      />

      <main
        class="flex flex-col min-h-screen w-full md:pl-72 px-7 py-20 bg-background"
      >
        <slot />
      </main>
    </div>
  </div>
</template>

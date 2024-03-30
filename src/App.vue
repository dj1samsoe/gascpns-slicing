<script setup>
// import { computed } from "vue";
// import { useRoute } from "vue-router";
// import AdminLayouts from "./components/AdminLayouts.vue";
// import MemberLayouts from "./components/MemberLayouts.vue";
// // import RegisterLayouts from "./components/RegisterLayouts.vue";

// const route = useRoute();

// // Computed property to dynamically select the layout based on the route path
// const currentLayout = computed(() => {
//   if (route.value && route.value.startsWith("/admin")) {
//     return AdminLayouts;
//   } else if (route.value && route.value.startsWith("/member")) {
//     return MemberLayouts;
//   } else {
//     return AdminLayouts;
//   }
// });
</script>

<template>
  <!-- Use the dynamically selected layout component -->
  <!-- <component :is="currentLayout" /> -->
  <router-view />
</template>

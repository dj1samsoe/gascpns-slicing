<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { Icon } from "@iconify/vue";

const route = useRoute();
const props = defineProps({
  links: Array,
});

const openDropdown = ref(null);

onMounted(() => {
  openDropdown.value = parseInt(localStorage.getItem("openDropdown")) || null;
});

// const toggleDropdown = (index) => {
//   const link = props.links[index];
//   if (link.name === "Soal & Paket") {
//     if (openDropdown.value === index) {
//       openDropdown.value = null;
//     } else {
//       openDropdown.value = index;
//     }

//     // Store the openDropdown state in local storage
//     localStorage.setItem("openDropdown", openDropdown.value);
//   }
// };
</script>

<template>
  <nav class="flex flex-col gap-2">
    <template v-for="link in props.links" :key="link.name">
      <div class="relative">
        <div class="flex items-center">
          <router-link
            :to="link.url"
            class="flex justify-between w-full items-center py-2 px-4 rounded-full transition-all duration-300"
            :class="{
              'hover:bg-tertiary text-text-tertiary': route.path !== link.url,
            }"
            :active-class="
              route.path === link.url
                ? 'text-[#0BA7E3] bg-tertiary'
                : 'text-text-tertiary'
            "
          >
            <div class="flex gap-5 items-center">
              <Icon :icon="link.icons" class="text-3xl"></Icon>
              <p class="text-md">{{ link.name }}</p>
            </div>
            <!-- <button
              v-if="link.name === 'Soal & Paket'"
              @click="toggleDropdown(index)"
              class="focus:outline-none transition-transform duration-300 transform"
              :class="{
                'rotate-0': !openDropdown,
                'rotate-180': openDropdown === index,
              }"
            >
              <Icon icon="ri:arrow-drop-down-line" class="text-3xl" />
            </button> -->
          </router-link>
        </div>

        <!-- Use transition element for fade effect -->
        <!-- <Transition name="slide-fade">

          <template v-if="link.children && openDropdown === index">
            <div class="flex flex-col w-full bg-white space-y-2 pt-2">
              
              <router-link
                v-for="childLink in link.children"
                :key="childLink.label"
                :to="childLink.to"
                class="flex gap-5 items-center ml-12 py-2 px-4 rounded-full transition-all duration-300"
                :class="{
                  'hover:bg-tertiary text-text-tertiary':
                    route.path !== childLink.to,
                }"
                :active-class="
                  route.path === childLink.to
                    ? 'text-primary bg-tertiary'
                    : 'text-text-tertiary'
                "
              >
                <p class="text-md">{{ childLink.label }}</p>
              </router-link>
            </div>
          </template>
        </Transition> -->
      </div>
    </template>
  </nav>
</template>

<style>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>

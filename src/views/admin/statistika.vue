<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import AdminLayouts from "@/components/AdminLayouts.vue";
import DoughnutChart from "@/components/admin/statistika/doughnutChart.vue";
import BarChart from "@/components/admin/statistika/barChart.vue";
import { Icon } from "@iconify/vue";
</script>

<template>
  <AdminLayouts>
    <div class="flex flex-col space-y-10">
      <select
        id="paket"
        name="paket"
        class="rounded-full bg-white w-full max-w-[300px] py-2 px-4 drop-shadow-md"
      >
        <option value="SDK1">Paket SDK1</option>
        <option value="SDK2">Paket SDK2</option>
        <option value="SDK3">Paket SDK3</option>
      </select>

      <div class="grid md:grid-cols-2 grid-cols-1 gap-5">
        <div
          class="bg-white rounded-xl flex flex-col space-y-5 py-4 px-3 drop-shadow-sm"
        >
          <div class="flex justify-between items-center">
            <h1 class="font-medium text-text-primary">Ringkasan Pelanggan</h1>
            <img src="/more.svg" alt="more icon" class="cursor-pointer" />
          </div>
          <div class="flex items-center">
            <div class="relative w-fit">
              <DoughnutChart />
              <div
                class="absolute drop-shadow-md top-32 left-36 transform -translate-x-10 -translate-y-5 bg-white rounded-full py-5 px-2"
              >
                <p class="text-text-tertiary text-sm text-center">Total</p>
                <h1 class="text-3xl font-semibold text-text-primary">100%</h1>
              </div>
            </div>
            <div class="flex flex-col space-y-3">
              <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col space-y-3">
                  <h1 class="font-semibold text-text-primary">Laki Laki</h1>
                  <div class="flex gap-2 items-center">
                    <Icon icon="ph:circle-bold" class="text-[#7CD8FD]" />
                    <p class="text-text-tertiary">18 - 24</p>
                  </div>
                </div>
                <div class="flex flex-col space-y-3">
                  <h1 class="font-semibold text-text-primary">Perempuan</h1>
                  <div class="flex gap-2 items-center">
                    <Icon icon="ph:circle-bold" class="text-[#7CD8FD]" />
                    <p class="text-text-tertiary">18 - 24</p>
                  </div>
                </div>
              </div>
              <div class="grid grid-cols-2 gap-3">
                <div class="flex flex-col space-y-3">
                  <h1 class="font-semibold text-text-primary">Laki Laki</h1>
                  <div class="flex gap-2 items-center">
                    <Icon icon="ph:circle-bold" class="text-[#7CD8FD]" />
                    <p class="text-text-tertiary">25 - 34</p>
                  </div>
                </div>
                <div class="flex flex-col space-y-3">
                  <h1 class="font-semibold text-text-primary">Perempuan</h1>
                  <div class="flex gap-2 items-center">
                    <Icon icon="ph:circle-bold" class="text-[#7CD8FD]" />
                    <p class="text-text-tertiary">25 - 34</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-white rounded-xl flex flex-col space-y-5 py-4 px-3 drop-shadow-sm"
        >
          <div class="flex justify-between">
            <h1 class="font-medium text-text-primary">Ringkasan Try Out</h1>
            <img src="/more.svg" alt="more icon" class="cursor-pointer" />
          </div>
          <div class="grid grid-cols-2 gap-5">
            <div
              class="border border-[#EFEFEF] rounded-md px-5 py-3 flex flex-col space-y-3"
            >
              <p class="text-[#676A71] font-semibold">Total Tryout Terjual</p>
              <h1 class="text-primary text-2xl font-semibold">10.000</h1>
            </div>
            <div
              class="border border-[#EFEFEF] rounded-md px-5 py-3 flex flex-col space-y-3"
            >
              <p class="text-[#676A71] font-semibold">Total Pendapatan</p>
              <h1 class="text-primary text-2xl font-semibold">100.000.000</h1>
            </div>
            <div
              class="border border-[#EFEFEF] rounded-md px-5 py-3 flex flex-col space-y-3"
            >
              <p class="text-[#676A71] font-semibold">Jumlah Pembeli</p>
              <h1 class="text-primary text-2xl font-semibold">100.000.000</h1>
            </div>
          </div>
        </div>
      </div>
      <BarChart />
    </div>
  </AdminLayouts>
</template>

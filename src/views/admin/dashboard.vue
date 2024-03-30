<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DashboardCard from "@/components/admin/dashboard/dashboardCard.vue";
import Chart from "@/components/admin/dashboard/chart.vue";
import PreviewTryoutCard from "@/components/admin/dashboard/previewTryoutCard.vue";
import AdminLayouts from "@/components/AdminLayouts.vue";
</script>

<template>
  <AdminLayouts>
    <div class="flex flex-col space-y-10">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <DashboardCard
          title="Total Soal"
          icon="mage:message-question-mark-fill"
          content="10"
          content-color="text-[#E30B3F]"
          bg-icon-color="bg-[#FEE0E0]"
          icon-color="text-[#E30B3F]"
        />
        <DashboardCard
          title="Total Paket Tryout"
          icon="fa-solid:biking"
          content="10"
          content-color="text-[#0BA7E3]"
          bg-icon-color="bg-[#E0F3FE]"
          icon-color="text-[#0BA7E3]"
        />
        <DashboardCard
          title="Total Paket Latihan"
          icon="solar:volleyball-outline"
          content="1000"
          content-color="text-[#E3C00B]"
          bg-icon-color="bg-[#FEFDE0]"
          icon-color="text-[#E3C00B]"
        />
        <DashboardCard
          title="Total User"
          icon="mage:users-fill"
          content="1000"
          content-color="text-[#858688]"
          bg-icon-color="bg-[#EEEEEE]"
          icon-color="text-[#858688]"
        />
        <DashboardCard
          title="Total Pendapatan"
          icon="fa-solid:hand-holding-usd"
          content="1000"
          content-color="text-[#0BE361]"
          bg-icon-color="bg-[#E0FEEE]"
          icon-color="text-[#0BE361]"
        />
        <DashboardCard
          title="Total Content"
          icon="gg:browser"
          content="1000"
          content-color="text-[#0BD6E3]"
          bg-icon-color="bg-[#E0F9FE]"
          icon-color="text-[#0BD6E3]"
        />
      </div>
      <Chart />
      <div class="flex flex-col space-y-4">
        <h1 class="text-xl font-medium">Popular Try Out Package Sold</h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          <PreviewTryoutCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="79.000"
          />
          <PreviewTryoutCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="79.000"
          />
          <PreviewTryoutCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="79.000"
          />
          <PreviewTryoutCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="79.000"
          />
        </div>
      </div>
    </div>
  </AdminLayouts>
</template>

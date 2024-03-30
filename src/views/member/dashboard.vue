<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import DashboardCard from "@/components/member/dashboard/dashboardCard.vue";
import SoalCard from "@/components/member/dashboard/soalCard.vue";
import MemberLayouts from "@/components/MemberLayouts.vue";
</script>

<template>
  <MemberLayouts>
    <div class="flex flex-col space-y-10">
      <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
        <DashboardCard
          title="Soal Tryout Anda"
          icon="mage:message-question-mark-fill"
          content="10"
          content-color="text-text-primary"
          bg-icon-color="bg-[#E0F3FE]"
          icon-color="text-primary"
        />
        <DashboardCard
          title="Rangking Terakhir"
          icon="fa6-solid:ranking-star"
          content="10"
          content-color="text-text-primary"
          bg-icon-color="bg-[#FDFEE0]"
          icon-color="text-[#E8C444]"
        />
        <DashboardCard
          title="Soal yang Dikerjakan"
          icon="mage:message-question-mark-fill"
          content="10"
          content-color="text-text-primary"
          bg-icon-color="bg-[#FEE0E0]"
          icon-color="text-[#E30B3F]"
        />
        <DashboardCard
          title="Total User"
          icon="mage:users-fill"
          content="1000"
          content-color="text-text-primary"
          bg-icon-color="bg-[#E0FEEE]"
          icon-color="text-[#0BE361]"
        />
      </div>
      <div class="flex flex-col space-y-4">
        <h1 class="text-lg font-medium text-black">Soal Favorite</h1>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          <SoalCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="69.000"
            :button="`Dapat dibeli 3 hari lagi`"
            :isBuy="true"
          />
          <SoalCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="79.000"
            :button="`Beli Soal`"
            :isBuy="false"
          />
          <SoalCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            :button="`Beli Soal`"
            :isBuy="false"
          />
          <SoalCard
            image="/hero-card.png"
            title="Soal SKD"
            icon1="fa6-solid:cart-shopping"
            quantity="10.000 Terjual"
            icon2="fluent:calendar-clock-24-filled"
            period="01 - 05 Feb 2024"
            income="20.000.000"
            price="99.000"
            discount="79.000"
            :button="`Dapat dibeli 3 hari lagi`"
            :isBuy="true"
          />
        </div>
      </div>
      <div class="flex flex-col space-y-4">
        <h1 class="text-lg font-medium text-black">Info Terbaru</h1>
        <div class="grid md:grid-cols-3 grid-cols-1 gap-5">
          <img src="/info-1.png" alt="Info Image" />
          <img src="/info-2.png" alt="Info Image" />
          <img src="/info-3.png" alt="Info Image" />
        </div>
      </div>
    </div>
  </MemberLayouts>
</template>

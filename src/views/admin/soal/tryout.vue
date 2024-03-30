<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TableSoal from "@/components/admin/soal/tableSoal.vue";
import AdminLayouts from "@/components/AdminLayouts.vue";
</script>

<template>
  <AdminLayouts>
    <div
      class="bg-white w-full min-h-screen flex justify-center px-10 pt-16 pb-10"
    >
      <TableSoal />
    </div>
  </AdminLayouts>
</template>

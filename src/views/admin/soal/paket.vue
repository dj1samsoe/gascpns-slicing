<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import TablePaket from "@/components/admin/soal/tablePaket.vue";
import AdminLayouts from "@/components/AdminLayouts.vue";
</script>

<template>
  <AdminLayouts>
    <div
      class="bg-white w-full min-h-screen flex justify-center px-10 pt-16 pb-10"
    >
      <TablePaket />
    </div>
  </AdminLayouts>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";
import SwitchToggle from "./switchToggle.vue";
import Toggle from "./toggle.vue";

const showModalSoal = ref(false);
</script>
<template>
  <div class="w-full max-w-[1024px] flex flex-col space-y-3">
    <div
      v-if="!showModalSoal"
      class="flex flex-grow-0 justify-center items-center gap-4 bg-[#E0F3FE] px-6 py-4 drop-shadow-md"
    >
      <div class="p-2 bg-white rounded-sm cursor-pointer">
        <Icon icon="mage:filter-fill" class="text-2xl text-primary" />
      </div>
      <input
        type="text"
        class="px-4 py-2 bg-white rounded-sm w-full max-w-[500px]"
        placeholder="Search"
      />
      <div class="flex gap-4 items-center">
        <button
          class="px-5 py-2 bg-transparent border border-primary text-primary rounded-full"
        >
          <router-link to="#">Import Soal</router-link>
        </button>
        <button
          @click="showModalSoal = !showModalSoal"
          class="px-5 py-2 bg-primary text-white rounded-full"
        >
          Buat Soal Tryout
        </button>
      </div>
    </div>
    <table v-if="!showModalSoal" class="w-full shadow-lg">
      <tr>
        <th>No</th>
        <th>Soal Tryout</th>
        <th>Level Kesulitan</th>
        <th>Kategori Soal</th>
        <th>Group Soal</th>
        <th>Aksi</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Tes Wawasan Kebangsaan</td>
        <td>Mudah</td>
        <td>TWK</td>
        <td>TWK 1</td>
        <td class="flex flex-col gap-3">
          <div
            class="flex gap-2 items-center text-primary cursor-pointer text-xs tracking-tighter"
          >
            <Icon icon="mdi:eye" class="text-xs" />
            <h1>Lihat Pilihan Ganda</h1>
          </div>
          <div class="flex gap-5 items-center text-xs">
            <div class="flex gap-1 items-center text-[#F90A0A] cursor-pointer">
              <Icon icon="mdi:trash" class="text-xs" />
              <h1>Hapus</h1>
            </div>
            <div class="flex gap-1 items-center text-[#22C55E] cursor-pointer">
              <Icon icon="mdi:pencil" class="text-xs" />
              <h1>Edit</h1>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>Tes Intelegensia Umum</td>
        <td>Sedang</td>
        <td>TWK</td>
        <td>TWK 1</td>
        <td class="flex flex-col gap-3">
          <div
            class="flex gap-2 items-center text-primary cursor-pointer text-xs tracking-tighter"
          >
            <Icon icon="mdi:eye" class="text-xs" />
            <h1>Lihat Pilihan Ganda</h1>
          </div>
          <div class="flex gap-5 items-center text-xs">
            <div class="flex gap-1 items-center text-[#F90A0A] cursor-pointer">
              <Icon icon="mdi:trash" class="text-xs" />
              <h1>Hapus</h1>
            </div>
            <div class="flex gap-1 items-center text-[#22C55E] cursor-pointer">
              <Icon icon="mdi:pencil" class="text-xs" />
              <h1>Edit</h1>
            </div>
          </div>
        </td>
      </tr>
      <tr>
        <td>3</td>
        <td>Tes Kompetensi Dasar</td>
        <td>Sulit</td>
        <td>TWK</td>
        <td>TWK 1</td>
        <td class="flex flex-col gap-3">
          <div
            class="flex gap-2 items-center text-primary cursor-pointer text-xs tracking-tighter"
          >
            <Icon icon="mdi:eye" class="text-xs" />
            <h1>Lihat Pilihan Ganda</h1>
          </div>
          <div class="flex gap-5 items-center text-xs font-medium">
            <div class="flex gap-1 items-center text-[#F90A0A] cursor-pointer">
              <Icon icon="mdi:trash" class="text-xs" />
              <h1>Hapus</h1>
            </div>
            <div class="flex gap-1 items-center text-[#22C55E] cursor-pointer">
              <Icon icon="mdi:pencil" class="text-xs" />
              <h1>Edit</h1>
            </div>
          </div>
        </td>
      </tr>
    </table>
    <Transition name="slide-fade">
      <div v-if="showModalSoal" class="w-full p-4 bg-white">
        <h1 class="text-2xl font-semibold mb-4 text-center text-[#323232]">
          Form Paket Soal Tryout Online
        </h1>
        <form class="flex flex-col gap-10">
          <div class="flex flex-col gap-2 text-sm">
            <label for="Judul" class="text-[#7C7F97] font-medium"
              >Input Judul</label
            >
            <input
              type="text"
              id="Judul"
              placeholder="Input Judul Soal Tryout Online"
              class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
            />
          </div>
          <div class="flex flex-col gap-2 text-sm">
            <label for="Judul Paket" class="text-[#7C7F97] font-medium"
              >Input Judul Paket</label
            >
            <input
              type="text"
              id="Judul Paket"
              placeholder="Input Judul Paket Soal Tryout Online"
              class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
            />
          </div>
          <div class="grid grid-cols-2 gap-7">
            <div class="flex flex-col gap-2 text-sm">
              <label for="Periode" class="text-[#7C7F97] font-medium"
                >Input Periode Pengerjaan</label
              >
              <input
                type="date"
                id="Periode"
                class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
              />
            </div>
            <div class="flex flex-col gap-2 text-sm">
              <label for="thumbnail" class="text-[#7C7F97] font-medium"
                >Input Thumbnail Paket Soal</label
              >
              <input
                type="file"
                name="thumbnail"
                id="thumbnail"
                class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
                max="5"
                accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
              />
            </div>
          </div>
          <div class="grid grid-cols-2 gap-7">
            <div class="flex flex-col gap-2 text-sm">
              <label for="quota" class="text-[#7C7F97] font-medium"
                >Input Maksimal Quota</label
              >
              <input
                type="text"
                id="quota"
                placeholder="Input Maksimal Quota"
                class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
              />
            </div>
            <div class="flex flex-col gap-2 text-sm">
              <label for="harga" class="text-[#7C7F97] font-medium"
                >Input Harga Field</label
              >

              <div class="relative">
                <input
                  type="text"
                  name="harga"
                  id="harga"
                  placeholder="Input Harga Diskon"
                  class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
                  max="5"
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
                />
                <SwitchToggle class="absolute top-3 right-5" />
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <div class="flex flex-col gap-2 text-sm">
              <label for="harga" class="text-[#7C7F97] font-medium"
                >Input Soal & Jawaban</label
              >

              <div class="relative">
                <input
                  type="text"
                  name="soal"
                  id="soal"
                  placeholder="Input Soal dan jawaban"
                  class="w-full px-6 py-3 border border-[#E5E5E5] rounded-md"
                  max="5"
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/svg"
                />
                <Toggle class="absolute top-3 right-5" />
              </div>
            </div>
            <div
              class="bg-[#E0F3FE] border-l-4 border-l-[#0BA7E3] flex flex-col gap-5 p-5"
            >
              <label for="upload" class="text-[#7C7F97] font-medium text-sm">
                File Upload
              </label>
              <button
                class="bg-[#0BA7E3] text-white px-8 py-2 rounded-full w-fit text-sm"
              >
                Pilih File
              </button>
            </div>
          </div>
          <div class="flex flex-col gap-2">
            <label for="kategori" class="text-[#7C7F97] text-sm font-medium"
              >Pilih Soal TWK</label
            >
            <select
              id="kategori"
              name="kategori"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="TWK" class="bg-[#E0F3FE]">TWK</option>
              <option value="TIU" class="bg-[#E0F3FE]">TIU</option>
              <option value="TKD" class="bg-[#E0F3FE]">SKD</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="kategori" class="text-[#7C7F97] text-sm font-medium"
              >Pilih Soal TIU</label
            >
            <select
              id="kategori"
              name="kategori"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="TWK" class="bg-[#E0F3FE]">TWK</option>
              <option value="TIU" class="bg-[#E0F3FE]">TIU</option>
              <option value="TKD" class="bg-[#E0F3FE]">SKD</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="kategori" class="text-[#7C7F97] text-sm font-medium"
              >Pilih Soal SKD</label
            >
            <select
              id="kategori"
              name="kategori"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="TWK" class="bg-[#E0F3FE]">TWK</option>
              <option value="TIU" class="bg-[#E0F3FE]">TIU</option>
              <option value="TKD" class="bg-[#E0F3FE]">SKD</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="kategori" class="text-[#7C7F97] text-sm font-medium"
              >Pilih Soal</label
            >
            <select
              id="kategori"
              name="kategori"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="TWK" class="bg-[#E0F3FE]">TWK</option>
              <option value="TIU" class="bg-[#E0F3FE]">TIU</option>
              <option value="TKD" class="bg-[#E0F3FE]">SKD</option>
            </select>
          </div>
        </form>
        <div class="flex justify-end items-center gap-4 mt-10">
          <button
            @click="showModalSoal = !showModalSoal"
            class="px-5 py-2 tracking-tighter bg-transparent border border-primary text-primary rounded-full"
          >
            Batal
          </button>
          <button
            @click="showModalSoal = !showModalSoal"
            class="px-5 py-2 bg-primary text-white rounded-full tracking-tighter"
          >
            Buat Paket Soal
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>
<style scoped>
tr {
  text-align: center;
}
th,
td {
  padding: 20px;
}

th {
  color: #8f90a6;
  font-weight: 400;
}

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

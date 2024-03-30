<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const toolbarOptions = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ["bold", "italic", "underline", "strike"],
  [{ align: [] }],
  ["image"],
  [{ list: "ordered" }, { list: "bullet" }, { list: "check" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
];

const showModalPaket = ref(false);
</script>
<template>
  <div class="w-full max-w-[1024px] flex flex-col space-y-3">
    <div
      v-if="!showModalPaket"
      class="flex flex-grow-0 justify-center items-center gap-4 drop-shadow-md bg-[#E0F3FE] px-6 py-4"
    >
      <div class="p-2 bg-white rounded-sm cursor-pointer">
        <Icon icon="mage:filter-fill" class="text-2xl text-primary" />
      </div>
      <input
        type="text"
        class="px-4 py-2 bg-white rounded-sm w-full max-w-[475px]"
        placeholder="Search"
      />
      <div class="flex gap-4 items-center">
        <button
          class="px-5 py-2 tracking-tighter bg-transparent border border-primary text-primary rounded-full"
        >
          <router-link to="#">Import Soal</router-link>
        </button>
        <button
          class="px-5 py-2 bg-primary text-white rounded-full tracking-tighter"
          @click="showModalPaket = !showModalPaket"
        >
          Buat Paket Soal Tryout
        </button>
      </div>
    </div>
    <table v-if="!showModalPaket" class="w-full shadow-lg">
      <tr>
        <th>No</th>
        <th>Judul</th>
        <th>Periode Pengerjaan</th>
        <th>Periode Pengerjaan</th>
        <th>Harga</th>
        <th>Terjual</th>
        <th>Aksi</th>
      </tr>
      <tr>
        <td>1</td>
        <td>Paket SKD CPNS Promo</td>
        <td>01/ 03 /2024 - 04/ 03 /2024</td>
        <td>01/ 03 /2024 - 04/ 03 /2024</td>
        <td>Rp 15.000</td>
        <td>10.000</td>
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
        <td>Paket SKD CPNS Promo</td>
        <td>01/ 03 /2024 - 04/ 03 /2024</td>
        <td>01/ 03 /2024 - 04/ 03 /2024</td>
        <td>Rp 15.000</td>
        <td>10.000</td>
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
        <td>Paket SKD CPNS Promo</td>
        <td>01/ 03 /2024 - 04/ 03 /2024</td>
        <td>01/ 03 /2024 - 04/ 03 /2024</td>
        <td>Rp 15.000</td>
        <td>10.000</td>
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
    </table>
    <Transition name="slide-fade">
      <div v-if="showModalPaket" class="w-full p-4 bg-white">
        <h1 class="text-2xl font-semibold mb-4 text-center text-[#323232]">
          Form Paket Soal Tryout
        </h1>

        <form class="flex flex-col gap-10">
          <div class="flex flex-col gap-2">
            <label for="kategori" class="text-[#7C7F97] text-sm font-medium"
              >Kategori</label
            >
            <select
              id="kategori"
              name="kategori"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="TWK" class="bg-[#E0F3FE]">TWK</option>
              <option value="TIU" class="bg-[#E0F3FE]">TIU</option>
              <option value="TKD" class="bg-[#E0F3FE]">TKD</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="Soal" class="text-[#7C7F97] text-sm font-medium"
              >Soal</label
            >
            <QuillEditor :toolbar="toolbarOptions" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="pilihan" class="text-[#7C7F97] text-sm font-medium"
              >Pilihan A</label
            >
            <QuillEditor :toolbar="toolbarOptions" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="skor" class="text-[#7C7F97] text-sm font-medium"
              >Skor Jawaban</label
            >
            <select
              id="skor"
              name="skor"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="5" class="bg-[#E0F3FE]">5</option>
              <option value="10" class="bg-[#E0F3FE]">10</option>
              <option value="15" class="bg-[#E0F3FE]">15</option>
              <option value="20" class="bg-[#E0F3FE]">20</option>
            </select>
          </div>

          <div class="flex flex-col gap-2">
            <label for="pilihan" class="text-[#7C7F97] text-sm font-medium"
              >Pilihan B</label
            >
            <QuillEditor :toolbar="toolbarOptions" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="skor" class="text-[#7C7F97] text-sm font-medium"
              >Skor Jawaban</label
            >
            <select
              id="skor"
              name="skor"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="5" class="bg-[#E0F3FE]">5</option>
              <option value="10" class="bg-[#E0F3FE]">10</option>
              <option value="15" class="bg-[#E0F3FE]">15</option>
              <option value="20" class="bg-[#E0F3FE]">20</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="pilihan" class="text-[#7C7F97] text-sm font-medium"
              >Pilihan C</label
            >
            <QuillEditor :toolbar="toolbarOptions" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="skor" class="text-[#7C7F97] text-sm font-medium"
              >Skor Jawaban</label
            >
            <select
              id="skor"
              name="skor"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="5" class="bg-[#E0F3FE]">5</option>
              <option value="10" class="bg-[#E0F3FE]">10</option>
              <option value="15" class="bg-[#E0F3FE]">15</option>
              <option value="20" class="bg-[#E0F3FE]">20</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="pilihan" class="text-[#7C7F97] text-sm font-medium"
              >Pilihan D</label
            >
            <QuillEditor :toolbar="toolbarOptions" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="skor" class="text-[#7C7F97] text-sm font-medium"
              >Skor Jawaban</label
            >
            <select
              id="skor"
              name="skor"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="5" class="bg-[#E0F3FE]">5</option>
              <option value="10" class="bg-[#E0F3FE]">10</option>
              <option value="15" class="bg-[#E0F3FE]">15</option>
              <option value="20" class="bg-[#E0F3FE]">20</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="pilihan" class="text-[#7C7F97] text-sm font-medium"
              >Pilihan E</label
            >
            <QuillEditor :toolbar="toolbarOptions" />
          </div>
          <div class="flex flex-col gap-2">
            <label for="skor" class="text-[#7C7F97] text-sm font-medium"
              >Skor Jawaban</label
            >
            <select
              id="skor"
              name="skor"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            >
              <option value="5" class="bg-[#E0F3FE]">5</option>
              <option value="10" class="bg-[#E0F3FE]">10</option>
              <option value="15" class="bg-[#E0F3FE]">15</option>
              <option value="20" class="bg-[#E0F3FE]">20</option>
            </select>
          </div>
          <div class="flex flex-col gap-2">
            <label for="jawaban" class="text-[#7C7F97] text-sm font-medium"
              >Input Jawaban Benar</label
            >
            <input
              type="text"
              placeholder="Input Soal dan Jawaban"
              class="w-full px-4 py-3 border border-gray-300 rounded-md text-[#7C7F97] text-sm font-semibold"
            />
          </div>
        </form>
        <div class="flex justify-end items-center gap-4 mt-10">
          <button
            @click="showModalPaket = !showModalPaket"
            class="px-5 py-2 tracking-tighter bg-transparent border border-primary text-primary rounded-full"
          >
            Batal
          </button>
          <button
            @click="showModalPaket = !showModalPaket"
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

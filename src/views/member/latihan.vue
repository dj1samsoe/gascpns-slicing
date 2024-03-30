<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import MemberLayouts from "@/components/MemberLayouts.vue";

const numbers = Array.from({ length: 110 }, (_, index) => index + 1);
</script>

<template>
  <MemberLayouts>
    <div class="px-16 grid grid-cols-5 gap-10">
      <div class="flex flex-col space-y-7 col-span-3">
        <ol>
          <li class="list-decimal">
            <p class="text-text-primary">
              Untuk merebut hati penduduk Indonesia, Jepang menggaungkan
              semboyan 3A, yaitu Jepang pemimpin Asia, Jepang pelindung Asia,
              dan Jepang cahaya Asia. Penggaungan semboyan tersebut merupakan
              contoh dari sikap....
            </p>
            <div class="flex flex-col space-y-3 pt-4">
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  id="A"
                  name="answer"
                  value="A"
                  class="w-4 h-4"
                />
                <label for="A">A Etnosentrisme</label>
              </div>
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  id="B"
                  name="answer"
                  value="B"
                  class="w-4 h-4"
                />
                <label for="B">B Cinta Tanah Air</label>
              </div>
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  id="C"
                  name="answer"
                  value="C"
                  class="w-4 h-4"
                />
                <label for="C">C Primordialisme</label>
              </div>
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  id="D"
                  name="answer"
                  value="D"
                  class="w-4 h-4"
                />
                <label for="D">D Chauvinisme</label>
              </div>
              <div class="flex items-center gap-4">
                <input
                  type="radio"
                  id="E"
                  name="answer"
                  value="E"
                  class="w-4 h-4"
                />
                <label for="E">E Nasionalisme</label>
              </div>
            </div>
          </li>
        </ol>
      </div>
      <div class="flex flex-col gap-3 w-[500px]">
        <div
          class="bg-white drop-shadow-md flex flex-col items-end space-y-5 px-10 py-5"
        >
          <div class="flex justify-end">
            <div
              class="bg-primary text-white flex items-center gap-4 px-3 py-2 rounded-lg"
            >
              <img src="/countdown.svg" />
              <p>01 : 24 : 56</p>
            </div>
          </div>
          <div
            class="flex flex-wrap justify-end items-center gap-3 max-w-[440px]"
          >
            <button
              v-for="number in numbers"
              :key="number"
              class="aspect-square w-[30px] h-[30px] rounded-md border border-[#90989F] text-[#90989F] text-xs"
            >
              {{ number }}
            </button>
          </div>
        </div>
        <div
          class="w-fit bg-white drop-shadow-md flex flex-col items-end space-y-5 px-10 py-5"
        >
          <ul class="list-inside">
            <p>Informasi Pengerjaan Soal :</p>
            <li class="list-disc pl-2">
              Halaman Ranking ini selalu diupdate setiap ada peserta yang
              mengumpulkan pengerjaan paket soal, sehingga sewaktu waktu ranking
              kamu dapat berubah.
            </li>
          </ul>
          <div class="flex flex-col space-y-3">
            <p>Keterangan Warna :</p>
            <div class="w-full flex gap-7 text-sm">
              <div class="flex items-center gap-4">
                <img src="/done.svg" alt="done" class="w-5 h-5" />
                <p>Sudah Dikerjakan</p>
              </div>
              <div class="flex items-center gap-4">
                <img src="/skip.svg" alt="done" class="w-5 h-5" />
                <p>Dilewati</p>
              </div>
              <div class="flex items-center gap-4">
                <img src="/blank.svg" alt="done" class="w-5 h-5" />
                <p>Belum di isi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MemberLayouts>
</template>

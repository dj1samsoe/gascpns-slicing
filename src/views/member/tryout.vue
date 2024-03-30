<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import MemberLayouts from "@/components/MemberLayouts.vue";

const numbers = Array.from({ length: 110 }, (_, index) => index + 1);

// Example data structure to store the status of each question
const questionStatus = [
  { status: "correct" },
  { status: "passed" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //11-20
  { status: "correct" },
  { status: "unanswered" },
  { status: "passed" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "unanswered" },
  { status: "unanswered" },
  { status: "unanswered" },
  //21-30
  { status: "correct" },
  { status: "unanswered" },
  { status: "unanswered" },
  { status: "passed" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //31-40
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //41-50
  { status: "correct" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "passed" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //51-60
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "wrong" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //61-70
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "unanswered" },
  { status: "wrong" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //71-80
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "wrong" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  //81-90
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "wrong" },
  { status: "correct" },
  { status: "correct" },
  //91-100
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "correct" },
  { status: "correct" },
  //100-110
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "correct" },
  { status: "passed" },
  { status: "correct" },
];
// Computed property to determine the class for each button
const getButtonClass = (index) => {
  const status = questionStatus[index]?.status;
  switch (status) {
    case "correct":
      return "bg-[#22C55E] text-white border-none"; // Green for correct
    case "wrong":
      return "bg-[#F90A0A] text-white border-none"; // Red for wrong
    case "passed":
      return "bg-[#FBBF24] text-white border-none"; // Yellow for passed
    default:
      return "bg-transparent text-[#90989F]"; // Transparent for unanswered
  }
};
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
            <div class="flex gap-4 items-center">
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
              <div class="flex flex-col space-y-[14px] pt-4">
                <img src="/wrong.svg" alt="wrong answer" />
                <img src="/wrong.svg" alt="wrong answer" />
                <img src="/wrong.svg" alt="wrong answer" />
                <img src="/true.svg" alt="true answer" />
                <img src="/wrong.svg" alt="wrong answer" />
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
              class="text-primary flex items-center gap-4 px-3 py-2 rounded-lg"
            >
              <img src="/countdown-blue.svg" />
              <p>01 : 24 : 56</p>
            </div>
          </div>
          <div
            class="flex flex-wrap justify-end items-center gap-3 max-w-[440px]"
          >
            <button
              v-for="(number, index) in numbers"
              :key="number"
              :class="[
                'aspect-square',
                'w-[30px]',
                'h-[30px]',
                'rounded-md',
                'border',
                'border-[#90989F]',
                'text-xs',
                getButtonClass(index),
              ]"
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
            <div class="w-full flex flex-wrap gap-7 text-sm">
              <div class="flex items-center gap-4">
                <img src="/done.svg" alt="done" class="w-5 h-5" />
                <p>Sudah Dikerjakan</p>
              </div>
              <div class="flex items-center gap-4">
                <img src="/wrong-indicator.svg" alt="done" class="w-5 h-5" />
                <p>Jawaban Salah</p>
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

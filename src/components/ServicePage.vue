<template>
  <section id="service" class="bg-[#BDDBD2] min-h-screen py-12">
    <!-- Judul -->
    <h2 class="text-3xl md:text-4xl font-semibold font-poppins mt-11 text-[#000000] max-w-6xl mx-auto text-center">
      Layanan Bootcamp Kami
    </h2>
    <p class="text-xl md:text-2xl font-crimson text-[#000000] max-w-4xl mx-auto text-center mt-2">
      Devlearn Menyediakan Berbagai Layanan untuk kamu
    </p>

    <!-- Card Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 max-w-7xl mx-auto px-4">
      <div
        v-for="layanan in layananList"
        :key="layanan.id"
        class="bg-white rounded-[40px] p-6 shadow-lg flex flex-col h-full"
      >
        <img
          :src="layanan.image"
          alt=""
          class="w-full h-40 object-cover rounded-[30px] mb-4"
        />
        <h3 class="text-2xl md:text-3xl font-semibold font-poppins text-center mt-4">
          {{ layanan.title }}
        </h3>
        <p class="text-base md:text-lg font-crimson text-[#000000] text-left mt-4">
          {{ layanan.description }}
        </p>
      </div>
    </div>

    <!-- Section: Telah Dipercaya Oleh -->
    <h2 class="text-2xl md:text-3xl font-semibold font-poppins mt-32 mb-8 text-[#000000] text-center">
      Telah Dipercaya Oleh
    </h2>
    <div class="flex flex-wrap justify-center gap-8 md:gap-16 px-4 max-w-6xl mx-auto">
      <div
        v-for="trust in trustList"
        :key="trust.id"
        class="bg-white w-48 h-20 flex items-center justify-center p-4 shadow rounded-[20px]"
      >
        <img
          :src="trust.image"
          alt=""
          class="w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import zoom from "@/assets/img/zoom.jpg";
import mentor1 from "@/assets/img/mentor1.jpg";
import project1 from "@/assets/img/project1.jpg";
import google from "@/assets/img/google.png";
import microsoft from "@/assets/img/microsoft.png";
import lenovo from "@/assets/img/lenovomerah.png";
import line from "@/assets/img/line.png";

const layananList = [
  {
    id: "1",
    title: "Live Class",
    image: zoom,
    description:
      "Belajar langsung bersama mentor lewat Zoom dengan suasana interaktif. Kamu bisa tanya jawab secara real-time dan diskusi bareng peserta lainnya. Setiap sesi direkam dan bisa diakses ulang kapan saja.",
  },
  {
    id: "2",
    title: "Mentoring 1 on 1",
    image: mentor1,
    description:
      "Kamu akan mendapat sesi mentoring pribadi setiap minggu. Cocok buat kamu yang butuh bimbingan lebih intensif, evaluasi progres belajar, dan konsultasi langsung sesuai kebutuhan.",
  },
  {
    id: "3",
    title: "Projek Nyata",
    image: project1,
    description:
      "Di akhir bootcamp, kamu akan mengerjakan proyek asli berbasis web/app. Hasilnya bisa kamu masukkan ke portofolio untuk melamar kerja. Belajar sambil membangun!",
  },
];

const trustList = [
  { id: 1, image: google },
  { id: 2, image: microsoft },
  { id: 3, image: lenovo },
  { id: 4, image: line },
];
</script>

<style scoped>
/* Bisa tambah animasi atau efek transisi jika dibutuhkan */
</style>

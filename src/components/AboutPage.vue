<template>
  <section id="About" class="p-8 bg-[#F9F9F9]">
    <h2 class="text-3xl font-semibold font-poppins text-[#00264D] mt-[55px]">
      Tentang DevLearn
    </h2>
    <p class="text-[#4F4F4F] font-crimson text-[20px] mt-4 leading-relaxed">
      DevLearn adalah bootcamp intensif yang dirancang khusus untuk kamu yang
      ingin memulai karier di dunia teknologi, bahkan dari nol. Kami percaya
      bahwa siapa pun — tanpa latar belakang IT — bisa menjadi developer hebat,
      asalkan dibimbing dengan cara yang tepat. Di DevLearn, kamu tidak hanya
      belajar teori. Kami fokus pada praktek langsung, mentoring 1-on-1, dan
      proyek nyata agar kamu siap kerja di industri. Dari frontend, backend,
      hingga UI/UX design — kami bantu kamu temukan jalur terbaik sesuai minat
      dan potensimu.
    </p>

    <h3 class="text-3xl font-semibold font-poppins text-[#00264D] mt-20">
      Kenapa DevLearn
    </h3>
    <p class="text-[#4F4F4F] font-crimson text-[20px] mt-4 leading-relaxed">
      🧑‍🏫 Belajar dari mentor profesional berpengalaman di industri <br />
      🛠️ Kurikulum selalu update mengikuti tren teknologi terbaru <br />
      💼 Bimbingan karier dan simulasi interview <br />
      💻 Akses materi selamanya, belajar kapan pun <br />
      🎓 Komunitas alumni aktif dan supportif
    </p>

    <!-- Mentor -->
    <h4 class="text-3xl font-semibold font-poppins text-[#00264D] mt-20">
      Mentor DevLearn
    </h4>
    <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-9">
      <div
        v-for="project in projects"
        :key="project.id"
        class="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group border border-gray-200"
      >
        <!-- Gambar -->
        <div class="overflow-hidden">
          <img
            :src="project.image"
            alt="Mentor"
            class="w-full h-[400px] border-2 border-[#A0C3D2] object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <!-- Konten -->
        <div class="p-6 text-center">
          <h3 class="text-2xl font-poppins font-semibold text-[#00264D]">
            {{ project.title }}
          </h3>
          <p class="text-[#4F4F4F] font-dmsans text-lg mt-2">
            {{ project.description }}
          </p>

          <!-- Tombol -->
          <div class="mt-4">
            <router-link
              :to="project.link"
              class="inline-block bg-[#E75B1A] hover:bg-[#c24b13] text-white font-semibold py-2 px-5 rounded-full transition duration-300"
            >
              Visit
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import orang1 from "@/assets/img/1.png";
import orang2 from "@/assets/img/aa.jpg";
import orang3 from "@/assets/img/orang3.jpg";

const projects = [
  {
    id: 1,
    title: "Zacky Alhafizh Efendi",
    description: "",
    image: orang1,
    link: "#",
  },
  {
    id: 2,
    title: "Bagas Aditya",
    description: "",
    image: orang2,
    link: "/portfolio2",
  },
  {
    id: 3,
    title: "Davina Karamoy",
    description: "",
    image: orang3,
    link: "#",
  },
];
</script>

<style scoped>
/* Tambahan kecil (opsional): hover halus */
</style>

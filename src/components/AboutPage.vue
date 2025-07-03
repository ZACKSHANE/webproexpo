<template>
  <section id="About" class="p-8 bg-[#FFFFFF]">
 <h2 class="text-3xl font-semibold font-poppins mt-[55px]">Tentang DevLearn</h2>
    <p class="text-[#000000] font-crimson text-[20px]">
      DevLearn adalah bootcamp intensif yang dirancang khusus untuk kamu yang
      ingin memulai karier di dunia teknologi, bahkan dari nol. Kami percaya
      bahwa siapa pun — tanpa latar belakang IT — bisa menjadi developer hebat,
      asalkan dibimbing dengan cara yang tepat. Di DevLearn, kamu tidak hanya
      belajar teori. Kami fokus pada praktek langsung, mentoring 1-on-1, dan
      proyek nyata agar kamu siap kerja di industri. Dari frontend, backend,
      hingga UI/UX design — kami bantu kamu temukan jalur terbaik sesuai minat
      dan potensimu.
    </p>
    <h3 class="text-3xl font-semibold font-poppins mt-[5rem]">
      Kenapa DevLearn
    </h3>
    <p class="text-[#000000] font-crimson text-[20px]">
      🧑‍🏫 Belajar dari mentor profesional berpengalaman di industri <br />
      🛠️ Kurikulum selalu update mengikuti tren teknologi terbaru <br />
      💼 Bimbingan karier dan simulasi interview <br />
      💻 Akses materi selamanya, belajar kapan pun <br />
      🎓 Komunitas alumni aktif dan supportif
    </p>
    <!-- Konten -->
    <h4 class="text-3xl font-semibold font-poppins mt-[5rem]">
      Mentor DevLearn
    </h4>
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-9">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-gray-300 rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group"
        >
          <!-- Gambar -->
          <div class="overflow-hidden">
            <img
              :src="project.image"
              alt="Project Image"
              class="w-full h-[400px] border-2 border-teal-400 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- Konten -->
          <div class="p-6">
            <h3 class="text-3xl font-poppins font-semibold text-[#000000]  text-center">
              {{ project.title }}
            </h3>
            <p class="text-[#000000] font-dmsans text-xl mt-2 text-center ">
              {{ project.description }}
            </p>

            <!-- Tombol -->
            <div class="mt-4">
              <a
                :href="project.link"
                target="_blank"
                class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full transition duration-300"
              >
                Visit
              </a>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>

<script setup>
// Import gambar lokal
import orang1 from '@/assets/img/orang1.jpg';
import orang2 from '@/assets/img/orang2.jpg';
import orang3 from '@/assets/img/orang3.jpg';

// Data project
const projects = [
  {
    id: 1,
    title: 'Bagas Aditya',
    description: 'Frontend Enginer-Tokopedia ',
    image: orang1,
    link: '#',
  },
  {
    id: 2,
    title: 'UI Design',
    description: 'Modern UI design with a focus on user experience and accessibility.',
    image: orang2,
    link: '#',
  },
  {
    id: 3,
    title: 'PhotoShop Design',
    description: 'Creative Photoshop design project showcasing advanced techniques.',
    image: orang3,
    link: '#',
  },
];


</script>

<style scoped>
</style>

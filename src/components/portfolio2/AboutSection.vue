<template>
  <section id="about" class="py-20 px-4 bg-[#041C4D] dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <h3 class="text-3xl font-bold text-gray-300 dark:text-white mb-12 text-center">About Me</h3>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
        <!-- Foto dengan border style -->
        <div class="relative w-60 h-auto ">
          <div class="absolute -top-4 -left-3 w-full h-full border-4 border-yellow-500 rounded-xl z-0"></div>
          <img src="@/assets/img/aa.jpg" alt="About Me Photo" class="relative z-10 rounded-xl shadow-lg pb-3 mb-4 " />
        </div>

        <!-- Teks -->
        <div class="flex-1 text-gray-300 space-y-6">
          <p class="text-lg leading-relaxed">
            Halo! Saya <strong>Bagas Aditya</strong>, seorang Front-End Developer, UI/UX Designer, dan juga Canva Designer yang memiliki minat besar dalam menciptakan antarmuka digital yang menarik, fungsional, dan user-friendly.
          </p>
          <p class="text-lg leading-relaxed">
            Saya terbiasa menggunakan teknologi seperti HTML, CSS, JavaScript, Tailwind, dan Vue.js untuk membangun website yang responsive dan cepat. Dalam hal desain, saya menggunakan Figma dan Canva untuk membuat prototipe, desain media sosial, hingga presentasi visual yang kuat dan konsisten.
          </p>
          <p class="text-lg leading-relaxed">
            Saya percaya bahwa desain dan pengembangan harus berjalan beriringan untuk menciptakan pengalaman pengguna terbaik.
          </p>

          <!-- Tombol -->
          <div class="flex gap-4 mt-4">
            <button class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded shadow">
              Hire Me
            </button>
            <button class="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-2 px-4 rounded shadow">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Tidak perlu isi jika tidak ada logic JS
</script>

<style scoped>
/* Kosongkan atau tambahkan style jika perlu */
</style>

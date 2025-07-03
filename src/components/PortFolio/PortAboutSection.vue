<template>
  <section id="about" class="py-20 px-4 bg-[#FFFFF] dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <h3
        class="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
      >
        About Me
      </h3>

      <div class="flex flex-col md:flex-row items-center md:items-start gap-10">
        <!-- Foto dengan border style -->
        <div class="relative w-60 h-auto">
          <div
            class="absolute -top-4 -left-3 w-full h-full border-4 border-yellow-500 rounded-xl z-0"
          ></div>
          <img
            src="@/assets/img/1.png"
            alt="About Me Photo"
            class="relative z-10 rounded-xl shadow-lg pb-3 mb-4"
          />
        </div>

        <!-- Teks -->
        <div class="flex-1 text-gray-900 space-y-6">
          <p class="text-lg leading-relaxed">
            Halo! Saya <strong>Zacky Alhafizh Efendi</strong>, seorang Front-End
            Developer yang memiliki ketertarikan besar terhadap pengembangan
            antarmuka web yang responsif, modern, dan ramah pengguna. Saya
            terbiasa membangun website menggunakan HTML, CSS, JavaScript, serta
            framework seperti Vue.js dan Tailwind CSS.
          </p>
          <p class="text-lg leading-relaxed">
            Saya percaya bahwa sebuah website bukan hanya soal tampilan, tapi
            juga tentang bagaimana memberikan pengalaman terbaik bagi pengguna.
            Karena itu, saya selalu berusaha menggabungkan desain visual yang
            menarik dengan struktur kode yang rapi dan efisien.
          </p>
          <p class="text-lg leading-relaxed">
            Saat ini saya aktif mengerjakan berbagai proyek web, mulai dari
            landing page, company profile, hingga aplikasi dashboard. Saya juga
            terus belajar dan mengikuti perkembangan tren front-end terbaru agar
            dapat memberikan solusi digital yang relevan dan optimal.
          </p>

          <!-- Tombol -->
          <div class="flex gap-4 mt-4">
            <a 
              href="https://wa.me/6288977100404?text=Halo%20kak%2C%20saya%20melihat%20portofolio%20Anda%20dan%20tertarik%20untuk%20bekerja%20sama."

              target="_blank"
              rel="noopener"
              class="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded shadow text-center"
            >
              Hire Me
            </a>

            <a
              href="/CVZAKI.pdf"
              download
              class="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black font-semibold py-2 px-4 rounded shadow text-center"
            >
              Download CV
            </a>
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

<template>
  <section id="contact" class="py-20 px-4 bg-[#F9F9F9]">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      
      <!-- Experience -->
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold text-[#00264D] mb-6">Experience</h2>
        <ul class="space-y-4">
          <li class="bg-white p-4 rounded-xl border border-[#A0C3D2] shadow">
            <h3 class="text-xl font-semibold text-[#00264D]">UI/UX Designer</h3>
            <p class="text-[#4F4F4F]">Freelance | 2022 - Sekarang</p>
            <p class="text-[#4F4F4F] mt-2">
              Membuat wireframe, prototipe, dan desain antarmuka pengguna untuk berbagai proyek aplikasi mobile dan web.
            </p>
          </li>
          <li class="bg-white p-4 rounded-xl border border-[#A0C3D2] shadow">
            <h3 class="text-xl font-semibold text-[#00264D]">Front-End Developer</h3>
            <p class="text-[#4F4F4F]">Freelance | 2025 - Sekarang</p>
            <p class="text-[#4F4F4F] mt-2">
              Mengembangkan tampilan website menggunakan Vue.js dan Tailwind CSS dengan fokus pada responsive design.
            </p>
          </li>
          <li class="bg-white p-4 rounded-xl border border-[#A0C3D2] shadow">
            <h3 class="text-xl font-semibold text-[#00264D]">Photoshop</h3>
            <p class="text-[#4F4F4F]">Freelance | 2020 - Sekarang</p>
            <p class="text-[#4F4F4F] mt-2">
              Creative Photoshop design project showcasing advanced techniques.
            </p>
          </li>
        </ul>
      </div>

      <!-- Form Contact -->
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold text-[#00264D] mb-6">Contact Me</h2>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          class="space-y-6 bg-white p-6 rounded-xl shadow border border-gray-200"
        >
          <!-- ✅ Web3Forms hidden inputs -->
          <input type="hidden" name="access_key" value="1d65d22e-3c64-4f88-b93c-8a834d2e0bc6" />
          <input type="hidden" name="subject" value="Pesan baru dari Website Portfolio" />
          <input type="hidden" name="from_name" value="PortFolio Zacky" />
          <input type="hidden" name="form" value="https://zackshane.github.io/WebProExpo/#home" />
          <input type="hidden" name="captcha" value="false" />

          <!-- Input Fields -->
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Nama</label>
            <input name="name" type="text" required class="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" required class="w-full px-4 py-2 border rounded-md" />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700">Pesan</label>
            <textarea name="message" rows="4" required class="w-full px-4 py-2 border rounded-md"></textarea>
          </div>

          <!-- Submit -->
          <button type="submit"
            class="bg-[#E75B1A] hover:bg-[#c24b13] text-white font-medium py-2 px-6 rounded transition duration-300">
            Kirim
          </button>
        </form>
      </div>
    </div>

    <!-- Footer -->
    <div class="mt-16 text-center text-[#6c757d] text-sm">
      <p>&copy; 2025 ZAKI ALHAFIZH EFENDI. All rights reserved.</p>
    </div>
  </section>
</template>

<template>
  <section id="pendaftaran" class="bg-white pt-32 py-16 px-4 min-h-screen text-[#0f172a]">
    <div class="max-w-4xl mx-auto">
      <!-- Heading -->
      <div class="bg-[#6DC7D1] text-white p-6 rounded-t-lg text-center">
        <h2 class="text-[22px] md:text-3xl font-semibold font-poppins text-[#000000]">Pendaftaran Bootcamp DevLearn</h2>
        <p class="text-[22px] mt-1 text-[#000000] font-poppins">Daftar Sekarang</p>
        <p class="text-[12px] mt-2 text-[#000000]">
          Isi data di bawah untuk bergabung dalam program bootcamp DevLearn
        </p>
      </div>

      <!-- Form -->
      <form @submit.prevent="submitForm" class="bg-white p-8 border border-gray-200 shadow-lg text-[#000000]">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Left Column -->
          <div class="space-y-4 text-[#000000] font-dmsans text-[14px]">
            <input v-model="form.nama" type="text" placeholder="Nama Lengkap"
              class="w-full p-3 border-2 border-black rounded-md bg-[#E2F3F4] focus:outline-none placeholder:text-black" required />
            <input v-model="form.hp" type="text" placeholder="Nomor HP"
              class="w-full p-3 border-2 border-black rounded-md bg-[#E2F3F4] focus:outline-none placeholder:text-black" required />
            <input v-model="form.domisili" type="text" placeholder="Domisili (Opsional)"
              class="w-full p-3 border-2 border-black rounded-md bg-[#E2F3F4] focus:outline-none placeholder:text-black" />
          </div>

          <!-- Right Column -->
          <div class="space-y-4 text-[#000000]">
            <input v-model="form.email" type="email" placeholder="Email"
              class="w-full p-3 border-2 border-black rounded-md bg-[#E2F3F4] focus:outline-none placeholder:text-black" required />
            <input v-model="form.program" type="text" placeholder="Program Bootcamp"
              class="w-full p-3 border-2 border-black rounded-md bg-[#E2F3F4] focus:outline-none placeholder:text-black" required />
            <input v-model="form.instagram" type="text" placeholder="Nama Instagram"
              class="w-full p-3 border-2 border-black rounded-md bg-[#E2F3F4] focus:outline-none placeholder:text-black" />
          </div>
        </div>

        <!-- Submit Button -->
        <div class="mt-8 text-center">
          <button type="submit"
            class="bg-[#6DC7D1] text-white py-3 px-8 rounded-full font-semibold hover:bg-[#001f3a] transition">
            Daftar Sekarang
          </button>
        </div>

        <!-- Info Text -->
        <p class="text-center text-[14px] text-[#000000] font-poppins font-medium mt-6">
          Kami akan menghubungi kamu lewat WhatsApp dan Email dalam 1×24 jam setelah pendaftaran.
        </p>
      </form>

      <!-- Footer -->
      <div class="bg-[#6DC7D1] text-[#000000] font-semibold font-poppins text-center py-4  rounded-b-lg text-[14px]">
        Devlearn Indonesia. All rights reserved.
      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const form = reactive({
  nama: '',
  email: '',
  hp: '',
  domisili: '',
  program: '',
  instagram: ''
})

// ✅ GUNAKAN variabel ini langsung di fetch!
const webAppURL = 'https://script.google.com/macros/s/AKfycbxnoZfc8_b0KmHc6tcX3vb-mijbGOFhosxIsHcRVNnIvuwtYelR6iV3WXCw2NlQT0WAcA/exec'

const submitForm = () => {
  const formData = new FormData()
  formData.append('nama', form.nama)
  formData.append('email', form.email)
  formData.append('hp', form.hp)
  formData.append('domisili', form.domisili)
  formData.append('program', form.program)
  formData.append('instagram', form.instagram)

  fetch(webAppURL, {
    method: 'POST',
    body: formData
  })
    .then(() => {
      alert('Pendaftaran berhasil!')
      router.push('/')
    })
    .catch(() => {
      alert('Terjadi kesalahan saat mengirim data.')
    })
}
</script>

<template>
  <section id="contact" class="py-20 px-4 bg-[#041C4D] dark:bg-gray-900">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      <!-- Experience - KIRI -->
      <div class="md:w-1/2 text-white">
        <h2 class="text-3xl font-bold mb-6 text-white">Experience</h2>
        <ul class="space-y-4">
          <div class="bg-amber-500 dark:bg-red-700 p-4 rounded-lg shadow">
          <li>
            <h3 class="text-xl font-semibold text-dray-400">UI/UX Designer</h3>
            <p class="text-gray-800">Freelance | 2022 - Sekarang</p>
            <p class="text-gray-800 mt-2">Membuat wireframe, prototipe, dan desain antarmuka pengguna untuk berbagai proyek aplikasi mobile dan web.</p>
          </li>
          </div>
          <div class="bg-amber-500 p-4 rounded-lg shadow">
          <li>
            <h3 class="text-xl font-semibold text-dray-400 mb-3">Front-End Developer</h3>
            <p class="text-gray-800">Freelance | 2025 - Sekarang</p>
            <p class="text-gray-800 mt-2">Mengembangkan tampilan website keren dan modern menggunakan Vue.js dan Tailwind CSS dengan fokus pada responsive design.</p>
          </li>
          </div>
          <div class="bg-amber-500 dark:bg-teal-400 p-4 rounded-lg shadow">
          <li>
            <h3 class="text-xl font-semibold text-dray-400 mb-3">Canva</h3>
            <p class="text-gray-800">Freelance | 2020 - Sekarang</p>
            <p class="text-gray-800 mt-2">Creativ canve design project dengan teknik sendiri</p>
          </li>
          </div>
        </ul>
      </div>

      <!-- Form Contact - KANAN -->
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold text-white mb-6">Contact Me</h2>
        <form @submit.prevent="handleSubmit" class="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow ">
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
            <input v-model="form.name" type="text" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
            <input v-model="form.email" type="email" required class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label class="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
            <textarea v-model="form.message" required rows="4" class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 dark:text-white"></textarea>
          </div>
          <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded">
            Send
          </button>
        </form>
        <p v-if="success" class="text-green-500 text-center mt-4">Message sent successfully!</p>
      </div>
    </div>

    <!-- Footer -->
    <div class=" mt-16 text-center text-gray-200 dark:text-gray-400">
      <p>&copy; 2025 BAGAS ADITYA. All rights reserved.</p>
    </div>
  </section>
</template>

<script setup>
import { reactive, ref } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const success = ref(false)

function handleSubmit() {
  // Simulasi pengiriman (nanti bisa diganti dengan fetch/axios)
  console.log('Form submitted:', form)
  success.value = true

  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''

  // Sembunyikan notifikasi setelah 3 detik
  setTimeout(() => {
    success.value = false
  }, 3000)
}
</script>

<style scoped>
</style>

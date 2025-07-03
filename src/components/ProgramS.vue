<template>
  <div id="Program" class="bg-white py-12 px-6 md:px-20">
    <h2 class="text-2xl md:text-3xl font-bold text-center mt-12 mb-10">
      Program Tersedia di Devlearn
    </h2>

    <div class="grid md:grid-cols-2 gap-12">
      <!-- Front-End Developer -->
      <div class="flex flex-col items-center text-center">
        <div class="border border-blue-200 rounded-xl shadow-sm p-4 w-full max-w-sm bg-white">
          <img src="@/assets/img/frontend.png" alt="Front-End Developer" class="w-full object-contain rounded-md" />
        </div>
        <h3 class="text-xl font-semibold mt-4">🚀 Front-End Developer</h3>
        <p class="text-sm text-gray-600 mt-2">Belajar HTML, CSS, JavaScript, hingga React.js. Cocok untuk pemula.</p>
        <p class="text-sm font-medium mt-1">Durasi: 8 Minggu</p>
      </div>

      <!-- UI/UX Design Mastery -->
      <div class="flex flex-col items-center text-center">
        <div class="border border-blue-200 rounded-xl shadow-sm p-4 w-full max-w-sm bg-white">
          <img src="@/assets/img/ui.png" alt="UI/UX Design Mastery" class="w-full object-contain rounded-md" />
        </div>
        <h3 class="text-xl font-semibold mt-4">🎨 UI/UX Design Mastery</h3>
        <p class="text-sm text-gray-600 mt-2">Kuasai Figma, wireframe, user research, dan prototyping interaktif.</p>
        <p class="text-sm font-medium mt-1">Durasi: 6 Minggu</p>
      </div>

      <!-- Full-Stack Developer -->
      <div class="flex flex-col items-center text-center">
        <div class="border border-blue-200 rounded-xl shadow-sm p-4 w-full max-w-sm bg-white">
          <img src="@/assets/img/fullstack.png" alt="Full-Stack Developer" class="w-full object-contain rounded-md" />
        </div>
        <h3 class="text-xl font-semibold mt-4">💻 Full-Stack Developer</h3>
        <p class="text-sm text-gray-600 mt-2">Belajar front-end & back-end (Node.js, Express, MongoDB).</p>
        <p class="text-sm font-medium mt-1">Durasi: 10 Minggu</p>
      </div>

      <!-- Mobile App Development -->
      <div class="flex flex-col items-center text-center">
        <div class="border border-blue-200 rounded-xl shadow-sm p-4 w-full max-w-sm bg-white">
          <img src="@/assets/img/mobile.png" alt="Mobile App Development" class="w-full object-contain rounded-md" />
        </div>
        <h3 class="text-xl font-semibold mt-4">📱 Mobile App Development</h3>
        <p class="text-sm text-gray-600 mt-2">Buat aplikasi Android dengan Flutter dari nol.</p>
        <p class="text-sm font-medium mt-1">Durasi: 8 Minggu</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgramDevlearn'
}
</script>

<style scoped>
/* Tambahan gaya kalau dibutuhkan */
</style>

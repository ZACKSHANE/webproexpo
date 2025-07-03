<template>
  <section id="Hero" class="relative bg-[#F9F9F9] overflow-hidden pt-20">
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
      
      <!-- Text -->
      <div class="md:w-1/2 text-left">
        <p class="text-gray-600">Hello, I'm</p>
        <h2 class="text-4xl md:text-5xl font-bold text-[#00264D]">ZAKI ALHAFIZH EFENDI</h2>
        <p class="text-lg mt-3 text-[#4B89AC]">UI/UX Designer & Front-End Developer</p>
        <p class="text-[#4F4F4F] mt-4 max-w-md">
          Saya seorang desainer UI/UX dan pengembang front-end dengan semangat tinggi dalam membuat pengalaman digital yang menarik dan fungsional.
        </p>

        <!-- Sosial Media -->
        <div class="mt-5 flex items-center space-x-4">
          <a href="#" class="bg-[#A0C3D2] text-white p-2 rounded-lg hover:bg-[#4EB4A4] transition">
            <!-- Instagram -->
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm4.2 5a5 5 0 1 0 0 10a5 5 0 0 0 0-10z"/>
            </svg>
          </a>
          <!-- Twitter -->
          <a href="#" class="bg-[#A0C3D2] text-white p-2 rounded-lg hover:bg-[#4EB4A4] transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16" fill="currentColor">
              <path d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05z"/>
            </svg>
          </a>
          <!-- TikTok -->
          <a href="#" class="bg-[#A0C3D2] text-white p-2 rounded-lg hover:bg-[#4EB4A4] transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z"/>
            </svg>
          </a>
          <!-- Facebook -->
          <a href="#" class="bg-[#A0C3D2] text-white p-2 rounded-lg hover:bg-[#4EB4A4] transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/>
            </svg>
          </a>
          <!-- LinkedIn -->
          <a href="#" class="bg-[#A0C3D2] text-white p-2 rounded-lg hover:bg-[#4EB4A4] transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5z"/>
            </svg>
          </a>
        </div>

        <!-- Button CTA -->
        <div class="mt-6">
          <a href="#" class="inline-block bg-[#E75B1A] hover:bg-[#c24b13] text-white px-6 py-3 rounded-lg transition">
            Hire Me
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="md:w-1/2 flex justify-center">
        <img src="@/assets/img/1.png" alt="Profile"
             class="w-72 md:w-[350px] rounded-xl shadow-lg object-cover relative z-10" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

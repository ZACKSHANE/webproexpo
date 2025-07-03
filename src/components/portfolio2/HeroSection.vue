<template>
  <section id="Hero" class="relative bg-white dark:bg-gray-900 overflow-hidden">
    <!-- Gelombang biru -->
    <div class="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
     
    </div>

    <!-- Konten Hero -->
    <div class="relative z-10 max-w-7xl mx-auto px-4 py-20 flex flex-col-reverse md:flex-row items-center gap-10">
      <!-- Text -->
      <div class="md:w-1/2 text-left">
        <p class="text-gray-600">Hello, I'm</p>
        <h2 class="text-4xl md:text-5xl font-bold text-blue-900">BAGAS ADITYA</h2>
        <p class="text-lg mt-3 text-blue-700">UI/UX Designer And Front-End</p>
        <p class="text-gray-500 mt-4 max-w-md">
          Saya adalah seorang Front-End Developer dan UI/UX Designer yang berfokus pada menciptakan tampilan antarmuka yang modern, responsif, dan ramah pengguna. Dengan kombinasi desain yang estetis dan pengembangan web yang efisien, saya membangun pengalaman digital yang fungsional dan menarik.
        </p>
          
          
        <!-- instagram -->
         <div class="mb-4 flex items-center space-x-4">
           <a href="#" class=" bg-[#041C4D] rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"/></svg>
          </a >

            <!-- twitter -->
          <a href="" class="  bg-[#041C4D] rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="currentColor" d="M9.294 6.928L14.357 1h-1.2L8.762 6.147L5.25 1H1.2l5.31 7.784L1.2 15h1.2l4.642-5.436L10.751 15h4.05zM7.651 8.852l-.538-.775L2.832 1.91h1.843l3.454 4.977l.538.775l4.491 6.47h-1.843z"/></svg>
          </a>
          <!-- tiktok -->
           <a href="" class="  bg-[#041C4D] rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M20.2 10.1c0 .22-.18.401-.4.39a8 8 0 0 1-3.362-.93c-.281-.15-.638.045-.638.364V15.5a6 6 0 1 1-6.4-5.987a.38.38 0 0 1 .4.387v2.8c0 .22-.18.397-.398.433A2.4 2.4 0 1 0 12.2 15.5V2.9a.4.4 0 0 1 .4-.4h2.8a.43.43 0 0 1 .418.4a4.4 4.4 0 0 0 3.983 3.982c.22.02.4.197.4.418z"/></svg>
           </a>
           <!-- facebook -->
            <a href="" class="  bg-[#041C4D] rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg>
            </a>
           <!-- linkedin -->
            <a href="" class=" bg-[#041C4D] rounded-lg text-gray-300 hover:text-teal-400 transition duration-300 mt-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M7.5 9h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-.5-.5M7 21H4V10h3zM18 9c-1.085 0-2.14.358-3 1.019V9.5a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0-.5.5v12a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V16a1.5 1.5 0 1 1 3 0v5.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5V14a5.006 5.006 0 0 0-5-5m4 12h-3v-5a2.5 2.5 0 1 0-5 0v5h-3V10h3v1.203a.5.5 0 0 0 .89.313A3.983 3.983 0 0 1 22 14zM5.868 2.002A3 3 0 0 0 5.515 2a2.74 2.74 0 0 0-2.926 2.729a2.71 2.71 0 0 0 2.869 2.728h.028a2.734 2.734 0 1 0 .382-5.455M5.833 6.46q-.173.016-.347-.003h-.028A1.736 1.736 0 1 1 5.515 3a1.737 1.737 0 0 1 .318 3.46"/></svg>
            </a>
            </div>
    

        <!-- Button -->
        <div class="mt-6">
          <a href="#" class="inline-block bg-[#041C4D] dark:bg-teal-400 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition">
            Hire Me
          </a>
        </div>
      </div>

      <!-- Image -->
      <div class="md:w-1/2 flex justify-center">
        <img src="@/assets/img/aa.jpg" alt="Profile"
             class="w-72 md:w-[350px] rounded-xl shadow-lg object-cover  relative z-10" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

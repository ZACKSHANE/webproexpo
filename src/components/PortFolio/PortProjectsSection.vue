<template>
  <section id="projects" class="py-20 px-4 bg-[#F0F4F8] dark:bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
        My Projects
      </h2>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="project in projects"
          :key="project.id"
          class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group"
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
            <h3 class="text-xl font-bold text-gray-800 dark:text-white">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 mt-2 text-sm">
              {{ project.description }}
            </p>

            <!-- Tombol -->
            <div class="mt-4">
              <a
                :href="project.link"
                target="_blank"
                class="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded-full transition duration-300"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Skill Section -->
      <div class="mt-20">
        <h2 class="text-3xl font-bold text-center text-gray-900 dark:text-gray-200 mb-10">My Skills</h2>
        <div v-for="skill in skills" :key="skill.name" class="mb-6">
          <div class="flex justify-between mb-1">
            <span class="text-lg font-medium text-black dark:text-gray-200">{{ skill.name }}</span>
            <span class="text-sm text-black dark:text-gray-200">{{ skill.percent }}%</span>
          </div>
          <div class="w-full bg-gray-700 rounded-full h-4">
            <div
              class="bg-teal-400 h-4 rounded-full transition-all duration-500"
              :style="{ width: skill.percent + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import gambar lokal
import landingPageImg from '@/assets/img/landing-page.png';
import ui1Img from '@/assets/img/ui.jpg';
import dreamImg from '@/assets/img/dream.jpg';


// Data project
const projects = [
  {
    id: 1,
    title: 'Landing Page',
    description: 'Responsive landing page built with Tailwind CSS and Vue.',
    image: landingPageImg,
    link: 'https://ismailservicetv.com/',
  },
  {
    id: 2,
    title: 'UI Design',
    description: 'Modern UI design with a focus on user experience and accessibility.',
    image: ui1Img,
    link: 'https://www.figma.com/design/1uTkoEZoUNVoc5bNfwhQdq/Untitled?node-id=0-1&p=f&t=tQiUwC3YUUKO5nYX-0',
  },
  {
    id: 3,
    title: 'PhotoShop Design',
    description: 'Creative Photoshop design project showcasing advanced techniques.',
    image: dreamImg,
    link: 'https://www.instagram.com/p/CpFBqgNr3NF/',
  },
];

// Skill data
const skills = [
  { name: 'HTML', percent: 90 },
  { name: 'CSS', percent: 90 },
  { name: 'JavaScript', percent: 70 },
  { name: 'Vue.js', percent: 70 },
  { name: 'Tailwind CSS', percent: 85 },
  { name: 'Figma', percent: 70 },
  { name: 'UI/UX Design', percent: 80 },
  { name: 'React.js', percent: 65 },
  { name: 'Photoshop', percent: 60 },
];
</script>

<style scoped>
</style>

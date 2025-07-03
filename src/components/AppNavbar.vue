<template>
  <nav class="bg-[#BDDBD2] fixed top-0 w-full z-50 shadow text-white">
    <div class="px-6 md:px-12 py-4 flex justify-between items-center relative">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- (your SVG here) -->
        </svg>
        <h1 class="text-[24px] md:text-[32px] font-anton">DevLearn</h1>
      </div>

      <!-- Hamburger Icon -->
      <div class="md:hidden relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
          <svg v-if="!isOpen" class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="2"
               viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>

        <!-- Mobile Nav (dropdown positioned directly under hamburger) -->
        <div
          v-if="isOpen"
          class="absolute right-0 mt-2 w-48 bg-[#BDDBD2] rounded-lg shadow-md py-2 z-50"
        >
          <ul class="space-y-2 px-4">
            <li><RouterLink :to="{ path: '/', hash: '#home' }" @click="closeMenu" class="block text-white text-lg hover:text-gray-700 font-inter">Home</RouterLink></li>
            <li><RouterLink :to="{ path: '/', hash: '#about' }" @click="closeMenu" class="block text-white text-lg  hover:text-gray-700 font-inter">About</RouterLink></li>
            <li><RouterLink :to="{ path: '/', hash: '#service' }" @click="closeMenu" class="block text-white text-lg  hover:text-gray-700 font-inter">Services</RouterLink></li>
            <li><RouterLink :to="{ path: '/', hash: '#program' }" @click="closeMenu" class="block text-white text-lg  hover:text-gray-700 font-inter">Program</RouterLink></li>
            <li><RouterLink :to="{ path: '/', hash: '#contact' }" @click="closeMenu" class="block text-white text-lg   hover:text-gray-700 font-inter">Contact</RouterLink></li>
          </ul>
        </div>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex space-x-6">
        <li><RouterLink :to="{ path: '/', hash: '#home' }" class="hover:text-gray-200 text-lg font-inter">Home</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#about' }" class="hover:text-gray-200 text-lg font-inter">About</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#service' }" class="hover:text-gray-200 text-lg font-inter">Services</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#program' }" class="hover:text-gray-200 text-lg font-inter">Program</RouterLink></li>
        <li><RouterLink :to="{ path: '/', hash: '#contact' }" class="hover:text-gray-200 text-lg font-inter">Contact</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  name: "AppNavbar",
  components: { RouterLink },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    closeMenu() {
      this.isOpen = false
    }
  }
}
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>

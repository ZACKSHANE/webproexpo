<template>
  <nav class="bg-[#041C4D] dark:bg-gray-900 fixed w-full z-50 shadow">
    <div class="max-w-6xl mx-auto px-3 py-4 flex justify-between items-center gap-4" >
      <!-- Logo -->
       <div class="flex items-center gap-2">
        <h1 class="text-xl font-bold text-gray-300 dark:text-gray-300 ">MyPortfolio</h1>
       </div>
      

      <!-- Hamburger button -->
      <button
      
        @click="toggleMenu"
        class="md:hidden text-gray-700 dark:text-gray-300 "
      >
        <span v-if="!menuOpen">☰</span>
        <span v-else>✕</span>
      </button>

      <!-- Desktop menu -->
      <ul class="hidden md:flex gap-6 text-gray-200 dark:text-gray-200 font-medium">
        <li><a href="#Hero" class="hover:text-cyan-700">Home</a></li>
        <li><a href="#about" class="hover:text-cyan-700">About</a></li>
        <li><a href="#projects" class="hover:text-cyan-700">Projects</a></li>
        <li><a href="#contact" class="hover:text-cyan-700">Contact</a></li>
      </ul>
    </div>

    <!-- Mobile menu dropdown (di luar flex) -->
    <transition name="fade">
      <ul
        v-show="menuOpen"
        class="md:hidden bg-gray-200 dark:bg-gray-800 px-2 py-4 space-y-4 text-gray-700 dark:text-gray-200 font-medium shadow"
      >
        <li><a href="#hero" @click="closeMenu">Home</a></li>
        <li><a href="#about" @click="closeMenu">About</a></li>
        <li><a href="#projects" @click="closeMenu">Projects</a></li>
        <li><a href="#contact" @click="closeMenu">Contact</a></li>
      </ul>
    </transition>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

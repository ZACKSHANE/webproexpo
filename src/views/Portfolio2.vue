<script>
export default {
  name: 'PortfolioPageTwo' // ✅ multi-word name untuk hindari eslint error
}
</script>

<script setup>
// ✅ Semua komponen diimpor dari folder yang tepat
import AppNavbar from '@/components/portfolio2/AppNavbar.vue'
import HeroSection from '@/components/portfolio2/HeroSection.vue'
import AboutSection from '@/components/portfolio2/AboutSection.vue'
import ProjectsSection from '@/components/portfolio2/ProjectsSection.vue'
import ContactSection from '@/components/portfolio2/ContactSection.vue'
import DarkModeToggle from '@/components/portfolio2/DarkModeToggle.vue'
</script>

<template>
  <div>
    <AppNavbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
    <DarkModeToggle />
  </div>
</template>

<style scoped>
/* tambahkan styling khusus jika perlu */
</style>

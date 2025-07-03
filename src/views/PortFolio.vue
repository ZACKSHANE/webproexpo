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

<script setup>
import AppNavbar from '@/components/PortFolio/PortAppNavbar.vue'
import HeroSection from '@/components/PortFolio/PortHeroSection.vue'
import AboutSection from '@/components/PortFolio/PortAboutSection.vue'
import ProjectsSection from '@/components/PortFolio/PortProjectsSection.vue'
import ContactSection from '@/components/PortFolio/PortContactSection.vue'
import DarkModeToggle from '@/components/PortFolio/PortDarkModeToggle.vue'


</script>

<style>
</style>

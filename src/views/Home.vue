<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <!-- Hero Section -->
    <section id="home">
      <HeroSection />
    </section>

    <!-- About Section -->
    <section id="about">
      <AboutPage />
    </section>

    <!-- Services Section -->
    <section id="service">
      <ServicePage />
    </section>

    <!-- Program Section -->
    <section id="program">
      <ProgramS />
    </section>

    <!-- Contact Section -->
    <section id="contact">
      <ContactSec />
    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection.vue'
import AboutPage from '@/components/AboutPage.vue'
import ServicePage from '@/components/ServicePage.vue'
import ProgramS from '@/components/ProgramS.vue'
import ContactSec from '@/components/ContactSec.vue'
</script>

<style scoped>
/* Optional: tambahkan animasi scroll, padding, dll */
</style>

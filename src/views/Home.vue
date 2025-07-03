<!-- eslint-disable vue/multi-word-component-names -->

<template>
  <div>
    <AppNavbar />

    <!-- Komponen utama hanya tampil di '/' -->
    <div v-if="route.path === '/'">
      <HeroSection />
      <AboutPage />
      <ServicePage />
      <ProgramS />
      <ContactSec />
    </div>

    <!-- Halaman router lain seperti /pendaftaran -->
    <router-view v-else />
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'

import AppNavbar from '@/components/AppNavbar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutPage from '@/components/AboutPage.vue'
import ServicePage from '@/components/ServicePage.vue'
import ProgramS from '@/components/ProgramS.vue'
import ContactSec from '@/components/ContactSec.vue'

const route = useRoute()
</script>

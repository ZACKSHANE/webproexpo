<template>
  <nav class="bg-[#BDDBD2] fixed top-0 w-full z-50 shadow text-white">
    <div class="px-6 md:px-12 py-4 flex justify-between items-center relative">
      <!-- Logo -->
      <div class="flex items-center space-x-3">
        <svg
          width="39"
          height="34"
          viewBox="0 0 39 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.005 26.163C30.498 24.803 29.0355 23.8 27.3 23.8H25.35V18.7C25.35 18.2491 25.1446 17.8167 24.7789 17.4979C24.4132 17.1791 23.9172 17 23.4 17H11.7V13.6H15.6C16.1172 13.6 16.6132 13.4209 16.9789 13.1021C17.3446 12.7833 17.55 12.3509 17.55 11.9V8.5H21.45C22.4843 8.5 23.4763 8.14179 24.2077 7.50416C24.9391 6.86654 25.35 6.00174 25.35 5.1V4.403C27.6831 5.22302 29.7536 6.52371 31.3841 8.19372C33.0147 9.86373 34.1568 11.8533 34.7126 13.9922C35.2685 16.1311 35.2215 18.3555 34.5758 20.4751C33.9301 22.5948 32.7049 24.5464 31.005 26.163ZM17.55 30.481C9.8475 29.648 3.9 23.936 3.9 17C3.9 15.946 4.056 14.926 4.3095 13.957L13.65 22.1V23.8C13.65 24.7017 14.0609 25.5665 14.7923 26.2042C15.5237 26.8418 16.5157 27.2 17.55 27.2M19.5 0C16.9392 0 14.4035 0.439718 12.0377 1.29405C9.67182 2.14838 7.52216 3.40059 5.71142 4.97918C2.05446 8.1673 0 12.4913 0 17C0 21.5087 2.05446 25.8327 5.71142 29.0208C7.52216 30.5994 9.67182 31.8516 12.0377 32.706C14.4035 33.5603 16.9392 34 19.5 34C24.6717 34 29.6316 32.2089 33.2886 29.0208C36.9455 25.8327 39 21.5087 39 17C39 14.7675 38.4956 12.5569 37.5157 10.4944C36.5357 8.43185 35.0993 6.55778 33.2886 4.97918C31.4778 3.40059 29.3282 2.14838 26.9623 1.29405C24.5965 0.439718 22.0608 0 19.5 0Z"
            fill="black"
          />
        </svg>

        <h1 class="text-[24px] md:text-[32px] font-anton text-[#000000]">DevLearn</h1>
      </div>

      <!-- Hamburger Icon -->
      <div class="md:hidden relative">
        <button @click="isOpen = !isOpen" class="focus:outline-none">
          <svg
            v-if="!isOpen"
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg
            v-else
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <!-- Mobile Nav (dropdown positioned directly under hamburger) -->
        <div
          v-if="isOpen"
          class="absolute right-0 mt-2 w-48 bg-[#BDDBD2] rounded-lg shadow-md py-2 z-50"
        >
          <ul class="space-y-2 px-4">
            <li>
              <RouterLink
                :to="{ path: '/', hash: '#home' }"
                @click="closeMenu"
                class="block text-[#000000] text-lg hover:text-gray-200 font-inter"
                >Home</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ path: '/', hash: '#about' }"
                @click="closeMenu"
                class="block text-[#000000] text-lg hover:text-gray-200 font-inter"
                >About</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ path: '/', hash: '#service' }"
                @click="closeMenu"
                class="block text-[#000000] hover:text-gray-200 font-inter"
                >Services</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ path: '/', hash: '#program' }"
                @click="closeMenu"
                class="block text-[#000000] text-lg hover:text-gray-200 font-inter"
                >Program</RouterLink
              >
            </li>
            <li>
              <RouterLink
                :to="{ path: '/', hash: '#contact' }"
                @click="closeMenu"
                class=" text-[#000000] block text-lg hover:text-gray-200 font-inter"
                >Contact</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex space-x-6">
        <li>
          <RouterLink
            :to="{ path: '/', hash: '#home' }"
            class="text-[#000000] hover:text-gray-200 text-lg font-inter"
            >Home</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: '/', hash: '#about' }"
            class="text-[#000000] hover:text-gray-200 text-lg font-inter"
            >About</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: '/', hash: '#service' }"
            class="text-[#000000] hover:text-gray-200 text-lg font-inter"
            >Services</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: '/', hash: '#program' }"
            class="text-[#000000] hover:text-gray-200 text-lg font-inter"
            >Program</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ path: '/', hash: '#contact' }"
            class="text-[#000000] hover:text-gray-200 text-lg font-inter"
            >Contact</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "AppNavbar",
  components: { RouterLink },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    closeMenu() {
      this.isOpen = false;
    },
  },
};
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>

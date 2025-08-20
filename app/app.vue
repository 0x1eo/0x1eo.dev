<script setup>
// Set global meta
useHead({
  htmlAttrs: {
    lang: 'en'
  },
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' }
  ]
});

// Add some global styles for smooth scrolling
useSeoMeta({
  ogImage: '/favicon.ico',
  twitterCard: 'summary_large_image'
});
</script>

<template>
  <div class="min-h-screen bg-gray-900 text-white">
    <TheHeader />

    <main>
      <NuxtPage />
    </main>

    <TheFooter />
  </div>
</template>

<style>
/* Global styles */
html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #1f2937;
}

::-webkit-scrollbar-thumb {
  background: #4b5563;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #6b7280;
}

/* Selection color */
::selection {
  background-color: #3b82f6;
  color: white;
}

/* Focus styles for accessibility */
*:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Ensure links have proper focus styles */
a:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
  border-radius: 4px;
}
</style>
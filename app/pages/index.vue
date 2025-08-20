<script setup>
import { projects } from '~/data/projects';

// Set page meta for better SEO
useHead({
  title: 'Leandro Afonso - Cybersecurity & Systems Engineering Portfolio',
  meta: [
    { name: 'description', content: 'Portfolio showcasing cybersecurity and systems engineering projects by Leandro Afonso.' }
  ]
});

// Debug: Log projects to console
console.log('Projects loaded:', projects);
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 70%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 70%);" />
      </div>
      
      <!-- Animated Geometric Shapes -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" />
      </div>

      <div class="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <!-- Main Title with Animation -->
        <div class="space-y-6">
          <h1 class="text-6xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-fade-in">
            <span class="block leading-tight">Cybersecurity</span>
            <span class="block leading-tight text-4xl md:text-5xl lg:text-6xl text-gray-300 mt-2">&</span>
            <span class="block leading-tight">Systems Engineering</span>
          </h1>
          
          <div class="space-y-4 animate-fade-in-up" style="animation-delay: 0.5s;">
            <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Building secure, scalable systems and exploring the frontiers of cybersecurity
            </p>
            <p class="text-lg text-blue-400 font-semibold">
              Portfolio by Leandro Afonso
            </p>
          </div>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fade-in-up" style="animation-delay: 1s;">
            <a href="#projects" class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              View My Work
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <a href="mailto:leo@0x1eo.dev" class="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300">
              Get In Touch
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20 px-4">
      <div class="max-w-7xl mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            Featured Projects
          </h2>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Exploring cybersecurity challenges and engineering innovative solutions
          </p>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <ProjectCard 
            v-for="(project, index) in projects" 
            :key="project.slug" 
            :project="project"
            :class="`animate-fade-in-up`"
            :style="`animation-delay: ${index * 0.1}s`"
          />
        </div>

        <!-- View All Projects Link -->
        <div class="text-center mt-12">
          <NuxtLink 
            to="/projects" 
            class="inline-flex items-center px-6 py-3 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out forwards;
  opacity: 0;
}

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>
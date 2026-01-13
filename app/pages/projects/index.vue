<script setup>
import { projects } from '~/data/projects';
import { ref } from 'vue';

useHead({
  title: 'Projects - Leandro Afonso',
  meta: [
    { name: 'description', content: 'Browse all cybersecurity and systems engineering projects by Leandro Afonso.' }
  ]
});

const selectedGroup = ref('All');
const groups = ['All', 'Personal', 'Freelance', 'Academic'];

const filteredProjects = computed(() => {
  if (selectedGroup.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.group === selectedGroup.value);
});
</script>

<template>
  <div class="min-h-screen">
    <div class="container mx-auto px-4 py-12">
      <div class="text-center mb-8 sm:mb-16">
        <div class="inline-block mb-4">
          <span class="px-4 py-1 border border-[var(--tron-border)] font-['Orbitron'] text-xs text-[var(--tron-primary)] tracking-widest uppercase">
            // Full Database
          </span>
        </div>
        <h1 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] uppercase tracking-wider tron-gradient-text mb-4 sm:mb-6 drop-shadow-[0_0_20px_rgba(255,69,0,0.3)]">
          All Projects
        </h1>
        <div class="w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--tron-primary)] to-transparent mx-auto mb-6 shadow-[0_0_10px_var(--tron-primary)]" />
        <p class="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
          A comprehensive collection of cybersecurity research, systems engineering, and technical projects
        </p>
      </div>

      <div class="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
        <button
          v-for="group in groups"
          :key="group"
          class="px-3 py-2 sm:px-6 sm:py-3 font-['Orbitron'] font-semibold uppercase tracking-wider text-xs sm:text-sm transition-all duration-300 transform hover:scale-105"
          :class="selectedGroup === group 
            ? 'bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white shadow-[var(--tron-glow-md)]' 
            : 'bg-transparent text-gray-400 border border-[var(--tron-border)] hover:border-[var(--tron-primary)] hover:text-[var(--tron-primary)]'"
          @click="selectedGroup = group"
        >
          {{ group }}
          <span class="ml-2 text-xs opacity-75">
            ({{ group === 'All' ? projects.length : projects.filter(p => p.group === group).length }})
          </span>
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto">
        <ProjectCard 
          v-for="(project, index) in filteredProjects" 
          :key="project.slug" 
          :project="project"
          class="animate-fade-in-up"
          :style="`animation-delay: ${index * 0.1}s`"
        />
      </div>

      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <div class="mb-8">
          <div class="w-24 h-24 mx-auto border-2 border-[var(--tron-border)] flex items-center justify-center">
            <svg class="w-12 h-12 text-[var(--tron-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
        <h3 class="text-2xl font-bold font-['Orbitron'] text-white mb-4 uppercase">No Projects Found</h3>
        <p class="text-gray-400 mb-8">No projects match the selected filter.</p>
        <button 
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white font-['Orbitron'] font-semibold uppercase tracking-wider hover:shadow-[var(--tron-glow-md)] transition-all duration-300"
          @click="selectedGroup = 'All'"
        >
          Show All Projects
        </button>
      </div>

      <div class="text-center mt-16">
        <NuxtLink 
          to="/" 
          class="group inline-flex items-center text-[var(--tron-primary)] hover:text-[var(--tron-secondary)] transition-colors duration-300 font-['Orbitron'] uppercase tracking-wider text-sm"
        >
          <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
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

.animate-fade-in-up {
  animation: fade-in-up 0.8s ease-out forwards;
  opacity: 0;
}
</style>

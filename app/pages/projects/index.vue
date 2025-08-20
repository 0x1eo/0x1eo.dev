<script setup>
import { projects } from '~/data/projects';
import { ref } from 'vue';

// Set page meta
useHead({
  title: 'Projects - Leandro Afonso',
  meta: [
    { name: 'description', content: 'Browse all cybersecurity and systems engineering projects by Leandro Afonso.' }
  ]
});

// Filter functionality
const selectedGroup = ref('All');
const groups = ['All', 'Freelance', 'Academic'];

const filteredProjects = computed(() => {
  if (selectedGroup.value === 'All') {
    return projects;
  }
  return projects.filter(project => project.group === selectedGroup.value);
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <div class="container mx-auto px-4 py-12">
      <!-- Page Header -->
      <div class="text-center mb-16">
        <h1 class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
          All Projects
        </h1>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
        <p class="text-xl text-gray-400 max-w-2xl mx-auto">
          A comprehensive collection of cybersecurity research, systems engineering, and technical projects
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mb-12">
        <button
          v-for="group in groups"
          :key="group"
          class="px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          :class="selectedGroup === group 
            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
            : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-400 hover:text-blue-400'"
          @click="selectedGroup = group"
        >
          {{ group }}
          <span v-if="group !== 'All'" class="ml-2 text-sm opacity-75">
            ({{ projects.filter(p => p.group === group).length }})
          </span>
          <span v-else class="ml-2 text-sm opacity-75">
            ({{ projects.length }})
          </span>
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <ProjectCard 
          v-for="(project, index) in filteredProjects" 
          :key="project.slug" 
          :project="project"
          class="animate-fade-in-up"
          :style="`animation-delay: ${index * 0.1}s`"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProjects.length === 0" class="text-center py-20">
        <div class="mb-8">
          <svg class="w-24 h-24 mx-auto text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-4">No Projects Found</h3>
        <p class="text-gray-400 mb-8">No projects match the selected filter.</p>
        <button 
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          @click="selectedGroup = 'All'"
        >
          Show All Projects
        </button>
      </div>

      <!-- Back to Home -->
      <div class="text-center mt-16">
        <NuxtLink 
          to="/" 
          class="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
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

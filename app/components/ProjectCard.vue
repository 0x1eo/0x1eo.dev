<script setup>
// Define the props this component accepts
defineProps({
  project: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <NuxtLink 
    :to="`/projects/${project.slug}`" 
    class="group relative block overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-blue-400/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20"
  >
    <!-- Background Gradient Overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <!-- Content -->
    <div class="relative p-8">
      <!-- Project Category Badge -->
      <div class="flex items-center justify-between mb-4">
        <span 
          class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium transition-all duration-300"
          :class="project.group === 'Academic' 
            ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-lg group-hover:bg-purple-500/20 group-hover:border-purple-400/40' 
            : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full group-hover:bg-emerald-500/20 group-hover:border-emerald-400/40'"
        >
          <!-- Academic Icon -->
          <svg v-if="project.group === 'Academic'" class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,3L1,9L12,15L21,9V16H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"/>
          </svg>
          <!-- Freelance Icon -->
          <svg v-else class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20,6H16V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V6H4A2,2 0 0,0 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8A2,2 0 0,0 20,6M10,4H14V6H10V4Z"/>
          </svg>
          {{ project.category }}
        </span>
        <div 
          class="w-8 h-8 rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300"
          :class="project.group === 'Academic' 
            ? 'bg-gradient-to-br from-purple-400 to-pink-400' 
            : 'bg-gradient-to-br from-emerald-400 to-teal-400'"
        />
      </div>

      <!-- Project Title -->
      <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
        {{ project.title }}
      </h3>
      
      <!-- Project Description -->
      <p class="text-gray-400 mb-6 line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
        {{ project.description_points?.[0] || 'A fascinating project showcasing technical expertise and innovation.' }}
      </p>

      <!-- Tags -->
      <div class="flex flex-wrap gap-2 mb-6">
        <span 
          v-for="(tag, index) in project.tags.slice(0, 4)" 
          :key="tag" 
          class="bg-gray-700/50 text-gray-300 text-sm font-medium px-3 py-1 rounded-full border border-gray-600 group-hover:border-gray-500 group-hover:bg-gray-600/50 transition-all duration-300"
          :class="{ 'animate-fade-in-tag': true }"
          :style="`animation-delay: ${index * 0.1}s`"
        >
          {{ tag }}
        </span>
        <span 
          v-if="project.tags.length > 4" 
          class="bg-gray-700/50 text-gray-400 text-sm font-medium px-3 py-1 rounded-full border border-gray-600"
        >
          +{{ project.tags.length - 4 }}
        </span>
      </div>

      <!-- Project Link Indicator -->
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-2 text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
          <span class="text-sm font-medium">View Project</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        
        <!-- Live Site Indicator -->
        <div v-if="project.link && !project.link.includes('github.com')" class="flex items-center space-x-1 text-green-400">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span class="text-xs font-medium">Live</span>
        </div>
        
        <!-- GitHub Repository Indicator -->
        <div v-else-if="project.link && project.link.includes('github.com')" class="flex items-center space-x-1 text-gray-400">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="text-xs font-medium">Source</span>
        </div>
        
        <!-- Files Available Indicator -->
        <div v-else-if="project.files && project.files.length > 0" class="flex items-center space-x-1 text-amber-400">
          <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
          </svg>
          <span class="text-xs font-medium">Files</span>
        </div>
      </div>
    </div>

    <!-- Hover Effect Border -->
    <div class="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div 
        class="absolute inset-0 rounded-2xl blur-sm"
        :class="project.group === 'Academic' 
          ? 'bg-gradient-to-r from-purple-400/20 to-pink-400/20' 
          : 'bg-gradient-to-r from-emerald-400/20 to-teal-400/20'"
      />
    </div>
  </NuxtLink>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fade-in-tag {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-tag {
  animation: fade-in-tag 0.5s ease-out forwards;
}
</style>
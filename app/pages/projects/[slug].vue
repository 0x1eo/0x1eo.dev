<script setup>
import { projects } from '~/data/projects';
import { useRoute } from 'vue-router';

const route = useRoute();
const project = projects.find(p => p.slug === route.params.slug);

useHead({
  title: project ? `${project.title} - Leandro Afonso` : 'Project Not Found - Leandro Afonso',
  meta: [
    { name: 'description', content: project?.description_points?.[0] || 'Project details' }
  ]
});
</script>

<template>
  <div class="min-h-screen">
    <div v-if="project" class="container mx-auto px-4 py-12">
      <div class="mb-8">
        <NuxtLink to="/projects" class="group inline-flex items-center text-[var(--tron-primary)] hover:text-[var(--tron-secondary)] transition-colors duration-300 font-['Orbitron'] uppercase tracking-wider text-sm">
          <svg class="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </NuxtLink>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <div class="mb-4">
            <span class="inline-flex items-center px-4 py-2 text-xs font-['Orbitron'] font-medium uppercase tracking-widest bg-[var(--tron-primary)]/10 text-[var(--tron-primary)] border border-[var(--tron-primary)]/30">
              {{ project.category }}
            </span>
          </div>

          <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold font-['Orbitron'] uppercase tracking-wider tron-gradient-text mb-6 drop-shadow-[0_0_20px_rgba(255,69,0,0.3)]">
            {{ project.title }}
          </h1>

          <div class="flex items-center justify-center space-x-4 text-gray-400 mb-8">
            <svg class="w-5 h-5 text-[var(--tron-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span class="font-['Orbitron'] text-sm tracking-wide">{{ project.date }}</span>
          </div>

          <div v-if="project.link" class="mb-8">
            <a v-if="!project.link.includes('github.com')" :href="project.link" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white font-['Orbitron'] font-semibold uppercase tracking-wider hover:shadow-[var(--tron-glow-lg)] transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              View Live Project
            </a>
            
            <a v-else :href="project.link" target="_blank" rel="noopener noreferrer" class="group inline-flex items-center px-8 py-4 bg-[var(--tron-bg-card)] border border-[var(--tron-border)] text-white font-['Orbitron'] font-semibold uppercase tracking-wider hover:border-[var(--tron-primary)] hover:shadow-[var(--tron-glow-md)] transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View Repository
            </a>
          </div>
        </div>

        <div class="relative bg-[var(--tron-bg-card)] backdrop-blur-md border border-[var(--tron-border)] p-8 md:p-12">
          <div class="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[var(--tron-primary)]" />
          <div class="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[var(--tron-primary)]" />
          <div class="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-[var(--tron-primary)]" />
          <div class="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-[var(--tron-primary)]" />
          
          <div class="mb-10">
            <h2 class="text-xl font-bold font-['Orbitron'] text-white mb-6 flex items-center uppercase tracking-wide">
              <svg class="w-5 h-5 mr-3 text-[var(--tron-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Project Overview
            </h2>
            
            <div class="space-y-4">
              <div v-for="(point, index) in project.description_points" :key="index" class="flex items-start space-x-3">
                <div class="w-2 h-2 bg-[var(--tron-primary)] mt-2.5 flex-shrink-0 shadow-[0_0_8px_var(--tron-primary)]" />
                <p class="text-gray-300 leading-relaxed">{{ point }}</p>
              </div>
            </div>
          </div>

          <div class="h-px bg-gradient-to-r from-transparent via-[var(--tron-border)] to-transparent mb-10" />

          <div class="mb-10">
            <h2 class="text-xl font-bold font-['Orbitron'] text-white mb-6 flex items-center uppercase tracking-wide">
              <svg class="w-5 h-5 mr-3 text-[var(--tron-secondary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              Technologies & Skills
            </h2>
            
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              <div v-for="(tag, index) in project.tags" :key="tag" class="group relative bg-[var(--tron-bg)] border border-[var(--tron-border)] p-3 text-center hover:border-[var(--tron-primary)] hover:shadow-[var(--tron-glow-sm)] transition-all duration-300" :style="`animation-delay: ${index * 0.05}s`">
                <span class="text-gray-300 text-sm font-medium group-hover:text-[var(--tron-primary)] transition-colors duration-300">{{ tag }}</span>
              </div>
            </div>
          </div>

          <div v-if="project.files && project.files.length > 0" class="mb-10">
            <div class="h-px bg-gradient-to-r from-transparent via-[var(--tron-border)] to-transparent mb-10" />
            
            <h2 class="text-xl font-bold font-['Orbitron'] text-white mb-6 flex items-center uppercase tracking-wide">
              <svg class="w-5 h-5 mr-3 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Project Documentation
            </h2>
            
            <div class="grid gap-4 md:grid-cols-2">
              <div v-for="file in project.files" :key="file.filename" class="group relative bg-[var(--tron-bg)] border border-[var(--tron-border)] p-6 hover:border-green-400/50 hover:shadow-[0_0_20px_rgba(74,222,128,0.2)] transition-all duration-300">
                <div class="flex items-start space-x-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-red-500/20 border border-red-500/30 flex items-center justify-center">
                    <svg class="w-6 h-6 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
                    </svg>
                  </div>
                  
                  <div class="flex-1 min-w-0">
                    <h3 class="text-base font-semibold font-['Orbitron'] text-white group-hover:text-green-400 transition-colors duration-300 mb-2 uppercase tracking-wide">{{ file.name }}</h3>
                    <p class="text-gray-400 text-sm mb-3 leading-relaxed">{{ file.description }}</p>
                    
                    <a :href="`/data/files/${file.filename}`" target="_blank" class="inline-flex items-center text-green-400 hover:text-green-300 font-['Orbitron'] font-medium text-xs uppercase tracking-wider transition-colors duration-300">
                      <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="h-px bg-gradient-to-r from-transparent via-[var(--tron-border)] to-transparent mb-8" />

          <div class="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <div>
              <h3 class="text-sm font-['Orbitron'] text-gray-400 mb-2 uppercase tracking-wider">Project Type</h3>
              <span class="inline-flex items-center px-3 py-1 text-xs font-['Orbitron'] font-medium uppercase tracking-widest bg-[var(--tron-secondary)]/10 text-[var(--tron-secondary)] border border-[var(--tron-secondary)]/30">{{ project.group }}</span>
            </div>
            
            <div v-if="project.link && !project.link.includes('github.com')" class="flex items-center space-x-2 text-green-400 font-['Orbitron'] text-sm uppercase tracking-wider">
              <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.6)]" />
              <span>Live & Active</span>
            </div>
            <div v-else-if="project.link && project.link.includes('github.com')" class="flex items-center space-x-2 text-gray-400 font-['Orbitron'] text-sm uppercase tracking-wider">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>Open Source</span>
            </div>
          </div>
        </div>

        <div class="mt-16 text-center">
          <h2 class="text-2xl font-bold font-['Orbitron'] text-white mb-8 uppercase tracking-wide">Explore More Projects</h2>
          <div class="flex flex-wrap justify-center gap-4">
            <NuxtLink to="/projects" class="group inline-flex items-center px-6 py-3 border-2 border-[var(--tron-primary)] text-[var(--tron-primary)] font-['Orbitron'] font-semibold uppercase tracking-wider hover:bg-[var(--tron-primary)] hover:text-[var(--tron-bg)] hover:shadow-[var(--tron-glow-md)] transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              All Projects
            </NuxtLink>
            <NuxtLink to="/" class="group inline-flex items-center px-6 py-3 border-2 border-[var(--tron-border)] text-gray-300 font-['Orbitron'] font-semibold uppercase tracking-wider hover:border-gray-400 hover:text-white transform hover:scale-105 transition-all duration-300">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back Home
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="container mx-auto px-4 py-20 text-center">
      <div class="max-w-md mx-auto">
        <div class="mb-8">
          <div class="w-24 h-24 mx-auto border-2 border-[var(--tron-accent)] flex items-center justify-center">
            <svg class="w-12 h-12 text-[var(--tron-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        </div>
        <h1 class="text-3xl font-bold font-['Orbitron'] text-white mb-4 uppercase tracking-wide">Project Not Found</h1>
        <p class="text-gray-400 mb-8">The project you're looking for doesn't exist or may have been moved.</p>
        <NuxtLink to="/projects" class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white font-['Orbitron'] font-semibold uppercase tracking-wider hover:shadow-[var(--tron-glow-md)] transition-all duration-300">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Projects
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup>
// Set page meta for better SEO
useHead({
  title: 'About - Leandro Afonso',
  meta: [
    { name: 'description', content: 'Learn more about Leandro Afonso, a cybersecurity specialist and systems engineer passionate about building secure, scalable solutions.' }
  ]
});
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
    <!-- Hero Section -->
    <section class="relative py-20 px-4 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 70%), radial-gradient(circle at 75% 75%, #8b5cf6 0%, transparent 70%);" />
      </div>
      
      <!-- Animated Geometric Shapes -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div class="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;" />
      </div>

      <div class="relative z-10 max-w-4xl mx-auto">
        <!-- Page Header -->
        <div class="text-center mb-16">
          <h1 class="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-6">
            About Me
          </h1>
          <div class="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-6" />
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate about cybersecurity and systems engineering
          </p>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <section class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <!-- Profile Image -->
          <div class="relative group">
            <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700">
              <!-- Profile photo -->
              <div class="aspect-square">
                <img 
                  src="/data/files/profile.jpg" 
                  alt="Leandro Afonso - Cybersecurity Specialist" 
                  class="w-full h-full object-cover"
                >
              </div>
              <!-- Hover Effect -->
              <div class="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>

          <!-- About Text -->
          <div class="space-y-6">
            <div>
              <h2 class="text-3xl font-bold text-white mb-4">Hello, I'm Leandro</h2>
              <p class="text-lg text-gray-300 leading-relaxed">
                I'm a cybersecurity specialist and systems engineer with a passion for building secure, scalable solutions. 
                My journey in technology has led me to explore the intricate world of cybersecurity, where I focus on 
                protecting digital infrastructures and developing innovative security frameworks.
              </p>
            </div>
            
            <div>
              <p class="text-lg text-gray-300 leading-relaxed">
                With expertise spanning from penetration testing to secure system architecture, I thrive on solving 
                complex security challenges and implementing robust solutions that safeguard critical systems and data.
              </p>
            </div>

            <div>
              <p class="text-lg text-gray-300 leading-relaxed">
                When I'm not diving deep into security research or building systems, I enjoy sharing knowledge with 
                the cybersecurity community and staying updated with the latest threats and defensive techniques.
              </p>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="mb-20">
          <h2 class="text-3xl font-bold text-center text-white mb-12">Core Expertise</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Cybersecurity -->
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Cybersecurity</h3>
              <p class="text-gray-400">Penetration testing, vulnerability assessment, security audits, and threat analysis.</p>
            </div>

            <!-- Systems Engineering -->
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Systems Engineering</h3>
              <p class="text-gray-400">System architecture, infrastructure design, automation, and scalable solutions.</p>
            </div>

            <!-- Security Research -->
            <div class="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
              <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-white mb-3">Security Research</h3>
              <p class="text-gray-400">Threat intelligence, exploit development, security tools creation, and vulnerability research.</p>
            </div>
          </div>
        </div>

        <!-- Contact Section -->
        <div class="text-center">
          <h2 class="text-3xl font-bold text-white mb-8">Let's Connect</h2>
          <p class="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on cybersecurity projects or discussing security challenges? 
            I'm always open to connecting with fellow security professionals and enthusiasts.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:leo@0x1eo.dev" 
              class="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get In Touch
            </a>
            
            <a 
              href="https://www.linkedin.com/in/0x1eo" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center px-8 py-4 border-2 border-gray-600 text-gray-300 font-semibold rounded-lg hover:border-blue-400 hover:text-blue-400 transform hover:scale-105 transition-all duration-300"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
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

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}
</style>

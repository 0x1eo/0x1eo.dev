<template>
  <footer class="bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 text-gray-400 mt-20 border-t border-gray-800">
    <div class="container mx-auto p-8">
      <!-- Main Footer Content -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">LA</span>
            </div>
            <span class="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Leandro Afonso
            </span>
          </div>
          <p class="text-gray-400 leading-relaxed max-w-md">
            Cybersecurity specialist and systems engineer passionate about building secure, scalable solutions.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <NuxtLink to="/" class="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <svg class="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Home
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/projects" class="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <svg class="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                Projects
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/about" class="hover:text-blue-400 transition-colors duration-300 flex items-center group">
                <svg class="w-4 h-4 mr-2 opacity-60 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                About
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-white">Get In Touch</h3>
          <div class="space-y-3">
            <a 
              href="mailto:leo@0x1eo.dev" 
              class="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 group"
            >
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span>leo@0x1eo.dev</span>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/0x1eo" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 group"
            >
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <span>LinkedIn</span>
            </a>
            
            <a 
              href="https://0x1eo.dev/" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 group"
            >
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <span>Portfolio Website</span>
            </a>
            
            <a 
              href="tel:+351910074564" 
              class="flex items-center space-x-3 hover:text-blue-400 transition-colors duration-300 group"
            >
              <div class="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <span>+351 910 074 564</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Leandro Afonso. All rights reserved.
        </p>
        
        <div class="flex items-center space-x-6 text-sm text-gray-500">
          <span>Built with ❤️ using Nuxt & Tailwind</span>
          <div class="flex items-center space-x-1">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span>Available for new opportunities</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<template>
	<header
		class="bg-gray-900/80 backdrop-blur-md text-white sticky top-0 z-50 border-b border-gray-800">
		<nav class="container mx-auto flex justify-between items-center p-4">
			<!-- Logo/Brand -->
			<div class="flex flex-1 justify-start">
				<NuxtLink to="/" class="group flex items-center space-x-2">
					<div
						class="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
						<span class="text-white font-bold text-lg">LA</span>
					</div>
					<span
						class="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-300">
						Leandro Afonso
					</span>
				</NuxtLink>
			</div>

			<!-- Desktop Navigation -->
			<ul class="hidden md:flex space-x-8 text-lg">
				<li>
					<NuxtLink
						to="/"
						class="relative py-2 hover:text-blue-400 transition-colors duration-300 group"
						:class="{ 'text-blue-400': $route.path === '/' }">
						Home
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/projects"
						class="relative py-2 hover:text-blue-400 transition-colors duration-300 group"
						:class="{ 'text-blue-400': $route.path.startsWith('/projects') }">
						Projects
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/about"
						class="relative py-2 hover:text-blue-400 transition-colors duration-300 group"
						:class="{ 'text-blue-400': $route.path === '/about' }">
						About
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300" />
					</NuxtLink>
				</li>
			</ul>

			<!-- Contact Button -->
			<div class="hidden md:flex flex-1 justify-end">
				<a
					href="mailto:leo@0x1eo.dev"
					class="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg">
					<svg
						class="w-4 h-4 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					Contact
				</a>
			</div>

			<!-- Mobile Menu Button -->
			<button
				class="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
				@click="toggleMobileMenu">
				<svg
					class="w-6 h-6"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24">
					<path
						v-if="!mobileMenuOpen"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h16" />
					<path
						v-else
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M6 18L18 6M6 6l12 12" />
				</svg>
			</button>
		</nav>

		<!-- Mobile Menu -->
		<div
			v-if="mobileMenuOpen"
			class="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 animate-fade-in">
			<div class="container mx-auto p-4 space-y-4">
				<NuxtLink
					to="/"
					class="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
					:class="{ 'bg-gray-800 text-blue-400': $route.path === '/' }"
					@click="closeMobileMenu">
					Home
				</NuxtLink>
				<NuxtLink
					to="/projects"
					class="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
					:class="{
						'bg-gray-800 text-blue-400': $route.path.startsWith('/projects')
					}"
					@click="closeMobileMenu">
					Projects
				</NuxtLink>
				<NuxtLink
					to="/about"
					class="block py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300"
					:class="{ 'bg-gray-800 text-blue-400': $route.path === '/about' }"
					@click="closeMobileMenu">
					About
				</NuxtLink>
				<a
					href="mailto:leo@0x1eo.dev"
					class="flex items-center justify-center py-3 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300">
					<svg
						class="w-4 h-4 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
					</svg>
					Contact Me
				</a>
			</div>
		</div>
	</header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
	mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
	mobileMenuOpen.value = false
}

// Close mobile menu when route changes
watch(
	() => route.path,
	() => {
		mobileMenuOpen.value = false
	}
)
</script>

<style scoped>
@keyframes fade-in {
	from {
		opacity: 0;
		transform: translateY(-10px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

.animate-fade-in {
	animation: fade-in 0.3s ease-out;
}
</style>

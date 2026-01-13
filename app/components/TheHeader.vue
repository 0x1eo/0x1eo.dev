<template>
	<header
		class="bg-tron-bg/90 backdrop-blur-md text-white sticky top-0 z-50 border-b border-tron-border">
		<!-- Glowing Top Edge -->
		<div class="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[var(--tron-primary)] to-transparent opacity-60" />
		
		<nav class="container mx-auto flex justify-between items-center p-4">
			<!-- Logo/Brand -->
			<div class="flex flex-1 justify-start">
				<NuxtLink to="/" class="group flex items-center space-x-3">
					<!-- TRON-style Logo Box -->
					<div
						class="relative w-10 h-10 bg-gradient-to-br from-[var(--tron-primary)] to-[var(--tron-secondary)] flex items-center justify-center group-hover:shadow-[var(--tron-glow-md)] transition-all duration-300">
						<!-- Hex corners -->
						<div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/50" />
						<div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/50" />
						<span class="text-white font-bold text-lg font-['Orbitron']">LA</span>
					</div>
					<span
						class="text-2xl font-bold font-['Orbitron'] uppercase tracking-wider tron-gradient-text group-hover:drop-shadow-[0_0_10px_rgba(255,69,0,0.8)] transition-all duration-300">
						0x1eo
					</span>
				</NuxtLink>
			</div>

			<!-- Desktop Navigation -->
			<ul class="hidden md:flex space-x-8 text-lg font-['Orbitron']">
				<li>
					<NuxtLink
						to="/"
						class="relative py-2 text-gray-300 hover:text-[var(--tron-primary)] transition-colors duration-300 group uppercase tracking-wide text-sm"
						:class="{ 'text-[var(--tron-primary)]': $route.path === '/' }">
						Home
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] group-hover:w-full transition-all duration-300 shadow-[var(--tron-glow-sm)]" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/projects"
						class="relative py-2 text-gray-300 hover:text-[var(--tron-primary)] transition-colors duration-300 group uppercase tracking-wide text-sm"
						:class="{ 'text-[var(--tron-primary)]': $route.path.startsWith('/projects') }">
						Projects
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] group-hover:w-full transition-all duration-300 shadow-[var(--tron-glow-sm)]" />
					</NuxtLink>
				</li>
				<li>
					<NuxtLink
						to="/about"
						class="relative py-2 text-gray-300 hover:text-[var(--tron-primary)] transition-colors duration-300 group uppercase tracking-wide text-sm"
						:class="{ 'text-[var(--tron-primary)]': $route.path === '/about' }">
						About
						<span
							class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] group-hover:w-full transition-all duration-300 shadow-[var(--tron-glow-sm)]" />
					</NuxtLink>
				</li>
			</ul>

			<!-- Contact Button -->
			<div class="hidden md:flex flex-1 justify-end">
				<a
					href="mailto:leo@0x1eo.dev"
					class="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white font-semibold font-['Orbitron'] text-sm uppercase tracking-wider hover:shadow-[var(--tron-glow-md)] transform hover:scale-105 transition-all duration-300">
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
				class="md:hidden p-2 text-gray-300 hover:text-[var(--tron-primary)] transition-colors duration-300"
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
			class="md:hidden bg-tron-bg/95 backdrop-blur-md border-t border-tron-border animate-fade-in">
			<div class="container mx-auto p-4 space-y-3 font-['Orbitron']">
				<NuxtLink
					to="/"
					class="block py-3 px-4 text-gray-300 hover:text-[var(--tron-primary)] hover:bg-[var(--tron-primary)]/10 border border-transparent hover:border-[var(--tron-border)] transition-all duration-300 uppercase tracking-wide text-sm"
					:class="{ 'bg-[var(--tron-primary)]/10 border-[var(--tron-border)] text-[var(--tron-primary)]': $route.path === '/' }"
					@click="closeMobileMenu">
					Home
				</NuxtLink>
				<NuxtLink
					to="/projects"
					class="block py-3 px-4 text-gray-300 hover:text-[var(--tron-primary)] hover:bg-[var(--tron-primary)]/10 border border-transparent hover:border-[var(--tron-border)] transition-all duration-300 uppercase tracking-wide text-sm"
					:class="{
						'bg-[var(--tron-primary)]/10 border-[var(--tron-border)] text-[var(--tron-primary)]': $route.path.startsWith('/projects')
					}"
					@click="closeMobileMenu">
					Projects
				</NuxtLink>
				<NuxtLink
					to="/about"
					class="block py-3 px-4 text-gray-300 hover:text-[var(--tron-primary)] hover:bg-[var(--tron-primary)]/10 border border-transparent hover:border-[var(--tron-border)] transition-all duration-300 uppercase tracking-wide text-sm"
					:class="{ 'bg-[var(--tron-primary)]/10 border-[var(--tron-border)] text-[var(--tron-primary)]': $route.path === '/about' }"
					@click="closeMobileMenu">
					About
				</NuxtLink>
				<a
					href="mailto:leo@0x1eo.dev"
					class="flex items-center justify-center py-3 px-4 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white font-semibold uppercase tracking-wide text-sm hover:shadow-[var(--tron-glow-md)] transition-all duration-300">
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
.bg-tron-bg\/90 {
	background-color: rgba(10, 10, 15, 0.9);
}

.bg-tron-bg\/95 {
	background-color: rgba(10, 10, 15, 0.95);
}

.border-tron-border {
	border-color: rgba(255, 69, 0, 0.3);
}

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

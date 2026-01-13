<script setup>
import { projects } from '~/data/projects'

useHead({
	title: 'Leandro Afonso - Cybersecurity & Systems Engineering Portfolio',
	meta: [
		{
			name: 'description',
			content:
				'Portfolio showcasing cybersecurity and systems engineering projects by Leandro Afonso.'
		}
	]
})
</script>

<template>
	<div class="min-h-screen">
		<section class="relative min-h-screen flex items-center justify-center">
			<div class="absolute inset-0 overflow-hidden pointer-events-none">
				<div class="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--tron-primary)]/30 to-transparent animate-pulse" />
				<div class="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--tron-secondary)]/20 to-transparent animate-pulse" style="animation-delay: 1s" />
				<div class="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--tron-primary)]/20 to-transparent animate-pulse" style="animation-delay: 0.5s" />
				<div class="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--tron-secondary)]/20 to-transparent animate-pulse" style="animation-delay: 1.5s" />
			</div>

			<div class="absolute inset-0 overflow-hidden pointer-events-none hidden md:block">
				<div class="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--tron-primary)]/10 rounded-full blur-[100px] animate-pulse" />
				<div class="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[var(--tron-secondary)]/10 rounded-full blur-[80px] animate-pulse" style="animation-delay: 2s" />
				<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--tron-accent)]/5 rounded-full blur-[120px]" />
			</div>

			<div class="relative z-10 text-center px-4 sm:px-8 max-w-6xl mx-auto">
				<div class="mb-6 animate-fade-in">
					<span class="inline-block px-4 py-2 border border-[var(--tron-border)] bg-[var(--tron-bg-card)] backdrop-blur-sm font-['Orbitron'] text-sm text-[var(--tron-primary)] tracking-widest uppercase animate-border-glow">
						<span class="opacity-60">&gt;</span> System Online <span class="animate-pulse">_</span>
					</span>
				</div>

				<div class="space-y-4 sm:space-y-6">
					<h1 class="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold font-['Orbitron'] uppercase tracking-wider animate-fade-in">
						<span class="block leading-tight tron-gradient-text drop-shadow-[0_0_30px_rgba(255,69,0,0.5)] animate-glitch-hover">Cybersecurity</span>
						<span class="block leading-tight text-xl sm:text-2xl md:text-4xl lg:text-5xl text-[var(--tron-primary)]/60 my-2 sm:my-4 animate-neon-flicker">&amp;</span>
						<span class="block leading-tight tron-gradient-text drop-shadow-[0_0_30px_rgba(255,69,0,0.5)] animate-glitch-hover">Systems Engineering</span>
					</h1>

					<div class="space-y-4 animate-fade-in-up" style="animation-delay: 0.5s">
						<p class="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
							Building secure, scalable systems and exploring the frontiers of cybersecurity
						</p>
						<p class="text-[var(--tron-primary)] font-['Orbitron'] font-semibold tracking-wider uppercase">
							Portfolio by <span class="text-white">Leandro Afonso</span>
						</p>
					</div>

					<div class="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-10 animate-fade-in-up" style="animation-delay: 1s">
						<a href="#projects" class="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[var(--tron-primary)] to-[var(--tron-secondary)] text-white font-['Orbitron'] font-semibold uppercase tracking-wider text-sm sm:text-base hover:shadow-[var(--tron-glow-lg)] transform hover:scale-105 transition-all duration-300">
							<span>View My Work</span>
							<svg class="w-5 h-5 ml-3 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
							</svg>
						</a>
						<a href="mailto:leo@0x1eo.dev" class="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-[var(--tron-primary)] text-[var(--tron-primary)] font-['Orbitron'] font-semibold uppercase tracking-wider text-sm sm:text-base hover:bg-[var(--tron-primary)] hover:text-[var(--tron-bg)] hover:shadow-[var(--tron-glow-md)] transform hover:scale-105 transition-all duration-300">
							<svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
							</svg>
							<span>Get In Touch</span>
						</a>
					</div>
				</div>
			</div>
		</section>

		<section id="projects" class="py-12 sm:py-20 px-4 relative">
			<div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--tron-primary)]/50 to-transparent" />
			
			<div class="max-w-7xl mx-auto">
				<div class="text-center mb-8 sm:mb-16">
					<div class="inline-block mb-4">
						<span class="px-4 py-1 border border-[var(--tron-border)] font-['Orbitron'] text-xs text-[var(--tron-primary)] tracking-widest uppercase">
							// Projects Database
						</span>
					</div>
					<h2 class="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold font-['Orbitron'] uppercase tracking-wider tron-gradient-text mb-4 sm:mb-6 drop-shadow-[0_0_20px_rgba(255,69,0,0.3)]">
						Featured Projects
					</h2>
					<div class="w-32 h-0.5 bg-gradient-to-r from-transparent via-[var(--tron-primary)] to-transparent mx-auto mb-6 shadow-[0_0_10px_var(--tron-primary)]" />
					<p class="text-sm sm:text-base md:text-lg text-gray-400 max-w-2xl mx-auto">
						Exploring cybersecurity challenges and engineering innovative solutions
					</p>
				</div>

				<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
					<ProjectCard v-for="(project, index) in projects.slice(0, 6)" :key="project.slug" :project="project" class="animate-fade-in-up" :style="`animation-delay: ${index * 0.1}s`" />
				</div>

				<div class="text-center mt-12">
					<NuxtLink to="/projects" class="group inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 border-2 border-[var(--tron-primary)] text-[var(--tron-primary)] font-['Orbitron'] font-semibold uppercase tracking-wider text-sm sm:text-base hover:bg-[var(--tron-primary)] hover:text-[var(--tron-bg)] hover:shadow-[var(--tron-glow-md)] transform hover:scale-105 transition-all duration-300">
						<span>View All Projects</span>
						<svg class="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
	from { opacity: 0; transform: translateY(30px); }
	to { opacity: 1; transform: translateY(0); }
}

@keyframes fade-in-up {
	from { opacity: 0; transform: translateY(50px); }
	to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
	animation: fade-in 1s ease-out forwards;
	opacity: 0;
}

.animate-fade-in-up {
	animation: fade-in-up 0.8s ease-out forwards;
	opacity: 0;
}

/* Mobile hero optimizations */
@media (max-width: 768px) {
	/* Hide large glow effects on mobile */
	.absolute.w-96,
	.absolute.w-80,
	.absolute.w-\[600px\] {
		display: none;
	}
}
</style>

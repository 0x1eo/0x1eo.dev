<script setup lang="ts">
import { type Project } from '~/data/projects'

type Props = {
	project: Project
}

const { project } = defineProps<Props>()
</script>

<template>
	<NuxtLink
		:to="`/projects/${project.slug}`"
		class="group relative block overflow-hidden bg-[var(--tron-bg-card)] backdrop-blur-md border border-[var(--tron-border)] hover:border-[var(--tron-primary)] transition-all duration-500 transform hover:-translate-y-2 hover:shadow-[var(--tron-glow-lg)]">
		
		<div class="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--tron-primary)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
		<div class="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--tron-primary)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
		<div class="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--tron-primary)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
		<div class="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--tron-primary)] opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
		
		<div class="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-[var(--tron-primary)]/30 to-transparent group-hover:via-[var(--tron-primary)] transition-all duration-500" />
		
		<div class="absolute inset-0 opacity-0 group-hover:opacity-100 overflow-hidden pointer-events-none">
			<div class="absolute inset-x-0 h-px bg-[var(--tron-primary)]/50 animate-scan-line" />
		</div>

		<div class="relative p-4 sm:p-6 md:p-8 flex flex-col h-full">
			<div class="flex items-center justify-between mb-4">
				<span
					class="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-['Orbitron'] font-medium uppercase tracking-wider transition-all duration-300 border"
					:class="
						project.group === 'Academic'
							? 'bg-[var(--tron-accent)]/10 text-[var(--tron-accent)] border-[var(--tron-accent)]/30 group-hover:border-[var(--tron-accent)] group-hover:shadow-[0_0_10px_rgba(220,20,60,0.3)]'
							: project.group === 'Personal'
								? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.3)]'
								: 'bg-[var(--tron-secondary)]/10 text-[var(--tron-secondary)] border-[var(--tron-secondary)]/30 group-hover:border-[var(--tron-secondary)] group-hover:shadow-[0_0_10px_rgba(255,140,0,0.3)]'
					">
					<svg
						v-if="project.group === 'Academic'"
						class="w-3 h-3"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path
							d="M12,3L1,9L12,15L21,9V16H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
					</svg>
					<svg
						v-else-if="project.group === 'Personal'"
						class="w-3 h-3"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
					</svg>
					<svg
						v-else
						class="w-3 h-3"
						fill="currentColor"
						viewBox="0 0 24 24">
						<path
							d="M20,6H16V4A2,2 0 0,0 14,2H10A2,2 0 0,0 8,4V6H4A2,2 0 0,0 2,8V19A2,2 0 0,0 4,21H20A2,2 0 0,0 22,19V8A2,2 0 0,0 20,6M10,4H14V6H10V4Z" />
					</svg>
					{{ project.category }}
				</span>
				
				<div class="flex items-center space-x-1">
					<div 
						class="w-2 h-2 rounded-full animate-pulse"
						:class="project.link && !project.link.includes('github.com') ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.6)]' : 'bg-[var(--tron-primary)] shadow-[0_0_8px_var(--tron-primary)]'" />
				</div>
			</div>

			<h3
				class="text-lg sm:text-xl font-bold font-['Orbitron'] text-white mb-3 group-hover:text-[var(--tron-primary)] group-hover:drop-shadow-[0_0_10px_rgba(255,69,0,0.5)] transition-all duration-300 uppercase tracking-wide min-h-0 sm:h-14 line-clamp-2">
				{{ project.title }}
			</h3>

			<p
				class="text-gray-400 text-sm line-clamp-3 group-hover:text-gray-300 transition-colors duration-300 mb-6 leading-relaxed">
				{{
					project.description_points?.[0] ||
					'A fascinating project showcasing technical expertise and innovation.'
				}}
			</p>

			<div class="flex flex-col gap-6 mt-auto">
				<div class="flex flex-wrap gap-2">
					<span
						v-for="(tag, index) in project.tags.slice(0, 3)"
						:key="tag"
						class="bg-[var(--tron-bg)]/80 text-[var(--tron-primary)] text-xs font-medium px-2.5 py-1 border border-[var(--tron-border)] group-hover:border-[var(--tron-primary)]/50 transition-all duration-300"
						:style="`animation-delay: ${index * 0.1}s`">
						{{ tag }}
					</span>
					<span
						v-if="project.tags.length > 3"
						class="bg-[var(--tron-bg)]/80 text-gray-500 text-xs font-medium px-2.5 py-1 border border-[var(--tron-border)]">
						+{{ project.tags.length - 3 }}
					</span>
				</div>

				<div class="flex items-center justify-between pt-4 border-t border-[var(--tron-border)]">
					<div
						class="flex items-center space-x-2 text-gray-400 group-hover:text-[var(--tron-primary)] transition-colors duration-300 font-['Orbitron'] text-xs uppercase tracking-wider">
						<span>Access</span>
						<svg
							class="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24">
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3" />
						</svg>
					</div>
					
					<div
						v-if="project.link && !project.link.includes('github.com')"
						class="flex items-center space-x-1 text-green-400 font-['Orbitron'] text-xs uppercase">
						<div class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
						<span>Live</span>
					</div>
					<div
						v-else-if="project.link && project.link.includes('github.com')"
						class="flex items-center space-x-1 text-gray-400 font-['Orbitron'] text-xs uppercase">
						<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
						</svg>
						<span>Source</span>
					</div>
					<div
						v-else-if="project.files && project.files.length > 0"
						class="flex items-center space-x-1 text-[var(--tron-secondary)] font-['Orbitron'] text-xs uppercase">
						<svg class="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
							<path
								d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
						</svg>
						<span>Files</span>
					</div>
				</div>
			</div>
		</div>

		<div
			class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-[var(--tron-primary)]/5 via-transparent to-[var(--tron-secondary)]/5" />
	</NuxtLink>
</template>

<style scoped>
.line-clamp-2 {
	display: -webkit-box;
	-webkit-line-clamp: 2;
	line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

.line-clamp-3 {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
}

@keyframes scan-line {
	0% {
		top: -2px;
		opacity: 1;
	}
	100% {
		top: 100%;
		opacity: 0;
	}
}

.animate-scan-line {
	animation: scan-line 1.5s ease-in-out infinite;
}

/* Mobile-specific card styles */
@media (max-width: 768px) {
	:deep(.relative.p-8) {
		padding: 1rem;
	}
}
</style>

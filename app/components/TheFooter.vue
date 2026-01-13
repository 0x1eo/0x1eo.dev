<template>
	<footer class="relative bg-tron-bg text-gray-400 mt-20 border-t border-tron-border overflow-hidden">
		<div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--tron-primary)] to-transparent opacity-60" />
		
		<div class="absolute inset-0 opacity-5">
			<div class="absolute inset-0" style="background-image: repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,69,0,0.3) 49px, rgba(255,69,0,0.3) 50px), repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255,69,0,0.3) 49px, rgba(255,69,0,0.3) 50px);" />
		</div>
		
		<div class="relative container mx-auto p-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
				<div class="space-y-4">
					<div class="flex items-center space-x-2">
						<div class="w-8 h-8 bg-gradient-to-br from-[var(--tron-primary)] to-[var(--tron-secondary)] flex items-center justify-center">
							<span class="text-white font-bold text-sm font-['Orbitron']">LA</span>
						</div>
						<span class="text-xl font-bold font-['Orbitron'] uppercase tracking-wider tron-gradient-text">
							0x1eo
						</span>
					</div>
					<p class="text-gray-400 leading-relaxed max-w-md text-sm">
						Cybersecurity specialist and systems engineer. Building secure, scalable solutions in the digital frontier.
					</p>
				</div>

				<div class="space-y-4">
					<h3 class="text-lg font-semibold text-white font-['Orbitron'] uppercase tracking-wider">Navigation</h3>
					<ul class="space-y-2">
						<li>
							<NuxtLink to="/" class="group flex items-center text-gray-400 hover:text-[var(--tron-primary)] transition-colors duration-300">
								<span class="w-2 h-2 bg-[var(--tron-primary)] opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
								Home
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/projects" class="group flex items-center text-gray-400 hover:text-[var(--tron-primary)] transition-colors duration-300">
								<span class="w-2 h-2 bg-[var(--tron-primary)] opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
								Projects
							</NuxtLink>
						</li>
						<li>
							<NuxtLink to="/about" class="group flex items-center text-gray-400 hover:text-[var(--tron-primary)] transition-colors duration-300">
								<span class="w-2 h-2 bg-[var(--tron-primary)] opacity-0 group-hover:opacity-100 mr-2 transition-opacity duration-300" />
								About
							</NuxtLink>
						</li>
					</ul>
				</div>

				<div class="space-y-4">
					<h3 class="text-lg font-semibold text-white font-['Orbitron'] uppercase tracking-wider">Connect</h3>
					<div class="space-y-3">
						<a 
							href="mailto:leo@0x1eo.dev" 
							class="flex items-center space-x-3 group text-gray-400 hover:text-[var(--tron-primary)] transition-colors duration-300"
						>
							<div class="w-8 h-8 border border-[var(--tron-border)] flex items-center justify-center group-hover:border-[var(--tron-primary)] group-hover:bg-[var(--tron-primary)]/10 group-hover:shadow-[var(--tron-glow-sm)] transition-all duration-300">
								<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<span class="text-sm">leo@0x1eo.dev</span>
						</a>
						
						<a 
							href="https://www.linkedin.com/in/0x1eo" 
							target="_blank" 
							rel="noopener noreferrer"
							class="flex items-center space-x-3 group text-gray-400 hover:text-[var(--tron-primary)] transition-colors duration-300"
						>
							<div class="w-8 h-8 border border-[var(--tron-border)] flex items-center justify-center group-hover:border-[var(--tron-primary)] group-hover:bg-[var(--tron-primary)]/10 group-hover:shadow-[var(--tron-glow-sm)] transition-all duration-300">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
								</svg>
							</div>
							<span class="text-sm">LinkedIn</span>
						</a>

						<a 
							href="https://github.com/0x1eo" 
							target="_blank" 
							rel="noopener noreferrer"
							class="flex items-center space-x-3 group text-gray-400 hover:text-[var(--tron-primary)] transition-colors duration-300"
						>
							<div class="w-8 h-8 border border-[var(--tron-border)] flex items-center justify-center group-hover:border-[var(--tron-primary)] group-hover:bg-[var(--tron-primary)]/10 group-hover:shadow-[var(--tron-glow-sm)] transition-all duration-300">
								<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
							</div>
							<span class="text-sm">GitHub</span>
						</a>
					</div>
				</div>
			</div>

			<div class="border-t border-[var(--tron-border)] pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
				<p class="text-sm text-gray-500 font-['Orbitron'] tracking-wide">
					&copy; {{ new Date().getFullYear() }} <span class="text-[var(--tron-primary)]">0x1eo</span> // All Systems Operational
				</p>
				
				<div class="flex items-center space-x-6 text-sm text-gray-500">
					<div class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-[var(--tron-primary)] rounded-full animate-pulse shadow-[0_0_8px_var(--tron-primary)]" />
						<span class="font-['Orbitron'] tracking-wide text-xs uppercase">Status: Online</span>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
.bg-tron-bg {
	background-color: #0a0a0f;
}

.border-tron-border {
	border-color: rgba(255, 69, 0, 0.3);
}
</style>
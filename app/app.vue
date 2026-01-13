<template>
	<div class="min-h-screen bg-tron-bg text-white relative">
		<TronGrid />
		
		<div class="relative z-10">
			<TheHeader />

			<main>
				<NuxtPage />
			</main>

			<TheFooter />
		</div>
	</div>
</template>

<style>
:root {
	--tron-primary: #e63946;
	--tron-secondary: #ff6b35;
	--tron-accent: #c1121f;
	--tron-glow: #ff4444;
	
	--tron-blue: #00d4ff;
	--tron-green: #00ff88;
	
	--tron-bg: #08080c;
	--tron-bg-secondary: #0f0f14;
	--tron-bg-card: rgba(15, 15, 22, 0.7);
	--tron-bg-glass: rgba(20, 20, 30, 0.4);
	
	--tron-border: rgba(230, 57, 70, 0.25);
	--tron-border-hover: rgba(230, 57, 70, 0.6);
	--tron-grid: rgba(230, 57, 70, 0.08);
	
	--tron-text: #f8f9fa;
	--tron-text-secondary: #adb5bd;
	--tron-text-muted: #6c757d;
	
	--tron-glow-sm: 0 0 8px rgba(230, 57, 70, 0.4);
	--tron-glow-md: 0 0 15px rgba(230, 57, 70, 0.35), 0 0 30px rgba(230, 57, 70, 0.15);
	--tron-glow-lg: 0 0 20px rgba(230, 57, 70, 0.4), 0 0 40px rgba(230, 57, 70, 0.2), 0 0 60px rgba(230, 57, 70, 0.1);
	--tron-text-glow: 0 0 8px rgba(230, 57, 70, 0.6), 0 0 16px rgba(230, 57, 70, 0.3);
	
	--glass-blur: 16px;
	--glass-bg: rgba(255, 255, 255, 0.03);
	--glass-border: rgba(255, 255, 255, 0.08);
	
	--shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.3);
	--shadow-md: 0 4px 20px rgba(0, 0, 0, 0.4);
	--shadow-lg: 0 8px 40px rgba(0, 0, 0, 0.5);
}

html {
	scroll-behavior: smooth;
}

body {
	font-family: 'Orbitron', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	background-color: var(--tron-bg);
}

.bg-tron-bg {
	background-color: var(--tron-bg);
}

.tron-heading {
	font-family: 'Orbitron', sans-serif;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.05em;
}

.tron-text-glow {
	text-shadow: var(--tron-text-glow);
}

.tron-gradient-text {
	background: linear-gradient(135deg, var(--tron-primary) 0%, var(--tron-secondary) 50%, var(--tron-accent) 100%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	background-clip: text;
}

.tron-border {
	border: 1px solid var(--tron-border);
	transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.tron-border:hover {
	border-color: var(--tron-border-hover);
	box-shadow: var(--tron-glow-sm);
}

.tron-card {
	background: var(--tron-bg-card);
	backdrop-filter: blur(10px);
	border: 1px solid var(--tron-border);
	border-radius: 0.5rem;
	transition: all 0.3s ease;
}

.tron-card:hover {
	border-color: var(--tron-border-hover);
	box-shadow: var(--tron-glow-md);
	transform: translateY(-2px);
}

.tron-button {
	background: linear-gradient(135deg, var(--tron-primary) 0%, var(--tron-secondary) 100%);
	border: none;
	color: white;
	font-family: 'Orbitron', sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	padding: 0.75rem 1.5rem;
	border-radius: 0.25rem;
	transition: all 0.3s ease;
	position: relative;
	overflow: hidden;
}

.tron-button::before {
	content: '';
	position: absolute;
	inset: 0;
	background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
	transform: translateX(-100%);
	transition: transform 0.5s ease;
}

.tron-button:hover {
	box-shadow: var(--tron-glow-md);
	transform: scale(1.05);
}

.tron-button:hover::before {
	transform: translateX(100%);
}

.tron-button-outline {
	background: transparent;
	border: 2px solid var(--tron-primary);
	color: var(--tron-primary);
	font-family: 'Orbitron', sans-serif;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.05em;
	padding: 0.75rem 1.5rem;
	border-radius: 0.25rem;
	transition: all 0.3s ease;
}

.tron-button-outline:hover {
	background: var(--tron-primary);
	color: var(--tron-bg);
	box-shadow: var(--tron-glow-md);
	transform: scale(1.05);
}

::-webkit-scrollbar {
	width: 8px;
}

::-webkit-scrollbar-track {
	background: var(--tron-bg-secondary);
}

::-webkit-scrollbar-thumb {
	background: var(--tron-primary);
	border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
	background: var(--tron-secondary);
}

::selection {
	background-color: var(--tron-primary);
	color: white;
}

*:focus:not(:focus-visible) {
	outline: none;
}

*:focus-visible {
	outline: 2px solid var(--tron-primary);
	outline-offset: 2px;
}

a:focus-visible {
	outline: 2px solid var(--tron-primary);
	outline-offset: 2px;
	border-radius: 4px;
}

@keyframes tron-flicker {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.8; }
}

@keyframes tron-pulse {
	0%, 100% { 
		box-shadow: var(--tron-glow-sm);
	}
	50% { 
		box-shadow: var(--tron-glow-md);
	}
}

@keyframes tron-scan {
	0% { transform: translateY(-100%); }
	100% { transform: translateY(100vh); }
}

.animate-tron-flicker {
	animation: tron-flicker 3s ease-in-out infinite;
}

.animate-tron-pulse {
	animation: tron-pulse 2s ease-in-out infinite;
}

.circuit-line {
	position: relative;
}

.circuit-line::after {
	content: '';
	position: absolute;
	height: 2px;
	background: linear-gradient(90deg, transparent 0%, var(--tron-primary) 20%, var(--tron-primary) 80%, transparent 100%);
	box-shadow: var(--tron-glow-sm);
}

.hex-corner::before,
.hex-corner::after {
	content: '';
	position: absolute;
	width: 20px;
	height: 20px;
	border: 2px solid var(--tron-primary);
	opacity: 0.6;
}

.hex-corner::before {
	top: -1px;
	left: -1px;
	border-right: none;
	border-bottom: none;
}

.hex-corner::after {
	bottom: -1px;
	right: -1px;
	border-left: none;
	border-top: none;
}

@keyframes glitch {
	0%, 100% { 
		transform: translate(0);
		text-shadow: var(--tron-text-glow);
	}
	20% { 
		transform: translate(-2px, 2px);
		text-shadow: -2px 0 var(--tron-accent), 2px 0 var(--tron-secondary);
	}
	40% { 
		transform: translate(-2px, -2px);
		text-shadow: 2px 0 var(--tron-accent), -2px 0 var(--tron-secondary);
	}
	60% { 
		transform: translate(2px, 2px);
		text-shadow: -2px 0 var(--tron-secondary), 2px 0 var(--tron-accent);
	}
	80% { 
		transform: translate(2px, -2px);
		text-shadow: 2px 0 var(--tron-secondary), -2px 0 var(--tron-accent);
	}
}

.animate-glitch {
	animation: glitch 3s ease-in-out infinite;
}

.animate-glitch-hover:hover {
	animation: glitch 0.3s ease-in-out;
}

@keyframes neon-flicker {
	0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
		opacity: 1;
		text-shadow: var(--tron-text-glow);
	}
	20%, 24%, 55% {
		opacity: 0.8;
		text-shadow: none;
	}
}

.animate-neon-flicker {
	animation: neon-flicker 2s ease-in-out infinite;
}

@keyframes electric-buzz {
	0%, 100% { transform: translateX(0); }
	10% { transform: translateX(-1px); }
	20% { transform: translateX(1px); }
	30% { transform: translateX(-1px); }
	40% { transform: translateX(1px); }
	50% { transform: translateX(0); }
}

.animate-electric:hover {
	animation: electric-buzz 0.2s ease-in-out;
}

@keyframes cursor-blink {
	0%, 50% { opacity: 1; }
	51%, 100% { opacity: 0; }
}

.animate-cursor::after {
	content: '_';
	animation: cursor-blink 1s step-end infinite;
}

@keyframes float {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-10px); }
}

.animate-float {
	animation: float 3s ease-in-out infinite;
}

@keyframes rotate-slow {
	from { transform: rotate(0deg); }
	to { transform: rotate(360deg); }
}

.animate-rotate-slow {
	animation: rotate-slow 20s linear infinite;
}

@keyframes scale-pulse {
	0%, 100% { transform: scale(1); }
	50% { transform: scale(1.05); }
}

.animate-scale-pulse {
	animation: scale-pulse 2s ease-in-out infinite;
}

@keyframes border-glow {
	0%, 100% { 
		border-color: rgba(255, 69, 0, 0.3);
		box-shadow: none;
	}
	50% { 
		border-color: rgba(255, 69, 0, 0.8);
		box-shadow: 0 0 20px rgba(255, 69, 0, 0.4), inset 0 0 20px rgba(255, 69, 0, 0.1);
	}
}

.animate-border-glow {
	animation: border-glow 3s ease-in-out infinite;
}

@keyframes shimmer {
	0% { background-position: -200% 0; }
	100% { background-position: 200% 0; }
}

.animate-shimmer {
	background: linear-gradient(
		90deg,
		transparent 0%,
		rgba(255, 69, 0, 0.2) 25%,
		rgba(255, 140, 0, 0.3) 50%,
		rgba(255, 69, 0, 0.2) 75%,
		transparent 100%
	);
	background-size: 200% 100%;
	animation: shimmer 3s linear infinite;
}

.light-trail {
	position: relative;
	overflow: hidden;
}

.light-trail::before {
	content: '';
	position: absolute;
	top: 0;
	left: -100%;
	width: 100%;
	height: 100%;
	background: linear-gradient(
		90deg,
		transparent 0%,
		rgba(255, 255, 255, 0.1) 50%,
		transparent 100%
	);
	transition: left 0.5s ease;
}

.light-trail:hover::before {
	left: 100%;
}

.energy-pulse {
	position: relative;
}

.energy-pulse::after {
	content: '';
	position: absolute;
	inset: -2px;
	background: transparent;
	border: 2px solid var(--tron-primary);
	opacity: 0;
	animation: energy-ring 2s ease-out infinite;
}

@keyframes energy-ring {
	0% {
		transform: scale(1);
		opacity: 0.6;
	}
	100% {
		transform: scale(1.2);
		opacity: 0;
	}
}

@keyframes matrix-fade {
	0% { opacity: 0; transform: translateY(-20px); }
	50% { opacity: 1; }
	100% { opacity: 0; transform: translateY(20px); }
}

.page-enter-active,
.page-leave-active {
	transition: all 0.3s ease;
}

.page-enter-from {
	opacity: 0;
	transform: translateY(20px);
}

.page-leave-to {
	opacity: 0;
	transform: translateY(-20px);
}
</style>

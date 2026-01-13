<template>
	<div class="tron-grid-container">
		<div class="grid-pattern" />
		<div class="grid-glow" />
		
		<!-- Canvas for light cycles -->
		<canvas ref="cycleCanvas" class="cycle-canvas" />
		
		<div class="pulse-point pulse-1" />
		<div class="pulse-point pulse-2" />
		<div class="pulse-point pulse-3" />
		
		<div class="top-glow" />
		
		<div class="vignette" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cycleCanvas = ref<HTMLCanvasElement | null>(null)
let animationId: number | null = null

const GRID_SIZE = 60
const TRAIL_LENGTH = 120
const TURN_PROBABILITY = 0.2
const CYCLE_SPEED = 3
const NUM_CYCLES = 8

interface LightCycle {
	x: number
	y: number
	direction: 'up' | 'down' | 'left' | 'right'
	trail: { x: number; y: number }[]
	color: string
	glowColor: string
	alive: boolean
	respawnTimer: number
}

const cycles: LightCycle[] = []

const colors = [
	{ main: 'rgba(230, 57, 70, 0.95)', glow: 'rgba(230, 57, 70, 0.6)' },
	{ main: 'rgba(255, 107, 53, 0.95)', glow: 'rgba(255, 107, 53, 0.6)' },
	{ main: 'rgba(230, 80, 80, 0.95)', glow: 'rgba(230, 80, 80, 0.6)' },
	{ main: 'rgba(255, 140, 66, 0.95)', glow: 'rgba(255, 140, 66, 0.6)' },
	{ main: 'rgba(200, 50, 60, 0.95)', glow: 'rgba(200, 50, 60, 0.6)' },
	{ main: 'rgba(255, 90, 70, 0.95)', glow: 'rgba(255, 90, 70, 0.6)' },
]

function snapToGrid(value: number): number {
	return Math.round(value / GRID_SIZE) * GRID_SIZE
}

function getRandomDirection(): 'up' | 'down' | 'left' | 'right' {
	const dirs: ('up' | 'down' | 'left' | 'right')[] = ['up', 'down', 'left', 'right']
	return dirs[Math.floor(Math.random() * dirs.length)]
}

function getPerpendicularDirections(dir: 'up' | 'down' | 'left' | 'right'): ('up' | 'down' | 'left' | 'right')[] {
	if (dir === 'up' || dir === 'down') {
		return ['left', 'right']
	}
	return ['up', 'down']
}

function initCycle(canvas: HTMLCanvasElement, index: number): LightCycle {
	const gridCols = Math.floor(canvas.width / GRID_SIZE)
	const gridRows = Math.floor(canvas.height / GRID_SIZE)
	
	const startCol = Math.floor(Math.random() * gridCols)
	const startRow = Math.floor(Math.random() * gridRows)
	
	const colorSet = colors[index % colors.length]
	
	return {
		x: startCol * GRID_SIZE,
		y: startRow * GRID_SIZE,
		direction: getRandomDirection(),
		trail: [],
		color: colorSet.main,
		glowColor: colorSet.glow,
		alive: true,
		respawnTimer: 0
	}
}

function respawnCycle(cycle: LightCycle, canvas: HTMLCanvasElement) {
	const gridCols = Math.floor(canvas.width / GRID_SIZE)
	const gridRows = Math.floor(canvas.height / GRID_SIZE)
	
	cycle.x = Math.floor(Math.random() * gridCols) * GRID_SIZE
	cycle.y = Math.floor(Math.random() * gridRows) * GRID_SIZE
	cycle.direction = getRandomDirection()
	cycle.trail = []
	cycle.alive = true
	cycle.respawnTimer = 0
}

function checkCollision(cycle: LightCycle, allCycles: LightCycle[]): boolean {
	for (const other of allCycles) {
		if (!other.alive) continue
		
		for (let i = 0; i < other.trail.length - 5; i++) {
			const trailPoint = other.trail[i]
			const distance = Math.abs(cycle.x - trailPoint.x) + Math.abs(cycle.y - trailPoint.y)
			if (distance < 4) {
				return true
			}
		}
	}
	return false
}

function updateCycle(cycle: LightCycle, canvas: HTMLCanvasElement, allCycles: LightCycle[]) {
	if (!cycle.alive) {
		cycle.respawnTimer++
		if (cycle.respawnTimer > 120) {
			respawnCycle(cycle, canvas)
		}
		return
	}
	
	cycle.trail.push({ x: cycle.x, y: cycle.y })
	if (cycle.trail.length > TRAIL_LENGTH) {
		cycle.trail.shift()
	}
	
	const atIntersection = cycle.x % GRID_SIZE === 0 && cycle.y % GRID_SIZE === 0
	
	if (atIntersection && Math.random() < TURN_PROBABILITY) {
		const perpDirs = getPerpendicularDirections(cycle.direction)
		cycle.direction = perpDirs[Math.floor(Math.random() * 2)]
	}
	
	switch (cycle.direction) {
		case 'up':
			cycle.y -= CYCLE_SPEED
			break
		case 'down':
			cycle.y += CYCLE_SPEED
			break
		case 'left':
			cycle.x -= CYCLE_SPEED
			break
		case 'right':
			cycle.x += CYCLE_SPEED
			break
	}
	
	let wrapped = false
	if (cycle.x < -GRID_SIZE) { cycle.x = canvas.width + GRID_SIZE; wrapped = true }
	if (cycle.x > canvas.width + GRID_SIZE) { cycle.x = -GRID_SIZE; wrapped = true }
	if (cycle.y < -GRID_SIZE) { cycle.y = canvas.height + GRID_SIZE; wrapped = true }
	if (cycle.y > canvas.height + GRID_SIZE) { cycle.y = -GRID_SIZE; wrapped = true }
	
	if (wrapped) {
		cycle.trail = []
	}
	
	if (checkCollision(cycle, allCycles)) {
		cycle.alive = false
		cycle.respawnTimer = 0
	}
}

function drawDerezEffect(ctx: CanvasRenderingContext2D, cycle: LightCycle) {
	const particles = 12
	const progress = cycle.respawnTimer / 120
	
	for (let i = 0; i < particles; i++) {
		const angle = (i / particles) * Math.PI * 2
		const distance = progress * 40
		const px = cycle.trail[cycle.trail.length - 1]?.x || cycle.x
		const py = cycle.trail[cycle.trail.length - 1]?.y || cycle.y
		
		const x = px + Math.cos(angle) * distance
		const y = py + Math.sin(angle) * distance
		
		ctx.save()
		ctx.globalAlpha = 1 - progress
		ctx.fillStyle = cycle.color
		ctx.shadowColor = cycle.glowColor
		ctx.shadowBlur = 8
		ctx.fillRect(x - 2, y - 2, 4, 4)
		ctx.restore()
	}
}

function isTrailContinuous(trail: { x: number; y: number }[], currentX: number, currentY: number): boolean {
	if (trail.length < 2) return false
	
	const maxGap = CYCLE_SPEED * 3
	
	for (let i = 1; i < trail.length; i++) {
		const prev = trail[i - 1]
		const curr = trail[i]
		if (!prev || !curr) return false
		const dist = Math.abs(curr.x - prev.x) + Math.abs(curr.y - prev.y)
		if (dist > maxGap) return false
	}
	
	const last = trail[trail.length - 1]
	if (!last) return false
	const distToHead = Math.abs(currentX - last.x) + Math.abs(currentY - last.y)
	if (distToHead > maxGap) return false
	
	return true
}

function drawCycle(ctx: CanvasRenderingContext2D, cycle: LightCycle) {
	if (!cycle.alive) {
		if (cycle.respawnTimer < 60) {
			drawDerezEffect(ctx, cycle)
		}
		return
	}
	
	const canDrawTrail = cycle.trail.length > 1 && isTrailContinuous(cycle.trail, cycle.x, cycle.y)
	
	if (canDrawTrail) {
		ctx.save()
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'
		
		ctx.shadowColor = cycle.glowColor
		ctx.shadowBlur = 16
		ctx.strokeStyle = cycle.glowColor
		ctx.lineWidth = 6
		
		ctx.beginPath()
		ctx.moveTo(cycle.trail[0]!.x, cycle.trail[0]!.y)
		for (let i = 1; i < cycle.trail.length; i++) {
			ctx.lineTo(cycle.trail[i]!.x, cycle.trail[i]!.y)
		}
		ctx.lineTo(cycle.x, cycle.y)
		ctx.stroke()
		
		ctx.shadowBlur = 0
		ctx.strokeStyle = cycle.color
		ctx.lineWidth = 2
		
		ctx.beginPath()
		ctx.moveTo(cycle.trail[0]!.x, cycle.trail[0]!.y)
		for (let i = 1; i < cycle.trail.length; i++) {
			const alpha = i / cycle.trail.length
			ctx.globalAlpha = alpha * 0.8 + 0.2
			ctx.lineTo(cycle.trail[i]!.x, cycle.trail[i]!.y)
		}
		ctx.globalAlpha = 1
		ctx.lineTo(cycle.x, cycle.y)
		ctx.stroke()
		
		ctx.restore()
	}
	
	ctx.save()
	ctx.shadowColor = cycle.color
	ctx.shadowBlur = 20
	ctx.fillStyle = '#ffffff'
	ctx.beginPath()
	ctx.arc(cycle.x, cycle.y, 4, 0, Math.PI * 2)
	ctx.fill()
	ctx.restore()
}

function animate() {
	const canvas = cycleCanvas.value
	if (!canvas) return
	
	const ctx = canvas.getContext('2d')
	if (!ctx) return
	
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	
	for (const cycle of cycles) {
		updateCycle(cycle, canvas, cycles)
	}
	
	for (const cycle of cycles) {
		drawCycle(ctx, cycle)
	}
	
	animationId = requestAnimationFrame(animate)
}

function handleResize() {
	const canvas = cycleCanvas.value
	if (!canvas) return
	
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}

onMounted(() => {
	const canvas = cycleCanvas.value
	if (!canvas) return
	
	handleResize()
	window.addEventListener('resize', handleResize)
	
	for (let i = 0; i < NUM_CYCLES; i++) {
		cycles.push(initCycle(canvas, i))
	}
	
	animate()
})

onUnmounted(() => {
	if (animationId) {
		cancelAnimationFrame(animationId)
	}
	window.removeEventListener('resize', handleResize)
	cycles.length = 0
})
</script>

<style scoped>
.tron-grid-container {
	position: fixed;
	inset: 0;
	z-index: 0;
	overflow: hidden;
	pointer-events: none;
	background: #08080c;
}

.cycle-canvas {
	position: absolute;
	inset: 0;
	z-index: 2;
}

/* Main grid pattern */
.grid-pattern {
	position: absolute;
	inset: 0;
	background-image: 
		linear-gradient(90deg, rgba(230, 57, 70, 0.18) 1px, transparent 1px),
		linear-gradient(0deg, rgba(230, 57, 70, 0.18) 1px, transparent 1px);
	background-size: 60px 60px;
	background-position: center center;
	animation: gridPulse 4s ease-in-out infinite;
}

/* Blurred glow layer */
.grid-glow {
	position: absolute;
	inset: 0;
	background-image: 
		linear-gradient(90deg, rgba(230, 57, 70, 0.08) 1px, transparent 1px),
		linear-gradient(0deg, rgba(230, 57, 70, 0.08) 1px, transparent 1px);
	background-size: 60px 60px;
	background-position: center center;
	filter: blur(3px);
	animation: glowPulse 4s ease-in-out infinite alternate;
}

/* Pulse points at grid intersections */
.pulse-point {
	position: absolute;
	width: 6px;
	height: 6px;
	background: rgba(255, 107, 53, 0.8);
	border-radius: 50%;
	box-shadow: 
		0 0 10px rgba(230, 57, 70, 0.8),
		0 0 20px rgba(230, 57, 70, 0.5),
		0 0 30px rgba(255, 107, 53, 0.3);
	animation: pulseGlow 3s ease-in-out infinite;
}

.pulse-1 { top: 30%; left: 40%; animation-delay: 0s; }
.pulse-2 { top: 60%; left: 70%; animation-delay: 1s; }
.pulse-3 { top: 50%; left: 20%; animation-delay: 2s; }

/* Top ambient glow */
.top-glow {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 50%;
	background: radial-gradient(ellipse 80% 60% at 50% 0%, 
		rgba(230, 57, 70, 0.08) 0%, 
		transparent 60%
	);
	animation: ambientPulse 6s ease-in-out infinite alternate;
}

/* Vignette effect */
.vignette {
	position: absolute;
	inset: 0;
	background: radial-gradient(ellipse 80% 70% at 50% 50%, 
		transparent 0%, 
		rgba(0, 0, 0, 0.15) 60%, 
		rgba(0, 0, 0, 0.4) 100%
	);
}

@keyframes gridPulse {
	0%, 100% { opacity: 1; }
	50% { opacity: 0.75; }
}

@keyframes glowPulse {
	0% { opacity: 0.4; }
	100% { opacity: 0.7; }
}

@keyframes pulseGlow {
	0%, 100% { 
		transform: scale(1);
		opacity: 0.6;
	}
	50% { 
		transform: scale(1.5);
		opacity: 1;
	}
}

@keyframes ambientPulse {
	0% { opacity: 0.6; }
	100% { opacity: 1; }
}

/* Mobile optimizations */
@media (max-width: 768px) {
	.grid-pattern {
		background-size: 30px 30px;
	}
	
	.grid-glow {
		background-size: 30px 30px;
		display: none;
	}
	
	.pulse-point {
		display: none;
	}
	
	.top-glow {
		opacity: 0.5;
	}
	
	.cycle-canvas {
		opacity: 0.6;
	}
}
</style>

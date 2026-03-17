<script setup lang="ts">
import { computed, ref } from 'vue'
import { stacks } from '~/config/portfolio'
import { usePortfolioStore } from '~/store/portfolio'
import BaristaHero from './BaristaHero.vue'

defineProps<{
  projects: any
}>()

const store = usePortfolioStore()

// Reactive state for hover preview
const hoveredView = ref<string | null>(null)

// Computed view to decide what to show in the console
const effectiveView = computed(() => hoveredView.value || (store.currentView === 'all' ? 'code' : store.currentView) || 'code')

const currentBoxContent = computed(() => stacks[store.currentView as keyof typeof stacks] || stacks.all)
const currentHeroContent = computed(() => {
  const view = effectiveView.value === 'all' ? (hoveredView.value || 'code') : effectiveView.value
  return stacks[view as keyof typeof stacks] || stacks.code
})

// All character images (for preloading all in DOM)
const allImages = Object.values(stacks).map(s => s.image)

// ─── Laser Beam ───────────────────────────────────────────────
const laserCanvas = ref<HTMLCanvasElement | null>(null)
const mechaFrameRef = ref<HTMLElement | null>(null)
const btnCodeRef = ref<HTMLButtonElement | null>(null)
const btnDesignRef = ref<HTMLButtonElement | null>(null)

function getCoords(targetView: 'code' | 'design', event: MouseEvent) {
  const canvas = laserCanvas.value!
  const frame = mechaFrameRef.value!
  const canvasRect = canvas.getBoundingClientRect()
  const frameRect = frame.getBoundingClientRect()

  const srcX = frameRect.left - canvasRect.left + frameRect.width * 0.5
  const srcY = frameRect.top - canvasRect.top + frameRect.height * 0.45

  const btn = targetView === 'code' ? btnCodeRef.value : btnDesignRef.value
  const btnRect = btn?.getBoundingClientRect()
  const tgtX = btnRect ? btnRect.left - canvasRect.left + btnRect.width * 0.5 : event.clientX - canvasRect.left
  const tgtY = btnRect ? btnRect.top - canvasRect.top + btnRect.height * 0.5 : event.clientY - canvasRect.top

  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  return { canvas, ctx: canvas.getContext('2d')!, srcX, srcY, tgtX, tgtY }
}

// ─── Gundam Laser ────────────────────────────────────────────
function fireLaser(event: MouseEvent) {
  const { canvas, ctx, srcX, srcY, tgtX, tgtY } = getCoords('code', event)
  const color = '#f5a623'
  const duration = 420
  const start = performance.now()

  const particles = Array.from({ length: 18 }, () => ({
    x: tgtX,
    y: tgtY,
    vx: (Math.random() - 0.5) * 6,
    vy: (Math.random() - 0.5) * 6,
    life: 1,
    r: Math.random() * 3 + 1,
  }))

  function draw(now: number) {
    const t = Math.min((now - start) / duration, 1)
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (t < 0.6) {
      const progress = t / 0.6
      const endX = srcX + (tgtX - srcX) * progress
      const endY = srcY + (tgtY - srcY) * progress

      ctx.save()
      ctx.beginPath()
      ctx.moveTo(srcX, srcY)
      ctx.lineTo(endX, endY)
      ctx.strokeStyle = color
      ctx.lineWidth = 10
      ctx.globalAlpha = 0.15
      ctx.shadowBlur = 30
      ctx.shadowColor = color
      ctx.stroke()
      ctx.globalAlpha = 1
      ctx.lineWidth = 2
      ctx.shadowBlur = 16
      ctx.strokeStyle = '#fff'
      ctx.stroke()
      ctx.beginPath()
      ctx.arc(endX, endY, 5, 0, Math.PI * 2)
      ctx.fillStyle = '#fff'
      ctx.shadowBlur = 20
      ctx.fill()
      ctx.restore()
    }
    else {
      const it = (t - 0.6) / 0.4
      ctx.save()
      ctx.beginPath()
      ctx.arc(tgtX, tgtY, it * 45, 0, Math.PI * 2)
      ctx.strokeStyle = color
      ctx.lineWidth = 2 * (1 - it)
      ctx.globalAlpha = 1 - it
      ctx.shadowBlur = 20
      ctx.shadowColor = color
      ctx.stroke()
      ctx.restore()

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.1
        p.life -= 0.04
        if (p.life <= 0)
          return
        ctx.save()
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.globalAlpha = p.life
        ctx.shadowBlur = 10
        ctx.shadowColor = color
        ctx.fill()
        ctx.restore()
      })
    }

    if (t < 1)
      requestAnimationFrame(draw)
    else ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  requestAnimationFrame(draw)
}

// ─── Gojira Flamethrower ────────────────────────────────────
function fireFlamethrower(event: MouseEvent) {
  const { canvas, ctx, srcX, srcY, tgtX, tgtY } = getCoords('design', event)
  const duration = 900
  const start = performance.now()

  const dx = tgtX - srcX
  const dy = tgtY - srcY
  const dist = Math.sqrt(dx * dx + dy * dy)

  // Fire particle pool — emitted over time
  interface Particle {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    maxLife: number
    r: number
    hue: number
    trail: boolean
  }
  const particles: Particle[] = []

  function spawnParticles(progress: number) {
    // Tip of the flamethrower at current progress along path
    const tipX = srcX + dx * progress
    const tipY = srcY + dy * progress

    // Perpendicular offset for width
    const perp = { x: -dy / dist, y: dx / dist }
    const spread = 18

    // Spawn 4-6 fire particles per frame around the tip
    const count = Math.floor(Math.random() * 3) + 4
    for (let i = 0; i < count; i++) {
      const offset = (Math.random() - 0.5) * spread
      const turbX = (Math.random() - 0.5) * 2.5
      const turbY = (Math.random() - 0.5) * 2.5
      particles.push({
        x: tipX + perp.x * offset,
        y: tipY + perp.y * offset,
        vx: (dx / dist) * (2 + Math.random() * 3) + turbX,
        vy: (dy / dist) * (2 + Math.random() * 3) + turbY - 0.5,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.4,
        r: 6 + Math.random() * 10,
        hue: 10 + Math.random() * 30, // orange-red
        trail: Math.random() < 0.3,
      })
    }
  }

  // Fireball burst at impact
  const burst: Particle[] = []
  function spawnBurst() {
    for (let i = 0; i < 30; i++) {
      const angle = Math.random() * Math.PI * 2
      const speed = 2 + Math.random() * 5
      burst.push({
        x: tgtX,
        y: tgtY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1,
        life: 1,
        maxLife: 1,
        r: 4 + Math.random() * 12,
        hue: 10 + Math.random() * 40,
        trail: false,
      })
    }
  }

  let burstSpawned = false

  function draw(now: number) {
    const t = Math.min((now - start) / duration, 1)

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const flameDuration = 0.65
    if (t < flameDuration) {
      const progress = t / flameDuration
      spawnParticles(progress)
    }
    else if (!burstSpawned) {
      spawnBurst()
      burstSpawned = true
    }

    // Draw all fire particles
    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy -= 0.05 // slight upward drift (heat rising)
      p.vx += (Math.random() - 0.5) * 0.4 // turbulence
      p.life -= 0.025
      if (p.life <= 0)
        return

      const alpha = Math.min(p.life / p.maxLife, 1)

      // Core: orange -> yellow
      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * alpha)
      grad.addColorStop(0, `hsla(60, 100%, 95%, ${alpha})`)
      grad.addColorStop(0.3, `hsla(${p.hue + 20}, 100%, 60%, ${alpha * 0.8})`)
      grad.addColorStop(1, `hsla(${p.hue}, 90%, 40%, 0)`)

      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * alpha * 1.5, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
      ctx.restore()
    })

    // Draw burst particles
    burst.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy += 0.15
      p.life -= 0.035
      if (p.life <= 0)
        return

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * p.life)
      grad.addColorStop(0, `hsla(50, 100%, 90%, ${p.life})`)
      grad.addColorStop(0.5, `hsla(${p.hue}, 100%, 55%, ${p.life * 0.6})`)
      grad.addColorStop(1, `hsla(${p.hue - 10}, 80%, 30%, 0)`)

      ctx.save()
      ctx.globalCompositeOperation = 'lighter'
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r * p.life, 0, Math.PI * 2)
      ctx.fillStyle = grad
      ctx.fill()
      ctx.restore()
    })

    if (t < 1)
      requestAnimationFrame(draw)
    else ctx.clearRect(0, 0, canvas.width, canvas.height)
  }
  requestAnimationFrame(draw)
}
// ──────────────────────────────────────────────────────────────

function handleBtnClick(view: 'all' | 'code' | 'design', event: MouseEvent) {
  store.setView(view)
  if (view === 'code')
    fireLaser(event)
  else if (view === 'design')
    fireFlamethrower(event)
}
// ──────────────────────────────────────────────────────────────

// Helper to handle scroll
function scrollToExplore() {
  const el = document.getElementById('projects-grid')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="gundam-poster">
    <!-- Enhanced Header Section -->
    <header class="gundam-header" style="position:relative;overflow:hidden">
      <!-- Laser canvas overlay -->
      <canvas
        ref="laserCanvas"
        class="laser-canvas"
        aria-hidden="true"
      />

      <!-- Diagonal stripes pattern -->
      <div class="gundam-stripes" />

      <!-- Corner accent -->
      <div class="corner-accent" />

      <!-- Poster label -->
      <div class="poster-label">
        POSTER VOL. 3
      </div>

      <div class="header-content">
        <!-- Left Column: Logo + Value Prop + Buttons -->
        <div class="header-left">
          <!-- Logo -->
          <div class="logo-container">
            <h1 class="logo">
              LUKADSANT
            </h1>
            <p class="tagline">
              PORTFOLIO
            </p>
          </div>

          <!-- Value Proposition Box -->
          <div class="value-proposition">
            <Transition name="slide-up" mode="out-in">
              <div :key="store.currentView">
                <h2 class="value-title">
                  {{ currentBoxContent.title }}
                </h2>
                <p class="value-description">
                  {{ currentBoxContent.description }}
                </p>

                <!-- Tech Stack Badges -->
                <div class="tech-stack">
                  <span
                    v-for="(badge, idx) in currentBoxContent.badges"
                    :key="idx"
                    class="tech-badge"
                    :class="badge.type"
                  >
                    {{ badge.text }}
                  </span>
                </div>

                <!-- Specialization Tags -->
                <div class="specialization-tags">
                  <span v-for="(spec, idx) in currentBoxContent.specializations" :key="idx">
                    {{ spec }}
                  </span>
                </div>
              </div>
            </Transition>

            <!-- Mission Selection Buttons (Docked to bottom) -->
            <div class="hero-toggle">
              <div class="toggle-buttons">
                <button
                  class="toggle-btn all"
                  :class="{ active: store.currentView === 'all' }"
                  @click="handleBtnClick('all', $event)"
                >
                  <span class="i-carbon-home" />
                  INÍCIO
                </button>
                <button
                  ref="btnCodeRef"
                  class="toggle-btn code"
                  :class="{ active: store.currentView === 'code' }"
                  @click="handleBtnClick('code', $event)"
                  @mouseenter="hoveredView = 'code'"
                  @mouseleave="hoveredView = null"
                >
                  <span class="i-carbon-terminal" />
                  DEV
                </button>
                <button
                  ref="btnDesignRef"
                  class="toggle-btn art"
                  :class="{ active: store.currentView === 'design' }"
                  @click="handleBtnClick('design', $event)"
                  @mouseenter="hoveredView = 'design'"
                  @mouseleave="hoveredView = null"
                >
                  <span class="i-carbon-palette" />
                  ART
                </button>
              </div>
            </div>

            <!-- System Status -->
            <div class="absolute top-4 right-4 hidden md:flex items-center gap-2">
              <div class="w-1.5 h-1.5 rounded-full bg-gundam-red animate-pulse" />
              <span class="font-mono text-[8px] uppercase tracking-tighter opacity-40">
                {{ currentBoxContent.status }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Column: Mecha Frame -->
        <div class="header-mecha">
          <div class="hero-badge">
            DISPONÍVEL
          </div>
          <div ref="mechaFrameRef" class="mecha-frame">
            <slot name="hero">
              <BaristaHero :images="allImages" :active-image="currentHeroContent.image" />
            </slot>
          </div>
          <div class="mecha-label">
            {{ currentHeroContent.mechaLabel }}
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="scroll-indicator" @click="scrollToExplore">
        <span>EXPLORAR</span>
        <div class="scroll-arrow" />
      </div>
    </header>

    <!-- Projects Section -->
    <div id="projects-grid" class="projects-section">
      <slot name="projects" />
    </div>

    <!-- Footer Decorative Robot Arm -->
    <div class="robot-arm">
      <div class="robot-arm-visual">
        🦾
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Variables */
.gundam-poster {
  --yellow-primary: #f4c542;
  --yellow-dark: #d4a029;
  --black: #000000;
  --red: #dc2626;
  --white: #ffffff;
  --gray: #2a2a2a;
}

.gundam-poster {
  width: 100%;
}

/* ========================================
   HEADER SECTION
   ======================================== */

.gundam-header {
  background: var(--yellow-primary);
  padding: 80px 20px 100px;
  position: relative;
  overflow: hidden;
  margin: -80px -20px 0;
}

/* Laser canvas overlay */
.laser-canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 50;
}

@media (min-width: 768px) {
  .gundam-header {
    margin: -80px -40px 0;
  }
}

/* Diagonal stripes pattern */
.gundam-stripes {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(0, 0, 0, 0.05) 10px,
    rgba(0, 0, 0, 0.05) 20px
  );
  pointer-events: none;
  z-index: 1;
}

/* Corner accent */
.corner-accent {
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  background: var(--red);
  clip-path: polygon(0 0, 100% 0, 0 100%);
  opacity: 0.3;
  z-index: 1;
}

/* Poster label */
.poster-label {
  position: absolute;
  top: 30px;
  right: 30px;
  font-family: 'Space Mono', monospace;
  font-size: 14px;
  font-weight: 700;
  color: var(--black);
  writing-mode: vertical-rl;
  text-orientation: mixed;
  letter-spacing: 3px;
  z-index: 3;
}

/* Header content layout */
.header-content {
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 60px;
}

@media (max-width: 1024px) {
  .header-content {
    grid-template-columns: 1fr;
    justify-items: center;
  }
}

/* ========================================
   LEFT COLUMN - Logo & Value Prop
   ======================================== */

.header-left {
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 700px;
}

@media (max-width: 1024px) {
  .header-left {
    max-width: 100%;
  }
}

/* Logo */
.logo-container {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2.5rem, 8vw, 5rem);
  line-height: 0.85;
  letter-spacing: -3px;
  color: var(--black);
  font-weight: 900;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
  margin: 0;
}

.tagline {
  font-size: clamp(20px, 3vw, 28px);
  color: var(--black);
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: 'Space Mono', monospace;
  margin-top: -5px;
}

/* Value Proposition Box */
.value-proposition {
  background: var(--black);
  color: var(--yellow-primary);
  padding: 25px 40px 70px;
  border: 4px solid var(--black);
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
  max-width: 650px;
  min-height: 280px; /* Fixed height to prevent layout shift on hover */
  position: relative;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
}

.value-proposition::before {
  content: '';
  position: absolute;
  inset: -4px;
  border: 2px solid var(--red);
  pointer-events: none;
}

.value-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(28px, 4vw, 36px);
  letter-spacing: 2px;
  margin-bottom: 12px;
  margin-top: 0;
  color: var(--white);
  line-height: 1.1;
  text-transform: uppercase;
}

.value-description {
  font-size: 15px;
  line-height: 1.7;
  color: #e0e0e0;
  font-family: 'Space Mono', monospace;
  margin: 0;
  max-width: 500px;
  text-transform: uppercase;
}

/* Tech Stack Badges */
.tech-stack {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 20px;
}

.tech-badge {
  padding: 6px 14px;
  font-family: 'Space Mono', monospace;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  border: 2px solid var(--black);
  transition: all 0.2s ease;
}

.tech-badge:hover {
  transform: translateY(-2px);
}

.tech-badge.primary {
  background: var(--yellow-primary);
  color: var(--black);
}

.tech-badge.secondary {
  background: var(--white);
  color: var(--black);
}

.tech-badge.highlight {
  background: var(--red);
  color: var(--white);
  border-color: var(--red);
}

/* Specialization Tags */
.specialization-tags {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  opacity: 0.5;
}

.specialization-tags span {
  font-family: 'Space Mono', monospace;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 2px;
}

/* ========================================
   MISSION SELECTION BUTTONS (Docked)
   ======================================== */

.hero-toggle {
  position: absolute;
  bottom: -22px;
  left: 40px;
  right: 40px;
  display: flex;
  gap: 12px;
}

.toggle-buttons {
  display: flex;
  gap: 12px;
  width: 100%;
}

.toggle-btn {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 22px;
  padding: 12px 30px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 2px;
  font-weight: 900;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.2);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}

.toggle-btn.code {
  background: var(--black);
  color: var(--yellow-primary);
  border: 4px solid var(--black);
}

.toggle-btn.art {
  background: var(--white);
  color: var(--black);
  border: 4px solid var(--black);
}

.toggle-btn:hover {
  transform: translateY(-3px);
  box-shadow: 6px 6px 0px rgba(0, 0, 0, 0.3);
}

.toggle-btn.all:hover,
.toggle-btn.all.active {
  background: var(--yellow-dark);
  border-color: var(--black);
  color: var(--black);
}

.toggle-btn.code:hover,
.toggle-btn.code.active {
  background: var(--red);
  border-color: var(--red);
  color: var(--white);
}

.toggle-btn.art:hover,
.toggle-btn.art.active {
  background: var(--yellow-primary);
  border-color: var(--black);
  color: var(--black);
}

/* ========================================
   RIGHT COLUMN - Mecha Frame
   ======================================== */

.header-mecha {
  position: relative;
  flex-shrink: 0;
  justify-self: end;
}

@media (max-width: 1024px) {
  .header-mecha {
    justify-self: center;
  }
}

.mecha-frame {
  width: clamp(280px, 35vw, 420px);
  aspect-ratio: 1;
  background: var(--gray);
  border: 10px solid var(--red);
  position: relative;
  overflow: hidden;
  box-shadow:
    0 0 50px rgba(220, 38, 38, 0.5),
    inset 0 0 30px rgba(0, 0, 0, 0.5);
  transform: rotate(-2deg);
  transition: transform 0.3s ease;
}

.mecha-frame:hover {
  transform: rotate(0deg) scale(1.02);
}

.hero-badge {
  position: absolute;
  top: -20px;
  left: -20px;
  background: var(--yellow-primary);
  color: var(--black);
  padding: 10px 20px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  transform: rotate(-5deg);
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.2);
  z-index: 3;
  border: 3px solid var(--black);
}

.mecha-label {
  position: absolute;
  bottom: -35px;
  right: -10px;
  background: var(--red);
  color: var(--white);
  padding: 12px 30px;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 26px;
  letter-spacing: 3px;
  z-index: 2;
  box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.3);
}

/* ========================================
   SCROLL INDICATOR
   ======================================== */

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 3;
  animation: bounce 2s ease-in-out infinite;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.scroll-indicator:hover {
  opacity: 1;
}

.scroll-indicator span {
  font-size: 12px;
  font-weight: 700;
  color: var(--black);
  letter-spacing: 2px;
  font-family: 'Space Mono', monospace;
}

.scroll-arrow {
  width: 30px;
  height: 30px;
  border-bottom: 3px solid var(--black);
  border-right: 3px solid var(--black);
  transform: rotate(45deg);
}

@keyframes bounce {
  0%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(10px);
  }
}

/* ========================================
   PROJECTS SECTION
   ======================================== */

.projects-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  border-top: 6px solid var(--yellow-primary);
}

/* ========================================
   RESPONSIVE
   ======================================== */

@media (max-width: 640px) {
  .gundam-header {
    padding: 60px 20px;
  }

  .logo {
    font-size: 4rem;
  }

  .mecha-frame {
    width: 100%;
    max-width: 350px;
  }

  .toggle-buttons {
    flex-direction: column;
  }

  .toggle-btn {
    width: 100%;
    font-size: 24px;
    padding: 12px 30px;
  }

  .value-proposition {
    padding: 20px 25px 65px;
  }

  .scroll-indicator {
    display: none;
  }

  .robot-arm {
    display: none;
  }

  .poster-label {
    writing-mode: horizontal-tb;
    top: 15px;
    right: 15px;
  }
}

/* Transitions */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.3s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

<style>
/* Global overrides */
.prose {
  max-width: none !important;
}

.main {
  padding-top: 0 !important;
}
</style>

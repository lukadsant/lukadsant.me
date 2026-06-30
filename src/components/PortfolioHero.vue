<script setup lang="ts">
import { ref } from 'vue'
import { portfolioMode } from '../composables/usePortfolioMode'

const hoveredAction = ref<'dev' | 'design' | null>(null)
const laserCanvas = ref<HTMLCanvasElement | null>(null)
const avatarRef = ref<HTMLImageElement | null>(null)
const devBtnRef = ref<HTMLElement | null>(null)
const designBtnRef = ref<HTMLElement | null>(null)

function getCoords(targetView: 'dev' | 'design', event: MouseEvent) {
  const canvas = laserCanvas.value!
  const frame = avatarRef.value!
  const canvasRect = canvas.getBoundingClientRect()
  const frameRect = frame.getBoundingClientRect()

  const isDesktop = window.innerWidth >= 768
  let srcX = frameRect.left - canvasRect.left + frameRect.width * (isDesktop ? 0.35 : 0.5)
  if (isDesktop && targetView === 'dev')
    srcX += 20
  let srcY = frameRect.top - canvasRect.top + frameRect.height * 0.60
  if (isDesktop && targetView === 'design')
    srcY += 70

  const btn = targetView === 'dev' ? devBtnRef.value : designBtnRef.value
  const btnRect = btn?.getBoundingClientRect()
  const tgtX = btnRect ? btnRect.left - canvasRect.left + btnRect.width * 0.5 : event.clientX - canvasRect.left
  const tgtY = btnRect ? btnRect.top - canvasRect.top + btnRect.height * 0.5 : event.clientY - canvasRect.top

  canvas.width = canvas.offsetWidth
  canvas.height = canvas.offsetHeight

  return { canvas, ctx: canvas.getContext('2d')!, srcX, srcY, tgtX, tgtY }
}

function fireLaser(event: MouseEvent) {
  if (!laserCanvas.value || !avatarRef.value || !devBtnRef.value)
    return
  const { canvas, ctx, srcX, srcY, tgtX, tgtY } = getCoords('dev', event)
  const color = '#7ED957'
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

function fireFlamethrower(event: MouseEvent) {
  if (!laserCanvas.value || !avatarRef.value || !designBtnRef.value)
    return
  const { canvas, ctx, srcX, srcY, tgtX, tgtY } = getCoords('design', event)
  const duration = 900
  const start = performance.now()
  const dx = tgtX - srcX
  const dy = tgtY - srcY
  const dist = Math.sqrt(dx * dx + dy * dy)
  const particles: any[] = []

  function spawnParticles(progress: number) {
    const tipX = srcX + dx * progress
    const tipY = srcY + dy * progress
    const perp = { x: -dy / dist, y: dx / dist }
    const count = Math.floor(Math.random() * 3) + 4
    for (let i = 0; i < count; i++) {
      particles.push({
        x: tipX + perp.x * (Math.random() - 0.5) * 18,
        y: tipY + perp.y * (Math.random() - 0.5) * 18,
        vx: (dx / dist) * (2 + Math.random() * 3) + (Math.random() - 0.5) * 2.5,
        vy: (dy / dist) * (2 + Math.random() * 3) + (Math.random() - 0.5) * 2.5 - 0.5,
        life: 1,
        maxLife: 0.6 + Math.random() * 0.4,
        r: 6 + Math.random() * 10,
        hue: 10 + Math.random() * 30,
      })
    }
  }

  const burst: any[] = []
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
      })
    }
  }

  let burstSpawned = false
  function draw(now: number) {
    const t = Math.min((now - start) / duration, 1)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    if (t < 0.65) {
      spawnParticles(t / 0.65)
    }
    else if (!burstSpawned) {
      spawnBurst()
      burstSpawned = true
    }

    particles.forEach((p) => {
      p.x += p.vx
      p.y += p.vy
      p.vy -= 0.05
      p.vx += (Math.random() - 0.5) * 0.4
      p.life -= 0.025
      if (p.life <= 0)
        return
      const alpha = Math.min(p.life / p.maxLife, 1)
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

function handleDevClick(event: MouseEvent) {
  portfolioMode.value = 'development'
  fireLaser(event)
}

function handleDesignClick(event: MouseEvent) {
  portfolioMode.value = 'design'
  fireFlamethrower(event)
}
</script>

<template>
  <div class="bg-blue-main relative z-10 pt-12 pb-14 px-6 md:pt-20 md:pb-24 rounded-b-[2.5rem] md:rounded-b-[4rem] shrink-0 overflow-hidden flex justify-center">
    <canvas ref="laserCanvas" class="absolute inset-0 w-full h-full pointer-events-none z-30" />

    <div class="w-full max-w-6xl relative z-20">
      <!-- Hero Images -->
      <div class="absolute bottom-[-56px] right-[-24px] w-[200px] h-[260px] md:bottom-[-96px] md:-right-[50px] md:w-[500px] md:h-[650px] pointer-events-none">
        <!-- Background Layer: Gdan (Dev Hover) -->
        <img
          src="/gdan.png"
          alt="Gundam Dev Theme"
          class="absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none z-0 scale-125 md:scale-[0.9] origin-bottom -translate-x-4 md:-translate-x-10 mix-blend-luminosity transition-opacity duration-500 ease-in-out"
          :class="hoveredAction === 'dev' ? 'opacity-40' : 'opacity-0'"
        >

        <!-- Background Layer: Gojira (Design Hover) -->
        <img
          src="/gojira.png"
          alt="Gojira Design Theme"
          class="absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none z-0 scale-125 md:scale-[0.9] origin-bottom -translate-x-4 md:-translate-x-10 mix-blend-luminosity transition-opacity duration-500 ease-in-out"
          :class="hoveredAction === 'design' ? 'opacity-40' : 'opacity-0'"
        >

        <!-- Foreground Layer: Luka -->
        <img
          ref="avatarRef"
          src="/mypng.png"
          alt="Luka D'Sant"
          class="absolute inset-0 w-full h-full object-contain object-bottom pointer-events-none z-10 opacity-100 scale-[1.90] -translate-x-6 md:scale-[1.60] md:translate-x-0 origin-bottom"
        >
      </div>

      <!-- Top Nav within Hero (Removed Back Button and Avatar) -->

      <!-- Content -->
      <div class="mt-8 md:mt-16 relative z-20">
        <h1 class="font-outfit font-black text-5xl md:text-8xl text-white tracking-tighter leading-[0.9] w-[65%] md:w-[70%] drop-shadow-sm lowercase">
          lukadsant.
        </h1>
        <p class="text-white/90 font-inter font-medium mt-3 md:mt-6 text-[15px] md:text-xl">
          Engenheiro de Sistemas Especialista em IA, Automação e Arquitetura Escalável.
        </p>
        <p class="text-white/80 font-inter text-[13px] md:text-base mt-2 md:mt-4 leading-snug w-[60%] md:w-[50%]">
          Design + código = soluções que não só funcionam, mas que as pessoas gostam de usar.
        </p>
      </div>

      <!-- Actions -->
      <div class="mt-6 md:mt-10 flex flex-col md:flex-row md:items-center gap-4 relative z-20">
        <div class="flex flex-wrap gap-3">
          <button
            ref="devBtnRef"
            :class="portfolioMode === 'development' ? 'bg-green-vibrant text-blue-dark hover:bg-green-vibrant/90' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'"
            class="font-inter text-xs md:text-sm font-black uppercase px-5 py-3 rounded-xl tracking-wider shadow-sm transition-colors cursor-pointer inline-flex items-center justify-center"
            @click="handleDevClick"
            @mouseenter="hoveredAction = 'dev'"
            @mouseleave="hoveredAction = null"
          >
            DEVELOPMENT
          </button>
          <button
            ref="designBtnRef"
            :class="portfolioMode === 'design' ? 'bg-green-vibrant text-blue-dark hover:bg-green-vibrant/90' : 'bg-white/10 border border-white/20 text-white hover:bg-white/20'"
            class="font-inter text-xs md:text-sm font-black uppercase px-5 py-3 rounded-xl tracking-wider shadow-sm transition-colors cursor-pointer inline-flex items-center justify-center"
            @click="handleDesignClick"
            @mouseenter="hoveredAction = 'design'"
            @mouseleave="hoveredAction = null"
          >
            DESIGN
          </button>
        </div>

        <div class="flex gap-2">
          <a href="https://linkedin.com/in/lukadsant" target="_blank" rel="noopener noreferrer" class="w-11 h-11 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition" title="LinkedIn">
            <div class="i-lucide-linkedin w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
          <a href="mailto:contato@lukadsant.dev" class="w-11 h-11 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition" title="Email">
            <div class="i-lucide-mail w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
          <a href="#projects" class="w-11 h-11 md:w-14 md:h-14 bg-white/10 rounded-xl flex items-center justify-center cursor-pointer hover:bg-white/20 transition" title="Projetos">
            <div class="i-lucide-briefcase w-5 h-5 md:w-6 md:h-6 text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

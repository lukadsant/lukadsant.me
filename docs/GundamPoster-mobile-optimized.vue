<script setup lang="ts">
import { usePortfolioStore } from '~/store/portfolio'

const _props = defineProps<{
  projects: any
}>()

const store = usePortfolioStore()

function scrollToExplore() {
  const el = document.getElementById('projects-grid')
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="gundam-poster">
    <header class="gundam-header">
      <div class="gundam-stripes" />
      <div class="corner-accent" />

      <div class="header-content">
        <!-- Mecha Frame first on mobile -->
        <div class="header-mecha">
          <div class="hero-badge">
            DISPONÍVEL
          </div>
          <div class="mecha-frame">
            <slot name="hero" />
          </div>
          <div class="mecha-label">
            RX-78-2
          </div>
        </div>

        <!-- Content below on mobile -->
        <div class="header-left">
          <div class="logo-container">
            <h1 class="logo">
              LUKADSANT
            </h1>
            <p class="tagline">
              PORTFOLIO
            </p>
          </div>

          <div class="value-proposition">
            <h2 class="value-title">
              FULL-STACK DEVELOPER & DIGITAL ARTIST
            </h2>
            <p class="value-description">
              Construo backends que não quebram e frontends que funcionam. EdTech desde 2022.
            </p>

            <div class="tech-stack">
              <span class="tech-badge primary">Go / Python</span>
              <span class="tech-badge primary">C# / .NET</span>
              <span class="tech-badge secondary">PostgreSQL</span>
              <span class="tech-badge secondary">Docker</span>
              <span class="tech-badge highlight">EdTech</span>
            </div>

            <div class="hero-toggle">
              <div class="toggle-buttons">
                <button
                  class="toggle-btn code"
                  :class="{ active: store.currentView === 'code' }"
                  @click="store.setView('code')"
                >
                  <span class="i-carbon-home" />
                  INÍCIO
                </button>
                <button
                  class="toggle-btn dev"
                  :class="{ active: store.currentView === 'code' }"
                  @click="store.setView('code')"
                >
                  <span class="i-carbon-terminal" />
                  DEV
                </button>
                <button
                  class="toggle-btn art"
                  :class="{ active: store.currentView === 'design' }"
                  @click="store.setView('design')"
                >
                  <span class="i-carbon-palette" />
                  ART
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="scroll-indicator" @click="scrollToExplore">
        <span>EXPLORAR</span>
        <div class="scroll-arrow" />
      </div>
    </header>

    <div id="projects-grid" class="projects-section">
      <slot name="projects" />
    </div>

    <div class="robot-arm">
      <div class="robot-arm-visual">
        🦾
      </div>
    </div>
  </div>
</template>

<style scoped>
.gundam-poster {
  --yellow-primary: #f4c542;
  --yellow-dark: #d4a029;
  --black: #000000;
  --red: #dc2626;
  --white: #ffffff;
  --gray: #2a2a2a;
  width: 100%;
}

/* ========================================
   HEADER
   ======================================== */

.gundam-header {
  background: var(--yellow-primary);
  padding: 80px 20px 100px;
  position: relative;
  overflow: hidden;
  margin: -80px -20px 0;
}

@media (min-width: 768px) {
  .gundam-header {
    margin: -80px -40px 0;
  }
}

.gundam-stripes {
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

/* ========================================
   LOGO
   ======================================== */

.header-left {
  display: flex;
  flex-direction: column;
  gap: 25px;
  max-width: 700px;
}

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
  font-size: clamp(18px, 3vw, 28px);
  color: var(--black);
  font-weight: 700;
  letter-spacing: 4px;
  text-transform: uppercase;
  font-family: 'Space Mono', monospace;
  margin-top: -5px;
}

/* ========================================
   VALUE PROPOSITION
   ======================================== */

.value-proposition {
  background: var(--black);
  color: var(--yellow-primary);
  padding: 25px 40px 70px;
  border: 4px solid var(--black);
  box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.2);
  max-width: 650px;
  position: relative;
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
  font-size: clamp(24px, 4vw, 36px);
  letter-spacing: 2px;
  margin: 0 0 12px 0;
  color: var(--white);
  line-height: 1.1;
}

.value-description {
  font-size: 15px;
  line-height: 1.7;
  color: #e0e0e0;
  font-family: 'Space Mono', monospace;
  margin: 0;
}

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
  transition: transform 0.2s ease;
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

/* ========================================
   TOGGLE BUTTONS
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
  font-size: 20px;
  padding: 12px 20px;
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

.toggle-btn.code,
.toggle-btn.dev {
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

.toggle-btn.code:hover,
.toggle-btn.code.active,
.toggle-btn.dev:hover,
.toggle-btn.dev.active {
  background: var(--red);
  border-color: var(--red);
  color: var(--white);
}

.toggle-btn.art:hover,
.toggle-btn.art.active {
  background: var(--yellow-primary);
  border-color: var(--black);
}

/* ========================================
   MECHA FRAME
   ======================================== */

.header-mecha {
  position: relative;
  flex-shrink: 0;
  justify-self: end;
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

.projects-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  border-top: 6px solid var(--yellow-primary);
}

.robot-arm {
  position: fixed;
  bottom: -100px;
  right: 40px;
  width: 200px;
  height: 300px;
  pointer-events: none;
  opacity: 0.3;
  z-index: 10;
}

.robot-arm-visual {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  filter: grayscale(1);
  transition: filter 1s ease;
}

/* ========================================
   MOBILE OPTIMIZED LAYOUT
   ======================================== */

@media (max-width: 1024px) {
  .header-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .header-mecha {
    justify-self: center;
    order: -1; /* Mecha on top */
  }

  .header-left {
    max-width: 100%;
  }
}

@media (max-width: 768px) {
  .gundam-header {
    padding: 50px 15px 80px;
    margin: -60px -15px 0;
  }

  .logo {
    font-size: 3rem;
  }

  .header-content {
    gap: 25px;
  }

  .header-mecha {
    max-width: 280px;
    margin-bottom: 10px;
  }

  .mecha-frame {
    width: 100%;
    max-width: 280px;
  }

  .hero-badge {
    font-size: 14px;
    padding: 8px 16px;
  }

  .mecha-label {
    font-size: 22px;
    padding: 10px 24px;
    bottom: -30px;
  }

  .value-proposition {
    max-width: 100%;
    padding: 20px 20px 60px;
  }

  .value-title {
    font-size: 22px;
  }

  .value-description {
    font-size: 14px;
  }

  .tech-badge {
    font-size: 11px;
    padding: 5px 12px;
  }

  /* 3-button layout on mobile */
  .hero-toggle {
    left: 20px;
    right: 20px;
    bottom: -20px;
  }

  .toggle-buttons {
    gap: 8px;
  }

  .toggle-btn {
    font-size: 14px;
    padding: 12px 10px;
    flex-direction: column;
    gap: 4px;
  }

  .toggle-btn span[class^='i-'] {
    font-size: 20px;
  }

  .scroll-indicator {
    display: none;
  }

  .robot-arm {
    display: none;
  }

  .corner-accent {
    width: 100px;
    height: 100px;
  }

  .projects-section {
    padding: 40px 15px;
    border-top: 4px solid var(--yellow-primary);
  }
}

/* Small phones */
@media (max-width: 375px) {
  .logo {
    font-size: 2.5rem;
  }

  .tagline {
    font-size: 14px;
  }

  .value-title {
    font-size: 20px;
  }

  .value-description {
    font-size: 13px;
  }

  .toggle-btn {
    font-size: 12px;
  }
}
</style>

<style>
.prose {
  max-width: none !important;
}

.main {
  padding-top: 0 !important;
}
</style>

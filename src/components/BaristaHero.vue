<script setup lang="ts">
import { usePortfolioStore } from '~/store/portfolio'

defineProps<{
  activeImage?: string
  images: string[]
}>()

const store = usePortfolioStore()
</script>

<template>
  <div class="hero-character-box relative w-full h-full">
    <!-- All character images always in DOM — swap via opacity only -->
    <div class="absolute inset-0 flex items-center justify-center p-4 z-10">
      <div
        v-for="img in images"
        :key="img"
        class="character-img-wrapper"
        :class="{
          'is-active': img === activeImage,
          'is-preparing': store.isTransforming && img === activeImage,
        }"
      >
        <img
          :src="img"
          alt="Hero"
          class="character-img w-full h-full object-contain"
          :class="{ 'animate-transforming': store.isTransforming }"
        >
      </div>
    </div>

    <!-- Scanline effect -->
    <div class="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-5 opacity-30" />
  </div>
</template>

<style scoped>
.hero-character-box {
  width: 100%;
  height: 100%;
  image-rendering: pixelated; /* Essential for pixel art */
}

/* Each image wrapper stacks on top of each other */
.character-img-wrapper {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition:
    opacity 0.3s ease,
    filter 0.3s ease;
  pointer-events: none;
}

.character-img-wrapper.is-active {
  opacity: 1;
  pointer-events: auto;
}

.character-img-wrapper.is-preparing {
  filter: blur(2px) brightness(1.5) contrast(1.2);
}

.character-img {
  animation: float 4s ease-in-out infinite;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5));
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0) scale(1.02);
  }
  50% {
    transform: translateY(-10px) scale(0.98);
  }
}

.animate-transforming {
  animation: pulse-transform 0.5s ease-in-out infinite;
  filter: hue-rotate(90deg) brightness(1.5) drop-shadow(0 0 15px currentColor);
}

@keyframes pulse-transform {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}
</style>

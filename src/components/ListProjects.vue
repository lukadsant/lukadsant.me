<script setup lang="ts">
import { usePortfolioStore } from '~/store/portfolio'

defineProps<{ projects: Record<string, any[]> }>()
const portfolio = usePortfolioStore()
</script>

<template>
  <div class="gundam-projects max-w-350 mx-auto">
    <!-- Projects Section -->
    <div
      v-for="key, cidx in Object.keys(projects)"
      v-show="projects[key].some(p => portfolio.currentView === 'all' || p.type === portfolio.currentView)"
      :key="key"
      class="mb-20"
      slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <!-- Section Header with Line -->
      <div class="flex items-center gap-5 mb-10 overflow-hidden">
        <h3 class="font-display text-4xl md:text-6xl text-gundam-yellow tracking-widest uppercase flex-shrink-0">
          {{ key }}
        </h3>
        <div class="flex-1 h-1 bg-gundam-yellow" />
        <div class="w-10 h-10 border-2 border-gundam-red rotate-45 flex-shrink-0" />
      </div>

      <!-- Projects Grid -->
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <a
          v-for="item, idx in projects[key]"
          v-show="portfolio.currentView === 'all' || item.type === portfolio.currentView"
          :key="idx"
          class="project-card group bg-gundam-gray border-3 border-gundam-yellow p-0 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(244,197,66,0.3)]"
          :href="item.link"
          target="_blank"
        >
          <!-- Image Placeholder / Thumbnail -->
          <div class="h-45 bg-black border-b-3 border-gundam-yellow flex items-center justify-center overflow-hidden relative">
            <div class="text-6xl transition-transform duration-500 group-hover:scale-120">
              <div v-if="item.icon?.startsWith('i-')" :class="item.icon" />
              <Slidev v-else-if="item.icon === 'slidev'" />
              <VueUse v-else-if="item.icon === 'vueuse'" />
              <Unocss v-else-if="item.icon === 'unocss'" />
              <Vitest v-else-if="item.icon === 'vitest'" />
              <span v-else>🚀</span>
            </div>
            <!-- Decorative diagonal stripes in corner -->
            <div class="absolute top-0 right-0 w-15 h-15 bg-gundam-red/20 translate-x-1/2 -translate-y-1/2 rotate-45" />
          </div>

          <!-- Project Info -->
          <div class="p-6 flex flex-col flex-1">
            <h4 class="font-display text-2xl text-gundam-yellow tracking-wider mb-3 uppercase group-hover:text-white transition-colors">
              {{ item.name }}
            </h4>
            <p class="font-mono text-sm text-gray-400 leading-relaxed mb-6 line-clamp-2">
              {{ item.desc }}
            </p>

            <!-- Tech Stack Frame -->
            <div class="mt-auto border-2 border-gundam-blue bg-gundam-blue/5 p-3 font-mono text-[10px] text-gundam-blue tracking-widest uppercase">
              SECTOR: {{ item.type || 'SYSTEM' }} // STATUS: ONLINE
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.gundam-projects {
  --enter-step: 100ms;
}

.project-card {
  /* Mantém as bordas nítidas */
  image-rendering: pixelated;
}
</style>

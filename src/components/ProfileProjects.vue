<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()
</script>

<template>
  <section id="projects" class="mb-10 px-6">
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-blue-light block" />
        Projetos que resolvem problemas reais
      </h2>
      <span class="text-white/60 font-inter text-sm">
        Foco em resultado
      </span>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <template v-for="(projectList, category) in projects" :key="category">
        <a
          v-for="(item, idx) in projectList"
          :key="`${category}-${idx}`"
          :href="item.link !== '#' ? item.link : undefined"
          target="_blank"
          class="block group relative bg-neutral-soft rounded-3xl p-5 border border-neutral-light hover:border-blue-main hover:shadow-md transition-all duration-300 h-full"
        >
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-blue-light/30 border border-blue-light/50 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
              <span class="text-2xl text-blue-dark">
                <div v-if="item.icon?.startsWith('i-')" :class="item.icon" />
                <div v-else class="i-lucide-sparkles" />
              </span>
            </div>
            <div class="flex-1 min-w-0 flex flex-col h-full">
              <div class="flex items-center justify-between gap-2 mb-1">
                <h3 class="font-outfit font-bold text-blue-dark text-[15px] truncate">{{ item.name }}</h3>
                <span class="text-blue-dark/40 text-[10px] font-bold tracking-widest">{{ item.year || new Date().getFullYear() }}</span>
              </div>
              <div v-if="item.result" class="mb-2">
                <span class="inline-flex items-center gap-1 px-2 py-1 bg-green-vibrant/20 rounded-lg text-green-dark text-[10px] font-bold uppercase tracking-widest border border-green-vibrant/30">
                  <div class="i-lucide-circle-dot w-3.5 h-3.5" />
                  {{ item.result }}
                </span>
              </div>
              <p class="text-blue-dark/70 font-inter text-xs leading-relaxed line-clamp-3 mb-3 flex-1">{{ item.desc }}</p>
              <div class="flex flex-wrap gap-2 mt-auto">
                <span class="px-2 py-1 bg-green-vibrant/20 rounded-lg text-green-dark text-[10px] font-bold uppercase tracking-widest border border-green-vibrant/30">
                  {{ item.type || 'System' }}
                </span>
                <span v-if="category" class="px-2 py-1 bg-green-vibrant/20 rounded-lg text-green-dark text-[10px] font-bold uppercase tracking-widest border border-green-vibrant/30">
                  {{ category }}
                </span>
              </div>
            </div>
          </div>
        </a>
      </template>
    </div>
  </section>
</template>

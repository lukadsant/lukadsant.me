<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ cases: any[] }>()

const activeCaseIndex = ref(0)
</script>

<template>
  <section id="cases" class="mb-10 px-6">
    <div class="mb-8">
      <h2 class="text-white font-outfit font-semibold text-2xl flex items-center gap-2 mb-2">
        Estudos de Caso
      </h2>
      <p class="text-white/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
        Mais do que código que funciona, foco no "porquê" de cada decisão técnica e no impacto real para o negócio.
      </p>
    </div>

    <div v-if="cases && cases.length > 0" class="flex flex-col lg:flex-row gap-8">
      <!-- Tabs / List -->
      <div class="lg:w-1/3 flex flex-col gap-3">
        <button
          v-for="(c, idx) in cases"
          :key="c.name"
          class="text-left px-5 py-4 rounded-2xl border transition-all duration-300 flex items-center justify-between group"
          :class="activeCaseIndex === idx ? 'bg-neutral-soft border-green-vibrant shadow-sm' : 'bg-transparent border-neutral-light/30 hover:border-neutral-light hover:bg-neutral-soft/50'"
          @click="activeCaseIndex = idx"
        >
          <div>
            <h3 class="font-outfit font-bold text-base transition-colors" :class="activeCaseIndex === idx ? 'text-blue-dark' : 'text-white/80 group-hover:text-white'">
              {{ c.name }}
            </h3>
            <span class="text-[10px] uppercase font-inter font-bold tracking-widest mt-1 block" :class="activeCaseIndex === idx ? 'text-green-dark' : 'text-white/40'">
              {{ c.category }}
            </span>
          </div>
          <div class="w-8 h-8 rounded-full flex items-center justify-center transition-colors" :class="activeCaseIndex === idx ? 'bg-green-vibrant/20' : 'bg-white/5'">
            <div class="w-4 h-4" :class="[c.icon, activeCaseIndex === idx ? 'text-green-dark' : 'text-white/60']" />
          </div>
        </button>
      </div>

      <!-- Active Case Details -->
      <div class="lg:w-2/3 bg-neutral-soft border border-neutral-light rounded-3xl p-6 md:p-8 shadow-sm">
        <div class="mb-8 pb-6 border-b border-neutral-light/50">
          <div class="flex flex-wrap gap-2 mb-4">
            <span v-for="tag in cases[activeCaseIndex].stack" :key="tag" class="px-2 py-1 bg-blue-dark/5 text-blue-dark border border-neutral-light/60 rounded-lg text-[10px] font-bold uppercase tracking-widest">
              {{ tag }}
            </span>
          </div>
          <h3 class="font-outfit font-black text-3xl text-blue-dark mb-4">
            {{ cases[activeCaseIndex].name }}
          </h3>
          <p class="font-inter text-blue-dark/70 text-sm md:text-base leading-relaxed">
            <strong class="text-blue-dark block mb-1">O Problema:</strong>
            {{ cases[activeCaseIndex].problem }}
          </p>
        </div>

        <div class="space-y-8">
          <div>
            <h4 class="font-outfit font-bold text-lg text-blue-dark flex items-center gap-2 mb-3">
              <div class="i-lucide-lightbulb w-5 h-5 text-green-dark" />
              A Solução
            </h4>
            <ul class="space-y-2">
              <li v-for="item in cases[activeCaseIndex].solution" :key="item" class="flex items-start gap-2 font-inter text-sm text-blue-dark/80 leading-relaxed">
                <div class="i-lucide-check w-4 h-4 text-green-dark shrink-0 mt-0.5" />
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 class="font-outfit font-bold text-lg text-blue-dark flex items-center gap-2 mb-3">
              <div class="i-lucide-git-branch w-5 h-5 text-blue-light" />
              Decisões Técnicas (Tradeoffs)
            </h4>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="tradeoff in cases[activeCaseIndex].tradeoffs" :key="tradeoff.question" class="bg-white rounded-xl p-4 border border-neutral-light shadow-sm">
                <p class="font-inter font-bold text-blue-dark text-sm mb-2">
                  {{ tradeoff.question }}
                </p>
                <ul class="space-y-1">
                  <li v-for="reason in tradeoff.reasons" :key="reason" class="flex items-start gap-2 font-inter text-xs text-blue-dark/70">
                    <span class="text-blue-light font-bold shrink-0">→</span>
                    <span>{{ reason }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-col md:flex-row gap-6">
            <div class="flex-1 bg-green-vibrant/10 border border-green-vibrant/20 rounded-2xl p-5">
              <h4 class="font-outfit font-bold text-sm text-green-dark uppercase tracking-widest mb-3">
                Resultados (ROI)
              </h4>
              <ul class="space-y-2">
                <li v-for="res in cases[activeCaseIndex].results" :key="res" class="flex items-center gap-2 font-inter text-sm text-blue-dark/90 font-medium">
                  <div class="i-lucide-trending-up w-4 h-4 text-green-dark shrink-0" />
                  <span>{{ res }}</span>
                </li>
              </ul>
            </div>

            <div class="flex-1 bg-blue-dark/5 border border-neutral-light rounded-2xl p-5">
              <h4 class="font-outfit font-bold text-sm text-blue-dark/50 uppercase tracking-widest mb-3">
                Learnings
              </h4>
              <p class="font-inter text-sm text-blue-dark/80 italic leading-relaxed">
                {{ cases[activeCaseIndex].learnings }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

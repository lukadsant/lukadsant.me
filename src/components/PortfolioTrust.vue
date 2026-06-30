<script setup lang="ts">
const trustItems = [
  'Código Escalável e Limpo',
  'Foco em Performance e SEO',
  'Arquitetura Desacoplada',
  'Comunicação Clara e Transparente',
  'Entrega de Valor Contínua',
]
</script>

<template>
  <section class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-2xl flex items-center gap-2 mb-2">
        Valores Inegociáveis
      </h2>
      <p class="text-white/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
        Em cada projeto, o objetivo não é apenas entregar funcionando, mas entregar com excelência técnica e preparo para o futuro.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="item in trustItems"
        :key="item"
        class="bg-neutral-soft border border-neutral-light rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:border-green-vibrant/30 transition-colors"
      >
        <div class="w-9 h-9 rounded-xl bg-green-vibrant/20 border border-green-vibrant/30 flex items-center justify-center shrink-0">
          <div class="i-lucide-check w-4 h-4 text-green-dark" />
        </div>
        <p class="text-blue-dark font-inter text-sm font-medium">
          {{ item }}
        </p>
      </div>
    </div>
  </section>
</template>

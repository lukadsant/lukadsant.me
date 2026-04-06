<script setup lang="ts">
const steps = [
  'Você me conta sua ideia (pode ser simples mesmo).',
  'Conversamos sobre o que você realmente precisa.',
  'Você recebe uma proposta clara.',
  'Começamos o projeto.',
]
</script>

<template>
  <section id="process" class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2 mb-1">
        <span class="w-2 h-2 rounded-full bg-blue-light block" />
        Como começamos
      </h2>
      <p class="text-white/70 font-inter text-sm leading-relaxed max-w-2xl">
        O processo é simples, direto e pensado para você não perder tempo.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        v-for="(step, index) in steps"
        :key="step"
        class="bg-neutral-soft border border-neutral-light rounded-2xl p-5 shadow-sm"
      >
        <div class="w-9 h-9 rounded-xl bg-green-vibrant/20 border border-green-vibrant/30 flex items-center justify-center mb-4">
          <span class="text-green-dark font-outfit font-bold text-sm">{{ index + 1 }}</span>
        </div>
        <p class="text-blue-dark font-inter text-sm leading-relaxed">
          {{ step }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const trustItems = [
  'Atendimento simples e direto',
  'Explico tudo de forma clara',
  'Entregas rápidas',
  'Suporte após a entrega',
  'Sem complicação técnica',
]
</script>

<template>
  <section class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2 mb-1">
        <span class="w-2 h-2 rounded-full bg-blue-light block" />
        O que você pode esperar
      </h2>
      <p class="text-white/70 font-inter text-sm leading-relaxed max-w-2xl">
        Meu foco é entregar algo útil, fácil de entender e tranquilo de manter no dia a dia.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="item in trustItems"
        :key="item"
        class="bg-neutral-soft border border-neutral-light rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm"
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

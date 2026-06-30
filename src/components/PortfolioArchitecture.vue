<script setup lang="ts">
const architectureQuestions = [
  {
    title: 'Como o sistema vai crescer?',
    desc: 'Escala horizontal vs vertical. Design de banco de dados para evitar gargalos.',
  },
  {
    title: 'Qual é o ponto crítico?',
    desc: 'Onde focar performance e otimização para garantir a melhor experiência.',
  },
  {
    title: 'Quanto custa errar aqui?',
    desc: 'Que camadas de segurança e tolerância a falhas precisam estar no lugar.',
  },
]
</script>

<template>
  <section id="architecture" class="mb-10 px-6">
    <div class="mb-8">
      <h2 class="text-white font-outfit font-semibold text-2xl flex items-center gap-2 mb-2">
        Como penso sobre arquitetura
      </h2>
      <p class="text-white/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
        Antes de escrever a primeira linha de código, sempre parto de 3 perguntas fundamentais. Toda decisão técnica tem um tradeoff, e o meu trabalho é deixá-lo claro.
      </p>
    </div>

    <!-- 3 Questions -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
      <div
        v-for="(q, i) in architectureQuestions"
        :key="q.title"
        class="bg-neutral-soft border border-neutral-light rounded-2xl p-5 shadow-sm"
      >
        <span class="text-green-dark font-display text-3xl font-black mb-3 block opacity-40">0{{ i + 1 }}</span>
        <h3 class="text-blue-dark font-outfit font-bold text-lg mb-2">
          {{ q.title }}
        </h3>
        <p class="text-blue-dark/70 font-inter text-sm leading-relaxed">
          {{ q.desc }}
        </p>
      </div>
    </div>

    <!-- Transition -->
    <div class="mt-4 md:mt-6 text-center md:text-left">
      <p class="text-white/80 font-inter font-medium text-sm md:text-base">
        Toda decisão tem tradeoff. Veja isso na prática nos meus case studies <span class="text-green-vibrant ml-1">↓</span>
      </p>
    </div>
  </section>
</template>

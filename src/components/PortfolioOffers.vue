<script setup lang="ts">
const offers = [
  {
    title: 'Desenvolvimento Web',
    description: 'Construo interfaces modernas e sistemas escaláveis do zero. Meu foco está em entregar a melhor experiência, com interações fluidas e código limpo utilizando Vue 3 e Nuxt.',
    items: ['Vue 3', 'Nuxt', 'Go', 'TailwindCSS'],
    icon: 'i-lucide-layout-template',
    number: '01',
  },
  {
    title: 'Automação & ETL',
    description: 'Integração de sistemas e pipelines de dados para orquestrar a operação da sua empresa. Extração e normalização de dados conectando APIs complexas de forma segura.',
    items: ['Prefect', 'PostgreSQL', 'Python', 'APIs'],
    icon: 'i-lucide-bot',
    number: '02',
  },
  {
    title: 'Inteligência Artificial',
    description: 'Soluções avançadas com LLMs e arquiteturas RAG (Geração Aumentada por Recuperação) Híbrido, trazendo poder cognitivo para aplicações internas e assistentes inteligentes.',
    items: ['Mistral', 'Gemini API', 'LangChain', 'FastAPI'],
    icon: 'i-lucide-brain-circuit',
    number: '03',
  },
]
</script>

<template>
  <section id="offers" class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-2xl flex items-center gap-2 mb-2">
        Como posso te ajudar
      </h2>
      <p class="text-white/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
        A combinação da minha paixão por design, código e inteligência artificial me coloca num lugar único no desenvolvimento de soluções sob medida.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <article
        v-for="offer in offers"
        :key="offer.title"
        class="bg-neutral-soft rounded-3xl p-6 border border-neutral-light shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col justify-between group"
      >
        <div class="flex items-start justify-between mb-4">
          <div class="w-12 h-12 rounded-2xl bg-blue-light/30 border border-blue-light/50 flex items-center justify-center">
            <div :class="offer.icon" class="w-6 h-6 text-blue-dark group-hover:text-green-dark transition-colors" />
          </div>
          <span class="text-blue-dark/20 font-display text-4xl font-black">
            {{ offer.number }}
          </span>
        </div>

        <h3 class="font-outfit font-bold text-blue-dark text-xl mb-3">
          {{ offer.title }}
        </h3>

        <p class="text-blue-dark/70 font-inter text-sm leading-relaxed mb-6">
          {{ offer.description }}
        </p>

        <div class="flex flex-wrap gap-2 mt-auto">
          <span
            v-for="item in offer.items"
            :key="item"
            class="px-2 py-1 bg-blue-dark/5 rounded-lg text-blue-dark text-[11px] font-medium border border-neutral-light/50"
          >
            {{ item }}
          </span>
        </div>
      </article>
    </div>
  </section>
</template>

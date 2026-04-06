<script setup lang="ts">
const offers = [
  {
    title: 'Site simples',
    price: 'A partir de R$500',
    priceNote: '(ou orçamento personalizado)',
    description: 'Página profissional, portfólio ou site institucional com uma entrega direta e fácil de aprovar.',
    items: ['Landing page', 'Carrd ou portfólio', 'Página profissional'],
    included: ['Até 5 páginas', 'Design profissional', 'Responsivo (mobile + desktop)', '2 rodadas de revisão', 'Entrega em 2-3 semanas', 'Suporte após entrega'],
    icon: 'i-lucide-layout-template',
    cta: 'Quero meu site pronto',
  },
  {
    title: 'Sistema simples',
    price: 'A partir de R$1.500',
    priceNote: '(ou orçamento personalizado)',
    description: 'Painel administrativo, gestão de dados e relatórios para tirar seu processo da planilha e organizar a operação.',
    items: ['CRUD', 'Painel administrativo', 'API básica'],
    included: ['Fluxo principal mapeado', 'Painel administrativo', 'Cadastro e edição de dados', '2 rodadas de revisão', 'Entrega em 3-5 semanas', 'Suporte após entrega'],
    icon: 'i-lucide-layout-panel-left',
    cta: 'Quero organizar meu negócio',
  },
  {
    title: 'Automação',
    price: 'A partir de R$2.000',
    priceNote: '(ou orçamento personalizado)',
    description: 'Scripts, coleta de dados e integrações que reduzem trabalho manual e deixam sua rotina mais leve.',
    items: ['Scripts', 'Integrações', 'Coleta de dados'],
    included: ['Mapeamento do processo', 'Integração entre ferramentas', 'Automação da tarefa principal', '2 rodadas de ajuste', 'Entrega em 2-4 semanas', 'Suporte após entrega'],
    icon: 'i-lucide-bot',
    cta: 'Quero economizar tempo',
  },
]
</script>

<template>
  <section id="offers" class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2 mb-1">
        <span class="w-2 h-2 rounded-full bg-green-vibrant block" />
        Como posso te ajudar
      </h2>
      <p class="text-white/70 font-inter text-sm leading-relaxed max-w-2xl">
        Comece pelo pacote que faz mais sentido pro seu negócio. Se ficar dúvida, conversamos e ajustamos tudo.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
      <article
        v-for="offer in offers"
        :key="offer.title"
        class="bg-neutral-soft rounded-3xl p-5 border border-neutral-light shadow-sm"
      >
        <div class="w-12 h-12 rounded-2xl bg-blue-light/30 border border-blue-light/50 flex items-center justify-center mb-4">
          <div :class="offer.icon" class="w-6 h-6 text-blue-dark" />
        </div>

        <div class="flex items-start justify-between gap-3 mb-2">
          <h3 class="font-outfit font-bold text-blue-dark text-lg">
            {{ offer.title }}
          </h3>
          <span class="text-[10px] uppercase tracking-widest font-bold text-green-dark bg-green-vibrant/20 border border-green-vibrant/30 rounded-lg px-2 py-1">
            Ideal para começar
          </span>
        </div>

        <p class="text-green-dark font-inter text-xs font-bold uppercase tracking-wider mb-3">
          {{ offer.price }}
        </p>
        <p class="text-blue-dark/60 font-inter text-xs mb-3 -mt-1">
          {{ offer.priceNote }}
        </p>

        <p class="text-blue-dark/70 font-inter text-sm leading-relaxed mb-4">
          {{ offer.description }}
        </p>

        <div class="mb-4">
          <p class="text-blue-dark font-inter text-xs font-bold uppercase tracking-wider mb-3">
            O que está incluído?
          </p>
          <div class="flex flex-col gap-2">
            <div
              v-for="included in offer.included"
              :key="included"
              class="flex items-start gap-2 text-blue-dark/75 font-inter text-sm"
            >
              <div class="i-lucide-check w-4 h-4 text-green-dark mt-0.5 shrink-0" />
              <span>{{ included }}</span>
            </div>
          </div>
        </div>

        <div class="flex flex-wrap gap-2">
          <span
            v-for="item in offer.items"
            :key="item"
            class="px-2 py-1 bg-blue-dark/6 rounded-lg text-blue-dark text-[11px] font-medium border border-neutral-light"
          >
            {{ item }}
          </span>
        </div>

        <a
          href="https://wa.me/5581994880289"
          target="_blank"
          rel="noopener noreferrer"
          class="mt-5 inline-flex items-center gap-2 bg-green-vibrant hover:bg-green-vibrant/90 text-blue-dark font-outfit font-bold text-xs uppercase tracking-wide px-4 py-3 rounded-xl transition-colors"
        >
          {{ offer.cta }}
          <div class="i-lucide-arrow-up-right w-4 h-4" />
        </a>
      </article>
    </div>
  </section>
</template>

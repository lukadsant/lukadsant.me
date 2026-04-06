<script setup lang="ts">
const solutions = [
  {
    icon: 'i-lucide-briefcase-business',
    title: 'Sites e Landing Pages',
    description: 'Página que gera contatos, portfólio e presença profissional.',
  },
  {
    icon: 'i-lucide-bot',
    title: 'Automação de Processos',
    description: 'Integração de dados, coleta automática e relatórios sem esforço.',
  },
  {
    icon: 'i-lucide-layout-panel-left',
    title: 'Painel de Gestão',
    description: 'Organize pedidos, clientes e informações em um lugar só.',
  },
  {
    icon: 'i-lucide-wrench',
    title: 'Manutenção e Suporte',
    description: 'Ajustes, atualizações e solução de problemas do dia a dia.',
  },
]
</script>

<template>
  <section class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2 mb-1">
        <span class="w-2 h-2 rounded-full bg-blue-light block" />
        Soluções que entrego
      </h2>
      <p class="text-white/60 font-inter text-xs">
        Soluções pensadas para facilitar sua rotina e gerar resultado sem complicação.
      </p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div
        v-for="solution in solutions"
        :key="solution.title"
        class="bg-neutral-soft border border-neutral-light p-5 rounded-2xl shadow-sm"
      >
        <div class="w-11 h-11 rounded-2xl bg-blue-light/30 border border-blue-light/50 flex items-center justify-center mb-4">
          <div :class="solution.icon" class="w-5 h-5 text-blue-dark" />
        </div>
        <h3 class="text-blue-dark font-outfit font-bold text-base mb-2">
          {{ solution.title }}
        </h3>
        <p class="text-blue-dark/70 font-inter text-sm leading-relaxed">
          {{ solution.description }}
        </p>
      </div>
    </div>
  </section>
</template>

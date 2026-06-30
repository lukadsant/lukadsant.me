<script setup lang="ts">
const steps = [
  'Descoberta & Arquitetura: Análise profunda do desafio e definição do stack tecnológico ideal.',
  'Prototipagem Ágil: Validação rápida de arquitetura e ideias antes da implementação final.',
  'Desenvolvimento: Foco em código limpo, componentizado e de fácil manutenção.',
  'Revisão Contínua: Feedback técnico constante e code reviews rigorosos.',
]

const finalSteps = [
  'Quality Assurance: Testes de unidade e validação de performance e segurança.',
  'Deploy Automatizado: Pipelines CI/CD configurados para lançamentos sem fricção.',
  'Documentação Técnica: Handover completo com guias e decisões de arquitetura.',
  'Monitoramento: Observabilidade e acompanhamento de métricas pós-lançamento.',
]
</script>

<template>
  <section id="process" class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-2xl flex items-center gap-2 mb-2">
        Abordagem Técnica
      </h2>
      <p class="text-white/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
        Um processo maduro pensado para garantir escalabilidade, segurança e eficiência no ciclo de vida do software.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        v-for="(step, index) in steps"
        :key="step"
        class="bg-neutral-soft border border-neutral-light rounded-2xl p-5 shadow-sm transition-transform hover:-translate-y-1"
      >
        <div class="w-9 h-9 rounded-xl bg-green-vibrant/20 border border-green-vibrant/30 flex items-center justify-center mb-4">
          <span class="text-green-dark font-outfit font-bold text-sm">{{ index + 1 }}</span>
        </div>
        <p class="text-blue-dark font-inter text-sm leading-relaxed">
          {{ step }}
        </p>
      </div>
    </div>

    <div class="mt-10 mb-6">
      <h2 class="text-white font-outfit font-semibold text-2xl flex items-center gap-2 mb-2">
        Entrega & Evolução
      </h2>
      <p class="text-white/70 font-inter text-sm md:text-base leading-relaxed max-w-2xl">
        Finalização sólida e estruturada para que o projeto continue evoluindo tecnicamente.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        v-for="(step, index) in finalSteps"
        :key="step"
        class="bg-neutral-soft border border-neutral-light rounded-2xl p-5 shadow-sm transition-transform hover:-translate-y-1"
      >
        <div class="w-9 h-9 rounded-xl bg-blue-light/20 border border-blue-light/30 flex items-center justify-center mb-4">
          <span class="text-blue-dark font-outfit font-bold text-sm">{{ index + 1 }}</span>
        </div>
        <p class="text-blue-dark font-inter text-sm leading-relaxed">
          {{ step }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stack = [
  'Vue 3',
  'TypeScript',
  'Go',
  'Python',
  'Tailwind CSS',
  'UnoCSS',
  'FastAPI',
  'Mistral',
]
</script>

<template>
  <section class="mb-10 px-6">
    <div class="mb-6">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2 mb-1">
        <span class="w-2 h-2 rounded-full bg-blue-light block" />
        Stack
      </h2>
      <p class="text-white/60 font-inter text-xs">
        Technologies I use to build scalable systems.
      </p>
    </div>
    <div class="flex flex-wrap gap-2">
      <div
        v-for="tech in stack"
        :key="tech"
        class="bg-neutral-soft border border-neutral-light px-4 py-2 rounded-xl flex items-center gap-2 hover:border-blue-main transition-colors cursor-default shadow-sm"
      >
        <span class="text-blue-dark font-inter text-xs font-medium">{{ tech }}</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const contacts = [
  { href: 'mailto:lukadsant@pm.me', icon: 'i-lucide-mail', label: 'lukadsant@pm.me', sub: 'Email' },
  { href: undefined, icon: 'i-lucide-map-pin', label: 'Brazil', sub: 'Location' },
  { href: 'https://github.com/lukadsant', icon: 'i-lucide-github', label: 'lukadsant', sub: 'GitHub' },
]
</script>

<template>
  <section class="px-6 pb-20">
    <h2 class="text-white font-outfit font-semibold text-lg mb-5 flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-blue-light block" />
      Contact
    </h2>
    <div class="flex flex-col gap-4">
      <a
        v-for="(item, i) in contacts"
        :key="i"
        :href="item.href"
        :target="item.href?.startsWith('http') ? '_blank' : undefined"
        :rel="item.href?.startsWith('http') ? 'noreferrer' : undefined"
        class="flex items-center gap-4 group"
        :class="item.href ? 'cursor-pointer' : 'cursor-default'"
      >
        <div class="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-green-vibrant transition-colors duration-300 shrink-0">
          <div class="w-5 h-5 text-white group-hover:text-blue-dark transition-colors duration-300" :class="[item.icon]" />
        </div>
        <div>
          <p class="text-white font-inter font-medium text-sm">{{ item.label }}</p>
          <p class="text-white/60 font-inter text-xs mt-0.5">{{ item.sub }}</p>
        </div>
      </a>
    </div>
  </section>
</template>

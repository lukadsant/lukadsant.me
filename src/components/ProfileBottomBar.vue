<script setup lang="ts">
</script>

<template>
  <section class="mb-10 px-6">
    <div class="bg-blue-dark/95 backdrop-blur-xl border border-white/10 rounded-[2rem] p-4 flex flex-col md:flex-row items-center justify-between shadow-[0_10px_40px_rgba(0,0,0,0.15)] gap-5 md:gap-0">
      <div class="flex flex-col items-center md:items-start justify-center px-2 md:pl-4 md:pr-2 flex-shrink-0 text-center md:text-left">
        <span class="text-white/60 text-[10px] font-bold tracking-widest font-inter">STATUS</span>
        <span class="text-green-vibrant font-outfit font-bold text-[13px] md:text-sm tracking-wide">OPEN FOR SELECTED PROJECTS</span>
      </div>

      <div class="flex-1 w-full md:mx-8">
        <a href="mailto:lukadsant@pm.me" class="h-14 w-full flex items-center justify-center bg-green-vibrant hover:bg-green-vibrant/90 text-blue-dark font-bold text-sm md:text-base tracking-wide rounded-[1.5rem] transition-colors cursor-pointer font-outfit uppercase">
          LET’S WORK TOGETHER
        </a>
      </div>

      <div class="flex items-center justify-center gap-2 px-2 md:pr-4 flex-shrink-0 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <a href="https://github.com/lukadsant" target="_blank" rel="noopener noreferrer" class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" title="GitHub">
          <div class="i-lucide-github w-4 h-4 text-white" />
        </a>
        <a href="https://linkedin.com/in/lukadsant" target="_blank" rel="noopener noreferrer" class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" title="LinkedIn">
          <div class="i-lucide-linkedin w-4 h-4 text-white" />
        </a>
        <a href="mailto:lukadsant@pm.me" class="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer" title="Email">
          <div class="i-lucide-mail w-4 h-4 text-white" />
        </a>
      </div>
    </div>
  </section>
</template>

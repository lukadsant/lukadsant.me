<template>
  <footer class="mt-10 px-6 pb-12 flex flex-col items-center justify-center text-center">
    <div class="flex items-center gap-4 mb-4">
      <a href="https://linkedin.com/in/lukadsant" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors" title="LinkedIn">
        <div class="i-lucide-linkedin w-5 h-5" />
      </a>
      <a href="https://github.com/lukadsant" target="_blank" rel="noopener noreferrer" class="text-white/40 hover:text-white transition-colors" title="GitHub">
        <div class="i-lucide-github w-5 h-5" />
      </a>
    </div>
    <p class="text-white/30 font-inter text-xs">
      © {{ new Date().getFullYear() }} Code by Luka D'Sant.
    </p>
  </footer>
</template>

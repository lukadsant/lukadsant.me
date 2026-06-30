<template>
  <section class="mb-10 px-6">
    <div class="bg-white border border-neutral-light rounded-[2rem] p-6 md:p-10 flex flex-col items-center justify-center text-center shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
      <h2 class="text-blue-dark font-outfit font-black text-3xl md:text-4xl tracking-tighter mb-6">
        Tem um projeto em mente?
      </h2>

      <div class="flex flex-col items-start text-left bg-neutral-soft/50 rounded-2xl p-6 mb-8 w-full max-w-md border border-neutral-light/50">
        <p class="font-outfit font-bold text-blue-dark/80 text-sm uppercase tracking-widest mb-4">
          Sou aberto para:
        </p>
        <div class="space-y-3">
          <div class="flex items-start gap-3">
            <span class="text-green-dark font-bold">→</span>
            <span class="font-inter text-sm md:text-base text-blue-dark/90 font-medium">Freelance de alto valor (sistemas complexos, AI)</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-blue-light font-bold">→</span>
            <span class="font-inter text-sm md:text-base text-blue-dark/90 font-medium">Consultoria técnica (arquitetura, decisões)</span>
          </div>
          <div class="flex items-start gap-3">
            <span class="text-purple-500 font-bold">→</span>
            <span class="font-inter text-sm md:text-base text-blue-dark/90 font-medium">Full-time (startup, scale-up)</span>
          </div>
        </div>
      </div>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
        <a href="mailto:contato@lukadsant.dev" class="w-full sm:flex-1 flex items-center justify-center gap-2 bg-blue-dark hover:bg-blue-dark/90 text-white px-6 py-4 rounded-2xl transition-colors shadow-sm font-outfit font-bold uppercase tracking-widest text-xs">
          Enviar Email
          <div class="i-lucide-mail w-4 h-4" />
        </a>
        <span class="font-inter text-sm text-blue-dark/40 font-medium italic">ou</span>
        <a href="https://linkedin.com/in/lukadsant" target="_blank" rel="noopener noreferrer" class="w-full sm:flex-1 flex items-center justify-center gap-2 bg-white border border-neutral-light text-blue-dark hover:bg-neutral-50 px-6 py-4 rounded-2xl transition-colors shadow-sm font-outfit font-bold uppercase tracking-widest text-xs" title="LinkedIn">
          LinkedIn
          <div class="i-lucide-linkedin w-4 h-4" />
        </a>
      </div>
    </div>
  </section>
</template>

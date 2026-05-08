<template>
  <section class="mb-10 px-6">
    <div class="max-w-5xl">
      <h2 class="text-white font-outfit font-semibold text-lg flex items-center gap-2 mb-6">
        <span class="w-2 h-2 rounded-full bg-green-vibrant block" />
        Sobre mim
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p class="text-white/85 font-inter text-sm md:text-base leading-relaxed">
            Sou o Luka, desenvolvedor que cria sites, sistemas e automações para a tecnologia funcionar a seu favor e não contra o seu negócio.
          </p>

          <p class="text-white/65 font-inter text-sm leading-relaxed mt-4">
            Trabalho com pessoas que precisam de soluções simples e não sabem por onde começar.
          </p>

          <p class="text-white/65 font-inter text-sm leading-relaxed mt-4">
            Se você tem uma ideia confusa ou um processo bagunçado, posso transformar em algo claro, bonito e útil.
          </p>

          <p class="text-white/65 font-inter text-sm leading-relaxed mt-4">
            Meu objetivo é sempre deixar tudo simples, claro e funcionando de verdade no seu dia a dia.
          </p>

          <a
            href="https://wa.me/5581994880289"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-6 text-green-vibrant font-outfit font-bold text-sm uppercase tracking-wide"
          >
            Fala comigo no WhatsApp
            <div class="i-lucide-arrow-up-right w-4 h-4" />
          </a>
        </div>

        <div class="relative flex justify-center items-end h-80">
          <!-- Frame com border decorativo -->
          <div class="relative w-64 h-64">
            <div class="absolute -inset-2 bg-gradient-to-br from-green-vibrant/20 to-blue-light/20 rounded-3xl blur-lg opacity-60" />
            <div class="relative w-full h-full bg-gradient-to-br from-blue-light/30 to-green-vibrant/10 border-4 border-neutral-light rounded-3xl p-2 shadow-2xl">
              <img
                src="/avatar.png"
                alt="Luka"
                class="w-[19rem] h-[19rem] rounded-2xl object-cover translate-x-[-0.5rem] translate-y-[-3.9rem] transform"
              >
            </div>

            <!-- Ícone decorativo - computador -->
            <div class="absolute -top-4 -left-4 w-12 h-12 bg-green-vibrant rounded-2xl border-3 border-blue-dark p-2 flex items-center justify-center shadow-lg">
              <div class="i-lucide-laptop w-6 h-6 text-blue-dark" />
            </div>

            <!-- Ícone decorativo - código -->
            <div class="absolute -bottom-4 -right-4 w-12 h-12 bg-blue-light rounded-full border-3 border-blue-dark p-2 flex items-center justify-center shadow-lg">
              <div class="i-lucide-code w-6 h-6 text-blue-dark" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

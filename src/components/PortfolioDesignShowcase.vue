<script setup lang="ts">
import { ref } from 'vue'

interface DesignImage {
  src: string
  alt: string
  description: string
}

interface Category {
  title: string
  images: DesignImage[]
}

const categories: Category[] = [
  {
    title: 'Ilustração Digital',
    images: [
      { src: '/design-portfolio/munch.png', alt: 'Munch', description: 'Nesse projeto foi proposto a criação de personagem da série de pokemon utilizando a técnica de aquarela.' },
      { src: '/design-portfolio/roserade.png', alt: 'Roserade', description: 'Nesse projeto foi proposto a criação de personagem da série de pokemon utilizando a técnica de aquarela.' },
      { src: '/design-portfolio/arca.png', alt: 'Arca', description: 'Nesse projeto foi proposto a criação de personagem da série de pokemon utilizando a técnica de aquarela.' },
    ],
  },
  {
    title: 'Character Design',
    images: [
      { src: '/design-portfolio/charde1.png', alt: 'Character Design 1', description: 'Nesse projeto foi proposto a criação de personagem utilizando simbologias e a teoria de formas.' },
      { src: '/design-portfolio/charde2.png', alt: 'Character Design 2', description: 'Nesse projeto foi proposto a criação de um personagem de jogo de luta representando um animal da india e também utilizando simbologias e a teoria de formas.' },
      { src: '/design-portfolio/post3.jpg', alt: 'Character Design 3', description: 'Nesse projeto foi proposto a criação de personagem para um cordel junto com um poema.' },
    ],
  },
  {
    title: 'Composição de Imagem',
    images: [
      { src: '/design-portfolio/comp1.png', alt: 'Composição 1', description: 'Nesse projeto foi proposto a montagem de uma imagem que reflitisse o interior de uma pessoa.' },
      { src: '/design-portfolio/comp2.png', alt: 'Composição 2', description: 'Nesse projeto foi proposto a montagem de um post de filme utilizando varios elementos.' },
      { src: '/design-portfolio/comp3.png', alt: 'Composição 3', description: 'Nesse projeto foi proposto a montagem de de imagem visando a iluminação.' },
    ],
  },
  {
    title: 'Logotipagem',
    images: [
      { src: '/design-portfolio/logo4.jpg', alt: 'Logo 4', description: 'Nesse projeto foi proposto a criação de uma logo com a fusão de uma caveira e uma lampada.' },
      { src: '/design-portfolio/logo2.jpg', alt: 'Logo 2', description: 'Nesse projeto foi proposto a criação de uma logo para uma marca que tem o gorila como mascote.' },
      { src: '/design-portfolio/logo3.jpg', alt: 'Logo 3', description: 'Nesse projeto foi proposto a criação de uma logo para um jogo de um morcego.' },
    ],
  },
  {
    title: 'Social Media',
    images: [
      { src: '/design-portfolio/post4.jpg', alt: 'Post 4', description: 'Nesse projeto foi proposto a criação de banner para divulgar um evento.' },
      { src: '/design-portfolio/post1.jpg', alt: 'Post 1', description: 'Nesse projeto foi proposto a criação de banner motivacional.' },
      { src: '/design-portfolio/post2.png', alt: 'Post 2', description: 'Nesse projeto foi proposto uma melhoria para o anúncio de um petshop.' },
    ],
  },
  {
    title: 'Animação',
    images: [
      { src: '/design-portfolio/anim1.gif', alt: 'Animação 1', description: 'Nesse projeto foi proposto uma animação de um gato viajante.' },
      { src: '/design-portfolio/anim2.gif', alt: 'Animação 2', description: 'Nesse projeto foi proposto uma animação de um slime deslizando.' },
      { src: '/design-portfolio/anim3.gif', alt: 'Animação 3', description: 'Nesse projeto foi proposto uma animação algo sendo abduzido.' },
    ],
  },
  {
    title: 'Pintura Digital',
    images: [
      { src: '/design-portfolio/pin1.png', alt: 'Pintura 1', description: 'Nesse projeto foi proposto a pintura de um personagem utilizando grayscale.' },
      { src: '/design-portfolio/pin3.png', alt: 'Pintura 2', description: 'Nesse projeto foi proposto a pintura de um objetos de madeira e metais utilizando grayscale.' },
      { src: '/design-portfolio/pin2.png', alt: 'Pintura 3', description: 'Nesse projeto foi proposto a pintura de cenário utilizando grayscale.' },
    ],
  },
]

const selectedImage = ref<DesignImage | null>(null)
</script>

<template>
  <section class="px-6 min-h-screen">
    <div v-for="cat in categories" :key="cat.title" class="mb-16">
      <!-- Category Header -->
      <div class="flex items-center justify-center gap-4 mb-8 opacity-80">
        <div class="h-px bg-white/20 flex-1 max-w-24" />
        <div class="i-lucide-star w-4 h-4 text-white/40" />
        <h3 class="font-outfit font-bold text-xl md:text-2xl text-white uppercase tracking-wider text-center">
          {{ cat.title }}
        </h3>
        <div class="i-lucide-star w-4 h-4 text-white/40" />
        <div class="h-px bg-white/20 flex-1 max-w-24" />
      </div>

      <!-- Image Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          v-for="img in cat.images"
          :key="img.src"
          class="relative group aspect-square rounded-2xl overflow-hidden bg-neutral-soft border border-neutral-light/50 cursor-pointer shadow-sm hover:shadow-xl hover:border-white/30 transition-all duration-300"
          @click="selectedImage = img"
        >
          <img
            :src="img.src"
            :alt="img.alt"
            class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          >
          <div class="absolute inset-0 bg-blue-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center">
            <div class="w-12 h-12 mb-4 rounded-full bg-white/10 border border-white/20 flex items-center justify-center backdrop-blur-sm">
              <div class="i-lucide-zoom-in w-6 h-6 text-white" />
            </div>
            <p class="text-white/90 font-inter text-sm md:text-xs font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
              {{ img.description }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Lightbox Modal -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 z-[100] bg-blue-dark/95 backdrop-blur-md flex flex-col items-center justify-center p-4 md:p-10 cursor-zoom-out transition-all"
      @click="selectedImage = null"
    >
      <img
        :src="selectedImage.src"
        class="max-w-full max-h-[80vh] rounded-2xl shadow-2xl object-contain cursor-default mb-6"
        @click.stop
      >
      <div class="bg-neutral-soft/50 border border-white/10 rounded-xl p-4 max-w-2xl text-center cursor-default" @click.stop>
        <p class="text-white/80 font-inter text-sm md:text-base">
          {{ selectedImage.description }}
        </p>
      </div>

      <button
        class="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
        @click="selectedImage = null"
      >
        <div class="i-lucide-x w-6 h-6" />
      </button>
    </div>
  </section>
</template>

<script setup>
import { useIntersectionObserver } from '@vueuse/core'
import { onMounted, ref } from 'vue'

const currentWord = ref('')

const allLogos = [
  '/IBM SPSS Statistics.svg',
  '/EpiInfoIcon.png',
  '/Microsoft_Office_Word_(2019–2025).svg',
  '/Microsoft_Office_Excel_(2019–2025).svg',
  '/New_Power_BI_Logo.svg',
]
const currentLogo = ref(allLogos[0])
const logoIndex = ref(0)

const words = [
  'pesquisa aplicada.',
  'análise de dados.',
  'relatórios precisos.',
  'insights valiosos.',
  'inteligência estratégica.',
]

onMounted(() => {
  let wordIndex = 0
  let isDeleting = false
  let charIndex = 0

  function type() {
    const current = words[wordIndex]

    if (isDeleting) {
      currentWord.value = current.substring(0, charIndex - 1)
      charIndex--
    }
    else {
      currentWord.value = current.substring(0, charIndex + 1)
      charIndex++
    }

    let typeSpeed = isDeleting ? 40 : 80

    if (!isDeleting && charIndex === current.length) {
      typeSpeed = 2000 // pause at end
      isDeleting = true
    }
    else if (isDeleting && charIndex === 0) {
      isDeleting = false
      wordIndex = (wordIndex + 1) % words.length
      typeSpeed = 400 // pause before typing next
    }

    setTimeout(type, typeSpeed)
  }

  type()

  setInterval(() => {
    logoIndex.value = (logoIndex.value + 1) % allLogos.length
    currentLogo.value = allLogos[logoIndex.value]
  }, 2500)
})

const activeExp = ref(0)
const experiences = [
  {
    title: 'Assistente Administrativo',
    company: 'Constância Promo',
    year: 'mar 2026 – mai 2026',
    desc1: 'Planejou e acompanhou eventos e ações promocionais ponta a ponta, com controle de prazos, escalas e logística.',
    desc2: 'Elaborou relatórios e planilhas de acompanhamento de indicadores operacionais. Fez a interface com clientes, fornecedores e parceiros estratégicos, coordenando equipes de campo.',
  },
  {
    title: 'Coordenadora de Fórum',
    company: 'DEVIR - PPGA/UFPE',
    year: 'ago 2025 – abr 2026',
    desc1: 'Organizou e coordenou fóruns temáticos: criação de formulários, controle de cronogramas e gestão de informações de participantes.',
    desc2: 'Realizou atendimento e escuta qualificada ao público, com comunicação clara na resolução de demandas durante o evento.',
  },
  {
    title: 'Assistente de Pesquisa',
    company: 'UFPE',
    year: 'set 2024 – ago 2025',
    desc1: 'Conduziu análises qualitativas e quantitativas em IBM SPSS e Excel para identificação de padrões em bases de dados de pesquisa acadêmica, com alta autonomia.',
    desc2: 'Planejou e executou coleta de dados, migrou registros físicos para digital e apoiou a produção de relatórios de impacto em Power BI.',
  },
  {
    title: 'Assistente Administrativa',
    company: 'UFPE',
    year: 'out 2023 – mar 2024',
    desc1: 'Organizou e manteve bancos de dados institucionais e planilhas de controle, com responsabilidade individual sobre entregas.',
    desc2: 'Produziu relatórios e realizou conferência e arquivamento de documentação física e digital.',
  },
]

const formations = [
  {
    title: 'Ciências Sociais',
    subtitle: 'Bacharelado',
    institution: 'UFPE',
    badge: 'UFPE',
    year: '2021 – 2026',
    desc: 'Formação sólida em pesquisa social, métodos qualitativos e quantitativos, análise antropológica e teoria social.',
  },
  {
    title: 'Gestão de Projetos no Serviço Público',
    subtitle: 'Formação Complementar',
    institution: 'FUNDAJ',
    badge: 'FUNDAJ',
    year: 'out–nov 2025',
    desc: 'Metodologias de planejamento, monitoramento de indicadores e gestão estratégica orientada a entregas públicas.',
  },
  {
    title: 'Informática e Gestão',
    subtitle: 'Formação Complementar',
    institution: 'Neo Multicursos',
    badge: 'NEO',
    year: '2016 – 2017',
    desc: 'Capacitação prática em ferramentas de produtividade, planilhas gerenciais e rotinas administrativas.',
  },
]

const habilidadesRef = ref(null)
const isSkillsVisible = ref(false)

onMounted(() => {
  if (habilidadesRef.value) {
    useIntersectionObserver(habilidadesRef, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        isSkillsVisible.value = true
      }
    }, { threshold: 0.2 })
  }
})

const skills = [
  {
    name: 'Pesquisa Qualitativa & Quantitativa',
    desc: 'Desenho de coleta, condução de entrevistas, identificação de padrões sociais e rigor metodológico em campo.',
    icon: 'i-carbon-microscope',
  },
  {
    name: 'Análise de Dados Estatísticos',
    desc: 'Tratamento e análise de grandes volumes de dados utilizando IBM SPSS, Power BI, Excel Avançado e Epi Info.',
    icon: 'i-carbon-chart-combo',
  },
  {
    name: 'Relatórios Estratégicos',
    desc: 'Transformação de dados brutos em insights através de redação técnica e relatórios de impacto.',
    icon: 'i-carbon-report-data',
  },
]
</script>

<template>
  <div class="min-h-screen bg-white text-gray-800 font-sans">
    <!-- Hero Section -->
    <section class="max-w-5xl mx-auto px-6 pb-24 md:pb-32 pt-16 md:pt-20 flex flex-col items-center justify-center relative text-center">
      <div class="relative z-10 max-w-4xl mx-auto">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 text-sm font-semibold text-gray-600 tracking-wide mb-6 border border-gray-200 shadow-sm cursor-default relative z-10">
          <span class="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          Cientista Social
        </div>

        <!-- Floating Toolbox (Right) -->
        <div class="absolute top-1/2 -right-36 md:-right-52 lg:-right-64 transform -translate-y-1/2 z-20 hover:scale-105 transition-transform duration-300 hidden md:block">
          <div class="bg-gray-100/80 backdrop-blur-sm border border-gray-200 shadow-xl rounded-2xl p-4 flex flex-col gap-3 relative">
            <div class="grid grid-cols-2 gap-3">
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Análise de Dados">
                📊
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Insights">
                💡
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Crescimento">
                📈
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Estratégia">
                🎯
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Pesquisa">
                🔍
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Relatórios">
                📝
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Sociologia">
                🧠
              </div>
              <div class="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-xl shadow-sm border border-gray-200" title="Métodos">
                ⚙️
              </div>
            </div>
          </div>
        </div>

        <!-- Floating Software Icons -->
        <div class="absolute -top-16 left-0 md:-top-10 md:-left-12 z-50 flex gap-4">
          <div class="animate-bounce" style="animation-duration: 4s;">
            <img :src="currentLogo" class="w-16 h-16 md:w-24 md:h-24 drop-shadow-2xl transform -rotate-12 transition-all duration-700 ease-in-out rounded-xl bg-white/40 p-1" alt="Software Logo">
          </div>
        </div>

        <!-- Catchphrase -->
        <h1 class="max-w-2xl mx-auto text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-[1.1] mb-6">
          Traduzindo a complexidade<br>social em<br>
          <div class="relative inline-block mt-1">
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-900 inline-block pr-1 border-r-4 border-gray-900 animate-blink">{{ currentWord }}</span>

            <!-- Cursor Multiplayer -->
            <div class="absolute top-4 -right-16 z-50 flex flex-col items-start cursor-anim">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 37.56 37.56" class="transform -rotate-12">
                <path d="M 2.506 8.266 C 1.141 4.666 4.666 1.141 8.266 2.506 L 28.927 10.344 C 32.76 11.798 32.773 17.216 28.946 18.687 L 21.897 21.399 C 21.668 21.487 21.487 21.668 21.399 21.897 L 18.687 28.946 C 17.216 32.773 11.798 32.76 10.344 28.927 Z" fill="rgb(236, 72, 153)" stroke-width="3" stroke="rgb(255,255,255)" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-md ml-4 -mt-2">
                Acácia
              </div>
            </div>
          </div>
        </h1>
        <div class="absolute top-[58%] -left-36 md:-left-56 lg:-left-68 hidden md:flex flex-col items-center justify-center gap-4 z-20 transform -translate-y-1/2 scale-75 md:scale-90 origin-left">
          <!-- Small Photo -->
          <div class="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-[6px] border-white shadow-2xl bg-gray-100 transform hover:scale-105 transition duration-300 flex-shrink-0 relative">
            <!-- TODO: Place real image here. For now using placeholder -->
            <img src="/avatar.png" alt="Acácia Tavares" class="w-full h-full object-cover">
          </div>

          <!-- Badge (Spreadsheet Style) -->
          <div class="inline-flex flex-col border border-gray-300 shadow-sm bg-white rounded-md cursor-default font-mono text-xs md:text-sm overflow-hidden transform -rotate-[18deg] hover:-translate-y-1 hover:-rotate-[18deg] transition duration-300 ml-10">
            <!-- Table Header -->
            <div class="flex flex-row bg-gray-100 border-b border-gray-300 text-gray-500 font-bold select-none">
              <div class="w-8 border-r border-gray-300" />
              <div class="px-4 py-1 border-r border-gray-300 flex-1 text-center">
                A
              </div>
              <div class="px-4 py-1 flex-1 text-center">
                B
              </div>
            </div>
            <!-- Table Row -->
            <div class="flex flex-row text-gray-800">
              <div class="w-8 bg-gray-100 border-r border-gray-300 flex items-center justify-center text-gray-400 font-bold select-none">
                1
              </div>
              <div class="px-4 py-2 border-r border-gray-200 flex items-center bg-white whitespace-nowrap">
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse mr-2" />
                <span class="font-semibold font-sans text-gray-900">Acácia</span>
              </div>
              <div class="px-4 py-2 flex items-center bg-white text-gray-900 font-sans font-semibold whitespace-nowrap">
                Tavares
              </div>
            </div>
          </div>
        </div>
        <!-- Scroll CTA -->
        <div class="mt-40 md:mt-48 w-full flex flex-col items-center justify-center text-gray-400 animate-bounce cursor-pointer hover:text-gray-600 transition-colors" onclick="document.getElementById('habilidades').scrollIntoView({behavior: 'smooth'})">
          <span class="text-[10px] md:text-xs font-semibold tracking-widest uppercase mb-2">Descubra mais</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="habilidades" ref="habilidadesRef" class="bg-gray-50 py-24">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Habilidades & Competências
          </h2>
          <p class="text-gray-500 text-lg max-w-2xl mx-auto">
            Resumo das ferramentas e metodologias que compõem minha atuação profissional.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div v-for="(skill, i) in skills" :key="i" class="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative">
            <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 text-2xl border border-blue-100/60 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <div :class="skill.icon" class="w-8 h-8" />
            </div>
            <h3 class="font-bold text-gray-900 text-lg leading-snug mb-3">
              {{ skill.name }}
            </h3>
            <p
              class="text-gray-600 text-sm leading-relaxed transition-all duration-700 ease-out"
              :class="isSkillsVisible ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 translate-y-2'"
              :style="{ transitionDelay: `${i * 150 + 200}ms` }"
            >
              {{ skill.desc }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Experience -->
    <section id="experiencia" class="py-24">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experiência Profissional
          </h2>
          <p class="text-gray-500 text-lg max-w-2xl mx-auto">
            Minha trajetória prática e resultados em diferentes frentes de atuação.
          </p>
        </div>

        <div class="flex flex-col lg:flex-row gap-10">
          <!-- Cards Selector -->
          <div class="w-full lg:w-5/12 flex flex-col gap-4">
            <button
              v-for="(exp, i) in experiences" :key="i"
              class="text-left p-6 rounded-3xl transition-all duration-300 border-2"
              :class="activeExp === i ? 'bg-gray-900 text-white border-gray-900 shadow-xl shadow-gray-900/10 scale-[1.02]' : 'bg-white text-gray-700 border-gray-100 hover:border-gray-300 hover:bg-gray-50'"
              @click="activeExp = i"
            >
              <h3 class="font-bold text-xl mb-1 transition-colors" :class="activeExp === i ? 'text-white' : 'text-gray-900'">
                {{ exp.title }}
              </h3>
              <p class="text-sm font-medium" :class="activeExp === i ? 'text-gray-300' : 'text-gray-500'">
                @ {{ exp.company }}
              </p>
            </button>
          </div>

          <!-- Detail Panel -->
          <div class="w-full lg:w-7/12 bg-white rounded-[2rem] p-8 lg:p-12 border border-gray-100 shadow-2xl shadow-gray-200/50 relative overflow-hidden flex flex-col justify-center">
            <div class="absolute -top-24 -right-24 w-64 h-64 bg-gray-50 rounded-full blur-3xl" />

            <div class="relative z-10">
              <div class="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded-lg text-sm font-bold tracking-wider mb-6">
                {{ experiences[activeExp].year }}
              </div>
              <h3 class="text-3xl font-black text-gray-900 mb-2 leading-tight">
                {{ experiences[activeExp].title }}
              </h3>
              <p class="text-xl text-gray-500 font-medium mb-10">
                {{ experiences[activeExp].company }}
              </p>

              <div class="space-y-6 text-gray-700 leading-relaxed text-lg">
                <p class="flex items-start gap-4">
                  <span class="mt-2.5 w-2 h-2 rounded-full bg-gray-900 flex-shrink-0 shadow-sm" />
                  <span>{{ experiences[activeExp].desc1 }}</span>
                </p>
                <p class="flex items-start gap-4">
                  <span class="mt-2.5 w-2 h-2 rounded-full bg-gray-900 flex-shrink-0 shadow-sm" />
                  <span>{{ experiences[activeExp].desc2 }}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Academic Formation -->
    <section id="formacao" class="bg-gray-900 py-24 text-white">
      <div class="max-w-5xl mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Formação Acadêmica
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            A base teórica e as qualificações práticas que sustentam minha atuação.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(form, i) in formations"
            :key="i"
            class="bg-gray-800/90 rounded-3xl overflow-hidden shadow-xl border border-gray-700/80 flex flex-col group hover:border-gray-500 hover:-translate-y-1.5 transition-all duration-300"
          >
            <!-- CardHeader -->
            <div class="p-6 border-b border-gray-700/70 bg-gray-800/60 relative overflow-hidden">
              <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 14px 14px;" />
              <div class="relative z-10 flex items-center justify-between mb-3">
                <div class="px-2.5 py-1 rounded-lg bg-white text-gray-950 font-black text-xs tracking-wider shadow-sm">
                  {{ form.badge }}
                </div>
                <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-700 text-gray-300 border border-gray-600/60">
                  {{ form.year }}
                </span>
              </div>
              <div class="relative z-10 text-xs font-bold uppercase tracking-wider text-blue-400">
                {{ form.subtitle }}
              </div>
            </div>

            <!-- CardContent -->
            <div class="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 class="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-200 transition-colors">
                  {{ form.title }}
                </h3>
                <p class="text-gray-400 text-sm leading-relaxed">
                  {{ form.desc }}
                </p>
              </div>
              <div class="mt-6 pt-4 border-t border-gray-700/40 text-xs font-semibold text-gray-500 flex items-center gap-1.5">
                <span class="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span>{{ form.institution }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sobre Mim -->
    <section id="sobre" class="py-24 bg-white">
      <div class="max-w-5xl mx-auto px-6">
        <div class="bg-gray-50 rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-center gap-10">
          <div class="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 rounded-full overflow-hidden border-4 border-white shadow-lg bg-gray-200">
            <img src="/avatar.png" alt="Acácia Tavares" class="w-full h-full object-cover">
          </div>
          <div class="flex-1 text-center md:text-left">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">
              Sobre mim
            </h2>
            <p class="text-lg text-gray-600 leading-relaxed">
              Cientista Social graduada pela UFPE, com formação prática em pesquisa e experiência acumulada em coleta, tratamento e análise de dados. Foco em investigar mercados e dinâmicas sociais para embasar decisões de negócio, aliando rigor metodológico à curiosidade analítica.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer id="contato" class="bg-white py-20 border-t border-gray-100 text-center no-copyright">
      <div class="max-w-3xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-6 text-gray-900">
          Vamos conversar?
        </h2>
        <p class="text-gray-500 mb-8 text-lg">
          Olinda, Pernambuco | (81) 9 8796-0654
        </p>
        <div class="flex flex-wrap justify-center gap-4 mb-16">
          <a href="mailto:acaciatavares003@gmail.com" class="px-6 py-3.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition shadow-lg font-medium text-base inline-flex items-center gap-2">
            <div class="i-ri-mail-line text-lg" /> Enviar um E-mail
          </a>
          <a href="https://www.linkedin.com/in/acaciatavares/" target="_blank" class="px-6 py-3.5 bg-[#0077B5] text-white rounded-xl hover:opacity-90 transition shadow-lg font-medium text-base inline-flex items-center gap-2">
            <div class="i-ri-linkedin-box-fill text-lg" /> LinkedIn
          </a>
          <a href="http://lattes.cnpq.br/6059128932814842" target="_blank" class="px-6 py-3.5 bg-gray-100 text-gray-800 hover:bg-gray-200 border border-gray-200 rounded-xl transition shadow-sm font-medium text-base inline-flex items-center gap-2">
            <div class="i-simple-icons-discourse text-lg text-blue-600" /> Currículo Lattes
          </a>
          <a href="https://www.instagram.com/tavar.es" target="_blank" class="px-6 py-3.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl hover:opacity-90 transition shadow-lg font-medium text-base inline-flex items-center gap-2">
            <div class="i-simple-icons-instagram text-lg" /> Instagram
          </a>
        </div>
        <p class="text-gray-400 text-sm font-medium">
          © 2026 Acácia Tavares. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
html {
  scroll-behavior: smooth;
}
</style>

<style scoped>
.animate-blink {
  animation: blink-caret 0.75s step-end infinite;
}

@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #111827;
  } /* text-gray-900 */
}

.cursor-anim {
  animation: moveCursor 2s ease-out forwards;
}

@keyframes moveCursor {
  0% {
    transform: translate(-150px, 20px);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  100% {
    transform: translate(0, 0);
    opacity: 1;
  }
}
</style>

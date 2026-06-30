---
description: Luka D'Sant's Portfolio
projects:
  Projetos em destaque:
    - name: 'Site profissional para consultório'
      link: '#'
      desc: 'Página clara, acolhedora e focada em gerar contatos sem depender só de indicação.'
      type: 'Site simples'
      result: 'Mais contatos'
      icon: 'i-lucide-heart-handshake'
    - name: 'Sistema interno para organizar pedidos'
      link: '#'
      desc: 'Painel interno para cadastrar, acompanhar e atualizar pedidos sem depender de planilhas soltas, reduzindo retrabalho e centralizando informações.'
      type: 'Sistema simples'
      result: 'Menos retrabalho'
      icon: 'i-lucide-clipboard-list'
    - name: 'Automação de tarefas repetitivas'
      link: '#'
      desc: 'Fluxo que coleta e organiza dados automaticamente, economizando 20+ horas por mês de trabalho manual em relatórios.'
      type: 'Automação'
      result: '-20h/mês'
      icon: 'i-lucide-bot'
    - name: 'Landing page para serviço local'
      link: '#'
      desc: 'Página objetiva para apresentar um serviço, passar confiança e transformar visitas em contatos com uma oferta clara.'
      type: 'Landing page'
      result: 'Mais pedidos'
      icon: 'i-lucide-monitor-smartphone'
---

<!-- @layout-full-width -->

<div class="min-h-screen w-full bg-blue-dark text-white font-inter relative pb-10">
  <ProfileHero />
  <div class="max-w-6xl mx-auto w-full pt-10 relative z-0">
    <ProfileOffers />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileProcess />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileProjects :projects="frontmatter.projects" />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileTrust />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileAbout />
    <ProfileBottomBar />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileStack />
    <div class="mx-6 border-t border-white/8 mb-10" />
  </div>
  <ProfileFooter />
</div>

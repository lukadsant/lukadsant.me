---
description: Luka D'Sant's Portfolio
projects:
  Backend:
    - name: 'Recrutamento com IA'
      link: '#'
      desc: 'Plataforma de recrutamento. RAG híbrido BM25 + vetorial. FastAPI, Vue 3, Mistral 7B e Gemini API.'
      type: 'Python'
      icon: 'i-lucide-network'
    - name: 'Assistente Corporativo RAG'
      link: '#'
      desc: 'Assistente Q&A corporativo com full-context até 100k char. Sanitização GLiNER e Mistral 7B.'
      type: 'Python'
      icon: 'i-lucide-bot'
    - name: 'Intranet'
      link: '#'
      desc: 'Framework Go + Vue3 para apps internas rápidas. Gerenciamento RBAC, tarefas agendadas e logs.'
      type: 'Go'
      icon: 'i-lucide-layout-panel-left'
---

<!-- @layout-full-width -->

<div class="min-h-screen w-full bg-blue-dark text-white font-inter relative pb-10">
  <ProfileHero />
  <div class="max-w-6xl mx-auto w-full pt-10 relative z-0">
    <ProfileStats />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileProjects :projects="frontmatter.projects" />
    <ProfileBottomBar />
    <div class="mx-6 border-t border-white/8 mb-10" />
    <ProfileStack />
    <div class="mx-6 border-t border-white/8 mb-10" />
  </div>
  <ProfileFooter />
</div>

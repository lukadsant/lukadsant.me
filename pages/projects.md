---
title: Projects - Luka D'Sant
display: Projects
description: List of projects that I am proud of
wrapperClass: w-full max-w-none
art: dots
projects:
  AI & LLMs:
    - name: 'Sistema de Recrutamento com IA'
      link: '#'
      desc: 'Rankeamento automático de currículos por LLM. RAG híbrido BM25 + vetorial. Stack: FastAPI, Vue 3, Mistral 7B e Gemini API.'
      type: 'code'
      icon: 'i-carbon-network-4'
    - name: 'Assistente Corporativo RAG Híbrido'
      link: '#'
      desc: 'Assistente Q&A para uso interno. Busca híbrida semântica + BM25, full-context até 100k caracteres. Dupla sanitização e privacidade via GLiNER.'
      type: 'code'
      icon: 'i-carbon-chat-bot'

  Data Pipelines & ETL:
    - name: 'ETL Microsoft 365 → Relacional'
      link: '#'
      desc: 'Orquestração Prefect para dados do MS Planner. Extrai informações da Graph API e carrega normalizado no PostgreSQL e Oracle.'
      type: 'code'
      icon: 'i-carbon-data-base'

  Systems & Automation:
    - name: 'Intranet — Framework Go + Vue3'
      link: '#'
      desc: 'Arquitetura para o desenvolvimento rápido de aplicações internas usando Go (Gin). Conta com RBAC Casbin, upload direto e filas de Redis.'
      type: 'code'
      icon: 'i-carbon-application'
    - name: 'Inovaenge — Automações BIM'
      link: '#'
      desc: 'Rotinas C# em Civil 3D e Revit para extração automatizada de metadados, relatórios dimensionais avançados e integração interop Excel.'
      type: 'code'
      icon: 'i-carbon-model-builder'
---

<!-- @layout-full-width -->
<div class="min-h-screen w-full bg-blue-dark text-white font-inter relative pb-32">
  <div class="max-w-6xl mx-auto w-full pt-10 px-6 relative z-0">

    <div class="flex items-center gap-4 mb-8 cursor-pointer group w-fit" @click="$router.push('/')">
      <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white/20 transition-colors">
        <div class="i-lucide-chevron-left w-6 h-6" />
      </div>
      <span class="font-outfit font-semibold tracking-wider text-white">BACK</span>
    </div>

    <ProfileProjects :projects="frontmatter.projects" />

  </div>
</div>

# Análise de Viabilidade - Portfolio Pixel Art Interativo

## 📊 Overview da Codebase Atual

- **Stack Tecnológica**:
  - **Framework**: Vue 3 (Composition API)
  - **Build Tool**: Vite com `vite-ssg` (Server Side Generation)
  - **Estilização**: UnoCSS (Atomic CSS) com presets Wind3 e Icons
  - **Linguagem**: TypeScript
  - **Gerenciamento de Conteúdo**: Markdown-based (`unplugin-vue-markdown`)
- **Arquitetura**:
  - As páginas são arquivos `.md` na pasta `/pages`.
  - Componentes Vue em `src/components/`, injetados diretamente no Markdown ou usados via `auto-import`.
  - Estilos são majoritariamente atômicos (UnoCSS), com algum CSS global em `src/styles`.
- **Animações Existentes**: O projeto já utiliza Canvas (`ArtPlum.vue`, `ArtDots.vue`) para efeitos de fundo, o que demonstra que a infraestrutura para o que você deseja (Hero interativo) já está parcialmente presente.

## ✅ Viabilidade

**Status:** **VIÁVEL**

A integração é totalmente compatível com a stack atual. O uso de `vite-ssg` garante que a primeira carga seja rápida (HTML estático), e o Vue 3 hidratará o componente de Pixel Art para interactividade. A abordagem de camadas com `Canvas` ou `position: absolute` é ideal e não conflita com o UnoCSS.

## 🏗️ Plano de Integração

### Arquivos a Criar

- `src/components/PixelArtHero/BaristaCanvas.vue`: Componente principal do Hero (PIXI.js ou Vanilla Canvas).
- `src/components/PixelArtHero/DrinkMenu.vue`: Interface do menu de drinks.
- `src/store/portfolio.ts`: Loja Pinia para controlar o estado global (view: 'all' | 'code' | 'design').

### Arquivos a Modificar

- `pages/index.md`: Inserir o componente `<BaristaCanvas />` no topo.
- `src/components/ListProjects.vue`: Adicionar lógica de filtragem baseada no estado da loja Pinia.
- `pages/projects.md`: (Opcional) Adicionar tags nos projetos para facilitar a filtragem.

### Estrutura de Dados (Sugestão para projects.md)

```yaml
# pages/projects.md
projects:
  Nuxt Ecosystem:
    - name: Nuxt
      type: code # Nova tag
  Design Assets:
    - name: Pixel Icons
      type: design # Nova tag
```

## 🎯 Implementação Passo a Passo

**Fase 1: Setup & Assets (1 dia)**

1. Criar pasta `src/components/PixelArtHero`.
2. Definir a loja Pinia `portfolio.ts` para gerenciar se o usuário escolheu "Código" ou "Design".
3. Organizar sprites de pixel art em `public/assets/pixel/`.

**Fase 2: Core Hero Component (2 dias)**

1. Implementar o `BaristaCanvas.vue`. Como você já tem `pixi.js` nas dependências, recomendo usá-lo para gerenciar as camadas e estados do barista de forma performática.
2. Criar as animações de "preparando drink" usando GSAP ou CSS Transitions.

**Fase 3: Integração de Conteúdo (1 dia)**

1. Modificar o `ListProjects.vue` para observar o estado `portfolio.view`.
2. Adicionar transições suaves de entrada/saída (já existe o utilitário `slide-enter` no projeto que pode ser reutilizado).

## ⚠️ Pontos de Atenção

- **Performance de Fontes**: Notei um erro de timeout no download de fontes do Google. Recomendo manter fontes locais ou otimizar o `unocss.config.ts`.
- **Mobile First**: Pixel art fixa pode ser difícil de escalar. Use `aspect-ratio` e `object-fit: contain` no container do Canvas.
- **SSG Friendly**: Garanta que o Canvas só inicie no `onMounted` para evitar erros de referência ao `window` durante o build.

## 💡 Recomendações Finais

- **Aproveite o PIXI.js**: O projeto já o possui. Use-o para o Hero, pois ele lida muito bem com sprites e camadas separadas (z-index de pixel art).
- **View Transitions API**: O projeto já implementa isso em `src/logics/index.ts` para o dark mode. Use a mesma técnica para a "grande transformação" da página ao servir o drink.
- **Shortcut**: Continue usando os utilitários do UnoCSS para a UI do menu de drinks (glassmorphism/blur), mantendo a consistência visual do site.

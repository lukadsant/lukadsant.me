# Prompt para Implementação - Layout Portfolio Gundam

## Contexto do Projeto

Implementar uma landing page de portfolio com estética de **poster mecha vintage anos 80-90**, inspirada em Gundam. O layout é estático (MVP) com foco em design visual impactante e estrutura para futuras animações.

---

## 🎨 Estética e Design System

### Paleta de Cores

```css
--yellow-primary: #f4c542 /* Amarelo vibrante - cor dominante */ --yellow-dark: #d4a029 /* Amarelo escuro - variação */
  --black: #000000 /* Preto absoluto - backgrounds */ --red: #dc2626 /* Vermelho - acentos e bordas */ --white: #ffffff
  /* Branco - texto e contraste */ --gray: #2a2a2a /* Cinza escuro - cards */ --green-mecha: #4ade80
  /* Verde tech - variações */ --blue-tech: #60a5fa /* Azul tech - variações */;
```

### Tipografia

- **Display/Headings**: `Bebas Neue` - fonte bold, condensada, industrial, UPPERCASE
- **Body/Paragraphs**: `Space Mono` - monospace, tech feeling
- **Características**: letras grandes, spacing amplo, alto contraste

### Padrões Visuais

- Listras diagonais (45deg) como textura de fundo
- Bordas grossas e angulares (3px-8px)
- Molduras vermelhas com glow/sombra
- Layouts assimétricos com sobreposições
- Box-shadows coloridos para criar profundidade

---

## 📐 Estrutura do Layout (Seções)

### 1. HEADER (Fundo Amarelo)

**Objetivo**: Apresentação impactante com logo gigante + sprite do mecha

**Layout Desktop**:

```
┌─────────────────────────────────────────────────────┐
│  GUNDAM                              ┌──────────┐   │
│  PORTFOLIO        POSTER VOL. 3      │  🤖      │   │
│                                      │ RX-78-2  │   │
│                                      └──────────┘   │
└─────────────────────────────────────────────────────┘
```

**Estrutura HTML**:

```html
<header class="header">
  <div class="header-content">
    <!-- ESQUERDA: Logo -->
    <div class="header-left">
      <div class="header-top">
        <div>
          <h1 class="logo">GUNDAM</h1>
          <p class="tagline">PORTFOLIO</p>
        </div>
      </div>
    </div>

    <!-- DIREITA: Sprite do Mecha -->
    <div class="header-mecha">
      <div class="mecha-frame">
        <div class="mecha-sprite">
          <!-- Aqui vai a sprite animada do Gundam -->
          <!-- Por enquanto: emoji 🤖 ou imagem estática -->
        </div>
      </div>
      <div class="mecha-label">RX-78-2</div>
    </div>
  </div>
</header>
```

**CSS Principal**:

```css
.header {
  background: var(--yellow-primary);
  padding: 60px 20px;
  position: relative;
  overflow: hidden;
}

/* Padrão de listras diagonais */
.header::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    45deg,
    transparent,
    transparent 10px,
    rgba(0, 0, 0, 0.1) 10px,
    rgba(0, 0, 0, 0.1) 20px
  );
  pointer-events: none;
}

.header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 60px;
}

.logo {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(4rem, 12vw, 8rem);
  line-height: 0.85;
  letter-spacing: -4px;
  color: var(--black);
}

.mecha-frame {
  width: clamp(280px, 35vw, 450px);
  aspect-ratio: 1;
  background: var(--gray);
  border: 8px solid var(--red);
  box-shadow: 0 0 40px rgba(220, 38, 38, 0.4);
}
```

**Detalhes Importantes**:

- Logo "GUNDAM" deve ser GIGANTE (8rem no desktop)
- "POSTER VOL. 3" em texto vertical (writing-mode: vertical-rl)
- Quadrado do mecha tem borda vermelha grossa (8px)
- Label "RX-78-2" posicionado absolutamente abaixo do quadrado
- Responsivo: flex-direction: column no mobile

---

### 2. TOGGLE SECTION (CODE/ART)

**Objetivo**: Botões para alternar entre portfolios de código e arte

**Layout**:

```
┌─────────────────────────────────────────────────────┐
│              ┌──────────┐  ┌──────────┐             │
│              │   CODE   │  │   ART    │             │
│              └──────────┘  └──────────┘             │
└─────────────────────────────────────────────────────┘
```

**Estrutura HTML**:

```html
<section class="toggle-section">
  <div class="toggle-container">
    <button class="toggle-btn code">CODE</button>
    <button class="toggle-btn art">ART</button>
  </div>
</section>
```

**CSS Principal**:

```css
.toggle-section {
  background: var(--black);
  padding: 40px 20px;
  border-top: 4px solid var(--yellow-primary);
  border-bottom: 4px solid var(--yellow-primary);
}

.toggle-container {
  display: flex;
  justify-content: center;
  gap: 0;
}

.toggle-btn {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 32px;
  padding: 20px 60px;
  border: none;
  cursor: pointer;
  letter-spacing: 2px;
}

.toggle-btn.code {
  background: var(--white);
  color: var(--black);
}

.toggle-btn.art {
  background: var(--black);
  color: var(--white);
  border: 3px solid var(--white);
}
```

**Detalhes Importantes**:

- Botões lado a lado sem gap
- Hover: translateY(-2px) + mudança de cor
- CODE: fundo branco | ART: fundo preto com borda
- Responsivo: empilhar verticalmente no mobile

---

### 3. HERO SECTION (Featured Projects)

**Objetivo**: Destacar 2 projetos principais em boxes coloridos

**Layout**:

```
┌──────────────────────┐  ┌──────────────────────┐
│ SPA BOOKING WEB      │  │ BLOG WEBSITE         │
│ Description...       │  │ Description...       │
└──────────────────────┘  └──────────────────────┘
```

**Estrutura HTML**:

```html
<section class="hero">
  <div class="info-box">
    <h2>SPA BOOKING WEB</h2>
    <p>Description of the project...</p>
  </div>

  <div
    class="info-box"
    style="background: var(--black); color: var(--yellow-primary); border: 3px solid var(--yellow-primary)"
  >
    <h2>BLOG WEBSITE</h2>
    <p>Description of the project...</p>
  </div>
</section>
```

**CSS Principal**:

```css
.hero {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.info-box {
  background: var(--yellow-primary);
  color: var(--black);
  padding: 30px;
  position: relative;
}

/* Padrão de linhas horizontais */
.info-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0, 0, 0, 0.05) 2px,
    rgba(0, 0, 0, 0.05) 4px
  );
  pointer-events: none;
}
```

**Detalhes Importantes**:

- Grid responsivo (auto-fit, minmax)
- Primeiro box: fundo amarelo
- Segundo box: fundo preto com borda amarela
- Textura de linhas horizontais sutis

---

### 4. PROJECTS SECTION (Grid de Projetos)

**Objetivo**: Mostrar todos os projetos em cards com imagem + descrição + moldura

**Layout**:

```
PROJECTS ──────────────────────────────────────

┌─────────────┐  ┌─────────────┐  ┌─────────────┐
│   Image     │  │   Image     │  │   Image     │
│─────────────│  │─────────────│  │─────────────│
│ Title       │  │ Title       │  │ Title       │
│ Description │  │ Description │  │ Description │
│ [FRAME]     │  │ [FRAME]     │  │ [FRAME]     │
└─────────────┘  └─────────────┘  └─────────────┘
```

**Estrutura HTML**:

```html
<section class="projects-section">
  <div class="section-header">
    <h2 class="section-title">PROJECTS</h2>
    <div class="section-line"></div>
  </div>

  <div class="projects-grid">
    <article class="project-card">
      <div class="project-image">
        <!-- Imagem do projeto ou placeholder -->
      </div>
      <div class="project-info">
        <h3 class="project-title">PROJECT NAME</h3>
        <p class="project-description">Project description...</p>
        <div class="project-frame">TECH STACK: REACT • NODE.JS • MONGODB</div>
      </div>
    </article>
    <!-- Repetir para cada projeto -->
  </div>
</section>
```

**CSS Principal**:

```css
.section-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
}

.section-title {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 8vw, 5rem);
  color: var(--yellow-primary);
}

.section-line {
  flex: 1;
  height: 4px;
  background: var(--yellow-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
}

.project-card {
  background: var(--gray);
  border: 3px solid var(--yellow-primary);
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 40px rgba(244, 197, 66, 0.3);
}

.project-image {
  width: 100%;
  height: 250px;
  background: var(--black);
  border-bottom: 3px solid var(--yellow-primary);
}

.project-frame {
  border: 2px solid var(--blue-tech);
  padding: 15px;
  background: rgba(96, 165, 250, 0.05);
  color: var(--blue-tech);
  font-size: 12px;
  text-transform: uppercase;
}
```

**Detalhes Importantes**:

- Título "PROJECTS" + linha horizontal decorativa
- Grid auto-fit responsivo
- Cada card: imagem (250px) + info (padding 30px) + moldura
- Moldura customizável por projeto (cores diferentes)
- Hover: lift effect + shadow amarelo

---

### 5. DECORATIVE ELEMENTS

**Braço Robótico (Canto Inferior Direito)**:

```html
<div class="robot-arm">
  <div class="robot-arm-visual">🦾</div>
</div>
```

```css
.robot-arm {
  position: fixed;
  bottom: -100px;
  right: 40px;
  width: 200px;
  height: 300px;
  pointer-events: none;
  opacity: 0.3;
  z-index: 10;
}
```

**Detalhes**: Elemento decorativo fixo, semi-transparente, não interfere com cliques.

---

## 📱 Responsividade

### Breakpoints

```css
/* Tablet */
@media (max-width: 968px) {
  .header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .logo {
    font-size: 4rem;
  }

  .toggle-container {
    flex-direction: column;
  }

  .toggle-btn {
    width: 100%;
  }

  .mecha-frame {
    width: 100%;
    max-width: 300px;
  }
}
```

**Estratégia**:

- Desktop: layouts lado a lado, grids multi-coluna
- Tablet: reduzir colunas, ajustar tamanhos
- Mobile: empilhar verticalmente (flex-direction: column)

---

## 🎯 Fontes e Assets Necessários

### Fontes

```html
<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap"
  rel="stylesheet"
/>
```

### Imagens/Assets

1. **Sprite do Gundam**: Quadrado ~400x400px (por enquanto emoji 🤖)
2. **Sprite do Godzilla**: Para modo ART (futuro)
3. **Imagens de Projetos**: ~800x500px cada
4. **Braço Robótico**: PNG transparente ~200x300px
5. **Ícones**: Emojis ou SVGs para placeholders

---

## ⚙️ Funcionalidades (Estático MVP)

### O que NÃO fazer agora (futuro):

- ❌ Animação do sprite (deixar estático)
- ❌ Toggle CODE/ART funcional (botões sem JS)
- ❌ Parallax do braço robótico
- ❌ Transições entre estados

### O que fazer agora:

- ✅ Layout pixel-perfect seguindo mockup
- ✅ Hover states nos botões e cards
- ✅ Responsividade completa
- ✅ Estrutura HTML semântica
- ✅ CSS organizados e comentado

---

## 📦 Estrutura de Arquivos Sugerida

```
portfolio/
├── index.html
├── css/
│   ├── reset.css
│   ├── variables.css    (cores, fontes)
│   ├── layout.css       (header, sections, grid)
│   ├── components.css   (cards, buttons, boxes)
│   └── responsive.css   (media queries)
├── assets/
│   ├── images/
│   │   └── projects/    (fotos dos projetos)
│   └── sprites/
│       └── gundam.png   (sprite do mecha)
└── js/
    └── main.js          (vazio por enquanto)
```

---

## 🎨 Princípios de Design a Seguir

1. **Contraste Brutal**: Amarelo vibrante vs preto absoluto
2. **Tipografia Oversized**: Textos devem DOMINAR o espaço
3. **Bordas Grossas**: 3px mínimo, 8px para destaque
4. **Sem Gradientes Suaves**: Transições abruptas
5. **Assimetria Intencional**: Layouts quebrando grids
6. **Texturas Sutis**: Listras, linhas, patterns de fundo
7. **Shadows Coloridos**: Glow vermelho, amarelo, azul

---

## ✅ Checklist de Implementação

- [ ] Setup inicial (HTML boilerplate, fonts, reset CSS)
- [ ] Variáveis CSS com paleta de cores
- [ ] Header com logo gigante + mecha frame lado a lado
- [ ] Padrão de listras diagonais no header
- [ ] Toggle section com botões CODE/ART
- [ ] Hero section com 2 info boxes
- [ ] Projects section com título + grid
- [ ] Pelo menos 4 project cards
- [ ] Molduras customizáveis nos cards
- [ ] Hover states em botões e cards
- [ ] Braço robótico decorativo
- [ ] Responsividade mobile/tablet
- [ ] Testar em Chrome, Firefox, Safari
- [ ] Validar HTML semântico
- [ ] Comentários no código

---

## 🚨 Pontos de Atenção

1. **Fontes**: Bebas Neue é ESSENCIAL para a estética
2. **Aspect Ratio**: Quadrado do mecha deve ser perfeito (1:1)
3. **Z-index**: Label "RX-78-2" deve ficar sobre a moldura
4. **Overflow**: Header com overflow: hidden para conter texturas
5. **Pointer Events**: Texturas de fundo com pointer-events: none
6. **Performance**: Usar clamp() para tamanhos fluidos
7. **Acessibilidade**: Manter contraste WCAG AA mínimo

---

## 💡 Dica Final

Este é um **MVP estático**. O objetivo é ter a estrutura visual perfeita antes de adicionar animações. Foque em:

- Layout pixel-perfect
- Paleta de cores vibrante e consistente
- Tipografia impactante
- Responsividade fluida

A mágica das animações vem depois! 🚀

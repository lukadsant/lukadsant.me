# Prompt para Análise de Codebase - Feature Portfolio Pixel Art Interativo

## Contexto do Projeto

Preciso adicionar uma nova feature ao meu portfolio/landing page: um hero section interativo em estilo pixel art que funciona como um jogo, onde um personagem chibi barista serve "drinks" que transformam a página para mostrar diferentes portfolios.

## Feature Desejada

### Conceito Visual

- Cena de cafeteria pixel art com estética nostálgica mas moderna
- Personagem chibi como barista central
- Menu interativo de "drinks" (Drink de Código / Drink de Design)
- Ao escolher um drink, a página transforma para mostrar o portfolio correspondente

### Funcionalidades Principais

1. **Hero Section Interativo**: Cena pixel art com camadas separadas (fundo, prateleiras, personagem, itens)
2. **Sistema de Drinks**:
   - "Drink de Código" → Mostra projetos de desenvolvimento
   - "Drink de Design" → Mostra projetos de design
3. **Animações**:
   - Personagem com estados (idle, preparando drink, entregando)
   - Transições suaves entre estados
   - Itens das prateleiras mudam dinamicamente
4. **Responsividade**: Adaptação para mobile mantendo a experiência

### Abordagem Técnica (MVP)

- **Stack preferida**: HTML/CSS/Vanilla JS (sem dependências pesadas)
- **Estrutura**: Camadas com `position: absolute` e z-index
- **Animações**: CSS transitions + pequeno JS para controle de estado
- **Performance**: Leve e rápida, ideal para landing page

## Tarefas de Análise

Por favor, analise minha codebase e responda:

### 1. Análise Estrutural

- [ ] Qual é a stack tecnológica atual? (Framework, build tools, etc)
- [ ] Como está organizada a estrutura de pastas?
- [ ] Existe um sistema de componentes? Como funciona?
- [ ] Qual é o bundle size atual e budget de performance?

### 2. Viabilidade de Integração

- [ ] A feature pode ser integrada sem afetar código existente?
- [ ] Precisa de refatoração prévia? Se sim, qual?
- [ ] A stack atual é compatível com a abordagem Canvas+CSS proposta?
- [ ] Há conflitos potenciais com CSS/JS existente?

### 3. Pontos de Integração

- [ ] Onde exatamente no código atual essa feature deve ser adicionada?
- [ ] Quais arquivos precisariam ser criados?
- [ ] Quais arquivos existentes precisariam ser modificados?
- [ ] Como integrar com sistema de navegação/rotas existente?

### 4. Arquitetura Proposta

- [ ] Estrutura de pastas sugerida para os novos arquivos
- [ ] Nomes de componentes/módulos a criar
- [ ] Dependências necessárias (se houver)
- [ ] Padrões de código a seguir para manter consistência

### 5. Responsividade & Performance

- [ ] Como o sistema responsivo atual funciona? (breakpoints, metodologia)
- [ ] A feature pixel art pode seguir o mesmo padrão?
- [ ] Existem otimizações de performance já implementadas? (lazy loading, code splitting)
- [ ] Como garantir que a feature não afete métricas de performance (LCP, FID, CLS)?

### 6. Sistema de Conteúdo

- [ ] Como o portfolio atual gerencia conteúdo? (Hardcoded, CMS, JSON)
- [ ] Como integrar os projetos de "código" e "design" nesse sistema?
- [ ] Precisa de nova estrutura de dados?

### 7. Plano de Implementação

- [ ] Roadmap sugerido (passo a passo)
- [ ] Estimativa de tempo para implementação
- [ ] Possíveis bloqueios ou desafios técnicos
- [ ] Feature flags ou implementação progressiva necessária?

### 8. Alternativas & Recomendações

- [ ] Se a abordagem Canvas+CSS não for ideal, qual seria melhor?
- [ ] Há bibliotecas já no projeto que poderiam ajudar?
- [ ] Sugestões de otimização da implementação
- [ ] Compatibilidade com browsers/devices alvo

## Formato de Resposta Esperado

Por favor, estruture sua análise assim:

````markdown
# Análise de Viabilidade - Portfolio Pixel Art Interativo

## 📊 Overview da Codebase Atual

[Stack, estrutura, padrões usados]

## ✅ Viabilidade

**Status:** [VIÁVEL / VIÁVEL COM MODIFICAÇÕES / NÃO RECOMENDADO]
[Justificativa detalhada]

## 🏗️ Plano de Integração

### Arquivos a Criar

- `src/components/PixelArtHero/index.js`
- `src/components/PixelArtHero/styles.css`
- ...

### Arquivos a Modificar

- `src/pages/Home.js` - [O que mudar]
- ...

### Estrutura de Dados

```json
{
  "projects": {
    "code": [...],
    "design": [...]
  }
}
```
````

## 🎯 Implementação Passo a Passo

**Fase 1: Setup (1 dia)**

1. Criar estrutura de pastas
2. ...

**Fase 2: Core Feature (2 dias)**

1. ...

**Fase 3: Polish & Responsividade (1 dia)**

1. ...

## ⚠️ Pontos de Atenção

- [Possíveis conflitos]
- [Desafios técnicos]
- [Considerações de performance]

## 💡 Recomendações Finais

- [Sugestões de otimização]
- [Melhorias adicionais]
- [Próximos passos após implementação]

```

## Informações Adicionais

### Prioridades
1. **Não quebrar funcionalidade existente** (principal)
2. Performance (página deve carregar < 3s)
3. Experiência mobile fluida
4. Código limpo e manutenível

### Browsers Alvo
- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- Mobile Safari & Chrome Mobile

### Assets Disponíveis
- Tenho a imagem de referência da estética pixel art
- Posso criar sprites separados se necessário
- Paleta de cores já definida

## Código da Codebase

[COLE AQUI O CÓDIGO DA SUA CODEBASE OU ESTRUTURA DE ARQUIVOS]

ou

[FORNEÇA ACESSO AO REPOSITÓRIO GITHUB]

---

**Nota**: Por favor, seja específico e prático nas recomendações. Prefiro soluções simples que funcionem a arquiteturas complexas.
```

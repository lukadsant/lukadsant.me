---
description: "Luka D'Sant - Engenheiro de Sistemas"
cases:
  - name: 'Sistema de Recrutamento com IA'
    category: 'AI & LLMs'
    icon: 'i-carbon-network-4'
    stack: ['FastAPI', 'Vue 3', 'Mistral 7B', 'Gemini API', 'PostgreSQL']
    problem: 'Triagem manual de currículos consumia mais de 10 horas semanais por vaga. A análise de centenas de PDFs era propensa a erros humanos, fadiga e vieses inconscientes na seleção.'
    solution:
      - 'Sistema automático com LLM para ranqueamento por relevância em menos de 2 minutos.'
      - 'Busca híbrida avançada (BM25 + embeddings vetoriais) para capturar o contexto exato das vagas.'
      - 'Camada de sanitização de dados sensíveis via GLiNER para garantir privacidade (LGPD).'
      - 'Integração transparente com o pipeline de recrutamento já existente da empresa.'
    tradeoffs:
      - question: 'Mistral 7B local vs GPT-4?'
        reasons:
          - 'Privacidade garantida (dados de candidatos não saem do servidor local).'
          - 'Custo marginal de inferência comparado a milhares de chamadas GPT-4 mensais.'
      - question: 'BM25 + Vetorial vs Só embeddings?'
        reasons:
          - 'BM25 captura keywords exatas exigidas nas vagas (ex: "Postgres", "SQL").'
          - 'Embeddings capturam similaridade semântica para skills relacionadas.'
          - 'Juntos: alcançaram 95% de recall, contra 78% usando apenas uma abordagem.'
      - question: 'FastAPI + Vue 3?'
        reasons:
          - 'FastAPI suporta picos de carga (1k+ CVs/segundo) com excelente performance assíncrona.'
          - 'Type safety ponta a ponta (Pydantic + TypeScript) reduz bugs drásticamente.'
    results:
      - 'Triagem completa em 2 minutos (antes: 10+ horas).'
      - 'Redução de viés em 40% nas fases iniciais.'
      - 'ROI: O sistema pagou seus custos de desenvolvimento em apenas 2 meses.'
    learnings: 'Se tivesse feito de novo: teria usado Jina AI hybrid search desde o início em vez de implementar e manter o core BM25 manualmente.'

  - name: 'ETL Microsoft 365 → Relacional'
    category: 'Data Pipelines & ETL'
    icon: 'i-carbon-data-base'
    stack: ['Prefect', 'Python', 'PostgreSQL', 'Oracle', 'Graph API']
    problem: 'Dados críticos de projetos estavam presos no ecossistema Microsoft (Planner, Teams, SharePoint). A falta de integração forçava o trabalho duplo em planilhas isoladas, causando divergências nos relatórios gerenciais.'
    solution:
      - 'Pipeline de orquestração via Prefect extraindo dados da Graph API.'
      - 'Normalização de dados complexos aninhados em formato tabular relacional.'
      - 'Carga incremental no PostgreSQL (para aplicações web) e Oracle (para BI corporativo).'
    tradeoffs:
      - question: 'Prefect vs Airflow?'
        reasons:
          - 'Menor overhead de infraestrutura inicial e setup mais amigável ao ambiente Windows da empresa.'
          - 'Facilidade de escrever decorators nativos em Python puro para observability.'
      - question: 'Batch vs Streaming?'
        reasons:
          - 'A latência de relatórios (D+1) permitiu usar Batch processing rodando de madrugada.'
          - 'Complexidade de infraestrutura reduzida e zero concorrência com acessos diurnos de usuários.'
    results:
      - 'Centralização de 100% dos dados de planejamento.'
      - 'Fim do retrabalho manual em 5 setores da empresa.'
      - 'Dashboards de BI agora refletem a realidade operacional D-0 sem falhas humanas.'
    learnings: 'Lidar com limites de rateio da Microsoft Graph API requer estratégias pesadas de Exponential Backoff, algo que subestimei nas primeiras execuções massivas.'

  - name: 'Bleach Poems (Poetry-as-a-Service)'
    category: 'High Performance & Architecture'
    icon: 'i-carbon-flash'
    stack: ['Go', 'React', 'PostgreSQL', 'Redis', 'Docker', 'SSE']
    problem: 'Em aplicações tradicionais, usar `ORDER BY RANDOM()` no Postgres causa exaustão de CPU, e somar visualizações (`UPDATE views = views + 1`) gera concorrência severa e locks transacionais durante picos de tráfego. Além disso, short-polling para atualizações em tempo real saturaria rapidamente o servidor.'
    solution:
      - 'Ecossistema CQRS (Separação de Escrita e Leitura), utilizando Postgres como Fonte da Verdade e Redis como Cache O(1) de alta performance.'
      - 'Event-Driven Architecture (EDA) assíncrona via Redis Streams para analytics e mensageria.'
      - 'Server-Sent Events (SSE) através de um broker otimizado em Golang para Push Notifications em tempo real.'
      - 'Motor customizado de SSR no backend para gerar tags Open Graph dinâmicas, garantindo indexação (SEO) por crawlers.'
    tradeoffs:
      - question: 'CQRS (Postgres + Redis) vs Apenas PostgreSQL?'
        reasons:
          - 'Postgres garante integridade (ACID) na inserção de novos poemas pelo Admin.'
          - 'Redis cuida das leituras e sorteios aleatórios via eventos. `SRANDMEMBER` sorteia IDs nativamente em O(1), blindando o banco relacional.'
      - question: 'Server-Sent Events (SSE) vs WebSockets?'
        reasons:
          - 'O domínio "Poema Ao Vivo" é estritamente unidirecional (Servidor -> Cliente).'
          - 'WebSockets traria overhead duplex desnecessário. SSE consome menos recursos, é nativo sobre HTTP e possui reconexão automática.'
      - question: 'Event Sourcing (Analytics) vs UPDATE Direto no DB?'
        reasons:
          - 'Ao invés de travar a linha de registro por clique, o app publica um evento super leve `PoemViewed` no Redis Stream e já responde ao usuário instantaneamente.'
          - 'Um Worker em Go processa o stream em background (usando `ZINCRBY`), gerando o Top 5 Poemas instantaneamente sem tocar em disco.'
    results:
      - 'Latência de leitura drasticamente reduzida para sub-10ms (frações de milissegundo).'
      - 'Custo marginal de infraestrutura: suporta picos de milhares de conexões simultâneas com uso mínimo de memória e CPU (graças a Goroutines + Redis).'
      - 'Melhoria absurda na indexabilidade em redes sociais e Google usando links com JSON-LD embutido gerados pelo Go.'
    learnings: "Se tivesse feito de novo: Teria começado o frontend direto em um framework SSR nativo (Next.js) em vez de React (Vite) client-side. Isso pouparia a criação de um motor customizado de renderização/roteamento no backend Go apenas para resolver SEO de SPA."
---

<!-- @layout-full-width -->

<div class="min-h-screen w-full bg-blue-dark text-white font-inter relative pb-10">
  <PortfolioHero />
  <PortfolioContent :cases="frontmatter.cases" />
  <PortfolioFooter />
</div>

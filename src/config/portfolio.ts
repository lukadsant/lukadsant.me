export interface Badge {
  text: string
  type: 'primary' | 'secondary' | 'highlight'
}

export interface PortfolioStack {
  title: string
  description: string
  badges: Badge[]
  specializations: string[]
  status: string
  image: string
  mechaLabel: string
}

export const stacks: Record<string, PortfolioStack> = {
  all: {
    title: 'Full-Stack Developer & Artist',
    description: 'Engenharia de software que resolve problemas reais + design que as pessoas lembram. Código sólido, interfaces memoráveis.',
    badges: [
      { text: 'FULL-STACK', type: 'primary' },
      { text: 'DIGITAL ART', type: 'secondary' },
      { text: 'VFX', type: 'highlight' },
    ],
    specializations: [
      '• Sistemas escaláveis desde 2022',
      '• Arte digital profissional (SAGA)',
      '• Automação + Criatividade aplicada',
    ],
    status: 'SYSTEM: ALL_MODES_ACTIVE',
    image: '/pixel-hero/barista.png',
    mechaLabel: 'BARISTA',
  },
  code: {
    title: 'Full-Stack Developer',
    description: 'Construo backends que não quebram e frontends que funcionam. EdTech desde 2022. Go, Python, C# — stack escolhida para durar, não para impressionar.',
    badges: [
      { text: 'GO', type: 'primary' },
      { text: 'PYTHON', type: 'primary' },
      { text: 'C# / .NET', type: 'secondary' },
      { text: 'POSTGRESQL', type: 'secondary' },
      { text: 'DOCKER', type: 'secondary' },
      { text: 'EDTECH', type: 'highlight' },
    ],
    specializations: [
      '• Arquitetura de microsserviços confiável',
      '• APIs REST robustas + integração de dados',
      '• Infraestrutura observável e segura',
    ],
    status: 'SYST: ACTIVE_CORE_01',
    image: '/pixel-hero/gdan.png',
    mechaLabel: 'RX-78-2',
  },
  design: {
    title: 'Digital Artist & Designer',
    description: 'Formação SAGA (2021-2023) em CGI, animação e VFX. Do conceito ao pixel final — arte que comunica, não apenas decora.',
    badges: [
      { text: 'PHOTOSHOP', type: 'primary' },
      { text: 'ILLUSTRATOR', type: 'primary' },
      { text: 'AFTER EFFECTS', type: 'secondary' },
      { text: 'PREMIERE PRO', type: 'secondary' },
      { text: 'BLENDER', type: 'secondary' },
      { text: 'VFX / CGI', type: 'highlight' },
    ],
    specializations: [
      '• Computação gráfica + arte vetorial',
      '• Animação 2D/3D profissional',
      '• Composição de vídeo e matte painting',
    ],
    status: 'VISUAL: RENDER_ACTIVE',
    image: '/gojira.png',
    mechaLabel: 'GOJIRA',
  },
}

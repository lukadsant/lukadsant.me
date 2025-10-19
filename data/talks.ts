import type { Talk } from '~/types'

export const talks: Talk[] = [
  {
    series: 'PIBIC 2025',
    title: 'Camadas Médias e o seu Espaço Escolar',
    description: 'Discutindo e etnografando noção de pessoa, morte-vida e poder-desigualdades em duas escolas particulares de Recife',
    presentations: [
      {
        lang: 'en',
        date: '2025-10-22',
        location: 'Recife/PE, Brazil',
        conference: 'CONIC/UFPE',
        conferenceUrl: 'https://vueconf.cn/',
        pdf: 'https://drive.google.com/file/d/10oWGvcQY_Pvab1ScMrhYa6_fbyB_awLY/view?usp=sharing',
        spa: 'https://www.canva.com/design/DAG2DzVAbsw/ZXh4Lwx-fAmmhKYFqo9kXA/view?utm_content=DAG2DzVAbsw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hea3d2b26a5',
      },

    ],
  },
  {
    series: 'TCC',
    title: 'GERAÇÃO Z, TECNOLOGIA E EDUCAÇÃO',
    description: 'Análise dos efeitos da tecnologia móvel no desenvolvimento educacional',
    presentations: [
      {
        date: '2025-12-12',
        location: 'Recife/PE, Brazil',
        conference: 'UFPE/TCC',
        lang: 'en',
        conferenceUrl: 'https://vue.w3ctech.com/',
        recording: 'https://www.bilibili.com/video/BV1XT421r7xy',
        pdf: 'https://talks.antfu.me/2024-07-06/pdf',
        spa: 'https://talks.antfu.me/2024/vueconf-shenzhen',
      },
    ],
  },
]

talks.forEach((talk) => {
  talk.presentations.sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime()
  })
})

talks.sort((a, b) => {
  return new Date(b.presentations[0].date).getTime() - new Date(a.presentations[0].date).getTime()
})

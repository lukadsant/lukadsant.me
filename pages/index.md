---
description: Luka D'Sant's Portfolio
projects:
  Featured:
    - name: 'SPA BOOKING WEB'
      link: 'https://github.com'
      desc: 'A web application that streamlines spa appointment scheduling.'
      type: 'code'
      icon: 'i-carbon-application'
    - name: 'CYBEROPS PLATFORM'
      link: 'https://github.com'
      desc: 'Investigating the depths of security and infrastructure.'
      type: 'code'
      icon: 'i-carbon-security'
---

<GundamPoster :projects="frontmatter.projects">
  <template #projects>
    <ListProjects :projects="frontmatter.projects" />
  </template>
</GundamPoster>

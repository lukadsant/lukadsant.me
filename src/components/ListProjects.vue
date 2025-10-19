<script setup lang="ts">
defineProps<{ projects: Record<string, any[]> }>()

function slug(name: string) {
  return name.toLowerCase().replace(/[\s\\/]+/g, '-')
}
</script>

<template>
  <div class="max-w-300 mx-auto px-4">
    <p text-center mt--6 mb5 op50 text-lg italic>
      Projetos que criei e participei
    </p>
    <div class="prose pb5 mx-auto mt10 text-center">
      <div flex="~ gap-2 justify-center">
        <a
          href="http://lattes.cnpq.br/6059128932814842 "
          target="_blank"
          class="group btn-blue inline-block"
        >
          <div
            i-simple-icons-discourse
            group-hover="i-simple-icons-discourse text-blue"
          />
          Lattes
        </a>
        <a
          href="https://drive.google.com/file/d/1ja_7ng_AUOCHEt7azTd6gOypzFQ1C9Da/view?usp=sharing"
          target="_blank"
          class="group btn-lime inline-block"
        >
          <div
            i-ri-graduation-cap-line
            group-hover="i-ri-graduation-cap-line  text-lime"
          />
          Curriculo
        </a>
      </div>
      <hr>
    </div>
    <div
      v-for="key, cidx in Object.keys(projects)" :key="key" slide-enter
      :style="{ '--enter-stage': cidx + 1 }"
    >
      <div
        :id="slug(key)"
        select-none relative h-auto md:h18 mt3 md:mt5 pointer-events-none slide-enter px-4 md:px-0
        :style="{
          '--enter-stage': cidx - 2,
          '--enter-step': '60ms',
        }"
      >
        <span text-2xl md:text-5em color-transparent absolute left-2 md:left--1rem top-0rem font-bold leading-1em text-stroke-1 md:text-stroke-1.5 text-stroke-hex-aaa op35 dark:op20>{{ key }}</span>
      </div>
      <div
        class="project-grid py-2 max-w-500 w-full md:w-max mx-auto px-4 md:px-0"
        grid="~ cols-1 md:cols-2 gap-3 md:gap-4 lg:cols-3"
      >
        <a
          v-for="item, idx in projects[key]"
          :key="idx"
          class="item relative flex items-center"
          :href="item.link"
          target="_blank"
          :title="item.name"
        >
          <div v-if="item.icon" class="pt-2 pr-3 md:pr-5 flex-shrink-0">
            <Slidev v-if="item.icon === 'slidev'" class="text-3xl md:text-4xl opacity-50" />
            <VueUse v-else-if="item.icon === 'vueuse'" class="text-3xl md:text-4xl opacity-50" />
            <VueReactivity v-else-if="item.icon === 'vue-reactivity'" class="text-3xl md:text-4xl opacity-50" />
            <VueDemi v-else-if="item.icon === 'vue-demi'" class="text-3xl md:text-4xl opacity-50" />
            <Unocss v-else-if="item.icon === 'unocss'" class="text-3xl md:text-4xl opacity-50" />
            <Vitest v-else-if="item.icon === 'vitest'" class="text-3xl md:text-4xl opacity-50" />
            <Elk v-else-if="item.icon === 'elk'" class="text-3xl md:text-4xl opacity-50" />
            <AnthonyFu v-else-if="item.icon === 'af'" class="text-3xl md:text-4xl opacity-50" />
            <div v-else class="text-2xl md:text-3xl opacity-50" :class="item.icon || 'i-carbon-unknown'" />
          </div>
          <div class="flex-auto min-w-0">
            <div class="text-sm md:text-normal truncate">{{ item.name }}</div>
            <div class="desc text-xs md:text-sm opacity-50 font-normal line-clamp-2" v-html="item.desc" />
          </div>
        </a>
      </div>
    </div>
  </div>
  <div>
    <div class="table-of-contents">
      <div class="table-of-contents-anchor">
        <div class="i-ri-menu-2-fill" />
      </div>
      <ul>
        <li v-for="key of Object.keys(projects)" :key="key">
          <a :href="`#${slug(key)}`">{{ key }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-grid a.item {
  background: transparent;
  font-size: 1rem;
  max-width: 100%;
  padding: 0.5rem 0.5rem 0.875rem;
}

@media (min-width: 768px) {
  .project-grid a.item {
    font-size: 1.1rem;
    padding: 0.5rem 0.875rem 0.875rem;
  }
}

.project-grid a.item:hover {
  background: #88888811;
}
</style>

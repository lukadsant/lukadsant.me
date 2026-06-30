<script setup lang="ts">
import { portfolioMode } from '../composables/usePortfolioMode'
import PortfolioAbout from './PortfolioAbout.vue'
import PortfolioArchitecture from './PortfolioArchitecture.vue'
import PortfolioBottomBar from './PortfolioBottomBar.vue'
import PortfolioCaseStudies from './PortfolioCaseStudies.vue'
import PortfolioDesignShowcase from './PortfolioDesignShowcase.vue'
import PortfolioTrust from './PortfolioTrust.vue'

defineProps<{ cases: any[] }>()
</script>

<template>
  <div class="max-w-6xl mx-auto w-full pt-10 relative z-0">
    <template v-if="portfolioMode === 'development'">
      <PortfolioArchitecture />
      <div class="mx-6 border-t border-white/8 mb-10" />
      <PortfolioCaseStudies :cases="cases" />
      <div class="mx-6 border-t border-white/8 mb-10" />
      <PortfolioTrust />
      <div class="mx-6 border-t border-white/8 mb-10" />
      <PortfolioAbout />
      <PortfolioBottomBar />
    </template>
    <template v-else-if="portfolioMode === 'design'">
      <PortfolioDesignShowcase />
    </template>
  </div>
</template>

import { ref } from 'vue'

export type PortfolioMode = 'development' | 'design'

export const portfolioMode = ref<PortfolioMode>('development')

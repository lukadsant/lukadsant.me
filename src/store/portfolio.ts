import { defineStore } from 'pinia'

export type PortfolioView = 'all' | 'code' | 'design'

export const usePortfolioStore = defineStore('portfolio', () => {
  const currentView = ref<PortfolioView>('all')
  const isTransforming = ref(false)

  async function setView(view: PortfolioView) {
    if (currentView.value === view)
      return

    isTransforming.value = true

    // Sincroniza com a animação de "preparar drink"
    await new Promise(resolve => setTimeout(resolve, 600))

    if (document.startViewTransition) {
      document.startViewTransition(() => {
        currentView.value = view
      })
    }
    else {
      currentView.value = view
    }

    isTransforming.value = false
  }

  return {
    currentView,
    isTransforming,
    setView,
  }
})

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWind3,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'bg-base': 'bg-white dark:bg-black',
      'color-base': 'text-black dark:text-white',
      'border-base': 'border-[#8884]',
      'gundam-yellow': 'bg-[#f4c542] text-black',
      'gundam-red': 'bg-[#dc2626] text-white',
      'gundam-black': 'bg-black text-white',
      'gundam-stripes': 'relative before:content-[""] before:absolute before:inset-0 before:bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(0,0,0,0.1)_10px,rgba(0,0,0,0.1)_20px)] before:pointer-events-none',
    },
    [/^btn-(\w+)$/, ([_, color]) => `op50 px2.5 py1 transition-all duration-200 ease-out no-underline! hover:(op100 text-${color} bg-${color}/10) border border-base! rounded`],
  ],
  theme: {
    colors: {
      gundam: {
        yellow: '#f4c542',
        red: '#dc2626',
        black: '#000000',
        gray: '#2a2a2a',
        blue: '#60a5fa',
        green: '#4ade80',
      },
      sage: {
        DEFAULT: '#87A483',
        light: '#A5C0A1',
        dark: '#6C8B68',
      },
      forest: {
        DEFAULT: '#18311B',
        light: '#2A4A2E',
      },
      lime: {
        DEFAULT: '#D6F34C',
        hover: '#E3FA75',
      },
      offwhite: '#F8F9F5',
      blue: {
        main: '#5C8DB8',
        dark: '#2F4F6F',
        light: '#A7C7E7',
      },
      green: {
        vibrant: '#7ED957',
        dark: '#2E7D32',
      },
      neutral: {
        soft: '#F5F7FA',
        light: '#DCE3EA',
        dark: '#2B2B2B',
      },
    },
    fontFamily: {
      sans: 'var(--font-sans)',
      mono: 'var(--font-mono)',
      display: 'var(--font-display)',
      outfit: '"Outfit", sans-serif',
      inter: '"Inter", sans-serif',
    },
  },
  rules: [
    [/^slide-enter-(\d+)$/, ([_, n]) => ({
      '--enter-stage': n,
    })],
  ],
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetAttributify(),
    presetWind3(),
    // presetWebFonts({
    //   fonts: {
    //     sans: 'Inter',
    //     mono: 'Space Mono',
    //     display: 'Bebas Neue',
    //     condensed: 'Roboto Condensed',
    //     wisper: 'Bad Script',
    //   },
    //   processors: createLocalFontProcessor(),
    // }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  safelist: [
    'i-ri-menu-2-fill',
  ],
})

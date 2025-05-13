// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['MedReg', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}

export default config

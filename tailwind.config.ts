import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FFFFFF',
        s1: '#F5F7FA',
        s2: '#EDF0F5',
        ink: '#0A0F1A',
        ink2: '#3A4A5C',
        ink3: '#6B7B8D',
        ink4: '#A0ABB8',
        gold: '#1A6FE8',
        gold2: '#3584F0',
      },
      fontFamily: {
        disp: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1160px',
      },
      letterSpacing: {
        label: '0.3em',
        nav: '0.16em',
        disp: '0.025em',
        wide: '0.1em',
      },
      lineHeight: {
        hero: '0.88',
      },
    },
  },
  plugins: [],
}

export default config

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
        bg: '#F8F7F4',
        s1: '#F1F0EB',
        s2: '#E9E7E0',
        ink: '#111110',
        ink2: '#54524C',
        ink3: '#9E9C96',
        ink4: '#C8C6BE',
        gold: '#9A7428',
        gold2: '#B88C3A',
      },
      fontFamily: {
        disp: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'sans-serif'],
      },
      maxWidth: {
        wrap: '1160px',
      },
      letterSpacing: {
        label: '0.24em',
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

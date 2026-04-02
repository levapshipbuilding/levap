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
        bg: '#0C0C0C',
        s1: '#131313',
        s2: '#1A1A1A',
        ink: '#FFFFFF',
        ink2: '#999999',
        ink3: '#666666',
        ink4: '#3D3D3D',
        gold: '#FF6B00',
        gold2: '#FF8534',
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

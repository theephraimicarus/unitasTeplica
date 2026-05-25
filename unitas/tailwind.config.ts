import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors:{
      'bluenitas': '#012885',
      'whitenitas': '#FAF9F5',
      'nitas-beige': '#E9E5D3',
      'nitas-text': '#405482',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-inter)'],
      },
      fontSize: {
        'display-lg': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'display-md': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75', letterSpacing: '0.005em' }],
      },
      spacing: {
        gutter: '1.5rem',
        section: '3rem',
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        ease: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      boxShadow: {
        'sm-depth': '0 2px 8px rgba(1, 40, 133, 0.08)',
        'md-depth': '0 4px 16px rgba(1, 40, 133, 0.12)',
        'lg-depth': '0 8px 32px rgba(1, 40, 133, 0.16)',
        'inner-soft': 'inset 0 1px 2px rgba(1, 40, 133, 0.06)',
      },
      backdropBlur: {
        xs: '2px',
      },
    }
  },
  plugins: [],
};
export default config;

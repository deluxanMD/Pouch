/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0e7490',
        'primary-light': '#22d3ee',
        'primary-dark': '#155e75',
        'background-light': '#f3f4f6',
        'surface-white': '#ffffff',
        'text-main': '#111827',
        'text-sub': '#6b7280',
        'accent-cyan': '#06b6d4',
        'accent-purple': '#a855f7',
        'accent-rose': '#f43f5e',
        'accent-amber': '#f59e0b',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
      boxShadow: {
        glow: '0 0 20px -5px rgba(14, 116, 144, 0.3)',
        card: '0 10px 15px -3px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.025)',
        float: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};

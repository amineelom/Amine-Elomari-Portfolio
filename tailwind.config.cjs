/* eslint-disable no-undef */
// Tailwind CSS configuration for neon theme
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: '#ff00cc',
          blue: '#00eaff',
          green: '#39ff14',
          yellow: '#fff700',
        },
        dark: '#0a0a0a',
        card: '#18181b',
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        neon: '0 0 8px #00eaff, 0 0 16px #00eaff',
        'neon-pink': '0 0 8px #ff00cc, 0 0 16px #ff00cc',
        'neon-green': '0 0 8px #39ff14, 0 0 16px #39ff14',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.neon-underline::after': {
          content: '""',
          display: 'block',
          height: '0.25rem',
          'background-color': '#00eaff',
          'border-radius': '9999px',
          'margin-top': '0.25rem',
        },
      });
    },
  ],
};
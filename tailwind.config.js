const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', ...defaultTheme.fontFamily.sans],
        roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
        robotoMono: ['Roboto Mono', ...defaultTheme.fontFamily.mono],
      },
      colors: {
        mage: { DEFAULT: '#69CCF0' },
        priest: { DEFAULT: '#ffffff' },
        warlock: { DEFAULT: '#9482C9' },
        druid: { DEFAULT: '#FF7D0A' },
        rogue: { DEFAULT: '#FFF569' },
        monk: { DEFAULT: '#00FF96' },
        dh: { DEFAULT: '#A330C9' },
        shaman: { DEFAULT: '#0070DE' },
        hunter: { DEFAULT: '#ABD473' },
        warrior: { DEFAULT: '#C79C63' },
        paladin: { DEFAULT: '#F58CBA' },
        dk: { DEFAULT: '#C41F3b' },
      },
    },
  },
  variants: {
    extend: { backgroundColor: ['dark'] },
  },
  plugins: [],
}

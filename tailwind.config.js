/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1210px'
    },
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        primary: '#3b3958',
        secondary: {
          DEFAULT: '#00fff0',
          500: '#00e4d7'
        },
        accent: {
          DEFAULT: '#1a34f5',
        },
        gray: {
          '100': '#f5f4fe',
          '150': '#EAEAF5',
          '180': '#D8D8E6',
          '200': '#cecdd8',
          '300': '#b5b4bd',
          '500': '#767588',
          '700': '#33334d',
          '800': '#29293d',
          '900': '#1b1b29',
        },
        violet: {
          '300': '#bebce4'
        },
        social: {
          'facebook': '#3f74ee',
          'twitter': '#2ab6ff',
          'instagram': '#f4417f',
          'twitch': '#9246ff',
          'youtube': '#ff3d55',
          'discord': '#7289d9',
        },
        info: '#23d2e2',
        danger: '#ff3d54',
        success: '#615dfa',
      },
      fontFamily: {
        base: [ '"Inter Variable", sans-serif' ],
        heading: [ '"Inter Variable", sans-serif' ]
      },
      fontSize: {
        '3xs': '0.625rem',
        '2xs': '0.6875rem',
        '2sm': '0.8125rem',
        '1.5xl': '1.375rem',
        '2.5xl': '1.6875rem',
        '3.5xl': '2.125rem',
        '5.5xl': '3.375rem',
        '6.5xl': '4.25rem'
      },
      letterSpacing: {
        tightest: '-0.06em'
      },
      lineHeight: {
        tighter: '1.1em',
        relaxed: '1.75em'
      },
      gap: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      margin: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      padding: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      inset: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
      },
      boxShadow: {
        '3xl': '0 10px 60px 0 rgba(27, 27, 41, .06)'
      },
      aspectRatio: {
        '14/9': '14 / 9'
      },
      animation: {
        'spike-roll': 'spike-roll .95s linear infinite alternate',
        'popper-pop-in': 'popper-pop-in .1s cubic-bezier(.2, 0, .38, .9) forwards',
        'ring': 'ring 4s ease infinite',
        'dash': 'dash 180s linear alternate',
        'fade': 'fade 0.3s ease',
      },
      keyframes: {
        'spike-roll': {
          "0%" : { backgroundSize: "4px 4px" },
          "12.5%": { backgroundSize: "4px 40px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px" },
          "25%": { backgroundSize: "4px 30px, 4px 40px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px" },
          "37.5%": { backgroundSize: "4px 10px, 4px 30px, 4px 40px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px" },
          "50%": { backgroundSize: "4px 4px, 4px 10px, 4px 30px, 4px 40px, 4px 4px, 4px 4px, 4px 4px, 4px 4px" },
          "62.5%": { backgroundSize: "4px 4px, 4px 4px, 4px 10px, 4px 30px, 4px 40px, 4px 4px, 4px 4px, 4px 4px" },
          "75%": { backgroundSize: "4px 4px, 4px 4px, 4px 4px, 4px 10px, 4px 30px, 4px 40px, 4px 4px, 4px 4px" },
          "87.5%": { backgroundSize: "4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 10px, 4px 30px, 4px 40px, 4px 4px" },
          "100%": { backgroundSize: "4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 4px, 4px 10px, 4px 30px, 4px 40px" }
        },
        'popper-pop-in': {
          '0%': { opacity: "0", transform: "scale(0.9)" },
          '100%': { opacity: "1", transform: "scale(1)" }
        },
        'ring': {
          '0%': { transform: "rotate(-15deg)" },
          '2%': { transform: "rotate(15deg)" },
          '4%': { transform: "rotate(-18deg)" },
          '6%': { transform: "rotate(18deg)" },
          '8%': { transform: "rotate(-22deg)" },
          '10%': { transform: "rotate(22deg)" },
          '12%': { transform: "rotate(-18deg)" },
          '14%': { transform: "rotate(18deg)" },
          '16%': { transform: "rotate(-12deg)" },
          '18%': { transform: "rotate(12deg)" },
          '20%': { transform: "rotate(0deg)" },
        },
        'dash': {
          '0%': { strokeDashoffset: "1000" },
          '100%': { strokeDashoffset: "0" },
        },
        'fade': {
          '0%': { opacity: "0" },
          '100%': { opacity: "1" }
        }
      }
    }
  },
  plugins: [],
}


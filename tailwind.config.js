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
        primary: {
          DEFAULT: '101 76 255 / <alpha-value>)',
          '500': '78 55 222 / <alpha-value>)',
        },
        accent: {
          DEFAULT: "#3b3958", // for light #00dbc9 for dark ##00ffea
        },
        gray: {
          '100': '#f5f4fe',
          '150': '#EAEAF5',
          '180': '#D8D8E6',
          '200': '#cecdd8',
          '300': '#b5b4bd',
          DEFAULT: '#a3a9c1',
          '500': '#7a809b',
          '600': '#303448',
          '650': '#3d4151',
          '700': '#20222e',
          '800': '#1c1e28',
          '900': '#151720',
        },
        violet: {
          '300': '#bebce4'
        },
        social: {
          'facebook': '#3b57fc',
          'twitter': '#17a5ff',
          'instagram': '#f7337d',
          'twitch': '#654cff',
          'discord': '#7289da',
          'patreon': '#f75e49'
        },
        info: '#23d2e2',
        danger: '#ff3d54',
        success: '#615dfa',
      },
      fontFamily: {
        base: [ '"Rajdhani", sans-serif' ],
        heading: [ '"Rajdhani", sans-serif' ]
      },
      fontSize: {
        '3xs': '0.625rem',
        '2xs': '0.6875rem',
        '2sm': '0.8125rem',
        'sm': ["0.875rem", "1.375rem"],
        base: ["1rem", "2em"],
        '1.5xl': '1.375rem',
        '2.5xl': '1.6875rem',
        '3.5xl': '2.125rem',
        '5.5xl': '3.375rem',
        '6.5xl': '4.25rem',
        '9.5xl': '8.75rem',
        '10.5xl': '10.625rem',
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
        // 6.5: "1.625rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        // 15: "3.75rem",
        // 25: "6.25rem",
      },
      margin: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        // 6.5: "1.625rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        // 15: "3.75rem",
        // 25: "6.25rem",
      },
      padding: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        // 6.5: "1.625rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        // 15: "3.75rem",
        // 25: "6.25rem",
      },
      inset: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        // 6.5: "1.625rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        // 15: "3.75rem",
        // 25: "6.25rem",
      },
      spacing: {
        4.5: "1.125rem",
        5.5: "1.375rem",
        // 6.5: "1.625rem",
        7.5: "1.875rem",
        12.5: "3.125rem",
        // 15: "3.75rem",
        // 25: "6.25rem",
      },
      backgroundPosition: {
        'spike-roll': '0px center, 8px center, 16px center, 24px center, 32px center, 40px center, 48px center, 56px center, 64px center'
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


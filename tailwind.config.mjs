/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#eff4fc',
          100: '#d9e6f7',
          200: '#b3ceef',
          300: '#7aaada',
          500: '#3a72be',
          600: '#1a4fa8',  // primary accent
          700: '#143f88',
          800: '#0e2e64',
          900: '#0a2149',
        },
        ink: {
          DEFAULT: '#1a2440',
          light:   '#3d4f6b',
          muted:   '#6b7a94',
        },
        warm: {
          DEFAULT: '#f9f8f5',
          50:      '#f9f8f5',
          100:     '#f2f0eb',
          200:     '#e8e4db',
          border:  '#dddad2',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      maxWidth: {
        content: '1100px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1a2440',
          },
        },
      },
    },
  },
  plugins: [],
};

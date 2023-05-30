/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'cream': '#f8f2e3',
      },
      textColor: {
        'cream': '#f8f2e3',
        'creamcicle': '#ffa76c',
        'dirt': '#917664',
      },
      backgroundColor: {
        'cream': '#f8f2e3',
      },
      borderColor: {
        'cream': '#f8f2e3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

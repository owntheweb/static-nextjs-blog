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
                cream: '#FBF6EA',
            },
            textColor: {
                cream: '#FBF6EA',
                creamcicle: '#ffa76c',
                dirt: '#917664',
            },
            backgroundColor: {
                cream: '#FBF6EA',
            },
            borderColor: {
                cream: '#FBF6EA',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

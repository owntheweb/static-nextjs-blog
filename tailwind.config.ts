import type { Config } from 'tailwindcss';

export const colors = {
    cream: '#FBF6EA',
    creamcicle: '#ffa76c',
    dirt: '#7C6455',
    mud: '#3e2127',
    mudraised: '#482627'
};

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                cream: colors.cream,
                creamcicle: colors.creamcicle,
                dirt: colors.dirt,
                mud: colors.mud,
                mudraised: colors.mudraised
            }
        },
    },
    plugins: [require('@tailwindcss/typography')],
}

export default config;
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundColor: {
                primary: 'var(--color-bg-primary)',
            },
            textColor: {
                primary: 'var(--color-text-primary)',
                secondary: 'var(--color-text-secondary)',
                accent: 'var(--color-text-accent)',
            },
            fontFamily: {
                primary: 'var(--default-font-family)',
            },
            boxShadow: {
                darkShadow: '0px 5px 30px 0px #A445ED',
            },
        },
    },
    plugins: [],
};

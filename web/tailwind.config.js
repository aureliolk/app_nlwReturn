module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            colors: {
                brand: {
                    300: '#996dff',
                    500: '#8257e6'
                },
                ligth: {
                    primary: '#FFFFFF',
                    secondary: '#F4F4F5',
                    shover: '#E4E4E7',
                    stroke: '#D4D4D8',
                    tooltip: '#27272A',
                    textprimary: '#27272A',
                    textsecondary: '#71717A',
                    textontoltip: '#F4F4F5'

                },
                dark: {
                    primary: '#18181B',
                    secondary: '#27272A',
                    shover: '#3F3F46',
                    stroke: '#52525B',
                    tooltip: '#F4F4F5',
                    textprimary: '#F4F4F5',
                    textsecondary: '#A1A1AA',
                    textontoltip: '#27272A'
                }
            },
            borderRadius: {
                md: '4px',
            }
        },
    },
    darkMode: 'class',
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwind-scrollbar'),
    ],
}
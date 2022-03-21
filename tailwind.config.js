module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'cta-gradient':
                    'linear-gradient(45deg, #ff0000, #ff7300, #fffb00, #48ff00, #00ffd5, #002bff, #7a00ff, #ff00c8, #ff0000)',
            },
            colors: {
                'main-background': '#030812',
                'text-dark': '#3C485D',
                'text-darker': '#202123',
                'text-blue': '#8393AF',
                'border-blue': '#10599f',
                'background-main': '#030812',
                'text-pink': '#FD3E71',

                'button-blue': '#24478c',

                'form-gray': '#252525',

            },

            fontFamily: {
                display: [],
            },
        },
    },
    plugins: [],
}

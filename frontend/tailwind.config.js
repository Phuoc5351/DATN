// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.mask-fade-top': {
                    maskImage: 'linear-gradient(to bottom, transparent, white)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent, white)',
                },
            })
        },
    ],
}

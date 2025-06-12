// tailwind.config.js
export default {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                'brand-green': '#2ED573',
                'brand-dark': '#1C1D1F',
            },
            spacing: {
                '280px': '280px', // Thêm độ rộng của sidebar
            }
        },
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

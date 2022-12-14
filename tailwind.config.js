
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
		extend: {
			colors: {
				outlineGrey: {
					50: '#F0F0F0',
					100: '#999999'
				},
				hyperlinkGrey: {
					100: '#7A7A7A'
				}
			}
		},
		fontFamily: {
			'sans': ['Futura Condensed Extra Bold', 'sans-serif'],
			'serif': ['PT Mono', 'serif']
		},
		letterSpacing: {
			wide: '0.02em'
		}
    },
    plugins: [],
};

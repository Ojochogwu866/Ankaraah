/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				urbanist: ['Urbanist', 'sans-serif'],
				lato: ['lato', 'sans-serif'],
			},
			animation: {
				ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
			},
			keyframes: {
				ping: {
					'75%, 100%': {
						transform: 'scale(2)',
						opacity: '0',
					},
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
			},
		},
	},
	variants: {
		extend: {
			opacity: ['group-hover'],
		},
	},
	plugins: [],
}

const colors = require('tailwindcss/colors');
module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			colors: {
				transparent: 'transparent',
				current: 'currentColor',
				primary: '#0070f3',
				'primary-light': '#00a0f3',
				success: '#28a745',
				'success-dark': '#1f8d38',
			},
		},
	},
	plugins: [],
};

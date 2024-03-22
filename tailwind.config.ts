import type { Config } from 'tailwindcss';

const config: Config = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
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
				background: {
					DEFAULT: 'var(--background)',
					light: 'var(--background-light)',
				},
				foreground: {
					DEFAULT: 'var(--foreground)',
					muted: 'var(--foreground-muted)',
				},
				content: 'var(--content)',
				border: 'var(--border)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
			},
			borderColor: {
				DEFAULT: 'var(--border)',
			},
			animation: {
				rotate: 'rotate 30s linear infinite',
				'meteor-effect': 'meteor 5s linear infinite',
			},
			keyframes: {
				rotate: {
					to: {
						rotate: '360deg',
					},
				},
				meteor: {
					'0%': {
						transform: 'rotate(var(--rotation)) translateX(0)',
						opacity: '0',
					},
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(var(--rotation)) translateX(-500px)',
						opacity: '0',
					},
				},
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
export default config;

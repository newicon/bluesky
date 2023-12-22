/** @type {import('tailwindcss').Config} */
/*eslint-env node*/
const defaultTheme = require("tailwindcss/defaultTheme")

export default {
	content: [
		"./index.html",
		"./src/**/*.{vue,js,ts,jsx,tsx}",
	],
	theme: {
		extend: {

			fontFamily: {
				sans: ["Outfit","Inter", ...defaultTheme.fontFamily.sans],
				mono: ["RobotoMono", ...defaultTheme.fontFamily.mono],
			},

			colors: {
				'bg': 'var(--color-bg)',
				'primary': 'rgb(var(--color-primary) /  <alpha-value>)',
				'accent': 'rgb(var(--color-accent) /  <alpha-value>)',
				'secondary': 'rgb(var(--color-secondary) /  <alpha-value>)',
				'brand': {
					500: 'rgb(var(--color-brand-500) / <alpha-value>)'
				},
				'gray': {
					// 50 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 100 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 200 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 300 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 400 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 500 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 600 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 700 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 800 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					900 : 'rgb(var(--color-gray-900) / <alpha-value>)',
					// 950 : 'rgb(var(--color-gray-900) / <alpha-value>)',
				},
			}
		},
	},
	plugins: [],
}
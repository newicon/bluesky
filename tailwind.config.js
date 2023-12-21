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
				'gray': {
					900 : 'rgb(var(--color-gray-900) / <alpha-value>)'
				},
				'bg-accent': '#ccc'
			}
		},
	},
	plugins: [],
}
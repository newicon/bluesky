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
				sans: ["Inter", ...defaultTheme.fontFamily.sans],
				mono: ["RobotoMono", ...defaultTheme.fontFamily.mono],
			},
		},
	},
	plugins: [],
}
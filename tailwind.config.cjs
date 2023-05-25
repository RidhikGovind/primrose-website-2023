/** @type {import('tailwindcss').Config} */

const preline = require('preline/plugin');

module.exports = {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./public/**/*.astro',
		'node_modules/preline/dist/*.js',
	],
	theme: {
		extend: {},
	},

	plugins: [preline],
};

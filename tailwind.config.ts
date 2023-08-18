import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				aqua: '#54E6AF',
				'midnight-blue': '#2C344B',
				'navy-black': '#121725',
				'slate-blue': '#5A668A',
				'pastel-blue': '#C2CBE5',
			},
			backgroundImage: {
				dots: 'url("/assets/desktop/bg-pattern-dots.svg")',
			},
		},
	},
	plugins: [],
}
export default config

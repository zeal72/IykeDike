module.exports = {
	mode: "jit",
	content: [
		"./index.html",
		"./src/components/**/*.{js,jsx,ts,tsx}",
		"./src/**/*.html",
		"./src/**/*.js",
		"./src/**/*.jsx",
		"./src/**/*.ts",
		"./src/**/*.tsx",
	],
	darkMode: "media",
	theme: {
		extend: {
			boxShadow: {
				'custom-button': '0px 6.23px 9.35px rgba(0, 0, 0, 0.6), 0px 2.08px 3.12px rgba(0, 0, 0, 0.12), 0px 1.04px 1.04px rgba(0, 0, 0, 0.04)',
			},
			colors: {
				customGray: 'rgba(127, 127, 127, 1)',
			},
			fontFamily: {
				lato: ['Lato', 'sans-serif'],
				'work-sans': ['Work Sans', 'sans - serif'],
			},
		},
		screens: {
			xs: "480px",
			ss: "640px",
			md: "768px",
			lg: "1060px",
			// lg: "1200px",
			// xl: "1700px",
		},
	},
	variants: {
		extend: {
			// Add any custom variants here if needed
		},
	},
	plugins: [
		// Add any custom plugins here if needed
	],
};
/** @type {import('tailwindcss').Config} */
const base = 16

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}", "./constants/**/*.{js,jsx,ts,tsx}", "./hooks/**/*.{js,jsx,ts,tsx}", "./utils/**/*.{js,jsx,ts,tsx}", "./context/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#4894FE",
				secondary: "#f1c40f",
				danger: "#e74c3c",
				success: "#2ecc71",
				warning: "#ffeb3b",
				info: "#34495e",
				light: "#f8f9fa",
				dark: "#343a40",
			},
			fontFamily: {
				sans: ["Inter", "Arial", "sans-serif"],
			},
			fontSize: {
				xs: base * 0.75 + "px",
				sm: base * 0.875 + "px",
				base: base + "px",
				lg: base * 1.125 + "px",
				xl: base * 1.25 + "px",
				"2xl": base * 1.5 + "px",
				"3xl": base * 1.875 + "px",
				"4xl": base * 2.25 + "px",
				"5xl": base * 2.875 + "px",
				"6xl": base * 3.5 + "px",
				"7xl": base * 4.375 + "px",
				"8xl": base * 5.25 + "px",
				"9xl": base * 6 + "px",
			},
		},
	},
	plugins: [],
}

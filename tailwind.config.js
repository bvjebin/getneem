/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",

		// Or if using `src` directory:
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
      spacing: {
        "4.5": "1.12rem"
      },
			colors: {
				green: {
					primary: "#70C4BB",
				},
				blue: {
					primary: "#263446",
					secondary: "#9DA7BE",
					disabled: "#EFF1F5",
				},
				gray: {
					secondary: "#F8F9FB",
				},
			},
		},
	},
	plugins: [],
};

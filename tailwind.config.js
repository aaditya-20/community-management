/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        26: "repeat(26, minmax(0,1fr))",
      },
    },
    fontFamily: {
      'open-sans': ['Open Sans', 'sans-serif']
    }
  },
  plugins: [require("daisyui"),require("flowbite"),require('tailwind-scrollbar-hide')],

}
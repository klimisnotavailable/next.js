/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      "side-panel-bg": "rgba(17, 24, 39, 1)",
      "brand-primary": "rgba(233, 213, 255, 1)",
      "brand-secondary": "rgba(217, 249, 157, 1)",
      "text-main": " rgba(17, 24, 39, 1)",
      "text-light": "rgba(250, 250, 250, 1)",
      "bg-primary":"rgba(243, 244, 246, 1)",
      "green":{
        100:"#dcfce7",
        700:"#15803d"
      },
      red:{
        100:"#fee2e2",
        700:"#b91c1c"
      },
      orange:{
        100:"#ffedd5",
        700:"#c2410c"
      },
      blue:{
        100:"#dbeafe",
        700:"#1d4ed8"
      }



    },
  },
  plugins: [],
};

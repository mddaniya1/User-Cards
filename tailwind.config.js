/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primaryClr: "#3D7793",
      secondaryClr: "#60656F",
      blackClr: "#111827",
      grayClr:"#60656F",
      whiteClr:"#FFFAFA"
    },
    extend: {
      fontFamily: {
        primaryFont: "Poppins, system-ui",
      },
    },
  },
  plugins: [],
};

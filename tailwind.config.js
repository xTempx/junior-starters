/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F8F4EB",
        "gray-50": "#EFE6E6",
        "gray-100": "#DFCCCC",
        "gray-500": "#5E0000",
        "primary-100": "#ECF5FF",
        "primary-300": "#FFA6A3",
        "primary-500": "#FF6B66",
        "secondary-400": "#FFCD58",
        "secondary-500": "#FFC132",
        "js-color-bg": "#01200F",
        "js-red-text": "#d71e30",
        "js-orange-text": "#f46020",
        "js-yellow-text": "#f9af10",
        "js-green-text": "#2d8846",
        "js-blue-text": "#295baa",
        "js-purple-text":"#4B369D",
        "js-contrast": "#bb231a",

      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('')"
      }),
        fontFamily: {
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          gochihand: ['Gochi Hand', "sans-serif"],
          dekko:['Dekko', "sans-serif"]

        },
        content: {
          evolvetext: "url('@/assets/WelcomeTo.png')",
          doodleart: "url('@/assets/BG_Vid.png')",
          doodle: "url('@/assets/Doodle.png')",
          sun: "url('@/assets/Sun.png')",
          plane: "url('@/assets/Plane.png')",
          waves: "url('@/assets/waves.png')",
          doodle2: "url('@/assets/Doodle2.png')",
          rainbow: "url('@/assets/Rainbow.png')",
          waves2: "url('@/assets/waves2.png')",
          heart:"url('@/assets/heart.png')",
          edge:"url('@/assets/edge-blue.svg')",
          stem:"url('@/assets/stem.png')",
          dna:"url('@/assets/dna.png')",
          abc:"url('@/assets/abc.png')",

        }
    },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
  },
  plugins: [],
}
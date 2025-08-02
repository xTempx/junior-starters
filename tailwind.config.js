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
        "js-maroon-text" : "#C03620",
        "js-red-text": "#B61C03",
        "js-orange-text": "#E67F06",
        "js-yellow-text": "#F1CB06",
        "js-yellow-trial": "#F7D215",
        "js-green-text": "#7AC604",
        "js-blue-text": "#0097B2",
        "js-purple-text": "#402978",
        "js-violet-text": "#8C52FF",
        "js-contrast": "#bb231a",
        "js-loader-bg": "#f8f4eb",
        "js-footer-bg": "#90e5f4",
        "js-footer-text": "#737373",
        "js-red-aboutus": "#bb231a",
        "js-red-vision": "#b41818",
        "preschool-red": "#e63618",
        "preschool-orange": "#f39019",
        "preschool-yellow": "#ffcc0d",
        "preschool-green": "#8cc53e",
        "preschool-blue": "#00a0c6",
        "preschool-purple": "#9a4eae",
        "preschool-lightblue": "#8EDCE6",
        "preschool-pink": "#FF9EC2",
        "preschool-lightgreen": "#D4F7A7",
        "preschool-lightyellow": "#FFF7A7",
        "preschool-lightred": "#FFE6E6",
        "preschool-lightpurple": "#E6D4FF",
        "preschool-lightorange": "#FFE6D4",
        "preschool-lightblue": "#E6EFEF",
        "preschool-lightpink": "#FFE6F7",
        "preschool-btn": "#0F172A",
        "preschool-bg": "#E6EFEF"
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #FF616A 0%, #FFC837 100%)",
        "mobile-home": "url('')"
      }),
        fontFamily: {
          jua: ["Jua", "sans-serif"],
          dmsans: ["DM Sans", "sans-serif"],
          montserrat: ["Montserrat", "sans-serif"],
          gochihand: ['Gochi Hand', "sans-serif"],
          dekko:['Dekko', "sans-serif"]

        },
        content: {
          evolvetext: "url('@/assets/Red Upper.png')",
          doodleart: "url('@/assets/BG_Vid.png')",
          doodle: "url('@/assets/Doodle.png')",
          sun: "url('@/assets/Sun.png')",
          plane: "url('@/assets/Plane.png')",
          flower: "url('@/assets/Flowers.png')",
          doodle2: "url('@/assets/Doodle2.png')",
          rainbow: "url('@/assets/Rainbow.png')",
          waves: "url('@/assets/waves.png')",
          waves2: "url('@/assets/waves2.png')",
          heart:"url('@/assets/heart.png')",
          edge:"url('@/assets/edge-blue.svg')",
          stem:"url('@/assets/stem.png')",
          dna:"url('@/assets/dna.png')",
          abc:"url('@/assets/abc.png')",

        },

  
    },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
      }
  },
  plugins: [],
}
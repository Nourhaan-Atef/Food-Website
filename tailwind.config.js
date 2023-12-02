/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGray: "#131313",
        red: "#CC3333",
        lightRed:"#FCEFEF",
        lightOrange: "#FF9933",
        blue:"#052C65",
        gray900:"#131313",
        gray800:"#212529",
        gray700:"#343A40",
        gray300:"#6C757D",
        gray200:"#ADB5BD",

      },
      fontFamily: {
        Roboto: "Roboto",
        Poppins: "Poppins",
        Caveat: "Caveat",
      },
    },
  },

  plugins: [],
};

// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      keyframes: {
        floatRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        floatLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
      },
      animation: {
        "float-r": "floatRight 8s ease-in-out infinite",
        "float-l": "floatLeft 8s ease-in-out infinite",
       
        
        "float-r-reverse": "floatRight 8s ease-in-out infinite reverse",
        "float-l-reverse": "floatLeft 8s ease-in-out infinite reverse",
      },
    },
  },
  plugins: [],
}
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Allura'", "regular"],
      },
      keyframes: {
        scrollBg: {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        floatRight: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(20px)" },
        },
        floatLeft: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-20px)" },
        },
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        "float-r": "floatRight 8s ease-in-out infinite",
        "float-l": "floatLeft 8s ease-in-out infinite",

        "float-r-reverse": "floatRight 8s ease-in-out infinite reverse",
        "float-l-reverse": "floatLeft 8s ease-in-out infinite reverse",
        "scroll-bg": "scrollBg 30s linear infinite",
        "scroll": 'scroll 130s linear infinite',
      },
    },
  },
  plugins: [],
};

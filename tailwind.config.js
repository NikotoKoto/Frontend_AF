/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",     // important: inclure .ts pour les templates inline
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['Poppins', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        script: ['Parisienne', 'cursive'],
      },
    },
  },
  plugins: [],
}


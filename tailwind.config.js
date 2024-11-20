/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        'h1': '80px',
        'h2': '64px',
        'h3': '48px',
        'h4': '36px',
        'h5': '24px',
        'h6': '20px',
        'b1': '24px',
        'b2': '20px',
        'b3': '16px',
      },
      fontFamily: {
        Nunito: ["Nunito", "sans-serif"],
      },
      colors: {
        "primary-1": "#0046B1",
        "primary-2": "#66A0D3",
        "primary-3": "#D6E9FA",
        "secondary-1": "#B3FD4A",
        "secondary-2": "#D0F68E",
        "secondary-3": "#E9F8A6",
        "black-1": "#222222",
        "black-2": "#4A5568",
        "black-3": "#A0AEC0",
        "white-1": "#FFF",
        "white-2": "#F9F9F9",
      },
      screens: {
        'smartphone': '375px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
      }
    },
  },
  plugins: [],
};

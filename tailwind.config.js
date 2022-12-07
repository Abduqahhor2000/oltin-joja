/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: { 
      colors: {
      'Neutral/04': '#6F767E',
      'Neutral/03': '#EFEFEF',
      'Neutral/02': '#F4F4F4',
      'Primary/03': '#FFA101',
      'Neutral/Shades/04-75%': '#9A9FA5',
      "menuLine": "#FF6A55",
      "menuBG": "#FFF1EF",
      "hoverButton": "#F29900",
      "Neutral/Shade/04-40%": "rgba(111, 118, 126, 0.4)",
      "Neutral/Shade/07-50%": "#11131580",
      "default-img" : "#C4C4C4",
      },
    },
    fontFamily: {
      rowdies: [
        "Rowdies, cursive",
        // { fontFeatureSettings: '"cv11", "ss01"' },
      ],
      inter: [
        "Inter, sans-serif",
        // { fontFeatureSettings: '"cv11", "ss01"' },
      ],
    },
  },
  plugins: [],
}
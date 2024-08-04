/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.html"],
  theme: {
    extend: {
      screens:{
        mobile: "0px",
        desktop: "1024px",
        bigdt: "1280px"
      },
      backgroundImage: {
        'green-bg': "url('../images/green-card/freshPattern.svg')",
      }
    },
  },
  plugins: [],
}


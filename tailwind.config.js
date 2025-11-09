/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary':"#5f6fff"
      },
      screens: {
      sm: "576px",   
      md: "768px", 
      'md-lg': '900px', 
      lg: "992px",   
      xl: "1200px",  
      xxl: "1400px", 
      },
      // gridTemplateColumns:{
      //   'auto': 'repeat(auto-fill,minmax(200px,1fr))'
      // }
    },
  },
  plugins: [],
}
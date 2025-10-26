{import('tailwindcss').Config} 
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#0F4C45",
        secondary: "#2E7D32",
        accent: "#C5E1A5",
        neutralLight: "#F5F5F5",
        neutralDark: "#1E1E1E",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

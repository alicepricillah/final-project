module.exports = {
  content: ["./src/*/.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#0E7490", // Teal-blue for trust & freshness
        secondary: "#22C55E", // Green accent (clean, eco-friendly)
        accent: "#FACC15", // Bright yellow for CTA
        "neutral-dark": "#1E293B", // Deep gray for text
        "neutral-light": "#F8FAFC", // Soft background
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },

  plugins: [],
};

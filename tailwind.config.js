// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Custom SoftMax Palette
        'primary': '#007C3D',
        'secondary': '#4A8AD3',
        'accent': '#FF9900',
        'neutral-dark': '#1F2937',
        'neutral-light': '#F9FAF8',
      },
      // You can add custom fonts here later if needed
    },
  },
  plugins: [],
}
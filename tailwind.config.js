export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        futura: ['"Futura PT"', 'sans-serif'],
      },
      screens: {
        // Combine portrait with screen sizes
        'portrait-sm': { 'raw': '(min-width: 640px) and (orientation: portrait)' },
        'portrait-md': { 'raw': '(min-width: 768px) and (orientation: portrait)' },
        'portrait-lg': { 'raw': '(min-width: 1024px) and (orientation: portrait)' },
        'portrait-xl': { 'raw': '(min-width: 1280px) and (orientation: portrait)' },
        
        // Combine landscape with screen sizes
        'landscape-sm': { 'raw': '(min-width: 640px) and (orientation: landscape)' },
        'landscape-md': { 'raw': '(min-width: 768px) and (orientation: landscape)' },
        'landscape-lg': { 'raw': '(min-width: 1024px) and (orientation: landscape)' },
        'landscape-xl': { 'raw': '(min-width: 1280px) and (orientation: landscape)' },
      },
    },
  },
  plugins: [],
};
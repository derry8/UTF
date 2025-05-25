/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        monoOne: ['"Monomaniac One"', 'sans-serif'],
        lobster: ['"Lobster"', 'cursive'],
        inter: ['"Inter"', 'sans-serif'],
        fantasy: ['fantasy'],
      },
    },
  },
  plugins: [],
};

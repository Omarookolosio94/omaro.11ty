/** @type {import('tailwindcss').Config} */
import { addIconSelectors } from "@iconify/tailwind";

module.exports = {
  content: ["./src/**/*.{html,njk,md}", "./dist/**/*.html"],
  theme: {
    extend: {},
  },
  plugins: [addIconSelectors(["mdi", "logos", "solar"])],
};

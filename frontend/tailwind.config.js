/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)", // Light Purple for branding if needed
        secondary: "var(--color-secondary)", // Optional, Light Purple Accent
        "bg-light": "var(--color-bg-light)", // White background for light mode
        "bg-dark": "var(--color-bg-dark)", // Black background for dark mode
        "text-light": "var(--color-text-light)", // Black text for light mode
        "text-dark": "var(--color-text-dark)", // White text for dark mode
        "btn-primary-light": "var(--color-btn-primary-light)", // Button color for light mode
        "btn-primary-text-light": "var(--color-btn-primary-text-light)", // Button text color for light mode
        "btn-primary-dark": "var(--color-btn-primary-dark)", // Button color for dark mode
        "btn-primary-text-dark": "var(--color-btn-primary-text-dark)", // Button text color for dark mode
        "link-light": "var(--color-link-light)", // Link color for light mode
        "link-hover-light": "var(--color-link-hover-light)", // Hover link color for light mode
        "link-dark": "var(--color-link-dark)", // Link color for dark mode
        "link-hover-dark": "var(--color-link-hover-dark)", // Hover link color for dark mode
      },
    },
  },
  plugins: [],
};

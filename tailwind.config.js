/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        support: {
          1: "var(--support-1)",
          2: "var(--support-2)",
          3: "var(--support-3)",
        },
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "border-color": "var(--border-color)",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
      },
      fontSize: {
        body: "16px",
        h1: "32px",
        h2: "24px",
        h3: "20px",
        hero: "48px",
        subhero: "24px",
      },
      spacing: {
        container: "1200px",
        gutter: "20px",
        section: "40px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "auto-1fr": "auto 1fr",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "bg-pan": {
          from: { "background-position": "0% center" },
          to: { "background-position": "-200% center" },
        },
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        'fade-in': {
          '0%': {
            opacity: '0',
          }
        }
      },
      animation: {
        "ping-once": "ping 1s forwards",
        "bg-pan": "bg-pan 5s linear infinite",
        "fade-in-down": "fade-in-down 0.25s ease-in-out",
      },
      backgroundSize: {
        double: "200%",
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss"), require("tailwindcss-animation-delay")],
};

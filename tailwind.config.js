/** @type {import('tailwindcss').Config} */
const { join } = require("path");

module.exports = {
  content: [
    join(
      __dirname,
      "./src/text/**/*.tsx"
    ),
    join(
      __dirname,
      "./src/text/**/*.ts"
    ),
    join(
      __dirname,
      "./src/body/**/*.tsx"
    ),
    join(
      __dirname,
      "./src/body/**/*.ts"
    ),
    join(
      __dirname,
      "./src/pages/**/*.tsx"
    ),
    join(
      __dirname,
      "./src/pages/**/*.ts"
    ),
    join(
      __dirname,
      "./src/parts/**/*.tsx"
    ),
    join(
      __dirname,
      "./src/parts/**/*.ts"
    ),
    join(
      __dirname,
      "./src/visual/**/*.tsx"
    ),
    join(
      __dirname,
      "./src/visual/**/*.ts"
    ),
  ],
  theme: {
    extend: {},
    colors: {
      black: {
        "000": "#000",
        111: "#111",
        222: "#222",
        333: "#333",
        444: "#444",
        555: "#555",
        666: "#666",
        777: "#777",
        888: "#888",
        999: "#999",
        aaa: "#aaa",
      },
    },
    neumorphismColor: {
      black: {
        100: "#000",
        200: "#111",
        300: "#222",
        400: "#333",
      },
    },
    neumorphismSize: {
      xs: "0.05em",
      sm: "0.08em",
      default: "0.2em",
      lg: "0.4em",
      xl: "0.8em",
    },
  },
  plugins: [
    require("tailwindcss-neumorphism"),
  ],
};

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
  }
};

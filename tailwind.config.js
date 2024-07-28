/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

const usedColors = ["red", "blue", "green"];
const textColors = ["white", "black"];

const safelist = [
  ...usedColors.map((i) => {
    return {
      pattern: new RegExp(`bg-${i}-.+`),
      variants: ["sm", "md", "lg", "hover", "focus", "lg:hover"],
    };
  }),
  ...[...usedColors, ...textColors].map((i) => {
    return {
      pattern: new RegExp(`text-${i}`),
      variants: ["sm", "md", "lg", "hover", "focus", "lg:hover"],
    };
  }),
  {
    pattern: /items-+/,
    variants: ["sm", "md", "lg", "hover", "focus", "lg:hover"],
  },
  {
    pattern: /rounded-+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /flex-+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /gap-+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /grid-rows+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /grid-cols+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /px-\d/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /py-\d/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /max-h-+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /max-w-+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /h-+/,
    variants: ["sm", "md", "lg"],
  },
  {
    pattern: /w-+/,
    variants: ["sm", "md", "lg"],
  },
];

module.exports = {
  safelist,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        ...colors,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
      },
    },
  },
  plugins: [],
};

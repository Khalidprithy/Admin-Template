/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#00b894",

          "secondary": "#ff6900",

          "accent": "#00b7ff",

          "neutral": "#24312c",

          "base-100": "#fff1fc",

          "info": "#0082b9",

          "success": "#2fe256",

          "warning": "#ff9000",

          "error": "#ff4f84",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  content: ["./App.{js,jsx,ts,tsx}",
   "./screens/**/*.{js,jsx,ts,tsx}",
   "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

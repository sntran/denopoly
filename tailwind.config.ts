import animate from "https://esm.sh/tailwindcss-animate@1.0.7";

export default {
  content: [
    "./routes/**/*.{ts,tsx}",
    "./islands/**/*.tsx",
    "./components/**/*.tsx",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    animate,
  ],
};

import animate from "https://esm.sh/tailwindcss-animate@1.0.7";

export default {
  content: [
    "./routes/_app.tsx",
    "./routes/**/*.{ts,tsx}",
    "./islands/**/*.tsx",
    "./components/**/*.tsx",
  ],
  safelist: [
    "max-w-5xl",
    "mx-auto",
  ],
  theme: {
    extend: {

    },
  },
  plugins: [
    animate,
  ],
};

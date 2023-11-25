import animate from "https://esm.sh/tailwindcss-animate@1.0.7";
import plugin from "https://esm.sh/tailwindcss/plugin";

export default {
  content: [
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
      animation: {
        "popover-close": "fade-out 0.7s ease-out",
        "popover-open": "fade-in 0.7s ease-out",
      },
      keyframes: {
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "scale(0)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "fade-out": {
          "0%": {
            opacity: "1",
            transform: "scale(1)",
            /* display needed on the closing animation to keep the popover
            visible until the animation ends */
            display: "block",
          },
          "100%": {
            opacity: "0",
            transform: "scale(0)",
            /* display: none not required here because it is the default value
            for a closed popover, but including it so the behavior is clear */
            display: "none",
          },
        },
      }
    },
  },
  plugins: [
    animate,
    plugin(function ({ addVariant }) {
      addVariant("progress-bar", ["&::-webkit-progress-bar", "&"]);
      addVariant("progress-value", ["&::-webkit-progress-value", "&::-moz-progress-bar", "&"]);

      addVariant("popover-open", ["&:popover-open", ":popover-open &"]);
    }),
  ],
};

/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit", // Ensure JIT mode is enabled
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
        marquee: "marquee var(--duration, 20s) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration, 20s) linear infinite",
      },
      keyframes: {
        'infinite-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap, 1rem)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap, 1rem)))" },
        },
      },
    },
  },
  plugins: [],
};

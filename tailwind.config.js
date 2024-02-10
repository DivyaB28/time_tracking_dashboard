/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        normal: "1.125rem",
      },
      colors: {
        blue: "hsl(246, 80%, 60%)",
        light_red_work: "hsl(15, 100%, 70%)",
        soft_blue_play: "hsl(195, 74%, 62%)",
        light_red_study: "hsl(348, 100%, 68%)",
        lime_green_exclusive: "hsl(145, 58%, 55%)",
        violet: "hsl(264, 64%, 52%)",
        soft_orange: "hsl(43, 84%, 65%)",
        very_dark_blue: "hsl(226, 43%, 10%)",
        dark_blue: "hsl(235, 46%, 20%)",
        desaturated_blue: "hsl(235, 45%, 61%)",
        pale_blue: "hsl(236, 100%, 87%)",
        very_soft_blue: "hsl(235deg 90% 90%)",
        light_blue: "rgb(52 56 122)",
        very_light_blue: "rgb(73 79 179)",
      },
    },
  },
  plugins: [],
};

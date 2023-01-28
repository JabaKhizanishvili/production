// /** @type {import('tailwindcss').Config} */
// module.exports = {
//     // content: ["./resources/**/*.{html,js}"],
//     content: [
//         "./resources/**/*.blade.php",
//         "./resources/**/*.js",
//         "./resources/**/*.jsx",
//         "./resources/**/*.vue",
//     ],

//     theme: {
//         extend: {},
//     },
//     plugins: [],
// }


const { colors: defaultColors } = require("tailwindcss/defaultTheme");

// const colors = {
//     ...defaultColors,
//     ...{
//         "custom-yellow": {
//             500: "#EDAE0A",
//         },
//         "custom-blue": {
//             500: "#2680EB",
//             800: "#1C3C51",
//             900: "#00223B",
//         },
//     },
// };

const colors = {
    ...defaultColors,
    ...{
      "custom-yellow": "#F8D532",
      "dropdown-color":"#f3f2fd",
      "custom-green": "#A7DE5C",
      "navbar-active" : "#6e61ea",
      "navbar-normal" : "#e1defb",
      "custom-blue": "#3FA0CD",
      "custom-red": "#EA2D24",
      "footer-default-color": "#646464",
      "custom-purple": "#7261BD",
      "custom-color-blue" : "#f3f2fd",
      "custom-color-darkblue" : "#6f61ea",
      "custom-orange": "#ED5C2F",
      "custom-dark": "#131313",
      "custom-slate": {
        100: "#F8F8F8",
        200: "#F5F5F5",
        300: "#E4E4E4",
        900: "#343434",
      },
    },
  };

module.exports = {
    // content: ["./resources/js/**/*.{html,js,jsx}"],
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.jsx",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            colors: colors,
        },
    },
    plugins: [],
};

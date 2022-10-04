/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        extend: {},
        fontFamily: {
            sans: ["Inter", "Arial", "sans-serif"],
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require("@tailwindcss/forms"),

        // https://github.com/tailwindlabs/headlessui/tree/main/packages/%40headlessui-tailwindcss
        require("@headlessui/tailwindcss"),
    ],
};

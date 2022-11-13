/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                hd: "60px",
                search: "46px",
                inherit: "inherit",
            },
        },
        colors: {
            transparent: "transparent",
            icon: "rgba(22, 24, 35, 0.34)",
        },
    },
    plugins: [],
};

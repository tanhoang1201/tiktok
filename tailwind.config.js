/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            spacing: {
                hd: "60px",
                search: "46px",
                inherit: "inherit",
                hBtnM: "36px",
                hBtnL: "48px",
                searchWith: "361px",
                popperHeight: "min((100vh - 96px) - 60px, 734px)",
            },
        },
        colors: {
            transparent: "transparent",
            icon: "rgba(22, 24, 35, 0.34)",
            border: "#1618231f",
            hover: "#16182308",
            textLight: "#16182380",
            primaryDark: "#161823",
            primaryRed: "#fe2c55",
            btnPrimaryHover: "#ef2a51",
            shawDownPopper: "rgb(0 0 0 / 12%) 0px 2px 12px",
        },
    },
    plugins: [],
};

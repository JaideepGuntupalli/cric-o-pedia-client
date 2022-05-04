const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            mulish: ["Mulish", ...defaultTheme.fontFamily.sans],
            raleway: ["Raleway", ...defaultTheme.fontFamily.sans],
        },
        extend: {
            colors: {
                "primary-bg": "#0C181C",
                "footer-bg": "#151313",
                "widget-bg": "#1E282B",
            },
        },
    },
    plugins: [],
};

import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                engineering: {
                    cream: '#F5F5DC',  // Soft Cream
                    brown: '#4A3728',  // Rich Espresso
                    tan: '#D2B48C',    // Lighter tan
                    accent: '#8B4513', // Saddle brown
                },
            },
        },
    },
    plugins: [],
};
export default config;
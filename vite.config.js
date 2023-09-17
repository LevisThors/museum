import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/museum/",
    build: {
        rollupOptions: {
            output: {
                assetFileNames: "assets/[name].[ext]",
            },
        },
    },
    plugins: [react()],
});

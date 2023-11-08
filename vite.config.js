// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import path from "path";

// // https://vitejs.dev/config/
// export default defineConfig({
//   resolve: {
//     alias: {
//       "@assets": path.resolve(__dirname, "./src/assets"),
//     },
//   },
//   plugins: [react()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url"; // Import the necessary function

const __filename = fileURLToPath(import.meta.url); // Define __filename using import.meta.url
const __dirname = path.dirname(__filename); // Define __dirname using path.dirname

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  plugins: [react()],
});

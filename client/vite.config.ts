/// <reference types="vitest" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
  resolve: {
    alias: {
      "~root": path.resolve(__dirname, "./src"),
      "~api": path.resolve(__dirname, "./src/api"),
      "~assets": path.resolve(__dirname, "./src/assets"),
      "~components": path.resolve(__dirname, "./src/components"),
      "~constants": path.resolve(__dirname, "./src/constants"),
      "~hooks": path.resolve(__dirname, "./src/hooks"),
      "~store": path.resolve(__dirname, "./src/store"),
      "~types": path.resolve(__dirname, "./src/types"),
    }
  }
})

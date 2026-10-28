import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // No GitHub Pages o site fica em haayeska.github.io/bloco-de-notas/
  base: '/bloco-de-notas/',
  plugins: [react(), tailwindcss()],
})

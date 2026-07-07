import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base: './'` keeps every asset path relative, so the SAME build works on:
//   - GitHub Pages project site  (https://<user>.github.io/main-first/)
//   - Netlify / Vercel           (served from the domain root)
//   - a custom domain
// You do NOT need to change this when you switch hosts.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})

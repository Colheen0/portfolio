import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  // Remplace 'ton-portfolio' par le NOM EXACT de ton dépôt sur GitHub
  // Exemple : si ton URL est github.com/Colheen0/portfolio-2025, mets '/portfolio-2025/'
  base: '/portfolio/', 
})
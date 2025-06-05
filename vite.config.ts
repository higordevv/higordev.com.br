import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
<<<<<<< HEAD
  mode: "jit",
=======
>>>>>>> fab8d1e (setup: estrutura inicial com SEO, Tailwind e documentação)
})

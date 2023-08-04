import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

export default defineConfig({
  base: "https://enjoy0099.github.io/MyPortfolio/",
  plugins: [react()],
})

// export default { base: './', };

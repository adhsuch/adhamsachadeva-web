import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' membuat semua path aset bersifat relatif, sehingga website tetap
// berfungsi baik di-deploy sebagai user-site (adhsuch.github.io) maupun
// project-site (adhsuch.github.io/nama-repo) tanpa perlu mengubah konfigurasi.
export default defineConfig({
  plugins: [react()],
  base: './',
})

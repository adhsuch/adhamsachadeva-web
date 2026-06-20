# Portofolio — Adham Sachadeva Purwadi

Website portofolio pribadi. Dibangun dengan **React + Vite**, di-deploy otomatis ke
**GitHub Pages** menggunakan **GitHub Actions** (CI/CD pipeline).

🔗 **Live:** _(diisi setelah deploy)_

## Tech Stack

- React 18 + Vite
- CSS (custom, tema dark minimalis emerald)
- GitHub Actions → GitHub Pages

## Menjalankan secara lokal

```bash
npm install      # install dependencies
npm run dev      # jalankan dev server (http://localhost:5173)
npm run build    # build untuk produksi (output ke folder dist/)
npm run preview  # preview hasil build
```

## Cara kerja deployment (CI/CD)

Setiap `git push` ke branch `main` memicu workflow di `.github/workflows/deploy.yml`:

1. **Build (CI):** GitHub menjalankan `npm ci` lalu `npm run build`.
2. **Deploy (CD):** hasil build (folder `dist/`) otomatis di-publish ke GitHub Pages.

Artinya: ubah kode → `git push` → website live otomatis ter-update, tanpa upload manual.

## Struktur

```
src/
  components/   # tiap section: Navbar, Hero, About, Skills, dst.
  data.js       # semua konten (mudah diedit)
  useReveal.js  # hook animasi fade-in saat scroll
  index.css     # styling & tema
public/
  profile.jpg   # foto profil
.github/workflows/deploy.yml   # pipeline CI/CD
```

# 🚀 Panduan Deploy Portfolio ke GitHub Pages

Panduan lengkap step-by-step untuk deploy portfolio website ke GitHub Pages.

**Repository:** `rahmatdial-prjct/portofolio`
**URL Setelah Deploy:** `https://rahmatdial-prjct.github.io/portofolio/`

---

## 📋 Persiapan Sebelum Deploy

### 1. Pastikan Anda Sudah Punya:
- ✅ Akun GitHub (username: `rahmatdial-prjct`)
- ✅ Git terinstall di komputer
- ✅ Node.js dan npm terinstall
- ✅ Repository GitHub bernama `portofolio` sudah ada

### 2. Cek Status Project:
```bash
# Pastikan berada di folder project
cd "e:\KERJA\fix 2.0 portofolio"

# Test build untuk memastikan tidak ada error
npm run build
```

Jika build berhasil, akan muncul folder `build/` dengan file-file hasil build.

---

## 🔧 Langkah 1: Cek Konfigurasi Vite

File `vite.config.ts` sudah dikonfigurasi dengan benar:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', // ✅ Sudah sesuai dengan nama repository
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

**✅ SUDAH BENAR:** `base: '/portofolio/'` sesuai dengan nama repository

---

## 📦 Langkah 2: Cek Status Git Repository

### A. Cek apakah sudah terhubung dengan GitHub:
```bash
git remote -v
```

**Output yang diharapkan:**
```
origin  https://github.com/rahmatdial-prjct/portofolio.git (fetch)
origin  https://github.com/rahmatdial-prjct/portofolio.git (push)
```

### B. Jika belum terhubung, jalankan:
```bash
git remote add origin https://github.com/rahmatdial-prjct/portofolio.git
```

### C. Cek branch saat ini:
```bash
git branch
```

Pastikan Anda berada di branch `main`. Jika belum, jalankan:
```bash
git branch -M main
```

---

## 🚀 Langkah 3: Deploy ke GitHub Pages

### Metode 1: Menggunakan gh-pages Package (RECOMMENDED)

#### A. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

#### B. Tambahkan script deploy di package.json:

File `package.json` sudah memiliki script yang diperlukan. Pastikan ada script berikut:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview",
  "deploy": "npm run build && gh-pages -d build"
}
```

#### C. Jalankan deploy:
```bash
npm run deploy
```

**Proses yang terjadi:**
1. ✅ Build project ke folder `build/`
2. ✅ Upload folder `build/` ke branch `gh-pages`
3. ✅ Website otomatis live di GitHub Pages

---

### Metode 2: Deploy Manual (Alternatif)

Jika metode 1 tidak berhasil, gunakan cara manual:

```bash
# 1. Build project
npm run build

# 2. Masuk ke folder build
cd build

# 3. Inisialisasi git di folder build
git init

# 4. Add semua file
git add -A

# 5. Commit
git commit -m "Deploy to GitHub Pages"

# 6. Push ke branch gh-pages
git push -f https://github.com/rahmatdial-prjct/portofolio.git main:gh-pages

# 7. Kembali ke folder utama
cd ..
```

---

## ⚙️ Langkah 4: Aktifkan GitHub Pages di Repository

### A. Buka Repository di GitHub:
1. Buka browser dan pergi ke: `https://github.com/rahmatdial-prjct/portofolio`
2. Login jika belum

### B. Masuk ke Settings:
1. Klik tab **Settings** (di bagian atas repository)
2. Scroll ke bawah di sidebar kiri
3. Klik **Pages**

### C. Konfigurasi GitHub Pages:
1. Di bagian **Source**, pilih:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
2. Klik tombol **Save**

### D. Tunggu Deploy Selesai:
- GitHub akan memproses deployment (biasanya 1-3 menit)
- Refresh halaman setelah beberapa saat
- Akan muncul notifikasi: "Your site is live at https://rahmatdial-prjct.github.io/portofolio/"

---

## 🎯 Langkah 5: Verifikasi Deployment

### A. Cek Status Deployment:
1. Buka `https://github.com/rahmatdial-prjct/portofolio/deployments`
2. Lihat status deployment terakhir
3. Pastikan statusnya "Active" dengan centang hijau

### B. Buka Website:
1. Buka browser
2. Pergi ke: **https://rahmatdial-prjct.github.io/portofolio/**
3. Website Anda seharusnya sudah live! 🎉

### C. Test Semua Fitur:
- ✅ Navigasi menu (About, Skills, Projects, Certificates, Contact)
- ✅ Tombol bahasa EN/ID
- ✅ Semua link project
- ✅ Semua link certificate
- ✅ Link kontak (Email, WhatsApp, GitHub)
- ✅ Responsive di mobile, tablet, desktop

---

## ✅ Checklist Deploy Lengkap

Gunakan checklist ini untuk memastikan semua langkah sudah dilakukan:

**Persiapan:**
- [ ] Node.js dan npm terinstall
- [ ] Git terinstall dan dikonfigurasi
- [ ] Repository `portofolio` sudah ada di GitHub
- [ ] Project sudah di-clone/download ke komputer

**Konfigurasi:**
- [ ] File `vite.config.ts` sudah ada `base: '/portofolio/'`
- [ ] File `package.json` sudah ada script `deploy`
- [ ] Test build berhasil: `npm run build`

**Git Setup:**
- [ ] Git remote sudah terhubung ke repository
- [ ] Branch `main` sudah ada
- [ ] Semua perubahan sudah di-commit

**Deployment:**
- [ ] Install `gh-pages`: `npm install --save-dev gh-pages`
- [ ] Jalankan deploy: `npm run deploy`
- [ ] Branch `gh-pages` sudah muncul di GitHub

**GitHub Pages Settings:**
- [ ] Masuk ke Settings > Pages
- [ ] Source diset ke branch `gh-pages` dan folder `/ (root)`
- [ ] Klik Save

**Verifikasi:**
- [ ] Tunggu 1-3 menit
- [ ] Buka `https://rahmatdial-prjct.github.io/portofolio/`
- [ ] Website sudah live dan berfungsi dengan baik
- [ ] Test semua fitur dan link

---

## 🔄 Cara Update Website Setelah Deploy

Setiap kali Anda ingin update konten website:

### Langkah Update:
```bash
# 1. Pastikan berada di folder project
cd "e:\KERJA\fix 2.0 portofolio"

# 2. Edit file yang ingin diubah (misalnya translations.ts, certificates.ts, dll)

# 3. Test perubahan di local
npm run dev

# 4. Jika sudah OK, commit perubahan
git add .
git commit -m "Update: deskripsi perubahan"

# 5. Push ke GitHub (opsional, untuk backup)
git push origin main

# 6. Deploy ulang ke GitHub Pages
npm run deploy
```

**Tunggu 1-2 menit**, lalu refresh website Anda. Perubahan akan muncul!

---

## 🐛 Troubleshooting - Solusi Masalah Umum

### ❌ Problem 1: Website Tidak Muncul / 404 Error
**Gejala:** Buka URL tapi muncul halaman 404 Not Found

**Solusi:**
```bash
# 1. Cek apakah base path sudah benar di vite.config.ts
# Pastikan ada: base: '/portofolio/',

# 2. Cek apakah branch gh-pages sudah ada
git branch -a

# 3. Jika belum ada, deploy ulang
npm run deploy

# 4. Cek Settings > Pages di GitHub
# Pastikan Source: gh-pages, Folder: / (root)
```

---

### ❌ Problem 2: CSS/JS Tidak Load (Halaman Blank/Putih)
**Gejala:** Website terbuka tapi blank/putih, tidak ada style

**Solusi:**
```bash
# 1. Pastikan base path di vite.config.ts sesuai nama repository
# Harus: base: '/portofolio/',  (bukan '/portfolio/' atau yang lain)

# 2. Hapus folder build lama
rm -rf build

# 3. Build ulang
npm run build

# 4. Deploy ulang
npm run deploy

# 5. Hard refresh browser (Ctrl + Shift + R)
```

---

### ❌ Problem 3: Error "gh-pages not found"
**Gejala:** Error saat menjalankan `npm run deploy`

**Solusi:**
```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Coba deploy lagi
npm run deploy
```

---

### ❌ Problem 4: Error "Permission denied" saat Deploy
**Gejala:** Git push gagal dengan error permission denied

**Solusi:**
```bash
# Opsi 1: Login ke GitHub CLI
gh auth login

# Opsi 2: Gunakan SSH
git remote set-url origin git@github.com:rahmatdial-prjct/portofolio.git

# Opsi 3: Gunakan Personal Access Token
# 1. Buat token di: https://github.com/settings/tokens
# 2. Gunakan token sebagai password saat push
```

---

### ❌ Problem 5: Images Tidak Muncul
**Gejala:** Gambar tidak tampil di website

**Solusi:**
```bash
# 1. Pastikan gambar ada di folder public/images/
# 2. Gunakan path relatif: /portofolio/images/nama-gambar.jpg
# 3. Atau gunakan URL eksternal (recommended)

# 4. Cek browser console (F12) untuk error
```

---

### ❌ Problem 6: Build Error
**Gejala:** Error saat menjalankan `npm run build`

**Solusi:**
```bash
# 1. Hapus node_modules dan install ulang
rm -rf node_modules
npm install

# 2. Clear cache
npm cache clean --force

# 3. Build ulang
npm run build

# 4. Jika masih error, cek error message dan perbaiki kode
```

---

### ❌ Problem 7: Website Lama Masih Muncul (Cache)
**Gejala:** Sudah deploy tapi perubahan tidak muncul

**Solusi:**
```bash
# 1. Hard refresh browser
# Windows/Linux: Ctrl + Shift + R
# Mac: Cmd + Shift + R

# 2. Clear browser cache
# Chrome: Ctrl + Shift + Delete

# 3. Buka di Incognito/Private mode

# 4. Tunggu 2-3 menit untuk propagasi GitHub Pages
```

---

## 🎯 Tips & Best Practices

### ✅ Sebelum Deploy:
1. **Test Build Lokal:**
   ```bash
   npm run build
   npm run preview
   ```
   Buka `http://localhost:4173` untuk preview hasil build

2. **Cek Semua Link:**
   - ✅ Email, WhatsApp, GitHub di Contact section
   - ✅ Link project di Projects section
   - ✅ Link certificate di Certificates section

3. **Update Informasi Personal:**
   - ✅ Nama di Hero section
   - ✅ Foto profil (gunakan URL eksternal)
   - ✅ Kontak (email, WhatsApp, GitHub)

4. **Test Kedua Bahasa:**
   - ✅ Klik tombol EN/ID
   - ✅ Pastikan semua terjemahan sudah benar

5. **Test Responsive:**
   - ✅ Buka di browser, tekan F12
   - ✅ Toggle device toolbar
   - ✅ Test di mobile, tablet, desktop view

---

## 📱 Alternatif Platform Deploy (Lebih Mudah)

Jika GitHub Pages terasa ribet, gunakan platform lain:

### 1. **Vercel** ⭐ (PALING RECOMMENDED)
**Kelebihan:**
- ✅ Gratis unlimited
- ✅ Auto deploy dari GitHub (setiap push otomatis deploy)
- ✅ Custom domain gratis
- ✅ Setup cuma 2 menit
- ✅ Preview deployment untuk setiap PR
- ✅ Analytics gratis

**Cara Deploy:**
```bash
# 1. Buka https://vercel.com
# 2. Login dengan GitHub
# 3. Klik "New Project"
# 4. Import repository "portofolio"
# 5. Framework Preset: Vite
# 6. Build Command: npm run build
# 7. Output Directory: build
# 8. Klik "Deploy"
# 9. Selesai! ✅
```

**URL:** `https://portofolio-rahmatdial.vercel.app`

---

### 2. **Netlify**
**Kelebihan:**
- ✅ Gratis unlimited
- ✅ Drag & drop folder `build/`
- ✅ Custom domain gratis
- ✅ Form handling gratis

**Cara Deploy:**
```bash
# Opsi 1: Drag & Drop
# 1. Build project: npm run build
# 2. Buka https://app.netlify.com/drop
# 3. Drag folder "build" ke Netlify
# 4. Selesai! ✅

# Opsi 2: Connect GitHub
# 1. Buka https://app.netlify.com
# 2. New site from Git
# 3. Connect GitHub
# 4. Select repository "portofolio"
# 5. Build command: npm run build
# 6. Publish directory: build
# 7. Deploy! ✅
```

---

### 3. **Cloudflare Pages**
**Kelebihan:**
- ✅ Gratis unlimited
- ✅ Super cepat (CDN global)
- ✅ Auto deploy dari GitHub
- ✅ Unlimited bandwidth

**Cara Deploy:**
```bash
# 1. Buka https://pages.cloudflare.com
# 2. Connect GitHub
# 3. Select repository "portofolio"
# 4. Build command: npm run build
# 5. Build output: build
# 6. Deploy! ✅
```

---

## 📞 Butuh Bantuan?

### Jika Ada Masalah:
1. ✅ Cek error message di terminal (copy paste error-nya)
2. ✅ Cek browser console (F12 > Console tab)
3. ✅ Pastikan semua langkah di checklist sudah dilakukan
4. ✅ Coba build ulang: `npm run build`
5. ✅ Coba deploy ulang: `npm run deploy`

### Debug Checklist:
```bash
# 1. Cek Node.js version
node --version  # Harus >= 16

# 2. Cek npm version
npm --version

# 3. Cek git remote
git remote -v

# 4. Cek git branch
git branch

# 5. Test build
npm run build

# 6. Cek folder build
ls build  # atau dir build (Windows)
```

---

## 📝 Perintah-Perintah Penting

### Perintah Deploy:
```bash
# Deploy ke GitHub Pages
npm run deploy

# Build saja (tanpa deploy)
npm run build

# Preview hasil build
npm run preview

# Development mode
npm run dev
```

### Perintah Git:
```bash
# Cek status
git status

# Add semua perubahan
git add .

# Commit
git commit -m "Update: deskripsi perubahan"

# Push ke GitHub
git push origin main

# Cek remote
git remote -v

# Cek branch
git branch -a
```

---

## 🎉 Selamat!

Jika Anda sudah sampai di sini dan website sudah live, **SELAMAT!** 🎊

**Website Anda sekarang bisa diakses di:**
### 🌐 https://rahmatdial-prjct.github.io/portofolio/

**Jangan lupa:**
- ✅ Share link portfolio Anda
- ✅ Tambahkan link ini di CV/Resume
- ✅ Share di LinkedIn, Instagram, dll
- ✅ Update konten secara berkala

---

**Good luck dengan portfolio Anda! 🚀**

*Dibuat dengan ❤️ menggunakan React + Vite + Tailwind CSS*


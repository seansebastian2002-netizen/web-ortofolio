# DevKarya - Aplikasi Web Profil & Portofolio Modern

Aplikasi web berbasis **HTML5 murni, CSS Modern, dan Vanilla JavaScript** dengan estetika **Light Theme** bersih, responsif di semua perangkat, serta dikonfigurasi optimal untuk penyebaran langsung di **Vercel**.

---

## 🌟 Fitur & Keunggulan

1. **Halaman Utama (`index.html`)**:
   - Hero banner interaktif dengan ilustrasi kustom modern.
   - Pilar fokus keahlian dan pendekatan rekayasa web.
   - Showcase karya interaktif dengan penanda teknologi.
   - Banner ajakan aksi (Call to Action) berorientasi konversi.

2. **Halaman Profil (`profil.html`)**:
   - Potret foto tim pengembang dengan aksen visual kredibel.
   - Uraian cerita, visi, dan filosofi kerja dalam gaya bahasa semi-formal.
   - Nilai-nilai utama (Clean Code, Aksesibilitas, Efisiensi, Kolaborasi).
   - Visualisasi bar keahlian teknis dengan animasi scroll otomatis.
   - Linimasa (roadmap) perkembangan pengalaman kerja.
   - Ilustrasi pendukung konsep kreativitas dan inovasi.

3. **Halaman Kontak (`kontak.html`)**:
   - **Kesesuaian Privasi Total**: *Tidak menyertakan nomor telepon/HP, email, maupun alamat fisik.*
   - Formulir pesan interaktif dengan validasi JavaScript di sisi klien.
   - Umpan balik notifikasi *Toast* animasi saat pesan berhasil dikirim.
   - Tautan saluran jejaring digital publik (GitHub & LinkedIn).
   - Akordeon interaktif Pertanyaan yang Sering Diajukan (FAQ).

4. **Konsep Warna Light Theme**:
   - Palet warna lembut: Latar belakang abu terang (`#f8fafc`), permukaan putih murni (`#ffffff`), aksen biru royal (`#2563eb`), serta teks Slate gelap berkontras tinggi untuk keterbacaan prima.

---

## 📁 Struktur Direktori

```text
web-profil-portofolio/
├── index.html                  # Halaman Utama
├── profil.html                 # Halaman Profil Tim & Keahlian
├── kontak.html                 # Halaman Kontak & FAQ
├── vercel.json                 # Konfigurasi perutean & header Vercel
├── README.md                   # Petunjuk penggunaan & deployment
├── css/
│   └── style.css               # Desain light theme modular & responsif
├── js/
│   └── script.js               # Logika navigasi mobile, form UX, animasi skill, toast
└── assets/
    └── images/
        ├── hero-illustration.svg    # Ilustrasi antarmuka utama
        ├── photo-team.svg           # Foto ilustratif tim pengembang
        ├── about-illustration.svg   # Ilustrasi ide & inovasi profil
        └── contact-illustration.svg # Ilustrasi komunikasi & kolaborasi
```

---

## 🚀 Cara Menjalankan Secara Lokal

Anda tidak memerlukan server Node.js khusus untuk menjalankan aplikasi ini. Cukup buka berkas HTML langsung di peramban favorit Anda:

1. Buka folder proyek di File Explorer:
   `C:\Users\SMK Telkom Malang\.gemini\antigravity\scratch\web-profil-portofolio`
2. Klik dua kali pada `index.html` untuk membuka di Google Chrome, Microsoft Edge, atau browser pilihan Anda.
3. Atau gunakan ekstensi **Live Server** di VS Code untuk pengalaman auto-reload saat mengedit kode.

---

## ☁️ Panduan Upload / Deploy ke Vercel

Situs ini telah disiapkan dengan berkas `vercel.json` (`cleanUrls: true`), sehingga dapat di-deploy dengan sangat mudah melalui 2 cara berikut:

### Opsi A: Melalui Vercel CLI (Paling Cepat)
1. Buka Terminal / PowerShell di dalam folder proyek ini:
   ```bash
   cd "C:\Users\SMK Telkom Malang\.gemini\antigravity\scratch\web-profil-portofolio"
   ```
2. Jalankan perintah Vercel:
   ```bash
   npx vercel
   ```
3. Ikuti instruksi di terminal (tekan `Enter` untuk opsi bawaan).
4. Untuk menyebarkan ke produksi:
   ```bash
   npx vercel --prod
   ```

### Opsi B: Melalui Dashboard Web Vercel (GitHub)
1. Inisialisasi Git dan dorong (push) folder ini ke repositori GitHub Anda:
   ```bash
   git init
   git add .
   git commit -m "Inisialisasi web profil devkarya"
   git branch -M main
   git remote add origin https://github.com/USERNAME-ANDA/NAMA-REPO.git
   git push -u origin main
   ```
2. Buka [https://vercel.com](https://vercel.com) dan login ke akun Vercel Anda.
3. Klik tombol **"Add New..."** &rarr; **"Project"**.
4. Pilih repositori GitHub yang baru saja Anda buat.
5. Pada bagian **Framework Preset**, biarkan sebagai **"Other"** (karena berupa situs HTML/JS statis murni).
6. Klik **"Deploy"**. Dalam beberapa detik situs web Anda sudah tayang secara global dengan URL resmi Vercel (contoh: `https://devkarya.vercel.app`)!

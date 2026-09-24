# PABW — Rafi Amar Rhosan — 25523168

Repo ini memuat pekerjaan mata kuliah Pengembangan Aplikasi Berbasis Web, satu folder untuk setiap pertemuan.

## Pertemuan 3 — Halaman profil saya
Topik halaman saya: Racing Game Recommendation
- Judul halaman: Racing Game Recommendation
- Deskripsi: Memuat Rekomendasi Racing game berdasarkan my experience
- Tautan navigasi: Le Mans Ultimate, Assetto Corsa Competizione, Forza Horizon 4
- Dua bagian utama: Recommended for Sim Racer, Recommended for Casual Player/JFF
- Kolom tabel: How difficult is it, Recommended for, Is it worth the money and hype?
- Kolom form: Difficulty, Target Player, Recommendation
- Gambar: LMU.webp

## Catatan penggunaan AI
Dibantu AI pada bagian Form

## Pertemuan 4 — Design token halaman profil
- Berkas gaya yang dibuat: tokens.css, base.css, layout.css, komponen.css, tema.css
- Warna utama: #E00032 (merah balap LMU), dipilih karena menyesuaikan dengan tema game Le Mans Ultimate yang sporty dan berenergi.

### Token yang saya tetapkan
| Token | Nilai | Untuk apa |
| --- | --- | --- |
| --color-primary | #E00032 | Tombol utama, tautan, penanda fokus |
| --color-fg | #0F172A | Warna teks utama |
| --color-bg | #F8FAFC | Latar halaman (mode terang) |
| --color-surface | #FFFFFF | Latar kartu rekomendasi dan panel |
| --color-border | #E2E8F0 | Garis pembatas kartu/tabel |
| --color-danger | #B00020 | Peringatan dan isian form tidak sah |
| --color-focus | #E00032 | Garis fokus papan ketik/keyboard |
| --radius-md | 0.5rem | Sudut tumpul pada kartu & tombol |
| --space-4 | 1rem | Jarak standar antar elemen |

### Kriteria Selesai
Mengubah nilai `--color-primary` (`--lmu-red`) di satu baris pada file `tokens.css` harus otomatis mengubah seluruh warna button, link, title, dan focus line di halaman tanpa mengedit berkas CSS lainnya.
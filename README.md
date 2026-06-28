# Premium Blogger Template 2026

Template awal untuk *Premium Blogger Template 2026* — warna dominan jingga & putih. File ini adalah versi awal yang mendukung tata letak Blogger (Layout) sehingga Anda bisa men-drag/drop gadget (widgets) dari Dashboard > Layout.

## Apa yang saya tambahkan
- `premium-blogger-template-2026.xml` — template Blogger dengan section untuk header, featured, main posts, sidebar, dan footer.
- `assets/ui-screenshot.svg` — mockup UI (SVG) yang menunjukkan tata letak header, hero, post cards, dan sidebar.
- README berisi petunjuk instalasi dasar dan cara mengganti AdSense.

## Cara install
1. Buka Blogger Dashboard → Theme → Backup/Restore → Upload
2. Pilih file `premium-blogger-template-2026.xml` lalu upload.
3. Setelah upload, buka **Layout** untuk melihat section/widget yang bisa diedit: Header, Featured, Blog Posts, Sidebar, Footer.
4. Untuk mengganti logo: buka *Layout* → Header (widget Header) → edit.
5. Untuk menambahkan unit AdSense:
   - Tambah gadget **HTML/JavaScript** pada Sidebar atau di tempat yang diinginkan.
   - Paste kode AdSense Anda (pastikan `data-ad-client` sesuai). Di file template ada komentar placeholder untuk iklan.

## Konfigurasi warna & font
Template menggunakan CSS variable di bagian skin:
- --color-primary: #FF6A00 (jingga utama)
- Ganti nilai variable ini di dalam file XML jika ingin warna lain.
- Font default: Poppins (Google Fonts)

## Fitur saat ini (awal)
- Header sticky dan smooth scroll (CSS + sedikit JS)
- Struktur yang mendukung tata letak (Layout) Blogger
- Placeholder untuk unit iklan (AdSense) — pengguna harus memasukkan Publisher ID sendiri
- Basic JSON-LD dan meta tags

## Catatan AdSense
- Template menyediakan tempat untuk menempelkan kode AdSense. Agar *approval* lebih mudah:
  - Siapkan minimal 15-20 artikel orisinal untuk demo sebelum mengajukan AdSense.
  - Tambahkan halaman Privacy Policy & About.
  - Jangan gunakan placeholder iklan di semua posisi secara agresif saat mengajukan.

## Next steps (saya akan lanjut jika Anda setujui)
1. Lengkapi desain CSS (typography scale, spacing), micros interactions, dan optimasi performa (critical CSS).
2. Tambahkan komponen Featured Post (slider) sebagai widget opsional.
3. Buat varian warna/customizer di Template Designer (opsional).
4. Buat file demo (sample posts) atau deploy demo site untuk pengujian AdSense.

Jika setuju, saya akan lanjut menyelesaikan full template (XML lengkap), optimasi SEO/Schema, dan membuat varian instalasi lengkap. Juga sudah saya sertakan mockup UI (SVG) di `assets/ui-screenshot.svg`.

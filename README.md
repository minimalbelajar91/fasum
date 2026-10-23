# SILAPORAFASUM — MVP Demo (100% static)

Aplikasi prototype pelaporan fasilitas umum, menggunakan HTML, CSS, dan JavaScript tanpa library eksternal.

## Menjalankan

1. Ekstrak ZIP.
2. Buka `index.html` di browser. Untuk fitur lokasi, jalankan melalui `http://localhost` atau HTTPS.
3. Alternatif menggunakan VS Code Live Server atau terminal: `python -m http.server 5500`, kemudian buka `http://localhost:5500`.
4. Buka **Buat Laporan**, isi formulir, dan unggah foto kecil (maks 900 KB).
5. Salin nomor tiket; gunakan halaman **Lacak Laporan** bersama kontak yang sama.
6. Buka **Admin Demo** untuk mengubah status, instansi tujuan, dan catatan. Lihat perubahan di halaman tracking.

## Halaman
- `index.html`: beranda.
- `lapor.html`: formulir laporan, foto, koordinat browser.
- `tracking.html`: pelacakan tiket dengan nomor kontak.
- `admin.html`: dashboard admin demonstrasi, filter, update status, export JSON.

## Batasan keamanan dan operasional
- **Tidak ada backend, database bersama, login, atau pengiriman laporan ke pemerintah.** Semua data disimpan di `localStorage` pada browser/perangkat yang sama.
- Admin demo tidak dilindungi autentikasi. Jangan menggunakannya dengan data pribadi nyata atau mengklaim siap produksi.
- `localStorage` memiliki kuota terbatas, dapat terhapus, dan tidak tersinkron antarperangkat. File foto disimpan sebagai data URL.
- Tidak ada integrasi API pemerintah, email, moderasi otomatis, atau SLA penanganan.
- Publikasi website statis gratis dimungkinkan pada GitHub Pages, tetapi hanya cocok untuk menampilkan DEMO; **jangan publikasikan sistem pengaduan sungguhan** sebelum backend dan autentikasi siap.

## Tahap berikutnya agar siap online
1. Pindahkan database ke Supabase PostgreSQL (free tier selama kuota dan ketentuan sesuai).
2. Gunakan Supabase Auth dan Row Level Security untuk membatasi akses admin/petugas.
3. Pindahkan foto ke storage privat dengan aturan akses, validasi file, dan rate limiting.
4. Tambahkan kontrol akses pelacakan yang aman dan verifikasi identitas pelapor.
5. Siapkan kebijakan privasi, retensi data, backup, monitoring, dan mekanisme kerja sama dinas.
6. Deploy ke layanan hosting yang mengizinkan jenis penggunaan aplikasi.

Semua harga/kuota layanan pihak ketiga dapat berubah. Tidak ada biaya software untuk menjalankan prototype lokal ini.

### Fitur kamera (versi 1.1)
- Buka `lapor.html`, tekan **Buka Kamera**, izinkan akses kamera, kemudian **Ambil Foto**. Foto otomatis dimasukkan ke input unggahan.
- **Foto Ulang** untuk mengganti gambar, atau pilih file foto seperti biasa.
- Kamera live memerlukan **HTTPS atau localhost** (jalankan melalui Live Server di localhost). Jika tidak didukung, unggah foto dari perangkat.
- Foto dikompresi ke JPEG agar maksimal 900 KB. Data laporan tetap hanya tersimpan di localStorage browser.

### PWA / Shortcut Aplikasi (versi 1.2)
- Jalankan melalui **localhost** atau **HTTPS**. `file://` tidak mendukung service worker.
- Buka halaman beranda dengan Chrome Android; gunakan tombol **Install Aplikasi** bila tersedia, atau menu browser **Install app / Tambahkan ke layar utama**.
- Di iPhone gunakan **Safari → Bagikan → Tambahkan ke Layar Utama**.
- Ikon aplikasi dan tampilan standalone disediakan oleh `manifest.webmanifest`. Service worker menyimpan aset halaman untuk membuka tampilan dasar ketika offline.
- **Penting:** Laporan tetap tersimpan lokal di perangkat yang sama. Mode offline bukan sinkronisasi dan kamera/GPS dapat memerlukan izin serta koneksi. Tidak ada push notification.
- Saat memperbarui aset, ganti versi cache dalam `sw.js` agar pengguna memperoleh perubahan.

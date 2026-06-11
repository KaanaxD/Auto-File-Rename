# Auto Rename File

Program sederhana berbasis Node.js untuk mengubah nama file secara otomatis dan memindahkannya ke folder tujuan. Nomor file akan bertambah secara otomatis dan disimpan di `data.json`.

## Fitur

* Mengubah nama file secara otomatis.
* Mempertahankan ekstensi file asli.
* Memindahkan file dari folder `input` ke folder `output`.
* Menyimpan nomor urut terakhir di `data.json`.
* Membuat folder `input` dan `output` secara otomatis jika belum ada.

## Struktur Proyek

```
project/
│
├── input/
├── output/
├── data.json
├── index.js
└── README.md
```

## Konfigurasi

Isi `data.json`:

```json
{
    "nama_file": "aset",
    "id": 1
}
```

Keterangan:

| Properti    | Fungsi           |
| ----------- | ---------------- |
| `nama_file` | Prefix nama file |
| `id`        | Nomor awal file  |

Contoh:

```json
{
    "nama_file": "gambar",
    "id": 100
}
```

Maka hasil rename:

```
gambar-100.jpg
gambar-101.png
gambar-102.webp
```

## Cara Kerja

Misalkan folder `input` berisi:

```
foto.jpg
kucing.png
gambar.webp
```

Setelah program dijalankan:

```
output/
├── aset-1.jpg
├── aset-2.png
└── aset-3.webp
```

Folder `input` akan kosong karena file dipindahkan.

`data.json` otomatis berubah menjadi:

```json
{
    "nama_file": "aset",
    "id": 4
}
```

## Instalasi

Install dependency:

```bash
npm install fs-extra
```

## Menjalankan Program

```bash
node index.js
```

atau

```bash
npm start
```

jika sudah dikonfigurasi di `package.json`.

## Teknologi

* Node.js
* fs-extra
* path

## Konsep yang Dipelajari

* Membaca isi folder.
* Membuat folder secara otomatis.
* Mengubah nama dan memindahkan file.
* Membaca dan menulis file JSON.
* Mengelola path file.
* Konfigurasi sederhana menggunakan JSON.

## Catatan

* File asli akan dipindahkan ke folder `output`.
* Ekstensi file tetap dipertahankan.
* Nomor file akan terus bertambah berdasarkan nilai `id` di `data.json`.
* Pastikan file `data.json` tersedia sebelum menjalankan program.

## Pengembangan Selanjutnya

* Menentukan folder input dan output melalui konfigurasi.
* Mode copy tanpa menghapus file asli.
* Format nomor otomatis (`001`, `002`, ...).
* Dukungan subfolder.
* Pembuatan log aktivitas.
* Penanganan error yang lebih baik.

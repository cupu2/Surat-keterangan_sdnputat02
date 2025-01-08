// Menampilkan data yang sudah disimpan di localStorage
document.getElementById('siswa-nama').innerText = localStorage.getItem('nama');
document.getElementById('siswa-kelas').innerText = localStorage.getItem('kelas');
document.getElementById('siswa-asal-sekolah').innerText = localStorage.getItem('asalSekolah');
document.getElementById('siswa-alamat-sekolah').innerText = localStorage.getItem('alamatSekolah');

// Fungsi untuk tombol Cetak Surat
document.getElementById('printBtn').addEventListener('click', function() {
    window.print(); // Ini akan membuka dialog cetak untuk mencetak halaman

    
});

// Fungsi untuk mengupdate tanggal otomatis
function updateDate() {
    var currentDate = new Date(); // Membuat objek Date untuk tanggal saat ini
    var day = currentDate.getDate(); // Mendapatkan tanggal (hari)
    var month = currentDate.getMonth() + 1; // Mendapatkan bulan, +1 karena bulan dimulai dari 0 (Jan)
    var year = currentDate.getFullYear(); // Mendapatkan tahun penuh (misal: 2025)
    
    // Format tanggal: DD/MM/YYYY
    var formattedDate = day + '/' + month + '/' + year;
    
    // Menampilkan tanggal di elemen dengan ID 'currentDate'
    document.getElementById('currentDate').textContent = formattedDate;
}

// Fungsi untuk menjalankan updateDate sebelum pencetakan
window.onbeforeprint = updateDate;

// Fungsi untuk mendapatkan tanggal, bulan, dan tahun saat ini
function updateDate() {
    var currentDate = new Date(); // Membuat objek Date untuk mendapatkan tanggal dan waktu saat ini
    var day = currentDate.getDate(); // Mendapatkan tanggal (hari)
    var month = currentDate.getMonth() + 1; // Mendapatkan bulan (perlu +1 karena bulan dimulai dari 0)
    var year = currentDate.getFullYear(); // Mendapatkan tahun (misalnya 2025)
    
    // Format tanggal: DD/MM/YYYY
    var formattedDate = day + ' ' + getMonthName(month) + ' ' + year; // Menggunakan fungsi untuk mendapatkan nama bulan
    
    // Mengubah konten tanggal di bagian tanda tangan
    document.getElementById('currentDate').textContent = formattedDate;
}

// Fungsi untuk mendapatkan nama bulan berdasarkan nomor bulan
function getMonthName(monthNumber) {
    var months = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ];
    return months[monthNumber - 1]; // Menyesuaikan index array dengan bulan
}

// Jalankan fungsi updateDate ketika halaman dimuat
window.onload = updateDate;


// Fungsi untuk sanitasi input (untuk mencegah XSS)
function sanitizeInput(input) {
    var element = document.createElement('div');
    element.innerText = input;  // Menggunakan innerText untuk mencegah HTML injeksi
    return element.innerHTML;   // Mengembalikan nilai yang telah disanitasi
}

// Fungsi validasi form
function validateForm() {
    let nama = document.getElementById('nama').value;
    let kelas = document.getElementById('kelas').value;
    let asalSekolah = document.getElementById('asal_sekolah').value;
    let alamatSekolah = document.getElementById('alamat_sekolah').value;

    // Sanitasi input sebelum diproses
    nama = sanitizeInput(nama);
    kelas = sanitizeInput(kelas);
    asalSekolah = sanitizeInput(asalSekolah);
    alamatSekolah = sanitizeInput(alamatSekolah);

    // Memastikan semua input terisi
    if (!nama || !kelas || !asalSekolah || !alamatSekolah) {
        alert("Semua kolom harus diisi!");
        return false;
    }

    // Menampilkan hasil yang sudah disanitasi
    console.log("Nama: " + nama);
    console.log("Kelas: " + kelas);
    console.log("Asal Sekolah: " + asalSekolah);
    console.log("Alamat Sekolah: " + alamatSekolah);

    return true;  // Form valid
}

// Menambahkan event listener untuk form submit
document.getElementById('biodataForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Mencegah form submit biasa
    if (validateForm()) {
        // Jika validasi berhasil, kirim data atau lakukan sesuatu
        alert("Data berhasil disubmit!");
    }
});

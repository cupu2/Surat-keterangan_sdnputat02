// Menangani penyimpanan data form ke localStorage
document.getElementById('saveButton').addEventListener('click', function(event) {
    event.preventDefault(); // Mencegah form submit

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const kelas = document.getElementById('kelas').value;
    const asalSekolah = document.getElementById('asal_sekolah').value;
    const alamatSekolah = document.getElementById('alamat_sekolah').value;

    // Simpan data ke localStorage
    localStorage.setItem('nama', nama);
    localStorage.setItem('kelas', kelas);
    localStorage.setItem('asalSekolah', asalSekolah);
    localStorage.setItem('alamatSekolah', alamatSekolah);

    alert('Biodata berhasil disimpan!');
});

// Navigasi ke halaman surat
document.getElementById('generate-surat').addEventListener('click', function() {
    window.location.href = 'surat.html'; // Mengarahkan ke halaman surat
});


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

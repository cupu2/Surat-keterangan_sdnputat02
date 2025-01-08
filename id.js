// Data email dan password yang valid (contoh, seharusnya dari database)
const validEmail = "sdnputat2@gmail.com";
const validPassword = "password123";

// Tangkap form login
const loginForm = document.getElementById('loginForm');

// Tambahkan event listener untuk form submit
loginForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah form dikirim secara default

    // Ambil nilai email dan password dari input
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Verifikasi email dan password
    if (email === validEmail && password === validPassword) {
        alert("Login berhasil!");
        window.location.href = "index.html"; // Arahkan ke halaman index.html
    } else {
        alert("Email atau password salah. Silakan coba lagi.");
    }
});

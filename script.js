// Menunggu DOM selesai dimuat sebelum menjalankan script
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== FUNGSI DARK MODE =====
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    if (darkModeToggle) {
        // Event listener untuk toggle dark mode
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            // Ubah teks tombol sesuai mode
            if (document.body.classList.contains('dark-mode')) {
                darkModeToggle.textContent = '☀️ Light Mode';
            } else {
                darkModeToggle.textContent = '🌙 Dark Mode';
            }
        });
    }

    // ===== FUNGSI FORMULIR KONTAK =====
    // Cek apakah form contact ada di halaman saat ini
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        const notification = document.getElementById('notification');
        
        // Event listener untuk submit form
        contactForm.addEventListener('submit', function(event) {
            // Mencegah form dikirim secara default
            event.preventDefault();
            
            // Ambil nilai input dan hapus spasi di awal/akhir
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validasi: cek apakah ada field yang kosong
            if (name === '' || email === '' || message === '') {
                notification.textContent = 'Semua kolom harus diisi!';
                notification.style.color = 'red';
                notification.style.backgroundColor = '#ffe6e6';
                notification.style.display = 'block';
            } else {
                // Jika semua field terisi
                notification.textContent = 'Pesan berhasil dikirim!';
                notification.style.color = 'green';
                notification.style.backgroundColor = '#e6ffe6';
                notification.style.display = 'block';
                
                // Kosongkan form setelah berhasil
                contactForm.reset();
            }
            
            // Sembunyikan notifikasi setelah 3 detik
            setTimeout(function() {
                notification.style.display = 'none';
            }, 3000);
        });
    }

    // ===== FUNGSI TAMPILKAN/SEMBUNYIKAN FOTO =====
    // Cek apakah elemen-elemen about page ada
    const profilePic = document.getElementById('profile-pic');
    const togglePhotoBtn = document.getElementById('toggle-photo-btn');
    const btnIcon = document.getElementById('btn-icon');
    const btnText = document.getElementById('btn-text');
    
    if (profilePic && togglePhotoBtn) {
        // Set initial state - foto ditampilkan
        let isPhotoVisible = true;
        
        // Event listener untuk tombol toggle
        togglePhotoBtn.addEventListener('click', function() {
            if (isPhotoVisible) {
                // Sembunyikan foto
                profilePic.style.display = 'none';
                btnIcon.textContent = '👁️';
                btnText.textContent = 'Tampilkan Foto';
                isPhotoVisible = false;
            } else {
                // Tampilkan foto
                profilePic.style.display = 'block';
                btnIcon.textContent = '🚫👁️';
                btnText.textContent = 'Sembunyikan Foto';
                isPhotoVisible = true;
            }
        });
    }
    
});
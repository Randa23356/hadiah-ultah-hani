onload = () =>{
        document.body.classList.remove("container");
};

// Fungsi untuk memutar musik otomatis
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.querySelector('audio');
    if (audio) {
        // Coba putar musik saat halaman load
        audio.play().catch(function(error) {
            console.log('Autoplay diblokir oleh browser. Musik akan diputar saat Anda mengklik halaman.');
            // Jika diblokir, putar saat klik pertama
            document.addEventListener('click', function() {
                audio.play();
            }, { once: true });
        });
    }
});
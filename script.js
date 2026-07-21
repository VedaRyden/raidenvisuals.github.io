// 2. FITUR POP-UP NOTIFIKASI SAAT KLIK DOWNLOAD
const downloadButtons = document.querySelectorAll('.download-btn');
downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const fileName = this.parentElement.querySelector('.file-name').textContent;
        
        // Menampilkan pesan sukses kecil di browser
        alert(`Anda akan memasuki Link Vertise untuk mengunduh "${fileName},"  harap berhati-hati dengan iklannya. Jika ingin melewati semua iklan, anda bisa donate Rp1000 per bulan di trakteer.id`);
    });
});
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
// 2. This function creates the <iframe> after the API code downloads
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '390',
        width: '640',
        videoId: 'dQw4w9WgXcQ', // Replace with your YouTube Video ID
        playerVars: {
            'controls': 0, // Hides default YouTube controls so our custom UI works
            'rel': 0
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}
// 3. FITUR SOSIAL MEDIA CONTAINER (HALUS)
const socialContainer = document.querySelector('.social-media-container');
let scrollStopTimer;

window.addEventListener('scroll', function() {
    // Tambahkan kelas hilangnya transisi halus begitu user mulai scroll
    socialContainer.classList.add('social-fade-out');
    
    // Reset timer setiap kali event scroll terpicu
    clearTimeout(scrollStopTimer);
    
    // Setelah user BERHENTI scroll selama 300ms, munculkan kembali secara halus
    scrollStopTimer = setTimeout(function() {
        socialContainer.classList.remove('social-fade-out');
    }, 1500);
}, { passive: true });
// 4. SISTEM CEK KOMPATIBILITAS GPU
const gpuInput = document.getElementById('gpuInput');
const gpuCheckBtn = document.getElementById('gpuCheckBtn');
const gpuResult = document.getElementById('gpuResult');

// Fungsi utama untuk memeriksa kecocokan GPU
function periksaKompatibilitasGPU() {
    // Ambil ketikan user, hapus spasi kosong, dan ubah ke huruf kecil agar pencarian fleksibel
    let ketikanUser = gpuInput.value.replace(/\s+/g, '').toLowerCase();
    
    if (ketikanUser === "") {
        soundSalah.pause(); soundSalah.currentTime = 0;
        soundSalah.play(); // KODE BARU: Putar suara salah ketik
        gpuResult.textContent = "Silakan ketik nama GPU nya dulu woilah!";
        gpuResult.className = "gpu-result-msg gpu-fail";
        gpuInput.classList.add('efek-gempa');
                setTimeout(() => {
                    gpuInput.classList.remove('efek-gempa');
                }, 300);
        gpuResult.style.display = "block";
        return;
    }

    // Ambil data dari file tiers.json di repositori GitHub Anda
    fetch('tiers.json')
        .then(response => response.json())
        .then(data => {
            let ditemukan = false;
            let nomorTier = 0;

            // Lakukan perulangan untuk mencocokkan ketikan user dengan database GPU
            for (let namaGpuAsli in data) {
                let namaGpuSistem = namaGpuAsli.replace(/\s+/g, '').toLowerCase();
                
                if (namaGpuSistem.includes(ketikanUser) || ketikanUser.includes(namaGpuSistem)) {
                    ditemukan = true;
                    nomorTier = data[namaGpuAsli];
                    break;
                }
            }
            const soundSalah = document.getElementById('soundSalah');
            const soundGagal = document.getElementById('soundGagal');
            const soundWarn = document.getElementById('soundWarn');
            const soundSukses = document.getElementById('soundSukses');
            // Tampilkan hasil berdasarkan aturan kustom Tier Vibrant Visuals
            gpuResult.style.display = "block";
            if (ditemukan) {
                soundSukses.pause(); soundSukses.currentTime = 0;
                soundGagal.pause(); soundGagal.currentTime = 0;
                if (nomorTier === 1) {
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                    gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                    gpuInput.classList.add('outline-merah'); // KODE BARU: Nyalakan outline merah
                    soundGagal.play(); // KODE BARU: Putar suara gagal
                    // TIER 1: TIDAK KOMPATIBEL (Warna Merah)
                    gpuResult.textContent = `❌ Tidak Kompatibel! GPU mu terdeteksi di Tier 1. Sebaiknya ganti HP atau beli HP baru yang spek nya lebih bagus, GPU ini terlalu kuno buat sekarang.`;
                    gpuResult.className = "gpu-result-msg gpu-fail";
                    // KODE BARU: Hanya teks hasil jawaban yang gempa
                    gpuResult.classList.add('efek-gempa');
                    setTimeout(() => {
                        gpuResult.classList.remove('efek-gempa');
                    }, 300);
                } 
                else if (nomorTier === 2) {
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                    gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                    gpuInput.classList.add('outline-merah'); // KODE BARU: Nyalakan outline merah
                    soundGagal.play(); // KODE BARU: Putar suara gagal
                    // TIER 2: TIDAK KOMPATIBEL (Warna Merah)
                    gpuResult.textContent = `❌ Tidak Kompatibel! GPU mu terdeteksi di Tier 2. Yang sabar ya semoga bisa dibelikan HP baru Aamiin ^^.`;
                    gpuResult.className = "gpu-result-msg gpu-fail";
                    // KODE BARU: Hanya teks hasil jawaban yang gempa
                    gpuResult.classList.add('efek-gempa');
                    setTimeout(() => {
                        gpuResult.classList.remove('efek-gempa');
                    }, 300);
                } 
                else if (nomorTier === 3) {
                    soundWarn.play(); // KODE BARU: Putar suara peringatan
                    gpuInput.classList.remove('efek-cahaya-hijau');
                    gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                    gpuInput.classList.remove('outline-merah'); // Hapus merah karena salah isi
                    gpuInput.classList.add('outline-kuning'); // KODE BARU: Nyalakan outline kuning
                    // TIER 3: KEMUNGKINAN KOMPATIBEL (Warna Oranye/Kuning)
                    gpuResult.textContent = `⚠️ Kemungkinan Kompatibel! GPU mu berada di Tier 3. Kalau masih tidak bisa pasti kedepannya bakal bisa karena GPU ini masih memiliki harapan, tetapi performa FPS bisa bervariasi tergantung kondisi perangkat.`;
                    gpuResult.className = "gpu-result-msg gpu-warning";
                    // KODE BARU: Hanya teks hasil jawaban yang gempa
                    gpuResult.classList.add('efek-gempa');
                    setTimeout(() => {
                        gpuResult.classList.remove('efek-gempa');
                    }, 300);
                } 
                else if (nomorTier === 4 || nomorTier === 5) {
                    soundSukses.play(); // KODE BARU: Putar suara sukses
                    // Reset animasi dengan menghapus kelas lama (jika ada) agar bisa terpicu ulang
        gpuInput.classList.remove('efek-cahaya-hijau');
        
        // Trik kecil memicu ulang animasi di browser (trigger reflow)
        void gpuInput.offsetWidth; 
        
        // KODE UTAMA: Tambahkan kembali efek cahaya hijau fade out
        gpuInput.classList.add('efek-cahaya-hijau'); 
                    // Tier 4 & 5: PASTI KOMPATIBEL (Warna Hijau)
                    gpuInput.classList.remove('outline-kuning'); // Hapus kuning karena salah isi
                    gpuInput.classList.remove('outline-merah'); // Hapus merah karena salah isi
                    gpuInput.classList.add('outline-hijau'); // KODE BARU: Nyalakan outline hijau
                    if (nomorTier === 4) {
                        gpuResult.textContent = `✅ SELAMAT! GPU Anda Sudah Kompatibel! GPU mu berada di Tier 4. Vibrant Visuals akan berjalan cukup lancar dan optimal di hpmu!`;
                    } else {
                        gpuResult.textContent = `🌟😮✅ Njir HP Gaming Coeg, GPU mu berada di Tier 5. Vibrant Visuals sudah pasti akan berjalan dengan lancar dan optimal di hp gamingmu!`;
                    }
                    gpuResult.className = "gpu-result-msg gpu-success";
                }
                } else {
                    // SALAH ISI / TIDAK DITEMUKAN (Efek Gempa)
                soundSalah.pause(); soundSalah.currentTime = 0;
                soundSalah.play(); // KODE BARU: Putar suara salah ketik
                // Jika salah isi / tidak ditemukan (Efek gempa kemarin)
                gpuInput.classList.remove('outline-hijau'); // Hapus hijau karena salah isi
                gpuResult.textContent = "😐 GPU apa ini woy? tolong ketikan nya diperhatikan yah. Pastikan penulisan nama tipe GPU nya sudah benar (Contoh: Adreno 610).";
                gpuResult.className = "gpu-result-msg gpu-fail";
                
                gpuInput.classList.add('efek-gempa');
                setTimeout(() => {
                    gpuInput.classList.remove('efek-gempa');
                }, 300);
            }

        })
        .catch(error => {
            console.error("Gagal memuat database GPU:", error);
            gpuResult.textContent = "Terjadi gangguan sistem saat membaca database.";
            gpuResult.className = "gpu-result-msg gpu-fail";
            gpuResult.style.display = "block";
        });
}
// Jalankan fungsi jika tombol "Cek" di-klik
gpuCheckBtn.addEventListener('click', periksaKompatibilitasGPU);
// Jalankan fungsi jika user menekan tombol "Enter" di keyboard komputer
gpuInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        periksaKompatibilitasGPU();
    }
});
// 1. Ambil elemen audio Anda (Pastikan baris ini sudah ada)
const soundSalah = document.getElementById('soundSalah');
const soundGagal = document.getElementById('soundGagal');
const soundSukses = document.getElementById('soundSukses');

// 2. KODE BARU: Atur tingkat volume suara di sini (Nilai bawaan asli adalah 1.0)
soundSalah.volume = 0.2; // Mengecilkan volume suara ERROR menjadi 30% saja
soundGagal.volume = 0.2; // Mengecilkan volume suara GAGAL (Tier 1 & 2) menjadi 40% saja
soundSukses.volume = 0.6; // Mengecilkan volume suara SUKSES (Tier 3 & 4) menjadi 40% saja
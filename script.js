// 2. FITUR POP-UP NOTIFIKASI SAAT KLIK DOWNLOAD
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const fileName = this.parentElement.querySelector('.file-name').textContent;
        
        // Menampilkan pesan sukses kecil di browser
        alert(`Anda akan memasuki Link Vertise untuk mengunduh "${fileName},"  harap berhati-hati dengan iklannya. Jika ingin melewati semua iklan, anda bisa donate Rp1000 per bulan di trakteer.id`);
    });
});
// 3. FITUR SOCIAL MEDIA CONTAINER HILANG SAAT SCROLL, MUNCUL LAGI SAAT BERHENTI
const socialContainer = document.querySelector('.social-media-container');
let scrollStopTimer;

window.addEventListener('scroll', function() {
    // Sembunyikan container begitu user mulai scroll
    socialContainer.classList.add('is-hidden');

    // Reset timer setiap kali event scroll terpicu
    clearTimeout(scrollStopTimer);

    // Setelah user berhenti scroll selama 500ms, munculkan lagi container-nya
    scrollStopTimer = setTimeout(function() {
        socialContainer.classList.remove('is-hidden');
    }, 500);
}, { passive: true });

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

// 3. Once the player is ready, connect the HTML buttons to the player methods
function onPlayerReady(event) {
    document.getElementById('play-btn').addEventListener('click', function() {
        player.playVideo();
    });

    document.getElementById('pause-btn').addEventListener('click', function() {
        player.pauseVideo();
    });

    document.getElementById('mute-btn').addEventListener('click', function() {
        if (player.isMuted()) {
            player.unMute();
            this.textContent = "Mute";
        } else {
            player.mute();
            this.textContent = "Unmute";
        }
    });

    document.getElementById('volume-slider').addEventListener('input', function() {
        player.setVolume(this.value);
    });
}

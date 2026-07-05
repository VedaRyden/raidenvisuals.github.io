// 1. FITUR PENCARIAN (LIVE SEARCH)
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('keyup', function() {
    const filterText = searchInput.value.toLowerCase();
    const cards = document.querySelectorAll('.download-card');

    cards.forEach(card => {
        const fileName = card.querySelector('.file-name').textContent.toLowerCase();
        
        // Jika nama file cocok dengan ketikan, tampilkan. Jika tidak, sembunyikan.
        if (fileName.includes(filterText)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
});

// 2. FITUR POP-UP NOTIFIKASI SAAT KLIK DOWNLOAD
const downloadButtons = document.querySelectorAll('.download-btn');

downloadButtons.forEach(button => {
    button.addEventListener('click', function(event) {
        const fileName = this.parentElement.querySelector('.file-name').textContent;
        
        // Menampilkan pesan sukses kecil di browser
        alert(`Unduhan untuk "${fileName}" telah dimulai!`);
    });
});
// 1. Load the IFrame Player API code asynchronously
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

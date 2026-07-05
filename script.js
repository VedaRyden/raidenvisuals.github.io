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

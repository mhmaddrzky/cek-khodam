const motivationalMessages = [
    "Kamu luar biasa!",
    "Kerja kerasmu akan membuahkan hasil!",
    "Tetap semangat, aku mendukungmu!",
    "Kamu bisa melakukan apapun yang kamu pikirkan!",
    "Jangan menyerah, teruslah berjuang!",
    "Setiap usaha tidak akan sia-sia!",
    "Aku bangga padamu!",
    "Lakukan yang terbaik, hasilnya akan mengikuti!",
    "Tetap fokus dan terus melangkah!",
    "Kamu lebih kuat dari yang kamu kira!",
    "Semangat terus yah, jangan ngeluh! Aku bakal selalu ada kok."
];

document.getElementById('revealButton').addEventListener('click', function() {
    displayRandomMessage();
    document.getElementById('message').classList.remove('hidden');
    this.classList.add('hidden');
});

document.getElementById('newMessageButton').addEventListener('click', displayRandomMessage);

function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * motivationalMessages.length);
    document.getElementById('motivationText').textContent = motivationalMessages[randomIndex];
}

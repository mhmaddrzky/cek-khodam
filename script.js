const motivationalMessages = [
    "sely hebatttt kuattt!",
    "Kerja keras piraku teu membuahkan hasil bener teu hehe😁!",
    "pokonamah Tetap semangat, abi pasti selalu ngadukung",
    "tetap menyerah, jangan semangat 😁!",
    "Setiap usaha pasti aya hasilna cenah !",
    "pasti bangga si mamah si bapa teh!",
    "Lakukeun nu terbaik, hasilna pasti nuturkeun!",
    "jangan lupa sholat oge!",
    "coba'ana edan edanan asa teu munkin lamun hadiah na kipas angin bener teu?🤣",
    "Semangat terus pokonamah ti abi ngeluh bae nyerah jangan 😊"
    
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

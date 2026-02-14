// 🌹 1. UPDATE YOUR DATE HERE
const anniversaryDate = new Date("2024-12-31");

// 📸 2. LIST YOUR IMAGES HERE (Must match your GitHub 'images' folder)
const memories = [
    { image: 'images/57F5B90C-3B04-4C0F-9CC7-C8D4898C2899_1_105_c.jpeg', caption: 'The first day ❤️' },
    { image: 'images/281B29E7-5551-4CCB-BDB3-FAE169C39F05_1_105_c.jpeg', caption: 'Our favorite date night 🌸' },
    { image: 'images/6673C7A7-5983-4879-AC94-051B696A9121.jpeg', caption: 'Forever to go!' }
];

// Anniversary Counter Logic
function updateCounter() {
    const today = new Date();
    const diffTime = today - anniversaryDate;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("daysTogether").innerText =
        "Together for " + days + " beautiful days 💕";
}

// Gallery Generation
function displayMemories() {
    const gallery = document.getElementById("gallery");
    memories.forEach(memory => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <img src="${memory.image}">
            <div class="caption">${memory.caption}</div>
        `;
        gallery.appendChild(card);
    });
}

// ❤️ Floating Hearts Logic
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";

    const duration = Math.random() * 3 + 3;
    heart.style.animation = `floatUp ${duration}s linear forwards`;

    document.body.appendChild(heart);
    setTimeout(() => { heart.remove(); }, duration * 1000);
}

// Run everything
updateCounter();
displayMemories();
setInterval(createHeart, 600);
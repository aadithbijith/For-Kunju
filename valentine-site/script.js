// 🌹 1. UPDATE YOUR DATE HERE

// --- NEW PASSWORD LOGIC ---
const SECRET_PASSWORD = "31122025"; // Set your password here

function checkPassword() {
    const input = document.getElementById("passwordInput").value.toLowerCase();
    const errorMessage = document.getElementById("errorMessage");

   if (input === SECRET_PASSWORD.toLowerCase()) {
           // Success logic
           document.getElementById("loginScreen").style.display = "none";
           document.getElementById("mainContent").style.display = "block";
       } else {
           // This is the line that makes it show up!
           errorMessage.style.display = "block";

           // Optional: Clear the wrong password so she can try again
           document.getElementById("passwordInput").value = "";
       }
}
// --- END NEW LOGIC ---

// ... YOUR EXISTING CODE STARTS HERE (anniversaryDate, memories, etc.) ...
const anniversaryDate = new Date("2024-12-31");

// 📸 2. LIST YOUR IMAGES HERE (Must match your GitHub 'images' folder)
const memories = [
    { image: 'images/photo3.jpeg', caption: 'The first flight ❤️' },
    { image: 'images/photo9.jpeg', caption: 'Our first date night 🌸' },
    { image: 'images/photo10.jpeg', caption: 'Best Clubbing time ever !' },
    { image: 'images/photo7.jpeg', caption: 'My favourite 💕' },
    { image: 'images/photo5.jpeg', caption: 'Sun kisseddd' },
    { image: 'images/photo11.jpeg', caption: 'Travelled soo far just to meet for few hours' },
    { image: 'images/photo12.jpeg', caption: 'Long Distance 😭' },
    { image: 'images/photo13.jpeg', caption: 'Awkward poses 😂' }


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
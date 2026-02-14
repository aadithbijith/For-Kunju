<script>

// 🌹 CHANGE THIS DATE
const anniversaryDate = new Date("2023-02-14");

function updateCounter() {
    const today = new Date();
    const diffTime = today - anniversaryDate;
    const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("daysTogether").innerText =
        "We have been together for " + days + " beautiful days 💕";
}
updateCounter();

let memories = JSON.parse(localStorage.getItem("memories")) || [];
const MAX_MEMORIES = 12; // Limit total memories

function saveMemories() {
    try {
        localStorage.setItem("memories", JSON.stringify(memories));
    } catch (e) {
        alert("Storage full 😢 Try deleting some memories.");
    }
}

function displayMemories() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    memories.forEach((memory, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${memory.image}">
            <div class="caption">${memory.caption}</div>
            <button onclick="deleteMemory(${index})" style="margin-top:5px;background:#ff4d6d;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">Delete</button>
        `;

        gallery.appendChild(card);
    });
}

function deleteMemory(index) {
    memories.splice(index, 1);
    saveMemories();
    displayMemories();
}

// 📦 Image Compression Function
function compressImage(file, callback) {
    const reader = new FileReader();

    reader.onload = function (event) {
        const img = new Image();
        img.onload = function () {

            const canvas = document.createElement("canvas");
            const MAX_WIDTH = 800; // Resize width
            const scaleSize = MAX_WIDTH / img.width;

            canvas.width = MAX_WIDTH;
            canvas.height = img.height * scaleSize;

            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

            // Compress to 0.7 quality JPEG
            const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.7);
            callback(compressedDataUrl);
        };

        img.src = event.target.result;
    };

    reader.readAsDataURL(file);
}

function addMemory() {
    const imageInput = document.getElementById("imageInput");
    const captionInput = document.getElementById("captionInput");

    const file = imageInput.files[0];
    const caption = captionInput.value.trim();

    if (!file) {
        alert("Please select a photo ❤️");
        return;
    }

    if (caption === "") {
        alert("Write something sweet 💕");
        return;
    }

    if (memories.length >= MAX_MEMORIES) {
        alert("Maximum memories reached 💕 Delete one to add more.");
        return;
    }

    // iPhone Safari fix: delay compression slightly
    setTimeout(() => {
        compressImage(file, function (compressedImage) {

            memories.push({
                image: compressedImage,
                caption: caption
            });

            saveMemories();
            displayMemories();

            imageInput.value = "";
            captionInput.value = "";

        });
    }, 100);
}

displayMemories();

// 💖 Clear All Button
function clearAllMemories() {
    if (confirm("Are you sure you want to clear all memories? 💔")) {
        memories = [];
        saveMemories();
        displayMemories();
    }
}

// ✨ Floating Hearts
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 10) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 3) + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}

setInterval(createHeart, 600);

</script>
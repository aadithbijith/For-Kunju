let memories = JSON.parse(localStorage.getItem("memories")) || [];

function saveMemories() {
    localStorage.setItem("memories", JSON.stringify(memories));
}

function displayMemories() {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    memories.forEach((memory, index) => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <button class="delete-btn" onclick="deleteMemory(${index})">×</button>
            <img src="${memory.image}" alt="Memory">
            <div class="caption">${memory.caption}</div>
        `;

        gallery.appendChild(card);
    });
}

function addMemory() {
    const imageInput = document.getElementById("imageInput");
    const captionInput = document.getElementById("captionInput");

    const file = imageInput.files[0];
    const caption = captionInput.value;

    if (!file || caption.trim() === "") {
        alert("Please select a photo and write a memory ❤️");
        return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
        memories.push({
            image: e.target.result,
            caption: caption
        });

        saveMemories();
        displayMemories();

        imageInput.value = "";
        captionInput.value = "";
    };

    reader.readAsDataURL(file);
}

function deleteMemory(index) {
    memories.splice(index, 1);
    saveMemories();
    displayMemories();
}

displayMemories();
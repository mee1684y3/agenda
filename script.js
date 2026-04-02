const input = document.getElementById("noteInput");
const addBtn = document.getElementById("addBtn");
const noteList = document.getElementById("noteList");

// Notities laden uit localStorage
let notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

// Notitie toevoegen
addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;

    notes.push(text);
    input.value = "";
    saveNotes();
    renderNotes();
});

// Notities opslaan
function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
}

// Notities tonen
function renderNotes() {
    noteList.innerHTML = "";
    notes.forEach((note, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${note}
            <button onclick="deleteNote(${index})">X</button>
        `;
        noteList.appendChild(li);
    });
}

// Notitie verwijderen
function deleteNote(i) {
    notes.splice(i, 1);
    saveNotes();
    renderNotes();
}

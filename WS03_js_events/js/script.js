// ========================================
// HARJOITUS 1: Klikkaustapahtumat
// ========================================

// Ensimmäinen painike
const buttons = document.querySelectorAll("button");

buttons[0].onclick = function () {
    alert("You clicked me!");
};


// Eläintaulukko
function showTable() {
    const animal = "Tiikeri";
    const habitat = "Metsä";
    const diet = "Liha";

    const table = `
        <table class="display">
            <thead>
                <tr>
                    <th>Eläin</th>
                    <th>Elinympäristö</th>
                    <th>Ruokavalio</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${animal}</td>
                    <td>${habitat}</td>
                    <td>${diet}</td>
                </tr>
            </tbody>
        </table>
    `;

    const tableContainer = document.querySelector("#tableContainer");
    tableContainer.innerHTML = table;
}


// Toinen painike kutsuu showTable-funktiota
buttons[1].onclick = showTable;


// ========================================
// HARJOITUS 2: Kuuntelijat ja DOM
// ========================================

// Etsitään otsikot
const headings = document.querySelectorAll("h2");

// Harjoitus 2 -otsikon mouseover
headings[1].addEventListener("mouseover", function () {
    console.log("Stepped over me with a mouse!");
});


// Harjoitus 1 -otsikon klikkaus
headings[0].addEventListener("click", function () {
    headings[0].innerHTML = "Bye bye mouse!";
    headings[0].style.color = "red";
});


// ========================================
// HARJOITUS 3: Syöttötapahtumat
// ========================================

const feedback = document.querySelector("#feedback");
const charcount = document.querySelector("#charcount");
const status = document.querySelector("#status");
const preview = document.querySelector("#preview");


// Focus
feedback.addEventListener("focus", function () {
    status.innerHTML = "Kirjoita palautteesi tähän.";
    feedback.style.backgroundColor = "#ffffcc";
});


// Blur
feedback.addEventListener("blur", function () {
    status.innerHTML = "";
    feedback.style.backgroundColor = "";
});


// Input
feedback.addEventListener("input", function () {
    const text = feedback.value;

    // Merkkimäärä
    charcount.innerHTML = text.length + "/200";

    // Live-esikatselu
    if (text.length === 0) {
        preview.innerHTML = "(Esikatselu tulee tähän)";
    } else {
        preview.innerHTML = text;
    }
});


// ========================================
// HARJOITUS 4: Lomakkeen lähettäminen
// ========================================

const feedbackForm = document.querySelector("#feedbackForm");

feedbackForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const text = feedback.value.trim();

    if (text.length < 10 || text.length > 200) {
        status.innerHTML = "Palaute pitää olla 10–200 merkkiä pitkä.";
        status.style.color = "red";
        return;
    }

    status.innerHTML = "Thank you for your feedback!";
    status.style.color = "green";

    feedback.value = "";
    charcount.innerHTML = "0/200";
    preview.innerHTML = "(Esikatselu tulee tähän)";
});


// ========================================
// HARJOITUS 5: Näppäimistötapahtumat
// ========================================

const keybox = document.querySelector("#keybox");
const keyinfo = document.querySelector("#keyinfo");

let keyCount = 0;

document.addEventListener("keydown", function (event) {
    console.log(event);

    keyCount++;

    keyinfo.innerHTML =
        "Painettu näppäin: " + event.key +
        "<br>Näppäinkoodi: " + event.code +
        "<br>Painalluksia yhteensä: " + keyCount +
        "<br>Shift: " + event.shiftKey +
        "<br>Ctrl: " + event.ctrlKey +
        "<br>Alt: " + event.altKey;

    keybox.innerHTML = event.key;
    keybox.style.fontSize = "2em";
});


// ========================================
// BONUS: Näppäimen mukaan taustaväri
// ========================================

document.addEventListener("keydown", function (event) {
    if (event.key === "r") {
        keybox.style.backgroundColor = "lightcoral";
    } else if (event.key === "g") {
        keybox.style.backgroundColor = "lightgreen";
    } else if (event.key === "b") {
        keybox.style.backgroundColor = "lightblue";
    } else {
        keybox.style.backgroundColor = "";
    }
});
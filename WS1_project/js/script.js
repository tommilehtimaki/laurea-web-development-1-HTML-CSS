// Haetaan tarvittavat HTML-elementit
const form = document.getElementById("shopping-form");
const input = document.getElementById("product");
const list = document.getElementById("shopping-list");
const error = document.getElementById("error-message");

// Kun käyttäjä lisää tuotteen
form.addEventListener("submit", function(event) {

    event.preventDefault();

    // Haetaan kirjoitettu teksti
    const productName = input.value.trim();

    // Tarkistetaan tuotteen nimi
    if (productName.length < 2) {
        error.textContent = "Kirjoita vähintään 2 merkkiä.";
        input.classList.add("input-error");
        return;
    }

    // Poistetaan mahdollinen virheilmoitus
    error.textContent = "";
    input.classList.remove("input-error");

    // Luodaan uusi listan rivi
    const li = document.createElement("li");
    li.textContent = productName;

    // Luodaan Ostettu-painike
    const completeButton = document.createElement("button");
    completeButton.textContent = "Ostettu";

    // Kun Ostettu-painiketta painetaan
    completeButton.addEventListener("click", function() {

        li.classList.toggle("completed");

        if (li.classList.contains("completed")) {
            completeButton.textContent = "Peru";
        } else {
            completeButton.textContent = "Ostettu";
        }

    });

    // Luodaan Poista-painike
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Poista";

    // Kun Poista-painiketta painetaan
    deleteButton.addEventListener("click", function() {
        li.remove();
    });

    // Lisätään painikkeet riville
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // Lisätään rivi kauppalistaan
    list.appendChild(li);

    // Tyhjennetään tekstikenttä
    input.value = "";

});

// Poistetaan virhetyyli, kun käyttäjä kirjoittaa
input.addEventListener("input", function() {
    error.textContent = "";
    input.classList.remove("input-error");
});
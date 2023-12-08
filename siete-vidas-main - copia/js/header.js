const menu = document.querySelector(".deslizableMenu");
const hideMenuButton = document.getElementById("hideMenuButton");
const showMenuButton = document.getElementById("showMenuButton");

window.addEventListener("scroll", function() {
    // Si estás en la parte superior y el menú está oculto, muestra el menú y oculta ambos botones
    if (window.scrollY <= 50 && menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        hideMenuButton.style.display = "none";
        showMenuButton.style.display = "none";
    }
    // Si has hecho scroll más allá de 100px y el menú está visible, muestra el botón de ocultar
    else if (window.scrollY > 50 && !menu.classList.contains("hidden")) {
        hideMenuButton.style.display = "block";
        showMenuButton.style.display = "none";
    }
    // Si has hecho scroll más allá de 100px y el menú está oculto, muestra el botón de mostrar
    else if (window.scrollY > 0 && menu.classList.contains("hidden")) {
        hideMenuButton.style.display = "none";
        showMenuButton.style.display = "block";
    }
});

hideMenuButton.addEventListener("click", function() {

    menu.classList.add("hidden");
    hideMenuButton.style.display = "none";
    showMenuButton.style.display = "block";
});

showMenuButton.addEventListener("click", function() {
    menu.classList.remove("hidden");
    hideMenuButton.style.display = "block";
    showMenuButton.style.display = "none";
});

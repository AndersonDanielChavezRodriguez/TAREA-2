const bt1 = document.querySelector(".bt1")
const navMenu = document.querySelector(".nav-menu")

bt1.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if (navMenu.classList.contains("nav-menu_visible")){
        bt1.setAttribute("arial-label", "Cerrar menú");
    } else {
        bt1.setAttribute("arial-label", "Abrir menú");
    }

});
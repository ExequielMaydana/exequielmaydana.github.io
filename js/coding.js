const navToggle = document.querySelectorAll(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navMenuLink = document.querySelector(".nav-menu-link")

 
navToggle.forEach(element => {
    element.addEventListener("click", () => {
        navMenu.classList.toggle("nav-menu_visible");
    
        if(navMenu.classList.contains("nav-menu_visible")){
            element.setAttribute("arial-label", "Cerrar menú");
        }else {
            element.setAttribute("arial-label", "Abrir menú");
        }
    })
});

/* 
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");

    if(navMenu.classList.contains("nav-menu_visible")){
        navToggle.setAttribute("arial-label", "Cerrar menú");
    }else {
        navToggle.setAttribute("arial-label", "Abrir menú");
    }
})
*/
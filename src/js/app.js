document.addEventListener("DOMContentLoaded", function () {
  // Initialize the page
  eventListeners();
});

function eventListeners() {
  // Add event listeners to the document
  const menuMobile = document.querySelector(".mobile-menu");

  menuMobile.addEventListener(" click ", navegacionResponsive);
}

function navegacionResponsive() {
  const navegacion = document.querySelector(".navegacion");

  navegacion.classList.toggle("mostrar");
}

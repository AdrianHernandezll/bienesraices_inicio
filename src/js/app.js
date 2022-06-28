document.addEventListener("DOMContentLoaded", function () {
  eventListeners();
});

function eventListeners() {
  let mobileMenu = document.querySelector(".mobile-menu");

  mobileMenu = addEventListener("click", navegacionResponsive);
}

function navegacionResponsive() {
  console.log("navegacion");
}

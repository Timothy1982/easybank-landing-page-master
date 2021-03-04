const navToggleBtn = document.querySelector(".header-nav-toggle");
const navHamburger = document.querySelector(".header-nav-hamburger");
const navMenu = document.querySelector(".header-nav");
const body = document.querySelector("body");

navToggleBtn.addEventListener("click", () => {
  body.classList.toggle("open");
  navHamburger.classList.toggle("open");
  navMenu.classList.toggle("open");
});

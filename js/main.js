/* ====== Show and Close Menu ====== */
const toggleMenu = document.querySelector(".toggle-menu");
const headerContainer = document.querySelector(".header-container");

toggleMenu.addEventListener("click", () => {
  headerContainer.classList.toggle("open");
});

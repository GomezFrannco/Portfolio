// DOM element
const navBar = document.querySelector("#nav");
// navigation bar hide & reveal box_shadow
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 0) {
    navBar.classList.add("nav_shadow_in");
    navBar.classList.remove("nav_shadow_out");
  } else {
    navBar.classList.add("nav_shadow_out");
    navBar.classList.remove("nav_shadow_in");
  }
});

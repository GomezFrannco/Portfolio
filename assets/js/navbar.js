/**
 *  DOM elements
 */
const $nav = document.querySelector("#nav");
const $menu = document.querySelectorAll(".nav_link");
const $sections = document.querySelectorAll("section[id]");
/**
 *  navigation bar hide & reveal box-shadow
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    $nav.classList.add("nav_shadow_in");
    $nav.classList.remove("nav_shadow_out");
  } else {
    $nav.classList.add("nav_shadow_out");
    $nav.classList.remove("nav_shadow_in");
  }
});
/**
 *  navigation menu active and remove
 */
$menu.forEach((element) => {
  element.addEventListener("click", (e) => {
    $menu.forEach((element) => {
      element.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
/**
 *  navigation menu scroll active
 */
const scrollActive = function () {
  let scrollY = window.scrollY;
  $sections.forEach((section) => {
    const height = section.offsetHeight;
    const top = section.offsetTop - 100;
    let id = section.getAttribute("id");
    let element = document.querySelector(`.nav_menu a[href*=${id}]`);
    if (scrollY > top && scrollY <= top + height) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
};
if ( window.location.pathname === "/index.html" || window.location.pathname === "/" ) {
  window.addEventListener("scroll", scrollActive);
}

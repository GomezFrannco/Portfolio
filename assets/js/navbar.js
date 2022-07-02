import * as dom from "./dom.js";
/**
 *  navigation bar hide & reveal box-shadow
 */
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    dom.$nav.classList.add("nav_shadow_in");
    dom.$nav.classList.remove("nav_shadow_out");
  } else {
    dom.$nav.classList.add("nav_shadow_out");
    dom.$nav.classList.remove("nav_shadow_in");
  }
});
/**
 *  navigation menu active and remove
 */
dom.$menu.forEach((element) => {
  element.addEventListener("click", (e) => {
    dom.$menu.forEach((element) => {
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
  dom.$sections.forEach((section) => {
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

if ( window.location.pathname === '/Portfolio/index.html' || window.location.pathname === '/Portfolio/' ) {
  window.addEventListener("scroll", scrollActive);
}

/**
 *  DOM elements
 */
const $left = document.querySelectorAll(".lft");
const $rigth = document.querySelectorAll(".rgth");
const $top = document.querySelectorAll(".top");
const $bttm = document.querySelectorAll(".bttm");
/**
 *  Scroll Reveal
 */
ScrollReveal().reveal($left, {
  duration: 1600,
  origin: "left",
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal($rigth, {
  duration: 1600,
  origin: "rigth",
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal($top, {
  duration: 1600,
  origin: "top",
  distance: "50px",
  easing: "ease-out",
});
ScrollReveal().reveal($bttm, {
  duration: 1600,
  origin: "bottom",
  distance: "50px",
  easing: "ease-out",
});

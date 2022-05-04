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
const sr = ScrollReveal({
  delay: 100,
  duration: 1400,
  distance: "45px",
  easing: "ease-out",
});

sr.reveal($rigth, {
  origin: "rigth",
});
sr.reveal($bttm, {
  origin: "bottom",
});
sr.reveal($left, {
  origin: "left",
});

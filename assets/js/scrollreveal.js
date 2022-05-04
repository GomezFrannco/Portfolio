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
  duration: 800,
  distance: "25px",
  easing: "ease-out",
});

sr.reveal($top, {
  origin: "top",
  duration: "600",
  distance: "10px"
})
sr.reveal($rigth, {
  origin: "rigth",
});
sr.reveal($bttm, {
  origin: "bottom",
});
sr.reveal($left, {
  origin: "left",
});

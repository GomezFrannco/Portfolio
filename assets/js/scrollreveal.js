import * as dom from "./dom.js";
/**
 *  Scroll Reveal
 */
const sr = ScrollReveal({
  delay: 220,
  duration: 800,
  distance: "25px",
  easing: "ease-out",
});

sr.reveal(dom.$top, {
  origin: "top",
  duration: "600",
  distance: "10px",
});
sr.reveal(dom.$rigth, {
  origin: "rigth",
});
sr.reveal(dom.$bttm, {
  origin: "bottom",
});
sr.reveal(dom.$left, {
  origin: "left",
});

/**
 *  DOM elements
 */
const $nav = document.querySelector("#nav");
const $menu = document.querySelectorAll(".nav_link");
const $sections = document.querySelectorAll("section[id]");
const $jobsItem = document.querySelector("#jobs");
const $edItem = document.querySelector("#education");

// scroll reveal
const $left = document.querySelectorAll(".lft");
const $rigth = document.querySelectorAll(".rgth");
const $top = document.querySelectorAll(".top");
const $bttm = document.querySelectorAll(".bttm");

// slick
const $slider = $(".skills_slider");

export { $nav, $menu, $sections, $left, $rigth, $top, $bttm, $slider, $jobsItem, $edItem };

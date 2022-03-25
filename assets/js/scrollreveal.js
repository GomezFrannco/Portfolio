/**
 *  Scroll Reveal Options
 */
var rigth = {
  duration: 1500,
  origin: 'rigth',
  distance: '50px',
  easing: 'ease-out',
  reset: true
}
var left = {
  duration: 1500,
  origin: 'left',
  distance: '50px',
  easing: 'ease-out',
  reset: true
}
var top = {
  duration: 1500,
  origin: 'top',
  distance: '50px',
  easing: 'ease-out',
  reset: true
}
var bottom = {
  duration: 1500,
  origin: 'bottom',
  distance: '50px',
  easing: 'ease-out',
  reset: true
}

/**
 *  DOM Elements
 */
let titles = document.querySelectorAll('title');
let node = document.querySelectorAll('.lft')
let nd = document.querySelectorAll('.rgth')

/**
 *  Scroll Reveal Code 
 */

ScrollReveal().reveal(node, {
  duration: 1500,
  origin: 'rigth',
  distance: '-40px',
  easing: 'ease-out',
  reset: true

})

ScrollReveal().reveal(nd, {
  duration: 1500,
  origin: 'top',
  distance: '-50px',
  easing: 'ease-out',
  reset: true
})




ScrollReveal()
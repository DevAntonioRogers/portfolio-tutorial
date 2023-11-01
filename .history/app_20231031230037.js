//NAVBAR

const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const body = document.querySelector('body')
const navLinks = navMenu.querySelectorAll('li');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('active')
  body.classList.toggle("no-scroll")
})

function closeMenu() {
  hamburger.classList.remove('active')
  navMenu.classList.remove('active')
  body.classList.remove("no-scroll")
}

navLinks.forEach((link) => {
  link.addEventListener('click', closeMenu)
})
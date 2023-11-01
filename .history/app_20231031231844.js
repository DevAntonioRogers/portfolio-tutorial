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

//TYPING DELETING TEXT
function initTypedText() {
  const options = {
    strings: [
      "Hello, I'm John Doe",
      "A Software Engineer",
      "From New York",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
  }
  const typed = new Typed("#typed-text", options)
}

initTypedText()
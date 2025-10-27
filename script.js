// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = "linear-gradient(90deg, #002b80, #4a00e0)";
    header.style.transition = "0.5s";
  } else {
    header.style.background = "linear-gradient(90deg, #004aad, #6a00f4)";
  }
});

// Typing effect in Hero Section
const textArray = ["Web Developer", "Software Developer", "AI Enthusiast", "Problem Solver"];
let i = 0, j = 0;
const typingSpeed = 150;
const erasingSpeed = 80;
const delay = 1500;
const heroText = document.createElement('p');
heroText.className = "typing";
document.querySelector(".hero-content").appendChild(heroText);

function type() {
  if (j < textArray[i].length) {
    heroText.textContent += textArray[i].charAt(j);
    j++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delay);
  }
}

function erase() {
  if (j > 0) {
    heroText.textContent = textArray[i].substring(0, j - 1);
    j--;
    setTimeout(erase, erasingSpeed);
  } else {
    i = (i + 1) % textArray.length;
    setTimeout(type, typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", type);

// Portfolio Website JavaScript

console.log("Portfolio Website Loaded Successfully");

/* Smooth Scroll Animation */

document.querySelectorAll('nav a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const targetId = this.getAttribute('href');

    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: 'smooth'
    });

  });

});

/* Fade In Animation on Scroll */

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

  cards.forEach(card => {

    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 100) {

      card.style.opacity = "1";
      card.style.transform = "translateY(0px)";

    }

  });

});

/* Initial Animation Style */

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = "all 0.8s ease";

});

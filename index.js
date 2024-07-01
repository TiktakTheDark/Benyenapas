/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar1").style.top = "0";
  } else {
    document.getElementById("navbar1").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
} 






document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.text');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              console.log('Element is visible'); // Log pour vérifier la visibilité
              const fadingEffectElement = entry.target.querySelector('.fadingEffect');
              if (fadingEffectElement) {
                  fadingEffectElement.classList.add('visible');
                  observer.unobserve(entry.target); // Arrête d'observer après l'animation
              } else {
                  console.log('No .fadingEffect element found');
              }
          }
      });
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.text');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              console.log('Element is visible'); // Log pour vérifier la visibilité
              const fadingEffectElement = entry.target.querySelector('.fadingEffect2');
              if (fadingEffectElement) {
                  fadingEffectElement.classList.add('visible');
                  observer.unobserve(entry.target); // Arrête d'observer après l'animation
              } else {
                  console.log('No .fadingEffect element found');
              }
          }
      });
  });

  elements.forEach(element => {
      observer.observe(element);
  });
});
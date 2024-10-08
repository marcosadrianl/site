const wordCarrusel = document.getElementById("word-carrusel");
//const services = document.getElementById("services-link");
//const howWeWork = document.getElementById("how-we-work-link");
//const benefits = document.getElementById("benefits-link");
//const contact = document.getElementById("contact-link");
const blurNav = document.getElementById("blur");
const logo = document.getElementById("logo");
const socialMedia = document.getElementById("social-media");
const navBarLinksContainer = document.getElementById("navBarLinks");
let wordIndex = 0;
const words = ["estilo", "presentacion", "calidad", "eficiencia", "poder", "presencia", "personalidad", "identidad", "versatilidad"];

function changeWord() {
    wordCarrusel.textContent = words[wordIndex];
    wordIndex = (wordIndex + 1) % words.length; // Loop through the words
}

function fadeInOut() {
    // Start fade out using Tailwind's opacity and transition classes
    wordCarrusel.classList.add("opacity-0", "transition-opacity", "duration-1000");

    setTimeout(() => {
        // Change the word when it's fully faded out
        changeWord();

        // Start fade in by removing opacity-0 and adding opacity-100
        wordCarrusel.classList.remove("opacity-0");
        wordCarrusel.classList.add("opacity-100");

        // Remove the fade-in class after it's done to allow repeated transitions
        setTimeout(() => {
            wordCarrusel.classList.remove("opacity-100");
        }, 1000); // Wait for the fade-in to finish before removing the class
    }, 1000); // Time matching the fade-out duration
}

// Set interval to repeat the fade-in/out process
setInterval(() => {
    fadeInOut();
}, 2500); // Adjust interval to account for fade in and out time

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        blurNav.style.filter = "opacity(0.85)";
        blurNav.style.background = "black";
        logo.style.filter = "invert(1)";
        socialMedia.style.filter = "invert(1)";
    } else {
        blurNav.style.filter = "opacity(0)";
        blurNav.style.background = "transparent";
        logo.style.filter = "invert(0)";
        socialMedia.style.filter = "invert(0)";
    }
});

const boxes = document.querySelectorAll('.box');
let angle = 0;
let animationFrame;

function animateGradient(boxSelected) {
  angle += 0.003; // Incrementa el ángulo gradualmente
  if (angle >= 1) angle = 0; // Resetea el ángulo al completar un giro
  boxSelected.style.setProperty('--border-angle', `${angle}turn`);
  animationFrame = requestAnimationFrame(() => animateGradient(boxSelected));
}

function startAnimation(e) {
  //angle = 0; // Resetea el ángulo al iniciar la animación
  animateGradient(e.currentTarget); // Pasa el `div` que se está animando
}

function stopAnimation() {
  cancelAnimationFrame(animationFrame); // Detiene la animación cuando se quita el hover
}

// Agrega event listeners para hover
boxes.forEach(box => {
  box.addEventListener('mouseenter', startAnimation);
  box.addEventListener('mouseleave', stopAnimation);
});
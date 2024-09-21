const wordCarrusel = document.getElementById("word-carrusel");
const services = document.getElementById("services-link");
const howWeWork = document.getElementById("how-we-work-link");
const benefits = document.getElementById("benefits-link");
const contact = document.getElementById("contact-link");
const blurNav = document.getElementById("blur");
const logo = document.getElementById("logo");
const socialMedia = document.getElementById("social-media");
const flag = 1; //para ver si el efecto zoom ya se ejecuto en responsive

const words = ["estilo", "presentacion", "calidad", "eficiencia", "poder", "presencia", "personalidad", "identidad"];
const logoUrl = ["src/logo/sf-alien-encounters.regular.webp", "src/logo/gorock-brush.regular.webp", "src/logo/kastyle.regular.webp", "src/logo/labelshort.stamp.webp", "src/logo/sf-alien-encounters.regular.webp", "src/logo/space-break.regular.webp", "src/logo/stome-birth-demo.regular.webp"]

let wordIndex = 0;

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

window.addEventListener('scroll', function() {
    const parallax = document.getElementById("parallax");
    let scrollPosition = window.scrollY;

    
    // Cambia la propiedad 'top' en función de la posición de scroll
    if (window.innerWidth > 768) {
        parallax.style.transform = "scale(1)";
        parallax.style.right = 0;
        parallax.style.top = `${- scrollPosition * (parallax.height/(document.body.scrollHeight + 2*scrollPosition))}px`;
        parallax.style.filter = `blur(${scrollPosition * 0.001}px)`;
    } else {
        if (flag === 1){
            parallax.style.transition = "transform 1s ease-in-out";
            parallax.style.transform = "scale(4)";
            parallax.style.top = `${scrollPosition * (- parallax.height/(scrollPosition + document.body.scrollHeight + window.innerHeight + parallax.height))}px`;
        }
        flag = 0;
    }

    
});

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

function changeLogo() {
    let randomIndex = Math.floor(Math.random() * logoUrl.length);
    
    logo.src = logoUrl[randomIndex];
}

changeLogo();

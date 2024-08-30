let lightDarkCheck = 1;

function darkMode() {
    const Body = document.body;
    const Iconos = document.getElementsByClassName("img-icon");
    const Anchors = document.getElementsByTagName("a");
    const darkModeChange = document.getElementById("darkMode");

    Body.style.background = "#222";
    Body.style.color = "#f0f0f0";

    for (let i = 0; i < Iconos.length; i++) {
        Iconos[i].style.filter = "invert(100%)";
    }

    for (let i = 0; i < Anchors.length; i++) {
        Anchors[i].style.color = "#f2f2f2";
    }

    darkModeChange.innerText = "Light Mode";
}

function lightMode() {
    const Body = document.body;
    const Iconos = document.getElementsByClassName("img-icon");
    const Anchors = document.getElementsByTagName("a");
    const darkModeChange = document.getElementById("darkMode");

    Body.style.background = "";
    Body.style.color = "";

    for (let i = 0; i < Iconos.length; i++) {
        Iconos[i].style.filter = "";
    }

    for (let i = 0; i < Anchors.length; i++) {
        Anchors[i].style.color = "";
    }

    darkModeChange.innerText = "Dark Mode";
}

function selectMode() {
    if (lightDarkCheck === 1) {
        darkMode();
        lightDarkCheck = 0;
    } else {
        lightMode();
        lightDarkCheck = 1;
    }

    return lightDarkCheck;
}

function printCV(){
    
    if (lightDarkCheck === 1) {
        window.print()
    } else if (lightDarkCheck === 0){
        lightMode();
        setTimeout(() => {
            lightMode();
            window.print();
        }, 500);
        setTimeout(() => {
            darkMode();            
        }, 1000);
    }
}

// Llama a selectMode() en un evento como un click para alternar el modo
document.getElementById("darkMode").onclick = selectMode;
document.getElementById("descargarCV").onclick = printCV;
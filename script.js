window.onload = function() {
    if (window.location.hash) {
        const hash = window.location.hash; // obtiene el hash de la URL
        const targetElement = document.querySelector(hash);
        if (targetElement) {
            targetElement.classList.add('highlight'); // añade la clase para resaltar
        }
    }

    // Agregar event listeners para los enlaces
    const links = document.querySelectorAll('.nav li a');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            // Quitar el resaltado de todos los elementos resaltados
            const highlightedElements = document.querySelectorAll('.highlight');
            highlightedElements.forEach(el => {
                el.classList.remove('highlight');
            });

            // Obtener el hash del enlace clicado
            const hash = this.getAttribute('href');
            const targetElement = document.querySelector(hash);
            if (targetElement) {
                targetElement.classList.add('highlight'); // añadir clase de resaltado
            }
        });
    });
}
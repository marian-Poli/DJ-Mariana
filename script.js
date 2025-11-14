/**
 * Script para el Manual de Marca de MARIANA
 * * Funciones:
 * 1. Animación de entrada "fade in" para cada lámina.
 * 2. Lightbox/Modal para ampliar los logos Y las imágenes de aplicación.
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- FUNCIÓN 1: ANIMACIÓN DE ENTRADA ---
    
    const laminas = document.querySelectorAll('.lamina');

    // Configura el "Observador de Intersección"
    const opcionesScroll = {
        root: null, // Observa en relación al viewport
        rootMargin: '0px',
        threshold: 0.25 // Se activa cuando el 25% de la lámina esté visible
    };

    const observadorScroll = new IntersectionObserver((entradas, observador) => {
        entradas.forEach(entrada => {
            // Si la lámina está entrando en la vista
            if (entrada.isIntersecting) {
                entrada.target.classList.add('visible');
            } else {
                // Opcional: Si quieres que la animación se repita al salir
                // entrada.target.classList.remove('visible');
            }
        });
    }, opcionesScroll);

    // Pone al observador a "vigilar" cada lámina
    laminas.forEach(lamina => {
        observadorScroll.observe(lamina);
    });


    // --- FUNCIÓN 2: LIGHTBOX/MODAL ---

    // El selector ahoraTOMA AMBAS CLASES: logos y aplicaciones
    const logosAmpliables = document.querySelectorAll('.logo-ampliable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImagen = lightbox.querySelector('.lightbox-imagen');
    const lightboxCerrar = lightbox.querySelector('.lightbox-cerrar');

    // 1. Abrir el Lightbox
    logosAmpliables.forEach(logo => {
        logo.addEventListener('click', () => {
            const imgSrc = logo.getAttribute('src');
            lightboxImagen.setAttribute('src', imgSrc);
            lightbox.classList.add('visible');
        });
    });

    // 2. Cerrar el Lightbox (haciendo clic en el fondo)
    lightbox.addEventListener('click', (e) => {
        // Se cierra solo si se hace clic en el fondo (el overlay)
        if (e.target === lightbox) {
            lightbox.classList.remove('visible');
        }
    });
    
    // 3. Cerrar el Lightbox (haciendo clic en la 'X')
    lightboxCerrar.addEventListener('click', () => {
        lightbox.classList.remove('visible');
    });

});
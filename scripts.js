document.addEventListener('DOMContentLoaded', function() {
    // Navegación suave
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Botón Up
    const btnUp = document.getElementById('btn-up');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnUp.classList.add('visible');
        } else {
            btnUp.classList.remove('visible');
        }
    });

    btnUp.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Efecto carrusel
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'scale(1.15)';
        });
        
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'scale(1)';
        });
    });

    // Resaltar sección activa en navegación
    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Carrusel automático
    let carruselInterval;
    const carrusel = document.querySelector('.carrusel');
    const logosCarrusel = document.querySelectorAll('.logo');

    function startCarrusel() {
        let counter = 0;
        const logoWidth = logosCarrusel[0].offsetWidth + 24;
        
        carruselInterval = setInterval(() => {
            counter = (counter + 1) % logosCarrusel.length;
            carrusel.scrollTo({
                left: counter * logoWidth,
                behavior: 'smooth'
            });
        }, 3000);
    }

    carrusel.addEventListener('mouseenter', () => {
        clearInterval(carruselInterval);
    });

    carrusel.addEventListener('mouseleave', startCarrusel);

    startCarrusel();
});
document.addEventListener('DOMContentLoaded', () => {


    const btnMensaje = document.getElementById('btnMensaje');
    if (btnMensaje) {
        btnMensaje.addEventListener('click', () => {
            alert('¡Bienvenido a Vive Llaylla! 🌿 Te invitamos a conocer la belleza natural y cultural de Satipo, Junín.');
        });
    }


    const navLinks = document.querySelectorAll('.navbar nav a, .hero a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId.startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });


    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 4px 15px rgba(0,0,0,0.3)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.15)';
        }
    });
});







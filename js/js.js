// Script para funcionalidades del sitio BanCoop

document.addEventListener('DOMContentLoaded', function() {

    // --- Formulario de ingreso: mostrar mensaje de éxito/error en la página ---
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const cuenta = document.getElementById('cuenta').value.trim();
            const clave = document.getElementById('clave').value.trim();

            if (cuenta === '' || clave === '') {
                loginMessage.textContent = 'Por favor, complete todos los campos.';
                loginMessage.className = 'info-message show error';
            } else {
                loginMessage.textContent = `Acceso exitoso. Bienvenido, usuario ${cuenta}.`;
                loginMessage.className = 'info-message show success';
                loginForm.reset();
                // Ocultar el mensaje después de 3 segundos
                setTimeout(() => {
                    loginMessage.classList.remove('show');
                }, 3000);
            }
        });
    }

    // --- Mostrar/ocultar información extra en artículos (Más información) ---
    const moreLinks = document.querySelectorAll('.more-link');
    moreLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const infoDiv = document.getElementById(targetId);
            if (infoDiv) {
                infoDiv.classList.toggle('show');
                // Cambiar el texto del enlace (opcional)
                if (infoDiv.classList.contains('show')) {
                    this.textContent = 'Mostrar menos «';
                } else {
                    this.textContent = 'Más información »';
                }
            }
        });
    });

    // --- Mostrar información de los enlaces del aside (transacciones y tarjetas) ---
    const infoLinks = document.querySelectorAll('.info-link');
    infoLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('data-target');
            const infoDiv = document.getElementById(targetId);
            
            // Opcional: ocultar otros contenidos abiertos en la misma tarjeta
            const parentCard = this.closest('.sidebar-card');
            if (parentCard) {
                const allContents = parentCard.querySelectorAll('.info-content');
                allContents.forEach(content => {
                    if (content.id !== targetId) {
                        content.classList.remove('show');
                    }
                });
            }
            
            // Toggle del contenido seleccionado
            if (infoDiv) {
                infoDiv.classList.toggle('show');
            }
        });
    });

    // --- Efecto de scroll en el header ---
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#002244';
        } else {
            header.style.backgroundColor = '#003366';
        }
    });

});
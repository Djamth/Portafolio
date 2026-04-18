// ========== Menú Responsivo ==========
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const btncv = document.querySelector('#btncv');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
}
//mensaje con sweet alert al hacer clic en el botón de descargar CV
if (btncv) {
    btncv.addEventListener('click', () => {
        Swal.fire({
            title: 'Descargando CV...',
            text: 'Gracias por tu interés.',
            icon: 'success',
            timer: 2000,
            showConfirmButton: false
        });
    });
}
document.addEventListener('click', (e) => {

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});


// ========== Formulario de Contacto ==========
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Obtener valores del formulario
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
     //mensaje con sweet alert
        if (name && email && message) {
           
            Swal.fire('¡Mensaje enviado! Pronto te contactaremos.');
            contactForm.reset();
        } else {
            Swal.fire('Por favor completa todos los campos.');
        }
    });
}

// ========== Animación de Scroll ==========
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.8s ease-in forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos con clase de animación
document.querySelectorAll('.skill-card, .project-card, .timeline-item, .stat-box').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
});

// ========== Efecto de Scroll en Navegación ==========
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
    }
});

// ========== Smooth Scroll for Navigation Links ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// ========== Contar Números Animados ==========
const animateNumbers = () => {
    const stats = document.querySelectorAll('.stat-box h3');
    
    stats.forEach(stat => {
        const target = parseInt(stat.innerText);
        let current = 0;
        const increment = target / 50;
        
        const updateCount = () => {
            if (current < target) {
                current += increment;
                stat.innerText = Math.ceil(current) + (stat.innerText.includes('+') ? '+' : '');
            } else {
                stat.innerText = target + (stat.innerText.includes('+') ? '+' : '');
            }
        };
        
        // Solo animar cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const interval = setInterval(updateCount, 30);
                    setTimeout(() => clearInterval(interval), 1500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(stat);
    });
};

animateNumbers();

// ========== Agregar clase activa a navegación según scroll ==========
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});
});

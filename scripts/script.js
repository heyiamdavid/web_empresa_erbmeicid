document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada correctamente');
   
    const closeBtn = document.querySelector('.menu-close');
    if (closeBtn) {
        closeBtn.style.display = 'none';
    }

    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', () => {
            menu.classList.add('active');
            if (closeBtn) {
                closeBtn.style.display = 'block';
            }
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('active');
            closeBtn.style.display = 'none';
        });
    }

    document.addEventListener('click', (event) => {
        if (!menu || !menuToggle || !closeBtn) return;

        if (
            !menu.contains(event.target) &&
            !menuToggle.contains(event.target) &&
            !closeBtn.contains(event.target)
        ) {
            menu.classList.remove('active');
            closeBtn.style.display = 'none';
        }
    });
});

document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        if (isVisible) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        this.reset();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer.observe(el));
});

let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const faqSection = document.querySelector('.content.bottom');
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (faqSection) {
        if (currentScroll > lastScrollTop) {
            faqSection.style.display = 'none';
        } else {
            faqSection.style.display = 'block';
        }
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

window.addEventListener("load", () => {
    const body = document.body;
    setTimeout(() => {
        body.classList.add("loaded");
    }, 2800);
});

function togglePlan(planElement) {
        if (window.innerWidth > 768) {
        planElement.classList.toggle('expandido');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".empresa-contenedor");

    function checkScroll() {
        const sectionPos = section.getBoundingClientRect().top;
        const screenPos = window.innerHeight / 1.3;

        if (sectionPos < screenPos) {
            section.classList.add("visible");
            window.removeEventListener("scroll", checkScroll); 
        }
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".lista_beneficios li");

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("aparece");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.8
    });

    items.forEach(item => {
        observer.observe(item);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, {
        threshold: 0.3
    });

    const infoText = document.querySelector(".texto-info-nosotros");
    const infoImage = document.querySelector(".imagen-info-nosotros");

    if (infoText) observer.observe(infoText);
    if (infoImage) observer.observe(infoImage);

    const bloques = document.querySelectorAll(".bloque");
    bloques.forEach(bloque => observer.observe(bloque));
});

const datosPlanes = {
    1: {
      titulo: "Plan 1 - Motos",
      imagen: "../assets/moto.jpg",
      descripcion: "Nuestro Plan 1 es la opción perfecta para quienes buscan una solución sencilla y confiable para el seguimiento de su vehículo. Con este plan, tendrás acceso a un sistema intuitivo que te permite conocer la ubicación de tu automóvil en tiempo real, ofreciéndote una visión clara y directa de su situación."
    },
    2: {
      titulo: "Plan 2 - Automóviles",
      imagen: "../assets/carro.jpeg",
      descripcion: "El Plan 2 está diseñado para quienes requieren un control más detallado y funcionalidades adicionales que van más allá del monitoreo básico. Este plan te ofrece herramientas mejoradas que facilitan la visualización y el análisis del comportamiento de tu vehículo, permitiéndote tomar decisiones informadas. También podrás disfrutar de alertas personalizadas y reportes que te ayudarán a optimizar la seguridad y el rendimiento."
    },
    3: {
      titulo: "Plan 3 - Flotas",
      imagen: "../assets/camiones.jpg",
      descripcion: "El Plan 3 es la solución avanzada pensada para la gestión de flotas o para usuarios con requerimientos de seguridad y control más sofisticados. Con este plan, podrás gestionar múltiples vehículos de manera centralizada, beneficiándote de herramientas de análisis y seguimiento que facilitan la toma de decisiones estratégicas."
    }
  };

  function mostrarDetalles(idPlan) {
    console.log("Se llamó a mostrarDetalles para el plan:", idPlan);
    document.getElementById("rastreo-titulo-ventana").innerText = datosPlanes[idPlan].titulo;
    document.getElementById("rastreo-imagen-ventana").src = datosPlanes[idPlan].imagen;
    document.getElementById("rastreo-descripcion-ventana").innerText = datosPlanes[idPlan].descripcion;
    document.getElementById("rastreo-ventana-detalles").style.display = "block";
  }

  function cerrarDetalles() {
    document.getElementById("rastreo-ventana-detalles").style.display = "none";
  }
  
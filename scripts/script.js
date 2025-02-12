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
        titulo: "Anual PLUS",
        imagen: "../assets/moto.jpg",
        descripcion: `
            Rastreo Vehicular Satelital un solo pago de $99.00 más impuestos ya instalado.<br>
            Equipos Homologados por la <strong>Arcotel</strong>.<br><br>
            Servicio técnico en caso de requerir.<br>
            2 años de garantía.<br><br>
            <strong>Funciones:</strong>
            <ul>
                <li>Ubicación, paradas, tiempos, distancias recorridas en tiempo real (ARCHIVO video, Excel o PDF).</li>
                <li>Apertura de puertas (adicional - opcional).</li>
                <li>Bloqueo del motor.</li>
                <li>Alertas perímetro asignado.</li>
                <li>Corte de batería.</li>
                <li>Encendido y apagado de motor.</li>
                <li>Exceso de velocidad.</li>
                <li>Plataforma para Android, iOS y PC.</li>
            </ul>
            Dispositivo y plataforma americana
        `
    },
    2: {
        titulo: "Anual SILVER",
        imagen: "../assets/carro.jpeg",
        descripcion: `
            Rastreo Vehicular Satelital un solo pago de $139.00 más impuestos ya instalado.<br>
            Equipos Homologados por la <strong>Arcotel</strong>.<br><br>
            Servicio técnico en caso de requerir.<br>
            2 años de garantía.<br><br>
            <strong>Funciones:</strong>
            <ul>
                <li>Ubicación, paradas, tiempos, distancias recorridas en tiempo real (ARCHIVO video, Excel o PDF).</li>
                <li>Botón SOS al pulsarlo envía alertas.</li>
                <li>Micrófono espía, podrá oír dentro de la cabina.</li>
                <li>Apertura de puertas (desde la app - emergencias).</li>
                <li>Bloqueo del motor.</li>
                <li>Alertas perímetro asignado.</li>
                <li>Corte de batería.</li>
                <li>Encendido y apagado de motor.</li>
                <li>Exceso de velocidad.</li>
                <li>Plataforma para Android, iOS y PC.</li>
            </ul>
            Dispositivo y plataforma americana
            `
    },
    3: {
        titulo: "Anual PREMIUM INTERNACIONAL",
        imagen: "../assets/camiones.jpg",
        descripcion: `
        Rastreo Vehicular Satelital un solo pago de $179.00 más impuestos ya instalado, megas disponibles con SIM CARD INTERNACIONAL.<br>
        Equipos Homologados por la <strong>Arcotel</strong>.<br><br>
        Servicio técnico en caso de requerir.<br>
        2 años de garantía.<br><br>
        <strong>Funciones:</strong>
        <ul>
            <li>Ubicación, paradas, tiempos, distancias recorridas en tiempo real (ARCHIVO video, Excel o PDF).</li>
            <li>Botón SOS al pulsarlo envía alertas.</li>
            <li>Apertura de puertas (desde la app - emergencias).</li>
            <li>Bloqueo del motor.</li>
            <li>Alertas perímetro asignado.</li>
            <li>Corte de batería.</li>
            <li>Encendido y apagado de motor.</li>
            <li>Exceso de velocidad.</li>
            <li>Plataforma para Android, iOS y PC.</li>
        </ul>
        <strong>COBERTURA:</strong>
        <ul>
            <li>Ecuador</li>
            <li>Colombia</li>
            <li>Perú</li>
        </ul>
        `
    }
};

function mostrarDetalles(idPlan) {
    if (datosPlanes[idPlan]) {
        document.getElementById("rastreo-titulo-ventana").innerText = datosPlanes[idPlan].titulo;
        document.getElementById("rastreo-imagen-ventana").src = datosPlanes[idPlan].imagen;
        document.getElementById("rastreo-descripcion-ventana").innerHTML = datosPlanes[idPlan].descripcion;
        document.getElementById("rastreo-ventana-detalles").style.display = "flex";
    }
}

function cerrarDetalles() {
    document.getElementById("rastreo-ventana-detalles").style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("rastreo-ventana-detalles").style.display = "none";
});

  
  document.querySelectorAll('.faq details').forEach(function(detail) {
    detail.addEventListener('click', function(e) {
      if (e.target.tagName.toLowerCase() !== 'summary') {
        detail.open = !detail.open;
      }
    });
});
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

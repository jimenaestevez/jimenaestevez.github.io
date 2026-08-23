// Menú mobile
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Año dinámico en el footer
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});

// Formulario de contacto
const contactForm = document.querySelector('#contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formNote = document.querySelector('#form-note');
    if (formNote) {
      formNote.textContent =
        '¡Gracias por escribir! Este formulario todavía no está conectado a un servicio de envío: ' +
        'ver el README del proyecto para activarlo con Formspree, Netlify Forms o similar. ' +
        'Mientras tanto, escribime directo a mi email.';
    }
  });
}

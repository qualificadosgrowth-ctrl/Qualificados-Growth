// Adicione apenas os números do WhatsApp, incluindo 55 e o DDD.
// Exemplo: 5582999999999
const WHATSAPP_NUMBER = "";
const WHATSAPP_MESSAGE = "Olá! Conheci a Qualificados Growth pelo site e gostaria de solicitar uma análise estratégica.";

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

const notice = document.querySelector('.contact-notice');
document.querySelectorAll('.js-whatsapp').forEach(link => {
  if (WHATSAPP_NUMBER) {
    link.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;
    link.target = '_blank';
    link.rel = 'noopener';
  } else {
    link.addEventListener('click', event => {
      event.preventDefault();
      notice.classList.add('show');
      window.setTimeout(() => notice.classList.remove('show'), 3500);
    });
  }
});

document.getElementById('year').textContent = new Date().getFullYear();
window.addEventListener('scroll', () => document.querySelector('.header').classList.toggle('scrolled', scrollY > 20));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {threshold: .12});
document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

// Contact form
const form = document.getElementById('contactForm');
const msg  = document.getElementById('formMsg');

form?.addEventListener('submit', e => {
  e.preventDefault();
  msg.textContent = '✅ Message sent! I\'ll get back to you soon.';
  form.reset();
  setTimeout(() => msg.textContent = '', 4000);
});
// Mobile menu toggle, shared by every page except index.html.
const nav = document.querySelector('.nav');
const menuBtn = document.querySelector('.nav__menu');
menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuBtn.setAttribute('aria-expanded', open);
  menuBtn.textContent = open ? 'Close' : 'Menu';
});

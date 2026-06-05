/*
 * Hamburger menu
 * Toggles the 'open' class on both the nav and the toggle button.
 * aria-expanded is updated synchronously for screen readers.
 * Body scroll is locked (overflow: hidden) while the menu is open
 * to prevent the page from scrolling behind the panel.
 */
const toggle = document.querySelector('.nav-toggle');
const nav    = document.querySelector('.site-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

/* Close the menu automatically when a nav link is clicked */
nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  });
});

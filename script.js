// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const navCta = document.querySelector('.nav-cta');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      if (navCta) navCta.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // close menu after clicking a link (mobile)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        if (navCta) navCta.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }
});
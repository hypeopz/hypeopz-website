document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Loading screen ---------- */
  const loader = document.getElementById('loader');
  window.addEventListener('load', function () {
    if (loader) {
      setTimeout(function () { loader.classList.add('hidden'); }, 300);
    }
  });

  /* ---------- Mobile menu toggle ---------- */
  const toggle = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');
  const navCta = document.querySelector('.nav-cta');

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      const isOpen = menu.classList.toggle('open');
      if (navCta) navCta.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        if (navCta) navCta.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Mega menu (mobile tap-to-expand) ---------- */
  document.querySelectorAll('.menu li.has-dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 920) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  /* ---------- Navbar shadow on scroll ---------- */
  const navbar = document.querySelector('.navbar');
  function handleNavShadow() {
    if (!navbar) return;
    if (window.scrollY > 10) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', handleNavShadow);
  handleNavShadow();

  /* ---------- Scroll-to-top button ---------- */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', function () {
      scrollTopBtn.style.display = window.scrollY > 400 ? 'flex' : 'none';
    });
    scrollTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.menu a');

  if (sections.length && navLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (section) { observer.observe(section); });
  }

  /* ---------- Toast helper (optional use) ---------- */
  window.showToast = function (message) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = '<i class="fa-solid fa-circle-check"></i><span>' + message + '</span>';
    document.body.appendChild(toast);

    requestAnimationFrame(function () { toast.classList.add('show'); });
    setTimeout(function () {
      toast.classList.remove('show');
      setTimeout(function () { toast.remove(); }, 400);
    }, 3500);
  };

});
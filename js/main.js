(function () {
  'use strict';

  // ---------- Build footer ----------
  function buildFooter() {
    const container = document.getElementById('footerInner');
    if (!container) return;
    const cfg = SITE_CONFIG;
    const year = cfg.copyright.autoYear ? new Date().getFullYear() : cfg.copyright.year;

    container.innerHTML =
      '<div>' +
      '<strong style="color:var(--color-text-bright);">' +
      cfg.company.logoPrefix +
      '<span style="color:var(--color-accent);">' +
      cfg.company.logoHighlight +
      '</span></strong>' +
      '<span style="margin-left:1rem;color:var(--color-text-muted);">© ' + year + '</span>' +
      '</div>' +
      '<div>' +
      '<a href="mailto:' + cfg.contact.email + '"><i class="fas fa-envelope"></i> ' + cfg.contact.email + '</a>' +
      '<a href="' + cfg.social.facebook + '" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i> Facebook</a>' +
      '<span style="color:var(--color-text-muted);">' + cfg.contact.address + '</span>' +
      '</div>';
  }

  // ---------- Populate contact page fields ----------
  function populateContactPage() {
    if (typeof SITE_CONFIG === 'undefined') return;
    const { contact } = SITE_CONFIG;

    const setVal = (id, val) => {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    };
    const setHref = (id, href) => {
      const el = document.getElementById(id);
      if (el) el.href = href;
    };

    setVal('contactAddress', contact.address);
    setVal('contactPhone', contact.phone);
    setHref('contactPhoneLink', 'tel:' + contact.phone.replace(/\s+/g, ''));
    setVal('contactEmail', contact.email);
    setHref('contactEmailLink', 'mailto:' + contact.email);
  }

  // ---------- Mobile menu ----------
  const toggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('mobileOverlay');
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('open');
      toggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    overlay.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Sticky header ----------
  const header = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 80);
  });

  // ---------- Scroll reveal ----------
  const revealElements = document.querySelectorAll('.reveal');
  if (revealElements.length) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  // ---------- Run on page load ----------
  window.addEventListener('DOMContentLoaded', () => {
    buildFooter();
    populateContactPage();
    // Highlight current page if needed (optional)
    const currentPage = document.body.dataset.page;
    if (currentPage) {
      document.querySelectorAll('[data-nav]').forEach(link => {
        const li = link.closest('li');
        if (li && link.dataset.nav === currentPage) {
          li.classList.add('current-page');
        }
      });
    }
  });
})();

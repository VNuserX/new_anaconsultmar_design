(function () {
  'use strict';

  // Attach to window so components.js can call it after injections
  window.fixAbsoluteLinks = function () {
    if (!window.SITE_CONFIG || !window.SITE_CONFIG.base) return;
    const base = window.SITE_CONFIG.base;

    const needsFixing = (val) =>
      val && val.startsWith('/') && !val.startsWith('//') && !val.startsWith(base + '/');

    document.querySelectorAll('[src^="/"], [href^="/"]').forEach(el => {
      ['src', 'href'].forEach(attr => {
        const val = el.getAttribute(attr);
        if (needsFixing(val)) {
          el.setAttribute(attr, base + val);
        }
      });
    });

    document.querySelectorAll('[style*="url(\'/"]').forEach(el => {
      const style = el.getAttribute('style');
      if (style) {
        const fixed = style.replace(/url\(['"]?(\/[^)'"]+)['"]?\)/g, (match, path) => {
          if (path.startsWith('//') || path.startsWith(base + '/')) return match;
          return `url('${base}${path}')`;
        });
        el.setAttribute('style', fixed);
      }
    });
  };

  // Run fixAbsoluteLinks as soon as possible:
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', window.fixAbsoluteLinks);
  } else {
    // DOM is already loaded – run now
    window.fixAbsoluteLinks();
  }

  // ---------- Build footer ----------
  function buildFooter() {
    const container = document.getElementById('footerInner');
    if (!container) return;
    const cfg = window.SITE_CONFIG;
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

  // ---------- Header & Mobile menu setup ----------
function initHeaderAndMenu() {
  const toggle = document.getElementById('menuToggle');
  const overlay = document.getElementById('mobileOverlay');
  
  if (toggle && overlay) {
    toggle.addEventListener('click', () => {
      const isOpen = overlay.classList.toggle('open');
      toggle.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });
    
    // Close overlay when a regular link is clicked
    overlay.querySelectorAll('a:not(.submenu-toggle a)').forEach(link => {   // exclude parent partners/training links? actually we want them to close too, but we need to keep submenu open if desired. We'll refine: close on any link except the parent link if the submenu is open? Simpler: close on all links, but the parent link will still navigate.
      link.addEventListener('click', () => {
        overlay.classList.remove('open');
        toggle.innerHTML = '<i class="fas fa-bars"></i>';
        document.body.style.overflow = '';
      });
    });

    // Toggle submenus
    overlay.querySelectorAll('.toggle-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const li = btn.closest('.has-submenu');
        if (li) li.classList.toggle('open');
      });
    });
  }
          const header = document.getElementById('siteHeader');
          window.addEventListener('scroll', () => {
            if (!header) return;
            header.classList.toggle('scrolled', window.scrollY > 80);
          });
        }

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

        // ---------- Run core page layout logic immediately ----------
        window.addEventListener('DOMContentLoaded', () => {
          populateContactPage();
          
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
        //

  // ---------- Run injected logic ONLY when header/footer are ready ----------
  window.addEventListener('componentsReady', () => {
    buildFooter();
    initHeaderAndMenu();
  });

})();

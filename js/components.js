// components.js
document.addEventListener('DOMContentLoaded', () => {
  const config = window.SITE_CONFIG || {};
  const paths = config.paths || {};

  function inject(placeholderId, html) {
    const placeholder = document.getElementById(placeholderId);
    if (placeholder) placeholder.outerHTML = html;
  }

  const headerPromise = fetch(paths.header || '/components/header.html')
    .then(res => {
      if (!res.ok) throw new Error('Header fetch failed');
      return res.text();
    })
    .then(html => inject('header-placeholder', html))
    .catch(err => console.warn('Header load error:', err));

  const footerPromise = fetch(paths.footer || '/components/footer.html')
    .then(res => {
      if (!res.ok) throw new Error('Footer fetch failed');
      return res.text();
    })
    .then(html => inject('footer-placeholder', html))
    .catch(err => console.warn('Footer load error:', err));

  Promise.all([headerPromise, footerPromise]).then(() => {
    // links are now in the DOM → fix them
    if (typeof fixAbsoluteLinks === 'function') fixAbsoluteLinks();
    // then fire the ready event
    window.dispatchEvent(new Event('componentsReady'));
  });
});


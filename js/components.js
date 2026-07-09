document.addEventListener('DOMContentLoaded', () => {
  const paths = window.SITE_CONFIG?.paths || {};

  fetch(paths.header || '/components/header.html')
    .then(res => {
      if (!res.ok) throw new Error('Header not found');
      return res.text();
    })
    .then(html => {
      const placeholder = document.getElementById('header-placeholder');
      if (placeholder) placeholder.outerHTML = html;
    })
    .catch(err => console.warn('Header load failed:', err));

  fetch(paths.footer || '/components/footer.html')
    .then(res => {
      if (!res.ok) throw new Error('Footer not found');
      return res.text();
    })
    .then(html => {
      const placeholder = document.getElementById('footer-placeholder');
      if (placeholder) placeholder.outerHTML = html;
    })
    .catch(err => console.warn('Footer load failed:', err));
});

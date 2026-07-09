document.addEventListener("DOMContentLoaded", () => {
  // Use absolute paths starting with '/' so subfolders can find the components folder
  const loadHeader = fetch("/components/header.html")
    .then(res => res.text())
    .then(html => {
      const el = document.getElementById("header-placeholder");
      if (el) el.outerHTML = html;
    });

  const loadFooter = fetch("/components/footer.html")
    .then(res => res.text())
    .then(html => {
      const el = document.getElementById("footer-placeholder");
      if (el) el.outerHTML = html;
    });

  Promise.all([loadHeader, loadFooter])
    .then(() => {
      window.dispatchEvent(new CustomEvent("componentsReady"));
    })
    .catch(err => console.error("Error loading HTML components:", err));
});

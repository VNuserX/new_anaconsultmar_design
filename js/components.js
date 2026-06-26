document.addEventListener("DOMContentLoaded", () => {
  // Load header
  fetch("/components/header.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("header-placeholder").outerHTML = html;
      // Re‑attach any event listeners that main.js needs (e.g., menu toggle)
      // You can either call a setup function from main.js or let main.js
      // use event delegation on the body.
    });

  // Load footer
  fetch("/components/footer.html")
    .then(res => res.text())
    .then(html => {
      document.getElementById("footer-placeholder").outerHTML = html;
      buildFooter(); // your existing footer‑population function
    });
});

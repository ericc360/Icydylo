window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const elements = document.querySelectorAll(".fade-in");

  function revealOnScroll() {
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add("show");
      }
    });
  }

  // run once on load
  revealOnScroll();

  // run on scroll
  window.addEventListener("scroll", revealOnScroll);
});
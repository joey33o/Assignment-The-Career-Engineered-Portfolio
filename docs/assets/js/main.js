// main.js — Joseph Martinez Portfolio

// Nav: add solid background on scroll
(function () {
  const nav = document.getElementById("mainNav");
  if (!nav) return;

  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
})();

// Nav: highlight active link based on scroll position
(function () {
  const sections = document.querySelectorAll("section[id], footer[id]");
  const navLinks = document.querySelectorAll("#mainNav .nav-link");
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function (link) {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + entry.target.id) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach(function (section) {
    observer.observe(section);
  });
})();

// Collapse mobile nav on link click
(function () {
  const navLinks = document.querySelectorAll("#navMenu .nav-link");
  const navCollapse = document.getElementById("navMenu");
  if (!navCollapse) return;

  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    });
  });
})();

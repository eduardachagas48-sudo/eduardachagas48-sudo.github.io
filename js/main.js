(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---- Nav scroll state ---- */
  var nav = document.getElementById("nav");
  var toTop = document.getElementById("toTop");
  window.addEventListener("scroll", function () {
    var scrolled = window.scrollY > 40;
    nav.classList.toggle("scrolled", scrolled);
    toTop.classList.toggle("visible", window.scrollY > 600);
  });

  toTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Active nav link on scroll ---- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section, .hero"));
  var navItems = Array.prototype.slice.call(document.querySelectorAll(".nav-link"));

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navItems.forEach(function (link) {
            link.classList.toggle("active", link.dataset.section === id);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );
  sections.forEach(function (s) { sectionObserver.observe(s); });

  /* ---- Reveal on scroll ---- */
  var revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll("[data-reveal]").forEach(function (el, i) {
    el.style.transitionDelay = Math.min(i % 6, 5) * 0.06 + "s";
    revealObserver.observe(el);
  });

  /* ---- Publication filters ---- */
  var filterButtons = document.querySelectorAll(".pub-filter");
  var pubItems = document.querySelectorAll(".pub-item");
  filterButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterButtons.forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      var filter = btn.dataset.filter;
      pubItems.forEach(function (item) {
        var show = filter === "all" || item.dataset.cat === filter;
        item.classList.toggle("hidden", !show);
      });
    });
  });
})();

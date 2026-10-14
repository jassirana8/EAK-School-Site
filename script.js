const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");

  const isOpen = navbar.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close mobile menu after clicking a navigation link
const navLinks = navbar.querySelectorAll("a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Sélectionner toutes les sections et les liens de la navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
  let current = "#home"; // Par défaut, Home est actif

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120; // décalage pour l'effet visuel
    if (window.scrollY >= sectionTop) {
      current = "#" + section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});

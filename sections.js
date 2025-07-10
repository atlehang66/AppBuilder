    // Sections Controller
  // Wait for DOM to load
  document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".nav-icon");
    const sections = document.querySelectorAll(".section");

    icons.forEach(icon => {
      icon.addEventListener("click", (e) => {
        e.preventDefault();

        // Hide all sections
        sections.forEach(section => section.classList.remove("active"));

        // Get target section ID from href
        const targetId = icon.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);

        // Show the target section
        if (targetSection) {
          targetSection.classList.add("active");
        }
      });
    });
  });


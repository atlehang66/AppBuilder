document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".nav-icon");
  const sections = document.querySelectorAll(".section");
  const purposeSelect = document.querySelector(".purpose-select");

  // Unified function to activate a section and highlight its icon
  function activateSection(sectionId) {
    sections.forEach(s => s.classList.remove("active"));
    icons.forEach(i => i.classList.remove("active"));

    const targetSection = document.getElementById(sectionId);
    const targetIcon = document.querySelector(`.nav-icon[href="#${sectionId}"]`);

    if (targetSection) targetSection.classList.add("active");
    if (targetIcon) targetIcon.classList.add("active");
  }

  // Click handler for icons — switches sections
  icons.forEach(icon => {
    icon.addEventListener("click", e => {
      e.preventDefault();
      const targetId = icon.getAttribute("href").substring(1);
      activateSection(targetId);
    });
  });

  // Theme palettes logic (unchanged)
  const themePalettes = document.querySelectorAll(".color-palette");
  themePalettes.forEach(palette => {
    palette.addEventListener("click", () => {
      const selectedTheme = palette.title;
      sessionStorage.setItem("selectedTheme", selectedTheme);
      activateSection("purpose"); // go to purpose section after theme select
    });
  });

  // Purpose select logic — auto-switch to customize and highlight icon
  purposeSelect.addEventListener("change", () => {
    const selectedPurpose = purposeSelect.value;
    sessionStorage.setItem("selectedPurpose", selectedPurpose);
    activateSection("customize"); // show customize section and highlight icon
  });

  // Optional: On page load, restore last active section/icon from sessionStorage
  const lastSection = sessionStorage.getItem("lastActiveSection") || "themes";
  activateSection(lastSection);

  // Save active section on icon click
  icons.forEach(icon => {
    icon.addEventListener("click", () => {
      const sectionId = icon.getAttribute("href").substring(1);
      sessionStorage.setItem("lastActiveSection", sectionId);
    });
  });
});

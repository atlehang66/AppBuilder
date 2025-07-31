/**
 * navIntergration.js
 * 
 * This script manages navigation and section activation for a multi-section web app.
 * It handles:
 * - Navigation icon clicks to switch sections and highlight the active icon.
 * - Theme palette selection, storing the chosen theme and navigating to the next step.
 * - Purpose dropdown changes, storing the selected purpose and progressing the workflow.
 * - Restoring the last active section on page reload using sessionStorage.
 * 
 * @file navIntergration.js
 * @author [Your Name]
 * @description Handles navigation, theme selection, and workflow progression for the app builder UI.
 */

/**
 * Activates the specified section and highlights the corresponding navigation icon.
 * Also stores the active section in sessionStorage.
 * 
 * @param {string} sectionId - The ID of the section to activate.
 */

/**
 * Handles click events on navigation icons to activate the corresponding section.
 */

/**
 * Handles click events on theme palette elements to store the selected theme and navigate to the purpose section.
 */

/**
 * Handles change events on the purpose dropdown to store the selected purpose and navigate to the customize sections.
 */

/**
 * On page load, restores the last active section from sessionStorage, or defaults to the "themes" section.
 */
document.addEventListener("DOMContentLoaded", () => {
  const icons = document.querySelectorAll(".nav-icon");
  const sections = document.querySelectorAll(".section");
  const purposeSelect = document.querySelector(".purpose-select");

  // Helper: Activate section and highlight corresponding icon
  function activateSection(sectionId) {
    sections.forEach(s => s.classList.remove("active"));
    icons.forEach(i => i.classList.remove("active"));

    const targetSection = document.getElementById(sectionId);
    const targetIcon = document.querySelector(`.nav-icon[href="#${sectionId}"]`);

    if (targetSection) targetSection.classList.add("active");
    if (targetIcon) targetIcon.classList.add("active");

    sessionStorage.setItem("lastActiveSection", sectionId);
  }

  // Handle nav icon clicks
  icons.forEach(icon => {
    icon.addEventListener("click", e => {
      e.preventDefault();
      const targetId = icon.getAttribute("href").substring(1);
      activateSection(targetId);
    });
  });

  // Handle theme palette click
  document.querySelectorAll(".color-palette").forEach(palette => {
    palette.addEventListener("click", () => {
      const selectedTheme = palette.title;
      sessionStorage.setItem("selectedTheme", selectedTheme);
      activateSection("purpose");
    });
  });

  // Handle purpose dropdown change
  if (purposeSelect) {
    purposeSelect.addEventListener("change", () => {
      const selectedPurpose = purposeSelect.value;
      sessionStorage.setItem("selectedPurpose", selectedPurpose);
      activateSection("customize-sections");
    });
  }

  // On load: Restore last section if valid, otherwise default to "themes"
  const lastSection = sessionStorage.getItem("lastActiveSection");
  if (lastSection && document.getElementById(lastSection)) {
    activateSection(lastSection);
  } else {
    activateSection("themes");
  }
});


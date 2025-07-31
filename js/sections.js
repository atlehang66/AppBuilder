    // Sections Controller
//     This JavaScript code defines an anonymous arrow function that sets up interactive navigation for a web page with multiple sections. It first selects all elements with the class .nav-icon (presumably navigation links or buttons) and all elements with the class .section (the content areas to show or hide).

// For each navigation icon, it attaches a click event listener. When a user clicks an icon, the default browser behavior (such as following a link) is prevented. The code then removes the active class from all sections, effectively hiding them.

// Next, it determines which section should be shown by extracting the target section's ID from the clicked icon's href attribute (removing the leading #). It locates the corresponding section element using document.getElementById. If the target section exists, the code adds the active class to it, making it visible.


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


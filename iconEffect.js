
  document.addEventListener("DOMContentLoaded", () => {
    const icons = document.querySelectorAll(".nav-icon");

    icons.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add("vibrate-once");

        // Remove class after animation so it can be reused later
        icon.addEventListener("animationend", () => {
          icon.classList.remove("vibrate-once");
        }, { once: true });
      }, index * 300); // Delay each by 300ms
    });
  });

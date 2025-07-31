/**
 * @fileoverview
 * This script applies a "vibrate-once" animation effect to all elements with the class "nav-icon"
 * when the DOM content is loaded. Each icon vibrates sequentially with a 300ms delay between each.
 * The animation class is removed after the animation ends, allowing the effect to be reused.
 */
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

/**
 * plusToggle.js
 * 
 * This script handles the toggling of a menu when the plus button is clicked.
 * It shows or hides the menu based on user interaction and closes the menu when clicking outside of it.
 *
 * @fileoverview Handles plus button menu toggle and outside click detection.
 */
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('plus-toggle');
  const menu = document.querySelector('.plus-menu');

  toggle.addEventListener('click', () => {
    if (menu.style.display === 'block') {
      menu.style.display = 'none';
    } else {
      menu.style.display = 'block';
    }
  });

  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.style.display = 'none';
    }
  });
});

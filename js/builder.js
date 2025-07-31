
/**
 * builder.js
 * 
 * This script provides functionality to dynamically add different types of sections
 * (e.g., hero, about, gallery, contact) to a site canvas element in a web page builder.
 * Each section is styled consistently and appended to the canvas.
 */

/**
 * Adds a new section block to the site canvas based on the specified type.
 *
 * @param {string} type - The type of section to add. Supported types are:
 *   'hero', 'about', 'gallery', 'contact'. Any other value adds a default section.
 * @returns {void}
 */
function addSection(type) {
  const canvas = document.getElementById('site-canvas');
  if (!canvas) return; // Prevent errors if canvas doesn't exist

  const section = document.createElement('section');
  section.className = 'section-block';

  switch (type) {
    case 'hero':
      section.innerHTML = `<h1>Hero Section</h1><p>This is your hero area.</p>`;
      break;
    case 'about':
      section.innerHTML = `<h2>About Us</h2><p>Tell users about your brand or project here.</p>`;
      break;
    case 'gallery':
      section.innerHTML = `<h2>Gallery</h2><div>[Your image grid goes here]</div>`;
      break;
    case 'contact':
      section.innerHTML = `<h2>Contact</h2><form><input placeholder="Name"><br><input placeholder="Email"></form>`;
      break;
    default:
      section.innerHTML = `<h3>New Section</h3><p>Placeholder content</p>`;
  }

  // Optional styling if you want it consistent
  section.style.border = '1px solid #ccc';
  section.style.background = '#fff';
  section.style.padding = '20px';
  section.style.marginTop = '20px';
  section.style.borderRadius = '10px';

  canvas.appendChild(section);
}

function generateCSS(template) {
  const {
    name,
    theme,
    purpose,
    primary,
    accent,
    background,
    text
  } = template;

  return `/* =====================================
   Website Theme Stylesheet
   -------------------------------------
   Template Name : ${name}
   Design Style  : ${theme}
   Use Case      : ${purpose}
   ===================================== */

:root {
  /* === Color Palette === */
  --primary-color: ${primary};
  --accent-color: ${accent};
  --background-color: ${background};
  --text-color: ${text};
}

/* === Base Styles === */

body {
  background-color: var(--background-color);
  color: var(--text-color);
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}

/* === Header === */
header {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 1rem;
}

/* === Buttons === */
button {
  background-color: var(--accent-color);
  color: var(--background-color);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  opacity: 0.9;
}

/* === Links === */
a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* === Footer === */
footer {
  background-color: var(--primary-color);
  color: var(--text-color);
  padding: 1rem;
  text-align: center;
}
`;
}

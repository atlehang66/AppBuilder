document.addEventListener("DOMContentLoaded", () => {
  const purposeSelect = document.querySelector('.purpose-select');
  const plusMenu = document.getElementById('plus-menu');
  const customizeContainer = document.getElementById('customize-sections');

  const purposeSectionsMap = {
    portfolio: ['hero', 'about', 'portfolio', 'testimonials', 'contact'],
    business:  ['hero', 'services', 'about', 'pricing', 'contact'],
    blog:      ['hero', 'blog', 'about', 'cta', 'contact'],
    store:     ['hero', 'products', 'pricing', 'testimonials', 'contact']
  };

  const sectionNames = {
    hero: 'Hero Section',
    about: 'About Us',
    portfolio: 'Portfolio',
    testimonials: 'Testimonials',
    contact: 'Contact',
    services: 'Services',
    pricing: 'Pricing',
    blog: 'Blog',
    cta: 'Call To Action',
    products: 'Products/Gallery'
  };

  const templateLabels = {
    hero: 'Hero Templates',
    about: 'About Templates',
    portfolio: 'Portfolio Templates',
    testimonials: 'Testimonial Templates',
    contact: 'Contact Templates',
    services: 'Services Templates',
    pricing: 'Pricing Templates',
    blog: 'Blog Templates',
    cta: 'Call To Action Templates',
    products: 'Product Templates'
  };

  // Handle purpose change
  purposeSelect.addEventListener('change', () => {
    const selectedPurpose = purposeSelect.value;
    const sectionKeys = purposeSectionsMap[selectedPurpose];

    if (!selectedPurpose || !sectionKeys) {
      plusMenu.innerHTML = '<li>Invalid purpose</li>';
      return;
    }

    // Update PLUS MENU
    plusMenu.innerHTML = '';
    sectionKeys.forEach(sectionKey => {
      const li = document.createElement('li');
      li.textContent = '➤ ' + sectionNames[sectionKey];
      li.dataset.section = sectionKey;
      plusMenu.appendChild(li);
    });

    // Update CUSTOMIZE SECTION
    updateCustomizeSections(sectionKeys);
  });

  // Handle plus menu clicks
  plusMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI' && e.target.dataset.section) {
      addSection(e.target.dataset.section);
    }
  });

  // Create section blocks inside .customize
  function updateCustomizeSections(sectionKeys) {
    if (!customizeContainer) return;
    customizeContainer.innerHTML = ''; // Clear existing

    sectionKeys.forEach(sectionKey => {
      const label = templateLabels[sectionKey] || sectionKey;

      const sectionHTML = `
        <h2>${label}</h2>
        <div class="templates-container" data-section="${sectionKey}">
          <div class="template-option">Template 1</div>
          <div class="template-option">Template 2</div>
          <div class="template-option">Template 3</div>
          <div class="template-option">Template 4</div>
        </div>
      `;

      customizeContainer.insertAdjacentHTML('beforeend', sectionHTML);
    });
  }

  // Stub: You can expand this to actually insert real layout blocks
  function addSection(sectionName) {
    console.log(`Adding section: ${sectionName}`);
    // Example logic to insert a block into your page (if needed)
  }
});

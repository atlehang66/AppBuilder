document.addEventListener("DOMContentLoaded", () => {
  const purposeSelect = document.querySelector('.purpose-select');
  const plusBtn = document.getElementById("plus-toggle");
  const saveBtn = document.getElementById("save-btn");
  const customizeContainer = document.getElementById('customize-sections');
  const plusMenuItems = document.querySelectorAll('#plus-menu li');

  let selectedTemplates = {};
  let hasTriggered = false;

  const purposeSectionsMap = {
    portfolio: ['hero', 'about', 'portfolio', 'testimonials', 'contact'],
    business:  ['hero', 'services', 'about', 'pricing', 'contact'],
    blog:      ['hero', 'blog', 'about', 'cta', 'contact'],
    store:     ['hero', 'products', 'pricing', 'testimonials', 'contact']
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

  function updateCustomizeSections(purpose) {
    const sections = purposeSectionsMap[purpose];
    if (!customizeContainer || !sections) return;

    customizeContainer.innerHTML = ''; // Clear previous

    sections.forEach(sectionKey => {
      const label = templateLabels[sectionKey] || sectionKey;

      const sectionHTML = `
        <h2>${label}</h2>
        <div class="templates-container" data-section="${sectionKey}">
          <div class="template-option" data-template="default-${sectionKey}">
            <section class="section ${sectionKey}" data-template="default-${sectionKey}">
              <div class="${sectionKey}-container">
                <h1 class="${sectionKey}-title">Section: ${label}</h1>
                <p class="${sectionKey}-subtitle">Default content for ${label}.</p>
                <a href="#${sectionKey}" class="${sectionKey}-btn">Explore</a>
              </div>
            </section>
          </div>
          <!-- Add more variations here -->
        </div>
      `;

      customizeContainer.insertAdjacentHTML('beforeend', sectionHTML);
    });

    attachTemplateClickHandlers();
  }

  purposeSelect.addEventListener('change', () => {
    const selected = purposeSelect.value;
    const allowedSections = purposeSectionsMap[selected] || [];

    // Reset state
    selectedTemplates = {};
    hasTriggered = false;
    saveBtn.style.display = "none";

    // Filter plus menu items
    plusMenuItems.forEach(item => {
      const section = item.dataset.section;
      item.style.display = allowedSections.includes(section) ? 'list-item' : 'none';
    });

    updateCustomizeSections(selected);
  });

  function allSectionsSelected() {
    const sections = customizeContainer.querySelectorAll('.templates-container');
    return Array.from(sections).every(container =>
      container.querySelector('.template-option.selected')
    );
  }

  function handleTemplateSubmit() {
    if (!plusBtn || !saveBtn) return;

    plusBtn.classList.add("blink");

    // Short blink animation
    setTimeout(() => {
      plusBtn.classList.remove("blink");
      saveBtn.style.display = "inline-block";
    }, 1000);
  }

 function attachTemplateClickHandlers() {
  const containers = document.querySelectorAll('.templates-container');

  containers.forEach(container => {
    const section = container.dataset.section;

    container.addEventListener('click', function (e) {
      const templateOption = e.target.closest('.template-option');
      if (!templateOption || !container.contains(templateOption)) return;

      // Remove previous selections
      container.querySelectorAll('.template-option').forEach(opt =>
        opt.classList.remove('selected')
      );

      // Mark as selected
      templateOption.classList.add('selected');
      selectedTemplates[section] = templateOption.dataset.template;

      // If all selected, trigger save
      if (allSectionsSelected() && !hasTriggered) {
        hasTriggered = true;
        handleTemplateSubmit();
      }
    });
  });
}

});

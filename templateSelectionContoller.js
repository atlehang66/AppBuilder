document.addEventListener("DOMContentLoaded", () => {
  const selectedTemplates = {};
  const plusBtn = document.getElementById("plus-toggle");
  const saveBtn = document.getElementById("save-btn");
  let hasTriggered = false;

//   Update customize section according to purpose
function updateCustomizeSections(purpose) {
  const customizeContainer = document.getElementById('customize-sections');
  const sections = customizeTemplatesMap[purpose];

  if (!customizeContainer || !sections) return;

  // Clear previous sections
  customizeContainer.innerHTML = '';

  // Add relevant sections
  sections.forEach(sectionKey => {
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
  purposeSelect.addEventListener('change', () => {
  const selected = purposeSelect.value;
  const allowedSections = purposeSectionsMap[selected] || [];

  // Update plus-menu visibility
  plusMenuItems.forEach(item => {
    const section = item.dataset.section;
    item.style.display = allowedSections.includes(section) ? 'list-item' : 'none';
  });

  // 👇 Update the customize section
  updateCustomizeSections(selected);
});


  // Optional: re-attach template selection logic here if needed
}

  // Only check containers inside .customize
  function allSectionsSelected() {
    const customizeSection = document.querySelector('.customize');
    if (!customizeSection) return false;

    const sections = customizeSection.querySelectorAll('.templates-container');
    return Array.from(sections).every(container =>
      container.querySelector('.template-option.selected')
    );
  }

  // Blink plus button and show save button
  function handleTemplateSubmit() {
    if (!plusBtn || !saveBtn) return;

    plusBtn.classList.add("blink");

    setTimeout(() => {
      plusBtn.classList.remove("blink");
      saveBtn.style.display = "inline-block";
    }, 10000);
  }

  // Attach click listeners only inside .customize containers
  const customizeSection = document.querySelector('.customize');
  if (!customizeSection) return;

  customizeSection.querySelectorAll('.templates-container').forEach(container => {
    const section = container.dataset.section;

    container.addEventListener('click', function (e) {
      if (e.target.classList.contains('template-option')) {
        // Remove previous selection
        this.querySelectorAll('.template-option').forEach(opt =>
          opt.classList.remove('selected')
        );

        // Add new selection
        e.target.classList.add('selected');

        // Save selected template
        selectedTemplates[section] = e.target.textContent.trim();

        // Check all selections inside customize only
        if (allSectionsSelected() && !hasTriggered) {
          hasTriggered = true;
          handleTemplateSubmit();
        }
      }
    });
  });
});

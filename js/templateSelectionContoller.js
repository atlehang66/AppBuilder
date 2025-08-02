document.addEventListener("DOMContentLoaded", () => {
  // DOM Elements
  const purposeSelect = document.querySelector('.purpose-select');
  const plusBtn = document.getElementById("plus-toggle");
  const saveBtn = document.getElementById("save-btn");
  const customizeContainer = document.getElementById('customize-sections');
  const plusMenuItems = document.querySelectorAll('#plus-menu li');

  // State Management
  let selectedTemplates = {};
  let hasTriggered = false;

  // Template Configuration
  const purposeSectionsMap = {
    portfolio: ['hero', 'about', 'portfolio', 'testimonials', 'contact'],
    business:  ['hero', 'services', 'about', 'pricing', 'contact'],
    blog:      ['hero', 'blog', 'about', 'cta', 'contact'],
    store:     ['hero', 'products', 'pricing', 'testimonials', 'contact']
  };

  const templateLabels = {
    hero: 'Hero Section',
    about: 'About Section',
    portfolio: 'Portfolio Section',
    testimonials: 'Testimonials',
    contact: 'Contact Section',
    services: 'Services',
    pricing: 'Pricing',
    blog: 'Blog Section',
    cta: 'Call To Action',
    products: 'Products'
  };

  // Initialize the application
  function init() {
    if (!purposeSelect) {
      console.error('Purpose select element not found!');
      return;
    }

    // Set up event listeners
    setupEventListeners();
    
    // Initialize with default value
    updateCustomizeSections(purposeSelect.value);
  }

  // Set up all event listeners
  function setupEventListeners() {
    // Purpose selection change
    purposeSelect.addEventListener('change', () => {
      const selected = purposeSelect.value;
      filterPlusMenu(selected);
      updateCustomizeSections(selected);
    });

    // Document-level click handler for template selection
    document.addEventListener('click', handleTemplateSelection);
  }

  // Filter plus menu items based on selected purpose
  function filterPlusMenu(purpose) {
    const allowedSections = purposeSectionsMap[purpose] || [];
    
    plusMenuItems.forEach(item => {
      const section = item.dataset.section;
      item.style.display = allowedSections.includes(section) ? 'list-item' : 'none';
    });
  }

  // Update customize sections based on selected purpose
  function updateCustomizeSections(purpose) {
    if (!customizeContainer) return;
    
    // Reset state
    selectedTemplates = {};
    hasTriggered = false;
    if (saveBtn) saveBtn.style.display = "none";
    
    // Clear existing content
    customizeContainer.innerHTML = '';
    
    const sections = purposeSectionsMap[purpose];
    if (!sections) return;

    sections.forEach(sectionKey => {
      const sectionWrapper = document.createElement('div');
      sectionWrapper.className = 'section-wrapper';
      
      // Create section heading
      const heading = document.createElement('h2');
      heading.textContent = templateLabels[sectionKey] || sectionKey;
      
      // Create templates container
      const templatesContainer = document.createElement('div');
      templatesContainer.className = 'templates-container';
      templatesContainer.dataset.section = sectionKey;

      // Create template options
      const defaultOption = createTemplateOption(sectionKey, 'default');
      const minimalOption = createTemplateOption(sectionKey, 'minimal');
      const modernOption = createTemplateOption(sectionKey, 'modern');

      // Assemble the section
      templatesContainer.append(defaultOption, minimalOption, modernOption);
      sectionWrapper.append(heading, templatesContainer);
      customizeContainer.appendChild(sectionWrapper);
    });
  }

  // Create a template option element
  function createTemplateOption(sectionKey, variant) {
    const option = document.createElement('div');
    option.className = 'template-option';
    option.dataset.template = `${variant}-${sectionKey}`;
    
    const templateContent = document.createElement('div');
    templateContent.className = `template-preview ${sectionKey}-${variant}`;
    
    // Create preview content
    const previewTitle = document.createElement('h3');
    previewTitle.textContent = `${variant} ${templateLabels[sectionKey]}`;
    
    const previewText = document.createElement('p');
    previewText.textContent = `Sample ${variant} ${sectionKey} content`;
    
    templateContent.append(previewTitle, previewText);
    option.appendChild(templateContent);
    
    return option;
  }

  // Handle template selection
  function handleTemplateSelection(e) {
    const templateOption = e.target.closest('.template-option');
    if (!templateOption || !customizeContainer.contains(templateOption)) return;

    const container = templateOption.closest('.templates-container');
    if (!container) return;

    // Update selection in this container
    container.querySelectorAll('.template-option').forEach(opt => {
      opt.classList.remove('selected');
    });
    templateOption.classList.add('selected');

    // Update state
    const section = container.dataset.section;
    selectedTemplates[section] = templateOption.dataset.template;
    console.log('Current selections:', selectedTemplates);

    // Check if all sections are selected
    if (allSectionsSelected() && !hasTriggered) {
      hasTriggered = true;
      handleTemplateSubmit();
    }
  }

  // Check if all sections have a selected template
  function allSectionsSelected() {
    const sections = customizeContainer.querySelectorAll('.templates-container');
    return sections.length > 0 && 
           Array.from(sections).every(container => 
             container.querySelector('.template-option.selected')
           );
  }

  // Handle template submission
  function handleTemplateSubmit() {
    if (!plusBtn || !saveBtn) return;

    // Visual feedback
    plusBtn.classList.add("blink");
    setTimeout(() => {
      plusBtn.classList.remove("blink");
      saveBtn.style.display = "inline-block";
    }, 1000);
  }

  // Start the application
  init();
});
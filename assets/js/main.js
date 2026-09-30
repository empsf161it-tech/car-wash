/* ============================================
   CAR WASH - MAIN JAVASCRIPT
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
  // Initialize all modules
  initNavbar();
  initThemeToggle();
  initRtlToggle();
  initAnimations();
  initFormValidation();
  initScrollEffects();
  initPasswordToggle();
});

/* ============================================
   NAVBAR FUNCTIONALITY
   ============================================ */

function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('.navbar-toggle');
  const drawer = document.querySelector('.drawer');
  const drawerOverlay = document.querySelector('.drawer-overlay');
  const drawerClose = document.querySelector('.drawer-close');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  // Sticky navbar on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Open drawer
  if (toggle) {
    toggle.addEventListener('click', () => {
      drawer.classList.add('open');
      drawerOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  // Close drawer functions
  function closeDrawer() {
    drawer.classList.remove('open');
    drawerOverlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (drawerClose) {
    drawerClose.addEventListener('click', closeDrawer);
  }

  if (drawerOverlay) {
    drawerOverlay.addEventListener('click', closeDrawer);
  }

  // Close drawer on link click
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // Close drawer on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });

  // Active page highlighting
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.navbar-link, .drawer-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === 'index.html') || (currentPath.endsWith('/') && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

/* ============================================
   THEME TOGGLE (DARK/LIGHT MODE)
   ============================================ */

function initThemeToggle() {
  const themeToggles = document.querySelectorAll('.theme-toggle');

  // Check for saved theme preference or default to system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  let currentTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Update toggle icons
  updateThemeIcons(currentTheme);

  // Toggle theme on click
  themeToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
      updateThemeIcons(currentTheme);
    });
  });

  // Listen for system theme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      currentTheme = e.matches ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', currentTheme);
      updateThemeIcons(currentTheme);
    }
  });
}

function updateThemeIcons(theme) {
  const themeToggles = document.querySelectorAll('.theme-toggle');
  themeToggles.forEach(toggle => {
    const sunIcon = toggle.querySelector('.sun-icon');
    const moonIcon = toggle.querySelector('.moon-icon');

    if (theme === 'dark') {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
  });
}

/* ============================================
   RTL TOGGLE
   ============================================ */

function initRtlToggle() {
  const rtlToggles = document.querySelectorAll('.rtl-toggle');

  // Check for saved RTL preference
  const savedRtl = localStorage.getItem('rtl');
  if (savedRtl === 'true') {
    document.documentElement.setAttribute('dir', 'rtl');
  }

  // Toggle RTL on click
  rtlToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.setItem('rtl', newDir === 'rtl' ? 'true' : 'false');
    });
  });
}

/* ============================================
   ANIMATIONS
   ============================================ */

function initAnimations() {
  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.card, .section-header, .section-title');
  animatedElements.forEach(el => observer.observe(el));

  // Stagger animation for cards
  const cardGrids = document.querySelectorAll('.grid');
  cardGrids.forEach(grid => {
    const cards = grid.querySelectorAll('.card');
    cards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
  });
}

/* ============================================
   FORM VALIDATION
   ============================================ */

function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      // Validate all required fields
      const requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(field => {
        if (!validateField(field)) {
          isValid = false;
        }
      });

      // Validate email format
      const emailFields = form.querySelectorAll('input[type="email"]');
      emailFields.forEach(field => {
        if (!validateEmail(field)) {
          isValid = false;
        }
      });

      // Validate password match
      const password = form.querySelector('input[type="password"]');
      const confirmPassword = form.querySelector('input[name="confirmPassword"]');
      if (password && confirmPassword) {
        if (!validatePasswordMatch(password, confirmPassword)) {
          isValid = false;
        }
      }

      // Validate terms checkbox
      const termsCheckbox = form.querySelector('input[type="checkbox"][required]');
      if (termsCheckbox && !termsCheckbox.checked) {
        showError(termsCheckbox, 'You must accept the terms and conditions');
        isValid = false;
      }

      if (isValid) {
        // Show success message
        showSuccessMessage(form);
        form.reset();
      }
    });

    // Real-time validation on input
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.hasAttribute('required')) {
          validateField(input);
        }
        if (input.type === 'email') {
          validateEmail(input);
        }
      });

      input.addEventListener('input', () => {
        clearError(input);
      });
    });
  });
}

function validateField(field) {
  const value = field.value.trim();
  if (!value) {
    showError(field, 'This field is required');
    return false;
  }

  // Password minimum length
  if (field.type === 'password' && value.length < 8) {
    showError(field, 'Password must be at least 8 characters');
    return false;
  }

  clearError(field);
  field.classList.add('success');
  return true;
}

function validateEmail(field) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const value = field.value.trim();

  if (value && !emailRegex.test(value)) {
    showError(field, 'Please enter a valid email address');
    return false;
  }

  clearError(field);
  if (value) field.classList.add('success');
  return true;
}

function validatePasswordMatch(password, confirmPassword) {
  if (password.value !== confirmPassword.value) {
    showError(confirmPassword, 'Passwords do not match');
    return false;
  }

  clearError(confirmPassword);
  confirmPassword.classList.add('success');
  return true;
}

function showError(field, message) {
  field.classList.add('error');
  field.classList.remove('success');

  let errorElement = field.nextElementSibling;
  if (!errorElement || !errorElement.classList.contains('form-error')) {
    errorElement = document.createElement('div');
    errorElement.className = 'form-error';
    field.parentNode.insertBefore(errorElement, field.nextSibling);
  }

  errorElement.textContent = message;
  errorElement.style.display = 'block';
}

function clearError(field) {
  field.classList.remove('error');
  const errorElement = field.nextElementSibling;
  if (errorElement && errorElement.classList.contains('form-error')) {
    errorElement.style.display = 'none';
  }
}

function showSuccessMessage(form) {
  const successDiv = document.createElement('div');
  successDiv.className = 'form-success';
  successDiv.style.cssText = `
    background-color: var(--color-success);
    color: white;
    padding: 16px;
    border-radius: var(--radius);
    margin-top: 16px;
    text-align: center;
    animation: fadeIn 0.3s ease;
  `;
  successDiv.textContent = 'Form submitted successfully!';

  form.appendChild(successDiv);

  setTimeout(() => {
    successDiv.remove();
  }, 3000);
}

/* ============================================
   SCROLL EFFECTS
   ============================================ */

function initScrollEffects() {
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href !== '#') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const headerOffset = 72;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Parallax effect for hero background
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;
      hero.style.backgroundPositionY = `${scrolled * parallaxSpeed}px`;
    });
  }
}

/* ============================================
   UTILITY FUNCTIONS
   ============================================ */

// Debounce function for performance
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

/* ============================================
   BACK TO TOP BUTTON
   ============================================ */
document.addEventListener('DOMContentLoaded', function() {
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});

/* ============================================
   PASSWORD TOGGLE
   ============================================ */

function initPasswordToggle() {
  const toggleIcons = document.querySelectorAll('.toggle-password');
  
  toggleIcons.forEach(icon => {
    icon.addEventListener('click', function() {
      // Find the sibling input within the relative wrapper
      const input = this.previousElementSibling;
      
      if (input && input.tagName === 'INPUT') {
        // Toggle the type attribute
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        
        // Toggle the icon class (assuming Phosphor icons are used)
        this.classList.toggle('ph-eye');
        this.classList.toggle('ph-eye-slash');
      }
    });
  });
}

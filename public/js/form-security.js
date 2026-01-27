/**
 * Form Security - Bot Protection
 * Implements honeypot and timestamp validation for forms
 */

// Enable debug mode - set to true to see logs in browser console
const DEBUG_MODE = false;

// Minimum time (in seconds) a human would take to fill a form
const MIN_SUBMIT_TIME = 7;

/**
 * Initialize security for a form
 * @param {HTMLFormElement} form - The form element to protect
 */
function initFormSecurity(form) {
  // Store timestamp when form loads
  const timestamp = Date.now();
  const timestampInput = form.querySelector('input[name="_form_timestamp"]');
  if (timestampInput) {
    timestampInput.value = timestamp.toString();
  }

  // Intercept submission for validation
  form.addEventListener('submit', function(e) {
    if (!validateForm(form, timestamp)) {
      e.preventDefault();
      return false;
    }
  });
}

/**
 * Validate form before submission
 * @param {HTMLFormElement} form - The form element
 * @param {number} loadTimestamp - When the form was loaded
 * @returns {boolean} - True if valid, false otherwise
 */
function validateForm(form, loadTimestamp) {
  const timeElapsed = (Date.now() - loadTimestamp) / 1000;

  // Check honeypot field - if filled, it's a bot
  const honeypot = form.querySelector('input[name="_honey"]');
  if (honeypot && honeypot.value.trim() !== '') {
    if (DEBUG_MODE) console.log('[Form Security] Blocked by honeypot');
    // Bot detected - show fake success message
    showFakeSuccess(form);
    return false;
  }

  // Check timestamp - form submitted too quickly
  if (timeElapsed < MIN_SUBMIT_TIME) {
    if (DEBUG_MODE) console.log(`[Form Security] Blocked by timestamp (${timeElapsed.toFixed(1)}s < ${MIN_SUBMIT_TIME}s)`);
    // Bot detected - show fake success message
    showFakeSuccess(form);
    return false;
  }

  if (DEBUG_MODE) console.log(`[Form Security] Passed! Time elapsed: ${timeElapsed.toFixed(1)}s`);
  return true;
}

/**
 * Show fake success message to bot (silent rejection)
 * @param {HTMLFormElement} form - The form element
 */
function showFakeSuccess(form) {
  // Create fake success element
  const success = document.createElement('div');
  success.className = 'bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-4';
  success.textContent = 'Thank you! Your message has been sent successfully.';

  // Hide form content
  const formChildren = Array.from(form.children);
  formChildren.forEach(child => {
    if (!child.classList.contains('form-security-fake-success')) {
      child.style.display = 'none';
    }
  });

  // Show fake success message
  success.classList.add('form-security-fake-success');
  form.appendChild(success);
}

/**
 * Initialize all protected forms on the page
 */
function initAllForms() {
  const protectedForms = document.querySelectorAll('form[data-form-security]');
  protectedForms.forEach(initFormSecurity);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllForms);
} else {
  initAllForms();
}

const THROTTLE = 3000;

function initContactForm() {
  const contactForm = document.querySelector('#contact-form form');

  if (!contactForm) return;

  const submitButton = contactForm.querySelector('button[type="submit"]');

  if (!submitButton) return;

  function handleFormSubmit(e) {
    e.preventDefault();
    // Show loading message
    document.body.classList.add('is-form-submitting');
    submitButton.disabled = true;

    // Simulate network request
    window.setTimeout(() => {
      document.body.classList.add('is-form-submitted');
    }, THROTTLE);
  }

  const backButton = document.querySelector('#contact-form #success-go-back');
  if (backButton) {
    backButton.addEventListener('click', () => {
      // Reset the form to its initial state
      document.body.classList.remove('is-form-submitting', 'is-form-submitted');
      submitButton.disabled = false;
      contactForm.reset();
    });
  }

  contactForm.addEventListener('submit', handleFormSubmit);
}

export { initContactForm };

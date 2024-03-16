const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const sponsor = button.closest('.sponsors-section__sponsor');
    // If sponsor has data-expanded attribute, remove it. Otherwise, add it.
    if (sponsor.hasAttribute('data-expanded')) {
      sponsor.removeAttribute('data-expanded');
      button.querySelector('.expand-button__text').textContent = 'Visa mer';
    } else {
      sponsor.setAttribute('data-expanded', '');
      button.querySelector('.expand-button__text').textContent = 'Visa mindre';
    }
  });
});

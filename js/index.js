// ---------- Mobile menu ----------

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const icon = menuButton.querySelector('.menu-button__icon');

menuButton.addEventListener('click', () => {
  menu.toggleAttribute('data-open');
  menuButton.toggleAttribute('data-open');

  // Update icon in menu button
  if (icon.textContent === 'menu') {
    icon.textContent = 'close';
  } else {
    icon.textContent = 'menu';
  }
});

// When clicking a link in the menu, close the menu
const menuLinks = document.querySelectorAll('.menu__link');
menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    menu.removeAttribute('data-open');
    menuButton.removeAttribute('data-open');
    icon.textContent = 'menu';
  });
});

// ---------- Spotlight mouse tracking using gsap ----------

const spotlights = document.querySelectorAll(
  '.spotlight:not(.spotlight--static)'
);

spotlights.forEach((spotlight) => {
  document.addEventListener('mousemove', (event) => {
    const parentRect = spotlight.parentElement.getBoundingClientRect();
    const offsetX = event.clientX - parentRect.left;
    const offsetY = event.clientY - parentRect.top;
    spotlight.style.transform = `translate(calc(${offsetX}px - 50%), calc(${offsetY}px - 50%))`;
  });
});

// ---------- Hero sponsor marquee ----------

// Marquee scrolling effect
gsap.to('.sponsor-marquee__inner', {
  x: '-33.33%', // One third because we have three copies of the sponsor logos
  duration: 15,
  repeat: -1,
  ease: 'linear',
});

// ---------- Ticket 3D hover rotation ----------

const tickets = document.querySelectorAll('.ticket');

tickets.forEach((ticket) => {
  ticket.addEventListener('mousemove', (event) => {
    const rect = ticket.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const offsetY = event.clientY - rect.top;
    const rotateX = gsap.utils.mapRange(0, rect.width, 20, -40, offsetY);
    const rotateY = gsap.utils.mapRange(0, rect.height, -5, 5, offsetX);
    gsap.to(ticket, {
      rotateX,
      rotateY,
      duration: 0.5,
    });
  });

  ticket.addEventListener('mouseleave', () => {
    gsap.to(ticket, {
      rotateX: 0,
      rotateY: 0,
      duration: 1,
    });
  });
});

// ---------- Sponsor expand button ----------

const expandButtons = document.querySelectorAll('.expand-button');

expandButtons.forEach((button) => {
  // When clicking the button, expand or collapse the sponsor
  button.addEventListener('click', () => {
    const sponsor = button.closest('.sponsors-section__sponsor');
    if (sponsor.hasAttribute('data-expanded')) {
      sponsor.removeAttribute('data-expanded');
      button.querySelector('.expand-button__text').textContent = 'Visa mer';
    } else {
      sponsor.setAttribute('data-expanded', '');
      button.querySelector('.expand-button__text').textContent = 'Visa mindre';
    }
  });
});

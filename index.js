const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.mobile-nav-toggle');
const navLink = document.querySelectorAll('.nav-link');

navToggle.addEventListener('click', () => {
  const visible = primaryNav.getAttribute('data-visible');

  if (visible === 'false') {
    primaryNav.setAttribute('data-visible', true);
    navToggle.innerText = 'x';
    navToggle.style.position = 'fixed';
  } else if (visible === 'true') {
    primaryNav.setAttribute('data-visible', false);
    navToggle.innerText = '';
    navToggle.style.position = 'absolute';
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    const visible = primaryNav.getAttribute('data-visible');
    if (visible === 'true') {
      primaryNav.setAttribute('data-visible', false);
      navToggle.innerText = '';
      navToggle.style.position = 'absolute';
    }
  });
});

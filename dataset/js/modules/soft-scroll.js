export default function initScrollSoft() {
  const internalLinks = document.querySelectorAll(
    '[data-menu="soft"] a[href^="#"]',
  );

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const above = section.offsetTop;

    window.scrollTo({
      top: above,
      behavior: 'smooth',
    });
  }

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

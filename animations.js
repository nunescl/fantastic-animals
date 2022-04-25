function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add('active');

    function activeTab(index) {
      tabContent.forEach((section) => section.classList.remove('active'));
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add('active', direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

function initAccordionFaq() {
  const accordionList = document.querySelectorAll(
    '[data-anime="accordion"] dt',
  );
  if (accordionList.length) {
    accordionList[0].classList.add('active');
    accordionList[0].nextElementSibling.classList.add('active');

    function activeAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    });
  }
}
initAccordionFaq();

function initScrollSoft() {
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
initScrollSoft();

function initAnimateScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');

  if (sections.length) {
    const windowHalf = window.innerHeight * 0.6;

    function animateScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowHalf < 0;
        if (isSectionVisible) {
          section.classList.add('active');
        }
      });
    }
    animateScroll();
    window.addEventListener('scroll', animateScroll);
  }
}
initAnimateScroll();

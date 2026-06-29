/**
 * Header Scroll Behavior
 * Handles sticky header with smooth transitions
 */

const HeaderModule = (() => {
  const header = document.querySelector('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  let lastScrollY = 0;
  let isScrolling = false;

  const init = () => {
    if (!header) return;
    
    window.addEventListener('scroll', handleScroll);
    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }
  };

  const handleScroll = () => {
    if (isScrolling) return;
    
    isScrolling = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      
      if (scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScrollY = scrollY;
      isScrolling = false;
    });
  };

  const toggleMenu = () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
  };

  const closeMenu = () => {
    menuToggle.classList.remove('active');
    navMenu.classList.remove('active');
  };

  const setActiveNav = () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (currentPath === href || currentPath.includes(href.replace('/', ''))) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  };

  return {
    init,
    closeMenu,
    setActiveNav
  };
})();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    HeaderModule.init();
    HeaderModule.setActiveNav();
  });
} else {
  HeaderModule.init();
  HeaderModule.setActiveNav();
}

export default HeaderModule;

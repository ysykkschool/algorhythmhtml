// Wait for DOM content to load
document.addEventListener('DOMContentLoaded', () => {
  // Fade in the main content
  const main = document.querySelector('main');
  if (main) {
    main.style.opacity = 0;
    main.style.transition = 'opacity 1s ease-in-out';
    requestAnimationFrame(() => {
      main.style.opacity = 1;
    });
  }

  // Smooth scroll for internal anchor links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Add hover effect on portfolio items
  const portfolioItems = document.querySelectorAll('.portfolio-item');
  portfolioItems.forEach(item => {
    item.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    item.addEventListener('mouseenter', () => {
      item.style.transform = 'scale(1.03)';
      item.style.boxShadow = '0 8px 20px rgba(8, 21, 64, 0.3)';
    });
    item.addEventListener('mouseleave', () => {
      item.style.transform = 'scale(1)';
      item.style.boxShadow = '0 0 8px rgba(8, 21, 64, 0.1)';
    });
  });
});

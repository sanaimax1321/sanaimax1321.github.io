document.addEventListener('DOMContentLoaded', () => {

  // ===== Mobile Menu Toggle =====
  const toggle = document.getElementById('menuToggle');
  const navUl = document.querySelector('nav ul');

  function toggleMenu() {
    if (!navUl) return;
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
  }

  if (toggle) toggle.addEventListener('click', toggleMenu);

  // ===== Smooth Scroll for Internal Links =====
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth' });
      // Close mobile menu after click
      if (navUl && window.innerWidth <= 900) navUl.style.display = 'none';
    });
  });

  // ===== Hero Portrait Hover Animation =====
  const portrait = document.querySelector('.portrait');
  if (portrait) {
    portrait.addEventListener('mouseenter', () => portrait.classList.add('animate__animated', 'animate__pulse'));
    portrait.addEventListener('mouseleave', () => portrait.classList.remove('animate__animated', 'animate__pulse'));
  }

  // ===== Project Cards Hover Effect =====
  const projects = document.querySelectorAll('.project-card, .project-item');
  projects.forEach(card => {
    card.addEventListener('mouseenter', () => card.style.transform = 'translateY(-5px)');
    card.addEventListener('mouseleave', () => card.style.transform = 'translateY(0)');
  });

  // ===== AOS Initialization =====
  if (AOS) {
    AOS.init({
      duration: 800,
      once: true
    });
  }

});

// Scroll to top functionality
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.classList.remove('opacity-0', 'invisible');
    scrollToTopBtn.classList.add('opacity-100', 'visible');
  } else {
    scrollToTopBtn.classList.add('opacity-0', 'invisible');
    scrollToTopBtn.classList.remove('opacity-100', 'visible');
  }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
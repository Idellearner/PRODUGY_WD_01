window.addEventListener('scroll', function() {
    const nav = document.getElementById('main-nav');
    if (window.scrollY > 50) {
      nav.style.backgroundColor = '#555'; // Change background color on scroll
    } else {
      nav.style.backgroundColor = '#333'; // Revert back to original color
    }
  });
  
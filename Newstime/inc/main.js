const links = document.querySelectorAll('#linkContainer a');
  let current = 0;

  function showNextLink() {
    // Hide all links
    links.forEach(link => link.style.display = 'none');

    // Show the current link
    links[current].style.display = 'inline';

    // Update index for next cycle
    current = (current + 1) % links.length;
  }

  // Start the cycle
  showNextLink(); // Show the first link immediately
  setInterval(showNextLink, 5000); // Cycle every 5 seconds
  document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('device-dropdown');
    const deviceViews = document.querySelectorAll('.device-image');
    
    // Initialize with desktop view
    document.getElementById('desktop-view').classList.add('active');
    
    // Change view when dropdown selection changes
    dropdown.addEventListener('change', function() {
      // Hide all views
      deviceViews.forEach(view => {
        view.classList.remove('active');
      });
      
      // Show selected view
      const selectedView = document.getElementById(dropdown.value + '-view');
      selectedView.classList.add('active');
    });
  });

  
document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));
});

// Scroll arrow visibility logic
const scrollArrow = document.getElementById("scrollArrow");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    scrollArrow.classList.add("hidden-arrow");
  } else {
    scrollArrow.classList.remove("hidden-arrow");
  }
});
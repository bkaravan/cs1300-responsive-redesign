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
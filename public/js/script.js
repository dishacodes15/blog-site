document.addEventListener('DOMContentLoaded', function(){

    const allButtons = document.querySelectorAll('.searchBtn');
    const searchBar = document.querySelector('.searchBar');
    const searchInput = document.getElementById('searchInput');
    const searchClose = document.getElementById('searchClose');
  
    for (var i = 0; i < allButtons.length; i++) {
      allButtons[i].addEventListener('click', function() {
        searchBar.style.visibility = 'visible';
        searchBar.classList.add('open');
        this.setAttribute('aria-expanded', 'true');
        searchInput.focus();
      });
    }
  
    searchClose.addEventListener('click', function() {
      searchBar.style.visibility = 'hidden';
      searchBar.classList.remove('open');
      this.setAttribute('aria-expanded', 'false');
    });
  
  
  });

  document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('darkModeToggle');
    const body = document.body;

    // Function to apply the saved or preferred theme
    const applyTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
    };

    // --- Initial Theme Check ---
    // 1. Check localStorage
    const savedTheme = localStorage.getItem('theme');
    // 2. Check browser/OS preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    let currentTheme;
    if (savedTheme) {
        // Use saved theme if it exists
        currentTheme = savedTheme;
    } else if (prefersDark) {
        // Use OS preference if no saved theme
        currentTheme = 'dark';
    } else {
        // Default to light theme
        currentTheme = 'light';
    }

    // Apply the determined theme on initial load
    applyTheme(currentTheme);


    // --- Toggle Button Event Listener ---
    toggleButton.addEventListener('click', () => {
        // Check current theme by looking for the class on the body
        const isDarkMode = body.classList.contains('dark-mode');

        // Toggle to the opposite theme
        applyTheme(isDarkMode ? 'light' : 'dark');
    });

    // --- Optional: Listen for OS Theme Changes ---
    // Updates the theme if the OS setting changes *and* the user hasn't manually set a theme
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        // Check if a theme is specifically saved in localStorage
        const userHasSetTheme = localStorage.getItem('theme');
        if (!userHasSetTheme) { // Only apply OS change if user hasn't chosen
             const newColorScheme = event.matches ? "dark" : "light";
             applyTheme(newColorScheme);
             // Note: We don't save this OS-driven change to localStorage,
             // allowing the user's manual choice to override it later.
        }
    });

}); // End DOMContentLoaded

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Hamburger Menu Toggle Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            navWrapper.classList.toggle('active');
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                // Check if the menu is active (mobile view)
                if (window.innerWidth <= 992) {
                    hamburger.classList.remove('active');
                    navWrapper.classList.remove('active');
                }
            });
        });
    }

    // 2. Placeholder for other interactive logic (e.g., FAQ Accordion)
    // Add your FAQ Accordion code here if needed.
    
    // Note: Particles.js logic is now directly in the HTML file for simplicity.
});



// Function to dynamically switch between Arabic and English pages
function switchLanguage() {
    // Get the current URL pathname (e.g., /index.html, /ar_projects.html)
    const currentPath = window.location.pathname;
    
    // Extract the filename (e.g., index.html, ar_projects.html)
    const filenameMatch = currentPath.match(/([a-z_]+\.html)$/i);
    const currentFilename = filenameMatch ? filenameMatch[1] : 'index.html'; // Default to index.html

    let newFilename = '';
    
    // Logic to determine the new filename based on the current one
    if (currentFilename.startsWith('ar_')) {
        // If it starts with 'ar_', switch to 'en_' (e.g., ar_projects.html -> en_projects.html)
        newFilename = currentFilename.replace('ar_', 'en_');
    } else if (currentFilename.startsWith('en_')) {
        // If it starts with 'en_', switch to 'ar_' (e.g., en_projects.html -> ar_projects.html)
        newFilename = currentFilename.replace('en_', 'ar_');
    } else if (currentFilename === 'index.html' || currentFilename === 'ar_home.html') {
        // Handle the main/home page (index.html or ar_home.html assumed to be Arabic)
        newFilename = 'en_index.html';
    } else if (currentFilename === 'en_index.html') {
        // Handle the English main page
        newFilename = 'index.html';
    } else {
        // If no prefix is found (e.g., a page named 'contact.html'), 
        // a fallback mechanism is needed. For now, we'll try to default to the English version if ar_ is missing
        newFilename = 'en_' + currentFilename;
    }

    // Replace the current filename with the new one in the URL
    // This will work correctly if your folder structure is flat (all pages in the root)
    const newPath = currentPath.replace(currentFilename, newFilename);
    
    // Redirect the user to the new page
    window.location.href = newPath;
}


// Function to dynamically switch between Arabic and English pages (Final Final Version)
function switchLanguage() {
    const currentURL = window.location.href;
    const currentPath = window.location.pathname;
    
   
    const baseDirMatch = currentPath.match(/\/([a-z0-9\-_]+)\//i);
    const projectBase = baseDirMatch && baseDirMatch[0].length > 1 ? baseDirMatch[0] : '/'; 

    let newFilename = '';
    

    const filenameMatch = currentPath.match(/([a-z0-9\-_]+\.html)$/i);
    const currentFilename = filenameMatch ? filenameMatch[1] : 'index.html';

    
    if (currentFilename === 'index.html') {
        newFilename = 'en_index.html';
    } 
    else if (currentFilename === 'en_index.html') {
        newFilename = 'index.html';
    }
    else if (currentFilename.startsWith('ar_')) {
        newFilename = currentFilename.replace('ar_', 'en_');
    } 
    else if (currentFilename.startsWith('en_')) {
        newFilename = currentFilename.replace('en_', 'ar_');
    } 
    else {
        // Fallback
        newFilename = 'en_' + currentFilename;
    }
    
    
    let targetPath = '';
    
    if (newFilename === 'index.html') {
        targetPath = projectBase + newFilename;
    } else {
    
        targetPath = projectBase + newFilename;
    }
    
  
    window.location.href = window.location.origin + targetPath.replace('//', '/');
}



document.addEventListener('DOMContentLoaded', function () {

    // 1. Hamburger Menu Toggle Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', function () {
            this.classList.toggle('active');
            navWrapper.classList.toggle('active');

            document.body.classList.toggle('menu-open');
        });

        // Close menu when a link is clicked (for mobile)
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth <= 992) {
                    hamburger.classList.remove('active');
                    navWrapper.classList.remove('active');
                    document.body.classList.remove('menu-open');
                }
            });
        });
    }

    // 2. Attach the dynamic language switch function to the buttons
    const headerLangButton = document.getElementById('lang-toggle-header');
    const floatLangButton = document.getElementById('lang-toggle-float');

    // Attach to Header Button
    if (headerLangButton) {
        headerLangButton.addEventListener('click', function (e) {
            e.preventDefault();
            switchLanguage();
        });

        // Update the header button text based on the current page
        const isEnglishPage = window.location.pathname.startsWith('/en_');
        headerLangButton.textContent = isEnglishPage ? 'العربية' : 'English';
        headerLangButton.href = '#';
    }

    // Attach to Floating Button
    if (floatLangButton) {
        floatLangButton.addEventListener('click', function (e) {
            e.preventDefault();
            switchLanguage();
        });
    }

    // 3. Placeholder for other interactive logic (e.g., FAQ Accordion)
    // Add your FAQ Accordion code here if needed.

    // Note: Particles.js logic is now directly in the HTML file for simplicity.
});
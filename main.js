// Function to dynamically switch between Arabic and English pages
function switchLanguage() {
    const currentPath = window.location.pathname;
    // استخراج اسم الملف الحالي (مثل index.html أو ar_projects.html)
    const filenameMatch = currentPath.match(/([a-z_]+\.html)$/i);
    const currentFilename = filenameMatch ? filenameMatch[1] : 'index.html';

    let newFilename = '';
    
    // 1. حالة التحويل من AR (index.html أو ar_*) إلى EN
    if (currentFilename === 'index.html') {
        // من index.html (العربية) إلى en_index.html (الإنجليزية)
        newFilename = 'en_index.html';
    } else if (currentFilename.startsWith('ar_')) {
        // من ar_projects.html إلى en_projects.html
        newFilename = currentFilename.replace('ar_', 'en_');
    } 
    
    // 2. حالة التحويل من EN (en_index.html أو en_*) إلى AR
    else if (currentFilename === 'en_index.html') {
        // من en_index.html (الإنجليزية) إلى index.html (العربية)
        newFilename = 'index.html';
    } else if (currentFilename.startsWith('en_')) {
        // من en_projects.html إلى ar_projects.html
        newFilename = currentFilename.replace('en_', 'ar_');
    } else {
        // Fallback (في حالة اسم ملف غير متوقع - نحاول التحويل للرئيسية الإنجليزية)
        newFilename = 'en_index.html';
    }

    // بناء المسار الجديد واستبدال اسم الملف
    const newPath = currentPath.replace(currentFilename, newFilename);
    
    // إعادة التوجيه
    window.location.href = newPath;
}

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Hamburger Menu Toggle Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', function() {
            // إضافة وإزالة الكلاس active للهامبرغر والقائمة
            this.classList.toggle('active');
            navWrapper.classList.toggle('active');
            
            // إضافة/إزالة كلاس overflow على الجسم لمنع التمرير عندما تكون القائمة مفتوحة
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
        headerLangButton.addEventListener('click', function(e) {
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
        floatLangButton.addEventListener('click', function(e) {
            e.preventDefault(); 
            switchLanguage();
        });
    }

    // 3. Placeholder for other interactive logic (e.g., FAQ Accordion)
    // Add your FAQ Accordion code here if needed.
    
    // Note: Particles.js logic is now directly in the HTML file for simplicity.
});
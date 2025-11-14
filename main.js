// Function to dynamically switch between Arabic and English pages (Simplified for Root Domain)
function switchLanguage() {
    const currentPath = window.location.pathname;
    let newPath = '';
    
    // الحصول على المسار الحالي بدون الشرطة المائلة (/) في البداية
    const pathWithoutSlash = currentPath.substring(1); 
    
    // 1. حالة التحويل من الإنجليزية إلى العربية
    if (pathWithoutSlash === 'en_index.html') {
        // التحويل من en_index.html إلى index.html
        newPath = '/index.html'; 
    }
    else if (pathWithoutSlash.startsWith('en_')) {
        // التحويل من en_page.html إلى ar_page.html
        newPath = '/' + pathWithoutSlash.replace('en_', 'ar_');
    }
    
    // 2. حالة التحويل من العربية إلى الإنجليزية (يشمل المسار الجذر)
    else if (pathWithoutSlash === '' || pathWithoutSlash === 'index.html') {
        // التحويل من الجذر (/) أو index.html إلى en_index.html
        newPath = '/en_index.html';
    } 
    else if (pathWithoutSlash.startsWith('ar_')) {
        // التحويل من ar_page.html إلى en_page.html
        newPath = '/' + pathWithoutSlash.replace('ar_', 'en_');
    }
    
    else {
        // Fallback: Default to English Home
        newPath = '/en_index.html';
    }
    
    // 3. إعادة التوجيه
    // استخدام window.location.pathname للتوجيه لضمان أن المسار صحيح على GitHub Pages
    window.location.pathname = newPath;
}


// ... (بقية كود main.js يبقى كما هو) ...

document.addEventListener('DOMContentLoaded', function () {

    // 1. Hamburger Menu Toggle Logic
    const hamburger = document.querySelector('.hamburger-menu');
    const navWrapper = document.querySelector('.main-nav-wrapper');
    const navLinks = document.querySelectorAll('.main-nav-wrapper nav ul li a');

    if (hamburger && navWrapper) {
        hamburger.addEventListener('click', function () {
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
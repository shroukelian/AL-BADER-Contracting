// Function to dynamically switch between Arabic and English pages
function switchLanguage() {
    const currentPath = window.location.pathname;
    
    // 1. تحديد حالة التحويل
    
    // حالة: الصفحة الرئيسية العربية (/) أو index.html
    if (currentPath === '/' || currentPath.endsWith('/index.html')) {
        // التحويل من (/) أو (index.html) إلى en_index.html
        
        // إذا كان المسار هو الجذر (/)، استخدم التحويل المباشر
        if (currentPath === '/') {
            window.location.pathname = '/en_index.html';
        } 
        // إذا كان المسار هو /index.html، قم بالاستبدال
        else {
            window.location.pathname = currentPath.replace('index.html', 'en_index.html');
        }
    } 
    
    // حالة: الصفحة الرئيسية الإنجليزية (en_index.html)
    else if (currentPath.endsWith('/en_index.html')) {
        // التحويل من en_index.html إلى index.html
        window.location.pathname = currentPath.replace('en_index.html', 'index.html');
    }
    
    // حالة: صفحة عربية أخرى (تبدأ بـ ar_)
    else if (currentPath.startsWith('/ar_')) {
        // من ar_projects.html إلى en_projects.html
        window.location.pathname = currentPath.replace('/ar_', '/en_');
    } 
    
    // حالة: صفحة إنجليزية أخرى (تبدأ بـ en_)
    else if (currentPath.startsWith('/en_')) {
        // من en_projects.html إلى ar_projects.html
        window.location.pathname = currentPath.replace('/en_', '/ar_');
    } 
    
    else {
        // Fallback: لا يمكن التعرف على النمط، نحاول التحويل إلى الرئيسية الإنجليزية
        console.error("Language switch failed: Unknown path pattern.");
        window.location.pathname = '/en_index.html';
    }
}
// ... (بقية كود main.js يبقى كما هو) ...

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
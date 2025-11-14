// Function to dynamically switch between Arabic and English pages (Final Version for Git Pages)
function switchLanguage() {
    const currentURL = window.location.href;
    const currentPath = window.location.pathname;
    
    let newPath = '';
    
    // 1. تحديد ما إذا كنا في الصفحة الرئيسية (Root) - المسار هو "/" فقط
    if (currentPath === '/') {
        // من الجذر (العربية) إلى الإنجليزية
        newPath = currentPath + 'en_index.html';
    } 
    
    // 2. التحويل من EN_INDEX (en_index.html) إلى AR_INDEX (index.html)
    else if (currentPath.endsWith('/en_index.html')) {
        // التحويل من en_index.html إلى index.html
        newPath = currentPath.replace('en_index.html', 'index.html');
    }
    
    // 3. التحويل من AR_INDEX (index.html) إلى EN_INDEX (en_index.html) - لو كان المسار هو /index.html
    else if (currentPath.endsWith('/index.html')) {
        // التحويل من index.html إلى en_index.html
        newPath = currentPath.replace('index.html', 'en_index.html');
    }
    
    // 4. التحويل من AR_PAGE إلى EN_PAGE (ar_about.html -> en_about.html)
    else if (currentPath.startsWith('/ar_')) {
        // استبدال /ar_ بـ /en_
        newPath = currentPath.replace('/ar_', '/en_');
    }
    
    // 5. التحويل من EN_PAGE إلى AR_PAGE (en_about.html -> ar_about.html)
    else if (currentPath.startsWith('/en_')) {
        // استبدال /en_ بـ /ar_
        newPath = currentPath.replace('/en_', '/ar_');
    } 
    
    else {
        // Fallback: لا يمكن التعرف على النمط، نرسله إلى الإنجليزية
        console.error("Language switch failed: Unknown path pattern, defaulting to English home.");
        newPath = '/en_index.html';
    }
    
    // إعادة التوجيه
    // نستخدم replace() على الرابط الكامل لضمان التعامل مع http:// و https:// بشكل صحيح
    window.location.href = currentURL.replace(currentPath, newPath);
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
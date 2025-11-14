// Function to dynamically switch between Arabic and English pages
// Function to dynamically switch between Arabic and English pages
function switchLanguage() {
    // 1. استخراج المسار الكامل (بدون الدومين)
    const currentPath = window.location.pathname;
    
    // 2. تحديد اسم الملف الحالي بشكل أدق (أو إرجاع مسار الجذر إذا كان index.html)
    // التعبير العادي هنا يستخرج أي اسم ملف ينتهي بـ .html 
    // أو لا يستخرج شيئاً إذا كان المسار هو '/' (الصفحة الرئيسية)
    const filenameMatch = currentPath.match(/([a-z0-9\-_]+\.html)$/i); 
    
    // الحصول على اسم الملف أو مسار الجذر (/)
    let currentFileOrRoot = filenameMatch ? filenameMatch[0] : '/'; 
    let newFilename = '';

    // 3. تحديد اسم الملف الجديد
    
    // حالة: الصفحة الرئيسية العربية (/) أو index.html
    if (currentFileOrRoot === '/' || currentFileOrRoot === 'index.html') {
        newFilename = 'en_index.html';
    } 
    // حالة: الصفحة الرئيسية الإنجليزية (en_index.html)
    else if (currentFileOrRoot.endsWith('en_index.html')) {
        // التحويل إلى الصفحة العربية الرئيسية، والتي هي '/' أو 'index.html'
        newFilename = 'index.html'; 
    }
    // حالة: صفحة عربية أخرى (تبدأ بـ ar_)
    else if (currentFileOrRoot.startsWith('/ar_') || currentFileOrRoot.startsWith('ar_')) {
        newFilename = currentFileOrRoot.replace('ar_', 'en_');
    } 
    // حالة: صفحة إنجليزية أخرى (تبدأ بـ en_)
    else if (currentFileOrRoot.startsWith('/en_') || currentFileOrRoot.startsWith('en_')) {
        newFilename = currentFileOrRoot.replace('en_', 'ar_');
    } else {
        // Fallback (إذا لم يتم التعرف على نمط التسمية - تحويل إلى الإنجليزية)
        newFilename = 'en_' + currentFileOrRoot;
    }

    // 4. بناء المسار الجديد والإرسال
    
    // تحديد المسار الأساسي (الجزء الذي يسبق اسم الملف)
    const basePath = currentPath.substring(0, currentPath.lastIndexOf(currentFileOrRoot));

    // إذا كانت النتيجة هي 'index.html' والمسار يحتوي على ملف، يجب أن يعود للجذر
    if (newFilename === 'index.html') {
         // نعود للمسار الأساسي فقط لـ index.html
        window.location.pathname = basePath; 
    } else {
        // نضع اسم الملف الجديد
        window.location.pathname = basePath + newFilename;
    }
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
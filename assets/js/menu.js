document.addEventListener('DOMContentLoaded', function() {
    const menuButtons = document.querySelectorAll('.menu-button');
    const navs = document.querySelectorAll('.spotlight #nav');

    menuButtons.forEach((button, index) => {
        button.addEventListener('click', function() {
            // Close all other navs first
            navs.forEach((nav, navIndex) => {
                if (navIndex !== index) {
                    nav.style.transform = 'translateX(120%)';
                    nav.style.opacity = '0';
                    nav.style.visibility = 'hidden';
                }
            });

            // Toggle the clicked nav
            const nav = navs[index];
            const isVisible = nav.style.transform === 'translateX(0px)';
            
            if (isVisible) {
                nav.style.transform = 'translateX(120%)';
                nav.style.opacity = '0';
                nav.style.visibility = 'hidden';
            } else {
                nav.style.transform = 'translateX(0)';
                nav.style.opacity = '1';
                nav.style.visibility = 'visible';
            }
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.menu-button') && !event.target.closest('.spotlight #nav')) {
            navs.forEach(nav => {
                nav.style.transform = 'translateX(120%)';
                nav.style.opacity = '0';
                nav.style.visibility = 'hidden';
            });
        }
    });
}); 
document.addEventListener('DOMContentLoaded', () => {

    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => {
            if (window.scrollY > 40) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
    }

    const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('open');
            if (isOpen) {
                mobileMenu.classList.remove('open');
                menuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            } else {
                mobileMenu.classList.add('open');
                menuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            }
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 80);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -60px 0px'
        });
        revealElements.forEach(el => observer.observe(el));
    }

    /* ---- PWA Install Logic ---- */
    let deferredPrompt;
    const pwaHeroBanner = document.getElementById('pwa-hero-banner');
    const pwaHeroInstall = document.getElementById('pwa-hero-install');

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
        if (pwaHeroBanner) pwaHeroBanner.classList.add('show');
    });

    if (pwaHeroInstall) {
        pwaHeroInstall.addEventListener('click', async () => {
            if (deferredPrompt) {
                deferredPrompt.prompt();
                await deferredPrompt.userChoice;
                deferredPrompt = null;
                if (pwaHeroBanner) pwaHeroBanner.classList.remove('show');
            }
        });
    }

    window.addEventListener('appinstalled', () => {
        if (pwaHeroBanner) pwaHeroBanner.classList.remove('show');
        deferredPrompt = null;
    });

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.navbar-links a, .mobile-menu a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

});

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('SW registered:', reg.scope))
            .catch(err => console.log('SW registration failed:', err));
    });
}

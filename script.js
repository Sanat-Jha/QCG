// Mobile menu toggle functionality
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');

    // Add animation for menu items
    const menuItems = mobileMenu.querySelectorAll('.nav-link');
    menuItems.forEach((item, index) => {
        item.style.animation = `fadeIn 0.5s ease forwards ${index * 0.1}s`;
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 0) {
        nav.style.background = 'linear-gradient(to right, rgba(255,255,255,0.95), rgba(255,105,180,0.15), rgba(75,0,130,0.15), rgba(255,255,255,0.95))';
    } else {
        nav.style.background = 'linear-gradient(to right, rgba(255,255,255,0.9), rgba(255,105,180,0.1), rgba(75,0,130,0.1), rgba(255,255,255,0.9))';
    }
});

// Create floating particles in hero section
function createParticles() {
    const container = document.getElementById('hero-particles');
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 2}s`;
        container.appendChild(particle);
    }
}

createParticles();

// Enhanced scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize Swiper with enhanced effects
new Swiper('.swiper', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

// Animate quantum words
anime({
    targets: '#quantum-words',
    opacity: [0, 1],
    translateY: [20, 0],
    delay: 1000,
    duration: 2000,
    easing: 'easeOutExpo'
});

// Intersection Observer for contact cards animation
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.contact-info-item').forEach(item => {
    item.style.transform = 'translateY(20px)';
    item.style.opacity = '0';
    item.style.transition = 'all 0.6s ease';
    contactObserver.observe(item);
});

// Hover effect for contact icons
document.querySelectorAll('.contact-icon').forEach(icon => {
    icon.addEventListener('mouseover', function () {
        this.style.transform = 'rotate(360deg) scale(1.1)';
    });

    icon.addEventListener('mouseout', function () {
        this.style.transform = 'rotate(0) scale(1)';
    });
});
// Intersection Observer for about section animation
const aboutTextObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.about-text').forEach(text => {
    aboutTextObserver.observe(text);
});

// Initiative cards hover effect
document.querySelectorAll('.initiative-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
    });
});
    // Simplified Swiper initialization
    new Swiper('.swiper', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        initialSlide: 2,
        coverflowEffect: {
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        }
    }); 
// Theme switcher functionality
const themeToggle = document.getElementById('theme-toggle');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

// Function to load dark theme stylesheet
function loadDarkTheme() {
    if (!document.getElementById('dark-theme-style')) {
        const darkTheme = document.createElement('link');
        darkTheme.id = 'dark-theme-style';
        darkTheme.rel = 'stylesheet';
        darkTheme.href = 'style-dark.css';
        document.head.appendChild(darkTheme);
    }
}

// Function to remove dark theme stylesheet
function removeDarkTheme() {
    const darkTheme = document.getElementById('dark-theme-style');
    if (darkTheme) {
        darkTheme.remove();
    }
}

// Function to toggle theme
function toggleTheme() {
    const darkThemeLink = document.getElementById('dark-theme-style');
    const newTheme = darkThemeLink ? 'light' : 'dark';
    
    if (newTheme === 'dark') {
        loadDarkTheme();
        anime({
            targets: '.theme-toggle .fa-sun',
            opacity: 0,
            rotate: '180deg',
            duration: 300,
            easing: 'easeOutQuad'
        });
        anime({
            targets: '.theme-toggle .fa-moon',
            opacity: 1,
            rotate: ['180deg', '0deg'],
            duration: 300,
            easing: 'easeOutQuad'
        });
    } else {
        removeDarkTheme();
        anime({
            targets: '.theme-toggle .fa-moon',
            opacity: 0,
            rotate: '180deg',
            duration: 300,
            easing: 'easeOutQuad'
        });
        anime({
            targets: '.theme-toggle .fa-sun',
            opacity: 1,
            rotate: ['180deg', '0deg'],
            duration: 300,
            easing: 'easeOutQuad'
        });
    }
    
    localStorage.setItem('theme', newTheme);
}

// Event listener for theme toggle button
themeToggle.addEventListener('click', toggleTheme);

// Check for saved theme preference or system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDarkScheme.matches)) {
    loadDarkTheme();
    // Update initial icon state
    document.querySelector('.theme-toggle .fa-sun').style.opacity = '0';
    document.querySelector('.theme-toggle .fa-moon').style.opacity = '1';
}

// Listen for system theme changes
prefersDarkScheme.addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
        if (e.matches) {
            loadDarkTheme();
        } else {
            removeDarkTheme();
        }
    }
});
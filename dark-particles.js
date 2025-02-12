// Initialize particles
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#ffffff' },  // Dot color
        shape: { type: 'circle' },
        opacity: {
            value: 0.5,
            random: true
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {                // Add this for connecting lines
            enable: true,
            color: '#ffffff',         // Line color for dark theme
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 6
        }
    }
});
